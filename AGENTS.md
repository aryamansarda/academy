# Project guide

This repository contains Aryaman Sarda’s personal website. It is a small, static
HTML and CSS site, with no application framework or build step. A small inline
JavaScript enhancement opens research resource previews in a native dialog.

## Files and editing

- `personal-index-source.html` contains the shared stylesheet, the
  `#aryaman-index` markup, and the preview script as a standalone fragment.
- `index.html` is the complete browser page. It contains the same stylesheet and
  markup, plus the document head, metadata, and page-level styles.
- Keep both HTML files synchronized whenever changing shared content, styles, or scripts.
  Preserve the document wrapper and metadata in `index.html`.
- `.context/` is ignored local workspace storage for screenshots, temporary
  scripts, and reference material. Its contents are not required to run the site
  and may be absent in another checkout.
- `academy.html` and `academy.css` contain a separate, media-led portfolio draft
  for the Academy application. Its project chapters, dedicated olympiad and
  debating sections are intentional exceptions to the index layout below.
  Use the same system sans-serif font stack as the index, with restrained heading
  sizes; avoid the previous display serif treatment. Media placeholders remain
  explicit until supplied.
  Its introduction uses Aryaman’s supplied wording, introduces his nickname Aru,
  and lists his current roles in order: Norik, then Palantir. The Palantir logo
  belongs in the introduction’s side column, separate from the text.
  `academy-structure.md` records the proposed content and media plan.
- Make focused changes. Do not introduce a framework, package manager, external
  font, or build tooling for routine content and layout edits.

## Design and content preferences

These describe the current agreed design. A new user request takes precedence.

- Keep the site clean, restrained, and minimalist. Use the existing index layout
  as the base rather than introducing cards, decorative effects, or a new theme.
- Preserve the gray background, system sans-serif fonts, readable text sizes,
  generous spacing, and subtle section dividers. Support the existing dark mode.
- Keep the name, headings, and page copy lowercase, including abbreviations,
  unless the user asks otherwise.
- Keep descriptions brief and factual, with full stops. Prefer direct language
  over promotional wording. Do not invent dates, achievements, or credentials.
- Entry descriptions belong below their headings, in muted text, rather than
  inline after a colon. Work headings separate the organization and role with a
  comma.
- On desktop, dates sit in the left column beside each entry. On narrow screens
  they stack above it. Undated entries should align with the other entry text;
  do not add placeholder dates.
- Keep all sections visible, with the sidebar navigation. Do not restore
  collapsible sections unless requested.
- The current section order is work, research & projects, awards, education,
  and other experiences. The last section keeps `id="other"` for its anchor.
- Other experiences contains Strand House, dated 2026, followed by debating
  without a separate date label. The debating article link belongs under that
  entry. Do not restore the removed Don Lavoie entry or a separate Writing section
  without a request.
- Organization and fellowship links, such as Norik and Pareto, retain the heading
  or inline text formatting and are underlined on hover. Reuse `.ai-title` within
  `.ai-entry-heading`, or `.ai-inline-link`, as appropriate.
- The sidebar contact links are an exception: “book a chat” and “email me” are
  stacked vertically and always underlined. Keep the Calendly URL and
  `mailto:asarda@palantir.com` unless asked to change them.
- Preserve semantic headings, the skip link, visible keyboard focus, responsive
  behavior, and print styles. New external links that open a tab should use
  `rel="noopener noreferrer"`.
- Research & projects links open the linked page in an on-page iframe dialog,
  with an explicit “open in new tab” link. Use the Google Docs preview URL for
  Trispectra. IEEE currently returns a bot-check screen; show a fallback until
  the user supplies a PDF. Use supplied PDFs where external pages cannot embed.
  Set `data-preview-url` to a supplied PDF path and remove
  `data-preview-unavailable` when replacing that fallback. Keep close-button,
  Escape, backdrop dismissal, and focus return working. Preserve the original
  link destinations for modified clicks and when JavaScript is unavailable.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/index.html`. If a preview is already serving this
checkout, reuse it. There is no build or dependency installation needed.

## Publishing

- This is the separate Academy site, copied from the personal website workspace
  on 2026-10-25. Its live URL is `https://aryamansarda.github.io/academy/`.
- Its public repository and `origin` are `aryamansarda/academy`. GitHub Pages
  serves this repository's root `index.html` from `main`, with HTTPS enforced.
- Keep `.nojekyll`. Use relative asset and page links so the site works under
  the `/academy/` path. Keep both index HTML files synchronized.
- The initial site and drafts are preserved by tag `initial-copy-2026-10-25`.
- Redesign and publish this site independently. Do not push its changes to
  `aryamansarda/aryamansarda.github.io` or `aryamansarda/personal-website` unless
  explicitly requested. The main personal site and LinkedIn URL stay unchanged.
- Before reporting a deployment as live, confirm the Pages build succeeded and
  the live HTML matches this repository's intended `index.html`.

## Verification

- For text-only changes, check the exact requested wording, preserve surrounding
  content, and confirm both HTML files were updated. Do not add a test suite for
  simple copy changes.
- For layout or interaction changes, inspect the page at desktop and mobile
  widths. Check wrapping, date alignment, navigation, link styling, and horizontal
  overflow. Save any screenshots under `.context/`.
- Run `git diff --check` after edits.
- This read-only check verifies that the shared stylesheet and markup match:

```sh
python3 - <<'PY'
from pathlib import Path

source = Path('personal-index-source.html').read_text()
page = Path('index.html').read_text()
style, markup = source.split('</style>', 1)
assert style + '</style>' in page, 'Styles differ between the two HTML files'
assert markup.strip() in page, 'Markup differs between the two HTML files'
print('Shared styles and markup match.')
PY
```

## Agent instructions

Keep shared repository guidance in this file. `CLAUDE.md` points here so Codex and
Claude use the same project conventions. Update these notes when the user changes
an established convention, rather than preserving superseded preferences.
