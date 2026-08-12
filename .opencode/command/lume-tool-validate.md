---
description: Run the full validation gate (deno check + deno lint + deno test)
---

Run these commands in order. Report all failures verbatim:

1. `deno check _config.ts`
2. `deno lint`
3. `deno test`

If all three pass green, report: **Validation gate: PASS**.
