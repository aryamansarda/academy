# Project guide

This repository contains Aryaman Sarda’s Academy website. It is a small, static
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

- Keep the site clean, restrained, and minimalist. The index is now a media-led
  portfolio skeleton built on the existing sidebar layout. Use generous photo
  and video spaces, subtle dividers, and three compact experience boxes, without
  decorative effects or a new theme.
- Preserve the gray background, system sans-serif fonts, readable text sizes,
  generous spacing, and subtle section dividers. Support the existing dark mode.
- The university offer and associated education entry have been removed from
  all served pages. Do not restore them without a request.
- The supplied podium portrait sits directly below the name and above the
  introduction in the left sidebar. It fills the heading’s width and preserves
  its original proportions. The sidebar scrolls
  with the page on shorter screens so the photo and introduction stay accessible.
- The index introduction keeps only the supplied paragraph about current Norik
  and Palantir roles. The second paragraph summarizing past achievements is removed.
- Keep the name, headings, and page copy lowercase, including abbreviations,
  unless the user asks otherwise.
- Keep descriptions brief and factual, with full stops. Prefer direct language
  over promotional wording. Do not invent dates, achievements, or credentials.
- Entry descriptions belong below their headings, in muted text, rather than
  inline after a colon. Work headings separate the organization and role with a
  comma. Roles inherit the heading’s font size and line height, so the organization
  and role are the same size.
- On desktop, dates sit in the left column beside each entry. On narrow screens
  they stack above it. Undated entries should align with the other entry text;
  do not add placeholder dates.
- Keep all top-level sections visible. The navigation sits in a horizontal row
  beside the name at the top of the page, wrapping below the name on narrow
  screens. Other
  experiences uses three compact horizontal boxes with a heading, short subtitle
  and landscape thumbnail. Clicking a box opens a native dialog containing the
  full description, awards and media. Popups size to their content, with a simple
  title, close icon and restrained spacing. Use a photo-and-copy layout where
  appropriate; the BIO certificate is removed. Without JavaScript, the full stories remain
  in the page; print shows the full stories too.
- The current section order is work, research & projects, other experiences
  (`id="other"`), awards and other (`id="awards"`), then education. Work contains
  Palantir and Norik; LSE belongs in awards and other and Greenstar is removed. Research
  contains quantum-classical ML, Trispectra, then emergent misalignment.
- Other experiences contains competitive programming, Strand House, then
  debating. Programming and debating awards belong in their respective popups.
  The debating card subtitle is “captain of england's national debate team,
  2026 european champions. built the world's biggest u16 free debating competition.”
  The popup retains the fuller biography, awards and WorldSpeak details.
  Keep Strand House dated 2026 and debating without a separate date label, and
  preserve both article links. Awards and other is ordered Pareto, Arkwright, TeenTech science fair winner
  (2024, ai-powered hydroponics device, environment & energy), then LSE (2023, organization and role heading
  followed by the aged-15 sentence in muted text; no bullets or code link). The TeenTech PDF is reference-only: do not display or link
  its certificate or photo.
  Do not restore Don Lavoie or a separate Writing section without a request.
- Organization and fellowship links, such as Pareto, retain the heading
  or inline text formatting and are underlined on hover. Reuse `.ai-title` within
  `.ai-entry-heading`, or `.ai-inline-link`, as appropriate.
- Norik is plain text in the introduction and its work heading. Keep the explicit
  website and full-demo links below the work description. Embed the short
  application-filling clip (about 12 seconds), with the user-supplied caption about
  custom agents filling forms, checking documents and submitting applications, rather
  than the joined full demo. The video and poster are local assets under
  `assets/academy/`. The Norik clip autoplays muted and loops, retaining native
  controls and inline playback. The personal explainer video and placeholder stay removed.
- Palantir displays one group photo at full content width, without cropping.
  The second photo placeholder is removed until another photo is supplied.
- Missing media has explicit placeholders identified by `data-media-slot`.
  Keep missing video links visibly pending and disabled, without invented URLs.
  Trispectra uses the supplied local PDF and silent presentation recording,
  which autoplays muted and loops with native controls and inline playback.
  The emergent-misalignment summary stays to one brief sentence. Display its
  poster inline, linking directly to the full PDF without a preview button or
  popup. The Olympiad popup shows its photograph beside the short description;
  do not restore the removed certificate. Strand House uses the supplied group
  photo in both its box and popup; show the full image beside the description.
  Its subtitle identifies Aryaman as the youngest resident. Include weekly
  meetings with founders and leading investors, linking General Intuition and
  Kaikaku in the popup.
  Debating likewise uses the supplied speaking photo beside its details and
  awards. Its speech link is labelled “the european final” and preserves the
  supplied YouTube timestamp (2652 seconds). Include the WorldSpeak founding
  note and website link below the debating awards. Its website reports reaching
  over 400 students from 35 countries; the under-16 competition description is
  supplied by the user. Keep popup media limited to supplied images, adding further media when
  it arrives rather than displaying large empty panels.
  `academy-structure.md` tracks the current asset plan.
- The sidebar contact block has been removed, including “email me”, the
  technical-CV introduction and the “book a chat” Calendly link. Do not restore
  these without a request.
- Preserve semantic headings, the skip link, visible keyboard focus, responsive
  behavior, and print styles. New external links that open a tab should use
  `rel="noopener noreferrer"`.
- Research paper links open the supplied local PDFs in an on-page iframe dialog,
  with an explicit “open in new tab” link. The wildfire entry has two links:
  “ieee archive” goes directly to the original IEEE article, and “paper” opens
  the final PDF. Its visual pairs the hybrid model accuracy curve from figure 4 with the
  quantum circuit from figure 2, with 95.5% validation accuracy versus the 87.34%
  classical baseline from table i. Preserve the published axes and link images
  to full-size versions.
  Trispectra's “paper” link opens its supplied PDF, replacing Google Docs.
  Keep close-button, Escape, backdrop dismissal and focus return working for
  both research and experience dialogs. Preserve link destinations for modified
  clicks and when JavaScript is unavailable.

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
