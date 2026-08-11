---
description: Implement a SimUI change from an implementation plan, approved spec, description, or issue/ticket.
argument-hint: <plan file | approved spec | description | scope, e.g. "docs/implementation-plan/tooltip.md Phase 2">
---

# Implement

Implement a change in this SimUI repository. Prefer working from a plan file under
`docs/implementation-plan/`. If no plan exists, ask whether the user wants `/create-implementation-plan`
first unless the requested change is small and unambiguous.

This repo is Angular 22 under `src/`, with standalone components, strict TypeScript, Tailwind CSS
v4, SpartanNG, SSR/prerender, and `pnpm`.

## Step 1: Parse Input

Input: `$ARGUMENTS`

| Input Type    | Detection                                                            | Action                                                                   |
| ------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Plan file     | `docs/implementation-plan/*.md`                                      | Read it, identify incomplete tasks, and honor any phase/scope hint       |
| Approved spec | `docs/specs/*.md`                                                    | Prefer creating a plan first; proceed directly only if the user asks     |
| Description   | Free-form text                                                       | Implement directly only if small/unambiguous; otherwise suggest planning |
| Issue/ticket  | Key or URL                                                           | Fetch if possible; otherwise ask for details                             |
| Scope         | "Phase X", "category only", "variant only", "docs only", "migration" | Filter work accordingly                                                  |

When implementing from a plan, keep it synced: deviations are recorded immediately, and completed
tasks are checked off before finishing.

## Step 2: Invoke Relevant Skills

Read the applicable skill instructions before editing:

| Trigger                                                                              | Skill                 |
| ------------------------------------------------------------------------------------ | --------------------- |
| Angular components, services, routing, guards, signals, forms, SSR, tests            | `angular-developer`   |
| SpartanNG, `components.json`, `@spartan-ng/brain`, `@spartan-ng/helm`, `src/libs/ui` | `spartan`             |
| Tailwind classes, theme tokens, dark mode, responsive styling                        | `tailwindcss-styling` |
| Complete new showcase category/list                                                  | `new-component-list`  |
| Browser/e2e/visual verification                                                      | `playwright-cli`      |

Use the minimal set that applies.

## Step 3: Read Guidelines and Context

Read before editing:

- `AGENTS.md`
- The plan/spec if provided
- `package.json`
- `angular.json`
- `components.json`
- Relevant nearby files in `src/`

Inspect one similar implementation before touching a pattern-heavy area such as component
categories, registries, pages, thumbnails, routes, services, guards, or `src/libs/*`.

## Step 4: Execute

Follow the plan if present. Otherwise keep changes tightly scoped to the request.

Rules:

- Use `pnpm`, not npm or Yarn.
- Preserve standalone components, inline templates, Tailwind utilities, and local formatting.
- Prefer signal APIs for new reactive state where appropriate.
- Prefer `ChangeDetectionStrategy.OnPush` for new stateful components when it fits nearby code.
- Import SpartanNG from specific entry points such as `@spartan-ng/helm/button`.
- Use semantic theme utilities like `bg-background`, `text-foreground`, and `border-border`.
- Keep browser-only APIs SSR-safe.
- Preserve accessibility semantics, labels, keyboard behavior, and visible focus states.
- Use `new-component-list` for a complete new category.
- Do not overwrite unrelated working-tree changes.

For new component categories, register all required pieces:

- `src/app/components/{category}/`
- `src/app/constants/{category}.constant.ts`
- `src/app/constants/index.ts`
- `src/app/pages/{category}.component.ts`
- `src/app/pages/index.ts`
- `src/app/core/thumbnails/{category}-thumbnail.component.ts`
- `src/app/core/thumbnails/index.ts`
- `src/app/app.routes.ts`
- `src/app/constants/home.constant.ts`

## Step 5: Plan Sync

If a plan file exists:

- Record deviations as soon as they happen.
- Mark finished tasks `[x]`.
- Mark blocked/non-applicable tasks `[SKIP]` with a reason.
- Add notes for verification failures or follow-up work.

## Step 6: Verification

Run the checks appropriate to the touched files:

1. Format touched files with the configured Prettier setup. Prefer `pnpm format` for broad changes;
   for a small set, use `pnpm exec prettier --write <files>`.
2. Run `pnpm build` after Angular source changes.
3. Run `pnpm lint` when changes affect application code broadly or when requested.
4. Run `pnpm test` or targeted specs when tests were added/changed or logic risk warrants it.
5. Do not update the changelog or regenerate registry metadata during implementation. Run
   `/review-changelog` as a separate, explicit workflow after the implementation is ready.
6. Run Playwright/e2e or screenshot checks when the plan requires visual/user-flow verification.

If a verification command cannot be run, state why and leave the plan status honest.

## Step 7: Final Summary

Report:

- What changed.
- Files created/modified.
- Plan updates made, if any.
- Verification commands and results.
- Remaining tasks or open questions.

## Loop Mode (`--loop`)

If arguments include `--loop`, perform exactly one bounded unit from the plan:

1. Require a plan file.
2. If all tasks are `[x]` or `[SKIP]`, stop with `PLAN_COMPLETE`.
3. Select the first incomplete phase whose dependencies are satisfied.
4. Implement only that phase, verify it, update the plan, then stop.
5. Last line must be one of:
   - `ITERATION_DONE: <phase> - next: <phase>`
   - `PLAN_COMPLETE`
   - `BLOCKED: <reason>`

In loop mode, do not ask mid-iteration. Record blockers in the plan and stop with `BLOCKED`.
