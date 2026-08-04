import { assertEquals } from "@std/assert";
import { parseDebtComment } from "$urutau/lib/debt_harvester.ts";

Deno.test("parseDebtComment - simple reason only", () => {
    const result = parseDebtComment("just a simple reason");
    assertEquals(result.reason, "just a simple reason");
    assertEquals(result.ceiling, undefined);
    assertEquals(result.upgrade, undefined);
    assertEquals(result.hasTrigger, false);
});

Deno.test("parseDebtComment - with ceiling", () => {
    const result = parseDebtComment(
        "Add caching. ceiling: 1000 items",
    );
    assertEquals(result.reason, "Add caching.");
    assertEquals(result.ceiling, "1000 items");
    assertEquals(result.upgrade, undefined);
    assertEquals(result.hasTrigger, false);
});

Deno.test("parseDebtComment - with upgrade", () => {
    const result = parseDebtComment(
        "Global lock inefficient. upgrade: per-account locking",
    );
    assertEquals(result.reason, "Global lock inefficient.");
    assertEquals(result.upgrade, "per-account locking");
    assertEquals(result.ceiling, undefined);
    assertEquals(result.hasTrigger, true);
});

Deno.test("parseDebtComment - with both ceiling and upgrade", () => {
    const result = parseDebtComment(
        "Naive O(n²) scan. ceiling: 10k items. upgrade: optimize when dataset grows",
    );
    assertEquals(result.reason, "Naive O(n²) scan.");
    assertEquals(result.ceiling, "10k items");
    assertEquals(result.upgrade, "optimize when dataset grows");
    assertEquals(result.hasTrigger, true);
});

Deno.test("parseDebtComment - upgrade: empty string means no trigger", () => {
    const result = parseDebtComment(
        "Something. upgrade: ",
    );
    assertEquals(result.hasTrigger, false);
});

Deno.test("parseDebtComment - case-insensitive keys", () => {
    const result = parseDebtComment(
        "Temp fix. CEILING: 5. UPGRADE: refactor later",
    );
    assertEquals(result.ceiling, "5");
    assertEquals(result.upgrade, "refactor later");
    assertEquals(result.hasTrigger, true);
});

Deno.test("parseDebtComment - whitespace handling", () => {
    const result = parseDebtComment(
        "  Reason  .  ceiling:  spaces  .  upgrade:  also spaces  ",
    );
    assertEquals(result.reason, "Reason  .");
    assertEquals(result.ceiling, "spaces");
    assertEquals(result.upgrade, "also spaces");
});
