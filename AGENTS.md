# SimUI repository guidance

## Project

- Use `pnpm`; do not create npm or Yarn lockfiles.
- This is an Angular 22 standalone-component application using strict TypeScript, Tailwind CSS v4, and SpartanUI.
- Inspect nearby code before editing and preserve local naming, import, formatting, and registration patterns.

## Angular

- Keep components standalone and use signal APIs for new reactive state where appropriate.
- Do not add explicit `ChangeDetectionStrategy.OnPush` declarations to components; this Angular 22 project uses OnPush change detection by default.
- Use inline templates and Tailwind utilities; avoid adding component styles unless utilities cannot express the design.
- Use semantic theme utilities such as `bg-background`, `text-foreground`, and `border-border` instead of hardcoded theme colors.
- Import SpartanUI packages from specific entry points such as `@spartan-ng/helm/button`, never from the package root.
- Keep browser-only APIs SSR-safe.
- Preserve accessibility semantics, labels, keyboard behavior, and visible focus states.

## SpartanUI libraries

- Before using or changing a SpartanUI component in consuming code, verify every Helm import, `*Imports` bundle, component selector, directive selector, and input against the installed implementation and exports under `src/libs/ui/{component}/src/`. Do not infer APIs from memory, external documentation, or nearby examples alone.
- Verify Brain APIs against the installed `@spartan-ng/brain` package declarations when they are not implemented under `src/libs/ui/`. If an API is not present in the installed source, do not use it; compose from an existing API or explicitly generate/install the required component when the user requests that scope.
- Never edit files under `src/libs/ui/` when fixing application or component-showcase bugs. Treat these SpartanUI library sources as vendor-owned and fix the issue in the consuming app, example, or preview layer instead.
- Only change `src/libs/ui/` when the user explicitly requests a SpartanUI library change, customization, generation, or upgrade.

## SimUI structure

- Put app-wide singleton concerns, guards, interceptors, services, and shell UI in `src/app/core/`.
- Put reusable, feature-independent constants, pipes, types, and utilities in `src/app/shared/`.
- Put route-level and domain-specific code in `src/app/features/{feature}/`; do not add new flat `pages/`, `components/`, or `constants/` folders under `src/app/`.
- Use `@core`, `@shared`, and `@features` aliases for app code. Keep existing SpartanUI and Sim library aliases working.

### Component showcase categories

- Keep each showcase category self-contained at `src/app/features/component-showcase/categories/{category}/`.
- A complete category contains `{category}.page.ts`, `{category}.registry.ts`, `{category}.thumbnail.ts`, an `examples/` folder with its barrel, and a category `index.ts` barrel.
- Put demo-only route components, including fullscreen preview pages, in the category's local `previews/` folder; keep reusable, copyable components in `examples/`.
- Keep example component names, registry IDs, and generated public/registry output names compatible when moving or extending a category.
- Register a new category in `src/app/app.routes.ts`, `src/app/features/component-showcase/home-catalog.ts`, and the relevant barrels. Update generator paths when the category's generated output is affected.
- Use the `new-component-list` skill when scaffolding an entire component category, and follow a nearby category as the source of truth for naming and registration.

## Verification

- Format touched files with the configured Prettier setup.
- Run `pnpm build` after Angular source changes.
- Run `pnpm lint` when changes affect application code broadly or when requested.
- Do not overwrite or discard unrelated working-tree changes.

## Changelog and registry

- Do not automatically add or update changelog entries while implementing features, improvements, fixes, compatibility changes, or workflow changes.
- Only update `src/tools/registry-changelog.json` when the user explicitly runs or requests `/review-changelog`.
- Do not automatically run `pnpm codes` or otherwise regenerate registry artifacts during ordinary implementation work.
- Do not manually edit generated files under `public/registry/`; the dedicated registry script owns those updates and should only run as part of an explicitly requested changelog or registry workflow.
- When explicitly writing a changelog entry, give it a unique date-prefixed ID, its calendar date, the compatible SpartanUI version, and one of `feature`, `improvement`, `fix`, or `breaking`.
- Write requested entries for SimUI users: explain what changed and why it matters. Do not include routine refactors, tests, formatting, or other internal-only work.
- Keep requested entries ordered newest date first. Multiple entries may share a date and SpartanUI version.

## Angular 22 migration

- Read `docs/angular-v22-migration/IMPLEMENTATION_PLAN.md` before migration work.
- Use `docs/angular-v22-migration/TODO.md` as the migration source of truth.
- Update the current task, checkboxes, progress summary, evidence log, and
  blockers after each migration session.
