import { walk } from "@std/fs/walk";
import { relative } from "@std/path/relative";
import { DebtEntry } from "$urutau/types";
import {
    DEBT_REGEX,
    parseDebtComment,
    SKIPPED_DIRS,
} from "$urutau/lib/debt_harvester.ts";

async function harvestDebt(): Promise<void> {
    const entriesByFile: Map<string, DebtEntry[]> = new Map<
        string,
        DebtEntry[]
    >();
    let totalCount: number = 0;
    let noTriggerCount: number = 0;

    const cwd: string = Deno.cwd();

    for await (
        const entry of walk(cwd, {
            skip: SKIPPED_DIRS.map((dir: string): RegExp =>
                new RegExp(`(/|\\\\)${dir}(/|\\\\|$)`)
            ),
            includeDirs: false,
        })
    ) {
        let content: string;
        try {
            content = await Deno.readTextFile(entry.path);
        } catch {
            // Skip binary files or unreadable files
            continue;
        }

        const lines: string[] = content.split("\n");
        const relativePath: string = relative(cwd, entry.path);

        lines.forEach((lineText: string, index: number): void => {
            const match: RegExpMatchArray | null = lineText.match(DEBT_REGEX);
            if (!match) return;

            const rawComment: string = match[1].trim();
            const parsed = parseDebtComment(rawComment);

            totalCount++;
            if (!parsed.hasTrigger) noTriggerCount++;

            const debtItem: DebtEntry = {
                file: relativePath,
                line: index + 1,
                reason: parsed.reason,
                ceiling: parsed.ceiling,
                upgrade: parsed.upgrade,
                hasTrigger: parsed.hasTrigger,
            };

            if (!entriesByFile.has(relativePath)) {
                entriesByFile.set(relativePath, []);
            }
            entriesByFile.get(relativePath)!.push(debtItem);
        });
    }

    if (totalCount === 0) {
        console.log("No debt. Clean ledger.");
        return;
    }

    console.log("## DEBT FIXMES\n");

    for (const [filePath, items] of entriesByFile.entries()) {
        console.log(`### ${filePath}`);
        for (const item of items) {
            let output: string =
                `* **${item.file}:${item.line}** - ${item.reason}`;
            if (item.ceiling) output += ` | **ceiling:** ${item.ceiling}`;
            if (item.upgrade) output += ` | **upgrade:** ${item.upgrade}`;
            if (!item.hasTrigger) output += ` **[no-trigger]**`;

            console.log(output);
        }
        console.log("");
    }

    console.log("---");
    console.log(
        `**Total markers:** ${totalCount} | **Lacking trigger (` +
            "`no-trigger`" +
            `):** ${noTriggerCount}`,
    );
}

await harvestDebt();
