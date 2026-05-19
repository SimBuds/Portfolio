# Public assets

Drop your real photos here, then update the src paths in the components.

Expected files (referenced by components):

- `img/casey-hero.jpg`  — hero portrait (1280×1600 portrait recommended)
- `img/casey-about.jpg` — about photo (1080×1350 portrait recommended)
- `img/work-01-jewelry.jpg` — first work card screenshot
- `img/work-02-hubspot.jpg` — second work card screenshot
- `img/work-03-tcg.jpg`     — third work card screenshot
- `resume.pdf` — your downloadable resume

Until you add these, image tags will 404 (browser shows broken image icon).
For nicer fallbacks, swap to `<Image>` from `astro:assets` and store images under `src/assets/`.
