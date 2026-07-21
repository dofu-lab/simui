---
name: generate-thumbnail
description: Create or refine Angular `*.thumbnail.ts` components for SimUI component-showcase categories while preserving the repository's miniature UI language, semantic Tailwind CSS v4 tokens, light/dark behavior, sizing, naming, and registration patterns. Use when asked to generate, implement, redesign, fix, or review a home-catalog thumbnail or a category thumbnail preview in this repository.
---

# Generate a SimUI thumbnail

Create a lightweight, static miniature that communicates the category at a glance inside the home catalog's 300×170 preview frame.

## Inspect

1. Read the target category page, registry, examples, and existing thumbnail when present.
2. List every current `*.thumbnail.ts` under `src/app/features/component-showcase/categories/` and inspect the closest visual analogs. Treat repository code as authoritative when it has evolved beyond this skill.
3. Read [references/thumbnail-language.md](references/thumbnail-language.md) before designing or changing the thumbnail.
4. Read `src/app/features/home/home.page.ts` when the preview frame or hover behavior may have changed.
5. Preserve unrelated worktree changes. Do not use an incomplete or anomalous thumbnail as the sole precedent.

## Design

1. Choose one recognizable state or interaction model rather than shrinking a full example.
2. Build the preview from static HTML, inline SVG, and Tailwind utilities. Avoid application logic, real form controls, external images, and dependencies unless the target genuinely requires them.
3. Center the composition with a full-size host. Use `relative` and `overflow-hidden` only for layered or overlay compositions.
4. Reuse semantic theme tokens, the established surface treatment, muted placeholder bars, primary accents, compact radii, and restrained shadows described in the reference.
5. Keep the silhouette readable in both themes and at thumbnail size. Prefer two or three tonal levels and one primary focal point.
6. Preserve accessibility: mark decorative SVGs `aria-hidden="true"`; do not introduce focusable controls into a decorative preview.

## Implement

- Put the component at `src/app/features/component-showcase/categories/{category}/{category}.thumbnail.ts`.
- Use selector `app-{category}-thumbnail` and class `{PascalCategory}ThumbnailComponent`.
- Match current thumbnail metadata: import only `Component` when possible, use an inline template, and omit unnecessary state, styles, and imports.
- Keep the category barrel export and `home-catalog.ts` registration intact. Add them only when the thumbnail is new and not already registered.
- Do not change showcase examples merely to support the thumbnail.

## Verify

1. Format touched files with the configured Prettier setup.
2. Run `pnpm build` after Angular source changes.
3. Inspect the home catalog in light and dark themes when browser tooling is available. Confirm centering, clipping, contrast, and recognition at the real 300×170 frame.
4. Review the diff for hardcoded theme colors, accidental full-size UI, unnecessary interactivity, missing SVG accessibility, and unrelated edits.
5. Report the visual concept, files changed, and verification results.
