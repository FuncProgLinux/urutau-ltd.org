# CHANGELOG

## v1.5.0-first-light

- Improve built in MCP server security/quality of life
- Add a better monospaced font for code examples
- Integrate Missing.CSS JavaScript tools for ARIA patterns
- Update to Lume 3.3.1
  - Replace `markdown-it-toc-done-right` for my revived plugin
    `markdown-it-toc-revived` to match the new Lume types.
- Add Reading information to articles via `readingInfo` Lume Plugin
- Use correct practices for `llms.txt` file

## v1.4.0-first-light

- Replace some logic with brand new Lume plugins
- Add a provisional server for Docker migration
- Improve deno @std/ support
- Fix a bug on the `debt_harverster` script where a leading `.` would be a
  mistaken incorporation into the RegExp for `SKIPPED_DIRS` map.
- Add a theme switcher
- Improved legibility and styles
- Improved ARIA patterns

## v1.3.1-first-light

- Improve bs generator support via OpenCode
- Upgrade to Lume v3.3.0
- Fixed type declarations and updated dependencies

## v1.3.0-first-light

- Moved the software page into its own folder to prepare the site for wiki-style
  growth
- Added a dedicated wiki section with project indexes for site search
- Added a dedicated wiki layout with project navigation, breadcrumbs and search
- Documentation version bump
- Took ages to do
- Testing robot adoption
- Migrated to _"Lora"_ font for better reading experience

## v1.2.1-first-light

- Fixed public website email bugs
- Improved PWA service worker for a better offline experience
- Improved `llm.txt`
- Add more software and recommends

## v1.2.0-first-light

- Deterministic OG images
- Better contact obfuscation for the public website email
- Add `security.txt`, `/.well-known/security.txt`, `llm.txt` and `/jslicense/`
- Externalize site scripts and improve partial LibreJS compatibility
- Service worker caching cleaned up a bit
- Removed the recursive OG patcher build noise by fixing the source path instead

### Internal tools

- `nyc doctor` now catches metadata mistakes, taxonomy collisions and obvious
  public email leaks
- `nyc add` now writes the correct OG image path for new posts
- Tag/author generation shares one deduplicated taxonomy pipeline

## v1.1.2-first-light

- Fix 404 on 404 error page (yes, as absurd as it sounds)
- Add OG Images for non blog posts

## v1.1.1-first-light

- Add a table of contents for posts
- Documentation improvements
- Look and spacing removed (had to delete `class="airy"`)
- Added RSS/JSON subscription links
- Fixed OG images in some entries

### Internal tools

- `nyc` tool is now `v2.0.0`
- `genmail.sh` is now `genmail.pl` at `v1.0.0`

## v1.1.0-first-light

- Assets improved
- OpenGraph images + patcher script
- PWA Capabilities
- `nyc` CLI bug fixes
- Improved error 404 look
- Internal library + unit testing
- JSX Components for easier building/reading
- Autogenerators for `tags` and `author` posts

## v1.0.0-first-light

- Stable site deployed
