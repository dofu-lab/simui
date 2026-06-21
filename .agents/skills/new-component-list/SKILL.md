---
name: new-component-list
description: Scaffold a complete SimUI component category with numbered Angular examples, barrels, registry data, a showcase page, routing, a home thumbnail, and preview registration. Use when asked to add a new component category or component list to this repository.
---

# Scaffold a SimUI component list

Collect or infer:

- `name`: a kebab-case component name, such as `tooltip`, `file-input`, or `date-picker`
- `count`: a positive integer indicating how many numbered examples to create

Ask for a missing value only when it cannot be inferred safely. Stop if the target category already exists unless the user explicitly asks to extend or replace it.

Derive:

| Form   | Rule                                             | Example for `file-input` |
| ------ | ------------------------------------------------ | ------------------------ |
| kebab  | Use as-is                                        | `file-input`             |
| Pascal | Capitalize each word and remove hyphens          | `FileInput`              |
| camel  | Lowercase the first character of Pascal          | `fileInput`              |
| Title  | Capitalize words and replace hyphens with spaces | `File Input`             |

## Inspect

Read these files before editing:

- `src/app/constants/index.ts`
- `src/app/pages/index.ts`
- `src/app/app.routes.ts`
- `src/app/constants/home.constant.ts`
- `src/app/core/thumbnails/index.ts`

Inspect one nearby component category end to end: its examples, barrel, registry, page, thumbnail, route, and home preview entry. Treat current repository code as authoritative when it differs from examples in this skill.

## Create

Create `count` standalone components under `src/app/components/{name}/`:

- Name files `{name}-01.component.ts` through `{name}-{count}.component.ts`, using two-digit numbering.
- Use selectors `sim-{name}-01` through `sim-{name}-{count}`.
- Name classes `{Pascal}01Component` through `{Pascal}{count}Component`.
- Give each component an accessible placeholder template consistent with nearby examples.
- Add `src/app/components/{name}/index.ts` exporting every stub.

Create `src/app/constants/{name}.constant.ts`:

- Import all generated components using the repository's current import convention.
- Export `{camel}Components: ComponentCardItem[]`.
- Add one entry per component with the established `id`, `component`, `colNumber`, and `itemStyle` conventions.

Create `src/app/pages/{name}.component.ts`:

- Import `{camel}Components` from `../constants`.
- Use `PageGridComponent` and `ComponentHeaderComponent`.
- Match the structure and style of existing component pages.

Create `src/app/core/thumbnails/{name}-thumbnail.component.ts`:

- Name the class `{Pascal}ThumbnailComponent`.
- Match nearby thumbnail host sizing and visual language.
- Build a lightweight semantic preview with theme tokens; do not reproduce a full showcase example.

## Register

Preserve the ordering scheme of each target file:

1. Export `./{name}.constant` from `src/app/constants/index.ts`.
2. Export `./{name}.component` from `src/app/pages/index.ts`.
3. Export `{Pascal}ThumbnailComponent` from `src/app/core/thumbnails/index.ts`.
4. Add the `{name}` lazy-loaded route to the component children in `src/app/app.routes.ts`.
5. Import `{camel}Components` and `{Pascal}ThumbnailComponent` in `src/app/constants/home.constant.ts`.
6. Add the category to `previewComponents`. Keep featured `isNew` entries grouped at the top and sort within the appropriate group.

Use:

- Title: `{Title}`
- Description: `{Title} component.`
- Keywords: `{name}, angular component`
- Thumbnail: `{Pascal}ThumbnailComponent`
- Path: `components/{name}`

## Verify

Format only the touched files with the configured Prettier setup, then run:

```bash
pnpm build
```

Confirm that:

- The component directory contains `count` stubs plus `index.ts`.
- The constant contains `count` entries.
- The constant, page, and thumbnail barrel exports are present.
- The route and home preview entry use the derived names and path.
- No existing category or unrelated file was overwritten.
- The build succeeds.

Report all created and modified files, plus verification results.
