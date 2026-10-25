# Academy portfolio skeleton

The current skeleton is `index.html`, synchronized with
`personal-index-source.html`. Preview the repository root with the command in
`AGENTS.md`. The earlier `academy.html` / `academy.css` concept remains a separate
historical draft; it is not the page served by GitHub Pages.

The left column shows the supplied podium portrait directly below the name and
above the introduction paragraph, at the same width as the heading. Navigation
sits in a horizontal row beside the name, wrapping below it on narrow screens. It preserves
the image’s original proportions.

## Reading order

1. Work: Palantir and Norik. Greenstar is removed.
2. Research & projects: quantum-classical ML, Trispectra, emergent misalignment.
3. Other experiences: competitive programming, Strand House, debating.
4. Awards and other: Pareto fellowship, Arkwright engineering scholarship, TeenTech
   science fair winner, London School of Economics (2023; heading followed by the aged-15 sentence).
5. Education: St Paul’s and City of London.

Norik is plain text in the introduction and heading, with website and full-demo
links below its description. The personal explainer block stays removed. The
short product clip replaces the previously joined full demo.

The three experience boxes are compact horizontal links with a heading, short
summary and landscape thumbnail. Clicking a box opens a native dialog with its
full description, awards and media. The programming popup pairs its photograph with a short
description; the certificate is removed. Dialogs size to their content with a
simple title and close icon. Full stories remain accessible without JavaScript and in
print. Escape, close, backdrop dismissal and focus return work in both dialogs.

## Media inventory

| Location / `data-media-slot` | Current material | Still needed |
| --- | --- | --- |
| `palantir-01` | Supplied Palantir group photograph, converted from HEIC to JPEG and displayed at full content width without cropping. | Nothing required. |
| `norik-demo` | Original 12-second application-filling clip with the user-supplied custom-agents caption, local poster and external full-demo link. Autoplays muted and loops. | Nothing required. |
| `wildfire-figure` | Hybrid model accuracy curve from figure 4 and quantum circuit from figure 2; 95.5% validation accuracy versus 87.34% classical baseline (table i). Separate IEEE archive link and local final-paper popup. | Nothing required. |
| `trispectra-talk` | Supplied silent presentation recording, converted to a 10.7-second H.264 MP4 that autoplays muted and loops. Supplied paper opens in the PDF popup. | Audio or a longer clip only if supplied later. |
| `misalignment-poster` | Full poster image linking directly to the supplied PDF; one-sentence research summary. No preview button or popup. | Nothing required. |
| `programming-photo` | Photograph extracted from the supplied Olympiad PDF, displayed beside its description. Certificate removed at the user’s request. | Nothing required. |
| `strand-house-01` | Supplied group photo appears in the box and beside the popup description. Subtitle highlights the youngest resident; popup includes weekly founder/investor meetings and links to General Intuition and Kaikaku. | Additional photos can be added when supplied. |
| `debating-01` | Supplied debating photo in the box and beside the popup details. “the european final” links to the supplied YouTube recording at 44:12. WorldSpeak founding note and website link sit below the debating awards. | Additional photos can be added when supplied. |

## Replacing placeholders

Each placeholder is a `.ai-media-slot` within a `figure[data-media-slot]`. Replace
it with the real image or native video and add a factual caption. Put final assets
under `assets/academy/`, using relative paths so GitHub Pages works at `/academy/`.
Keep both index HTML files synchronized.

Images need descriptive alt text, real width/height and lazy loading. Preserve
whole certificates and posters; link to a full-resolution version for reading.
Videos use native controls, `playsinline` and a poster. Both Norik and Trispectra
autoplay muted and loop, with `preload="metadata"`. Add captions when the supplied
video includes speech. Pending video
links are explicitly disabled until their URLs arrive.

Research links are labelled “paper”. Local PDFs use their relative path for both
`href` and `data-preview-url`. The IEEE archive link opens the original article
directly. The displayed MIT poster links directly to its PDF without opening the
research dialog. Modified clicks and no-JavaScript visits retain link destinations.

## Design

Keep the gray background, system sans-serif fonts, muted descriptions, left-hand
dates, a top navigation row beside the name, and fine rules. The wider content area gives media
room without introducing a new theme. Experience boxes stay horizontal on narrow
screens; photo pairs inside their dialogs stack. Keep dark mode, keyboard focus, skip link and print support.

## Sources

- Wildfire figure and validation result: supplied `comsnets25wqt-final99.pdf`,
  figure 2 (page 4), figure 4 and table i (page 5). Keep “validation” explicit.
- Trispectra: supplied `TriSpectra Paper.pdf` and screen recording dated
  2026-10-25 at 19.45.02. The recording has no audio track.

- MIT summary: user-supplied “MIT URTC Poster 2025.pdf”.
- Olympiad images: user-supplied “British Informatics Olympiad Certificate +
  Picture.pdf”. The certificate states 2025; the existing entry states 2026 and
  the user confirms invitations in consecutive years.
- WorldSpeak reach: [official homepage](https://www.worldspeak.co.uk/) reports over
  400 students from 35 countries (checked 2026-10-25). The user supplied the
  description of the largest free competition for students under 16.
- Other achievements and numerical claims: supplied by the user or retained from
  the existing index. Recheck the view/citation counts when publishing new copy.

TeenTech is a text-only 2024 environment & energy category win for an ai-powered
hydroponics device. The supplied
“TeenTech Awards + Image on Stage.pdf” is reference material only; neither its
certificate nor its photograph belongs on the site.
