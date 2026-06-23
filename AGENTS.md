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

- Showcase components live in `src/app/components/{category}/`.
- Component registries live in `src/app/constants/`.
- Showcase pages live in `src/app/pages/`.
- Home preview thumbnails live in `src/app/core/thumbnails/`.
- Register new component categories in the relevant barrels, `src/app/app.routes.ts`, and `src/app/constants/home.constant.ts`.
- Use the `new-component-list` skill when scaffolding an entire component category.

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
