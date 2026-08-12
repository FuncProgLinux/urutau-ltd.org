# Codebase Search — MCP Tools

The urutau MCP server exposes three tools for deterministic structured codebase
navigation. Prefer these over grep when looking up symbols. The server lives at
`scripts/urutau_mcp.ts` and it's wired automatically via `opencode.jsonc`. Run
standalone with `deno task urutau_mcp`.

## MCP Exposed Tools

### where_is(name)

Find every exported definition matching name across the project. Returns file,
line, kind, and text for each match. Kind is function, class, interface, type,
const, or enum.

### outline(module)

List all exported symbols from one file with their declaration kind and line.
Module accepts a relative path, full path, or basename. .ts and .tsx extensions
are tried automatically.

### references_to(name)

Find every line where name appears as a word-boundary match across source files.
Skips comment-only lines. Text-based, not AST.

## When to use each tool

| Task                             | Tool          |
| -------------------------------- | ------------- |
| Does a function named `X` exist? | where_is      |
| What does module `Y` export?     | outline       |
| Who calls this function?         | references_to |

## Scope

Searches lib/ src/ scripts/ tests/. Excludes output/ vendor/ .git/ .opencode/
_cache/ and dependency directories. Only .ts .tsx .js .jsx files.
