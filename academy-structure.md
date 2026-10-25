# Academy portfolio skeleton

Preview: http://127.0.0.1:4173/academy.html

## Three possible directions

1. **Photo essay — implemented in this draft.** Keep the quiet sidebar and gray
   ground, with system sans-serif typography, large demos, small captions, and occasional
   pairs of photographs. Each project is a chapter. Let the actual work and people
   provide the colour. Best fit for the current brief.
2. **Lab notebook.** Give each project a question, an experiment, and an outcome.
   Place diagrams, annotated screenshots, and failed attempts alongside the final
   result. A stronger choice if most available assets are technical.
3. **Contact sheet.** Start with a compact collection of real photos and product
   stills, each linking to a full project chapter below. More immediately lively;
   needs a good set of photographs before it will work.

## Proposed reading order

| Chapter | Already known | Material to add |
| --- | --- | --- |
| Introduction | Aryaman, known as Aru, 19, London. Deferred Oxford computer science and philosophy place. User-supplied introduction with numbered current roles: Norik founder and CEO, then Palantir meritocracy fellow / forward deployed engineer in UK commercial. Palantir symbol in the side column below the portrait, separate from the text. | A relaxed portrait. |
| Norik | Founder and CEO; automating visa applications. | 30–60 second product demo, an early screenshot, why this problem, individual contribution, real outcome. |
| Greenstar | Founding engineer; sustainable shopping. | Product flow recording, team or process photo, the part Aryaman owned, one engineering decision. |
| Wildfire detection | Sole-author hybrid quantum neural network paper; IEEE COMSNETS 2025. | One figure, conference photo, research question, actual result, short explanation. |
| Emergent misalignment | Non-trivial fellowship, $2k grant, MIT URTC 2025. | A concrete experiment, figure or talk clip, individual contribution, findings and limitations. |
| Trispectra | Audio deepfake detector combining waveform, spectrogram and wavelet features. | Narrated real/synthetic comparison, detector output, evaluation details and limitations. |
| British Informatics Olympiad | Top 15 in the UK, finalist, invited to IOI team selection test. | Supplied competition photos, favourite problem, a sketch of the approach. |
| Debating | England member 2025, captain 2026, two world and European championships, 2026 rankings. | Short speech excerpt, team photo, candid photo, a personal memory. Keep the existing essay link here. |
| In between | Strand House, Palantir, LSE, Pareto, Oxford. | Hackerhouse photo and one short story. Keep fuller education and awards in the original index. |

For each project, aim for a short paragraph answering: why did I do this, what
exactly did I make, and what happened? Only add outcomes and technical details once
provided. Prefer 60–100 specific words to a long case study. Keep the first demo
visible near the top so a reader can quickly see something built.

## Visual approach

- System sans-serif typography, matching the main index, with restrained heading
  sizes and weights. No font downloads, framework, or runtime JS.
- Lowercase copy, a gray background, fine dividers, one quiet rust accent.
- An open, continuous page with individual anchors; natural variation in media
  proportions. Actual photographs will create most of the visual energy.
- Keep captions personal and specific: who, where, what happened. The placeholders
  describe intended assets; they are not claims that those assets already exist.
- Dark mode, keyboard focus, skip link, mobile layout, and print styles included.

## Replacing placeholders

Each media placeholder is a `.media-slot` inside a `figure`. Replace that div with
the real image or native video, and replace its caption. Store media under
`assets/academy/` once supplied. Example markup, using future filenames:

```html
<figure>
  <img src="assets/academy/norik-early-version.webp"
       alt="Describe the actual image here."
       width="1200" height="800" loading="lazy">
  <figcaption>A specific caption about this version.</figcaption>
</figure>

<figure>
  <video controls playsinline preload="none"
         poster="assets/academy/norik-demo-poster.webp">
    <source src="assets/academy/norik-demo.mp4" type="video/mp4">
    <track kind="captions" src="assets/academy/norik-demo.vtt"
           srclang="en" label="English" default>
    <a href="assets/academy/norik-demo.mp4">Watch the demo.</a>
  </video>
  <figcaption>A short explanation of what the demo shows.</figcaption>
</figure>
```

Use descriptive alt text and actual image dimensions. Videos should have a useful
poster, native playback controls, and captions for speech. Avoid autoplay. Do not
ship broken video elements or pretend play buttons while assets are missing.

Before publishing, replace the draft label, all media placeholders and story
prompts with real material; check each claim and caption; decide whether to remove
the `noindex` meta tag. The existing index and its shared source remain separate.
