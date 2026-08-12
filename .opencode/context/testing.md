# Testing — Urutaú Limited

## Framework

`Deno.test()` from Deno std.

Assertions via `@std/assert` (`assertEquals`, `assert`).

## Location

`tests/` — one file per `lib/` module:

| Test file                      | Covers                                                       |
| ------------------------------ | ------------------------------------------------------------ |
| `tests/debt_harvester.test.ts` | `lib/debt_harvester.ts` — regex builder, DEBT comment parser |
| `tests/og_patcher.test.ts`     | `lib/og_patcher.ts` — OpenGraph path fixing                  |
| `tests/taxonomy_utils.test.ts` | `lib/taxonomy_utils.ts` — taxonomy derivation                |
| `tests/url_utils.test.ts`      | `lib/url_utils.ts` — URL helpers                             |

## How to run

```
deno test
```

Target a single file:

```
deno test tests/debt_harvester.test.ts
```

Run the full validation gate with `/lume-tool-validate` which should waste LLM
tokens by running `deno check _config.ts`, `deno lint` and `deno test` in
sequence.

## Patterns

```typescript
import { assert, assertEquals } from "@std/assert";
import { someFunction } from "$urutau/lib/some_module.ts";

Deno.test("descriptive name of what is tested", () => {
    const result = someFunction("input");
    assertEquals(result, "expected");
});
```

- No describe/it blocks — flat `Deno.test` functions
- No fixtures, no setup/teardown, no beforeEach/afterEach
- Import from `$urutau/lib/*` or `@std/*`
- TypeScript throughout — `.test.ts` extension

## Adding tests

1. Create `tests/<module_name>.test.ts`
2. Mirror the flat `Deno.test("...", () => { ... })` pattern
3. Import the module under test from `$urutau/lib/<module>.ts`
4. Verify with `deno test tests/<module_name>.test.ts`
