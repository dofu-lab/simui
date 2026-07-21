# SimUI repository guidance

## Project

- Use `pnpm`; do not create npm or Yarn lockfiles.
- This is an Angular 21 standalone-component application using strict TypeScript, Tailwind CSS v4, and SpartanNG.
- Inspect nearby code before editing and preserve local naming, import, formatting, and registration patterns.

## Angular

- Keep components standalone and use signal APIs for new reactive state where appropriate.
- Prefer `ChangeDetectionStrategy.OnPush` for new stateful components when it fits the surrounding code.
- Use inline templates and Tailwind utilities; avoid adding component styles unless utilities cannot express the design.
- Use semantic theme utilities such as `bg-background`, `text-foreground`, and `border-border` instead of hardcoded theme colors.
- Import SpartanNG packages from specific entry points such as `@spartan-ng/helm/button`, never from the package root.
- Keep browser-only APIs SSR-safe.
- Preserve accessibility semantics, labels, keyboard behavior, and visible focus states.

## SimUI structure

- Put app-wide singleton concerns, guards, interceptors, services, and shell UI in `src/app/core/`.
- Put reusable, feature-independent constants, pipes, types, and utilities in `src/app/shared/`.
- Put route-level and domain-specific code in `src/app/features/{feature}/`; do not add new flat `pages/`, `components/`, or `constants/` folders under `src/app/`.
- Use `@core`, `@shared`, and `@features` aliases for app code. Keep existing SpartanNG and Sim library aliases working.

### Component showcase categories

- Keep each showcase category self-contained at `src/app/features/component-showcase/categories/{category}/`.
- A complete category contains `{category}.page.ts`, `{category}.registry.ts`, `{category}.thumbnail.ts`, an `examples/` folder with its barrel, and a category `index.ts` barrel.
- Keep example component names, registry IDs, and generated public/registry output names compatible when moving or extending a category.
- Register a new category in `src/app/app.routes.ts`, `src/app/features/component-showcase/home-catalog.ts`, and the relevant barrels. Update generator paths when the category's generated output is affected.
- Use the `new-component-list` skill when scaffolding an entire component category, and follow a nearby category as the source of truth for naming and registration.

## Verification

- Format touched files with the configured Prettier setup.
- Run `pnpm build` after Angular source changes.
- Run `pnpm lint` when changes affect application code broadly or when requested.
- Do not overwrite or discard unrelated working-tree changes.

## Angular 22 migration

- Read `docs/angular-v22-migration/IMPLEMENTATION_PLAN.md` before migration work.
- Use `docs/angular-v22-migration/TODO.md` as the migration source of truth.
- Update the current task, checkboxes, progress summary, evidence log, and
  blockers after each migration session.
