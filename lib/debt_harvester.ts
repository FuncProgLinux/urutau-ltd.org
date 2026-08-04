export const SKIPPED_DIRS: string[] = [
    "node_modules",
    ".git",
    "output",
    "vendor",
    "_cache",
    ".opencode",
];

// Should work for "#" and "//" debt comments.
// DEBT: Make this work for multilined JS/TS Comments (*)
export const DEBT_REGEX: RegExp = /(?:#|\/\/)\s*DEBT:\s*(.+)$/i;

/**
 * Parse a DEBT comment's raw text to extract reason, ceiling, upgrade, and trigger status.
 *
 * Pattern: "<what was simplified>. ceiling: <limit>. upgrade: <trigger>"
 *
 * @param rawComment - The matched comment text (without DEBT: prefix)
 * @returns Parsed metadata with reason, optional ceiling/upgrade, and hasTrigger flag
 */
export function parseDebtComment(
    rawComment: string,
): {
    reason: string;
    ceiling?: string;
    upgrade?: string;
    hasTrigger: boolean;
} {
    let reason: string = rawComment;
    let ceiling: string | undefined;
    let upgrade: string | undefined;

    const upgradeMatch: RegExpMatchArray | null = rawComment.match(
        /upgrade:\s*([^.]+)/i,
    );
    if (upgradeMatch) {
        upgrade = upgradeMatch[1].trim();
    }

    const ceilingMatch: RegExpMatchArray | null = rawComment.match(
        /ceiling:\s*([^.]+)/i,
    );
    if (ceilingMatch) {
        ceiling = ceilingMatch[1].trim();
    }

    // Clean "what" description by removing ceiling/upgrade substrings
    reason = reason
        .replace(/ceiling:\s*[^.]+\.?/i, "")
        .replace(/upgrade:\s*[^.]+\.?/i, "")
        .trim();

    const hasTrigger: boolean = Boolean(upgrade && upgrade.length > 0);

    return {
        reason,
        ceiling,
        upgrade,
        hasTrigger,
    };
}
