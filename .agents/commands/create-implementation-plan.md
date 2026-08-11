---
description: Brainstorm a SimUI change into an approved spec, then create a detailed, trackable implementation plan from it (planning only).
argument-hint: <description | issue/ticket | approved spec path | scope hint>
---

# Create Implementation Plan

Create a detailed, trackable implementation plan for this SimUI repository. This is an Angular 22
application under `src/` using standalone components, strict TypeScript, Tailwind CSS v4, SpartanNG,
SSR/prerender, and `pnpm`.

> PLANNING ONLY. Do not implement code. Run the plan with `/implement` in a separate session.

## Step 1: Parse Input

Input: `$ARGUMENTS`

| Input Type    | Detection                                                                 | Action                                                               |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Approved spec | Path under `docs/specs/*.md`                                              | Read it and confirm Status is `Approved`                             |
| Description   | Free-form text                                                            | Run the brainstorm/spec flow first                                   |
| Issue/ticket  | Key or URL                                                                | Fetch if a connector exists; otherwise ask the user to paste details |
| Scope hint    | "component category", "variant only", "docs only", "tooling", "migration" | Constrain the plan                                                   |

If no approved spec is provided, use the `brainstorm-story` skill first. Do not continue until the
spec exists under `docs/specs/` and the user has approved it.

## Step 2: Invoke Relevant Skills

Analyze the approved spec and read the relevant skill instructions before research/planning:

| Trigger                                                                                                                 | Skill                  |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Angular components, services, routing, guards, signals, forms, SSR, tests                                               | `angular-developer`    |
| SpartanNG, `components.json`, `@spartan-ng/brain`, `@spartan-ng/helm`, `src/libs/ui`                                    | `spartan`              |
| Tailwind classes, theme tokens, dark mode, responsive styling                                                           | `tailwindcss-styling`  |
| Animations, motion, easing, transitions, hover/active effects, microinteractions, reduced motion, animation performance | `web-animation-design` |
| Complete new showcase category/list                                                                                     | `new-component-list`   |
| Browser/e2e/visual verification                                                                                         | `playwright-cli`       |

Use the minimal set that applies. For Angular version/API details, use official Angular docs or the
local Angular skill references instead of memory when uncertain.

## Step 3: Read Project Guidelines

Always read:

- `AGENTS.md`
- `package.json`
- `angular.json`
- `components.json`
- The approved spec

Read only relevant nearby files after that:

- Showcase examples: `src/app/components/{category}/`
- Registries: `src/app/constants/`
- Showcase pages: `src/app/pages/`
- Home thumbnails: `src/app/core/thumbnails/`
- Routes: `src/app/app.routes.ts`
- Home catalog: `src/app/constants/home.constant.ts`
- Services/models/guards: `src/app/services/`, `src/app/models/`, `src/app/guards/`
- Sim libraries: `src/libs/sim/`
- Spartan wrappers/primitives: `src/libs/ui/`
- Environment and SSR files when relevant: `src/environments/`, `src/server.ts`, `src/main.server.ts`

For Angular 22 migration work, read `docs/angular-v22-migration/IMPLEMENTATION_PLAN.md` and
`docs/angular-v22-migration/TODO.md` if they exist.

## Step 4: Research

Do targeted local research before writing the plan:

1. Find similar implementations with `rg`/file reads.
2. Inspect naming, import, formatting, and registration patterns near the target files.
3. Identify registry/changelog follow-up for `/review-changelog`; do not schedule `pnpm codes` as
   ordinary implementation work. Identify other generated follow-up such as sitemap generation.
4. Identify verification needs: formatting, build, lint, unit tests, Playwright/e2e, visual checks.
5. Note SSR/browser-only API risks.

## Step 5: Create the Plan

Create `docs/implementation-plan/<slug>.md` using the same slug as the approved spec when possible.
Create the directory if it does not exist.

### Header

```markdown
# Implementation Plan: <Title>

**Spec**: [<spec file>](../specs/<YYYY-MM-DD>-<slug>-design.md)
**Ticket/Issue**: <link, key, or n/a>
**Branch**: `feat/<short-description>`
**Target**: <showcase category | component variant | page | service | docs | tooling | migration | other>
**Scope**: <short scope statement>

---
```

### Summary

Briefly describe the intended change and the user-facing flow.

### Open Questions

Include only unresolved questions from the spec or research.

```markdown
## Open Questions

| #   | Question             | Source | Answer | Status     |
| --- | -------------------- | ------ | ------ | ---------- |
| 1   | What happens when X? | Spec   | -      | Unanswered |
```

Statuses: `Unanswered`, `Answered`, `Deferred`.

### File Structure

List exact files to add/modify. Use current SimUI paths, for example:

```markdown
src/app/components/<category>/
├── <category>-01.component.ts
└── index.ts

src/app/constants/<category>.constant.ts
src/app/pages/<category>.component.ts
src/app/core/thumbnails/<category>-thumbnail.component.ts
src/app/app.routes.ts
src/app/constants/home.constant.ts
src/app/constants/index.ts
```

For non-category work, list the relevant service, model, guard, library, docs, script, or config
files.

### Progress Tracker

Use phases that fit the scope. Keep tasks small enough to verify.

```markdown
## Progress Tracker

### Phase 1: Research & Registration Map

| Status | Task                                       | File      |
| ------ | ------------------------------------------ | --------- |
| [ ]    | Confirm nearby patterns and affected files | `src/...` |
```

Suggested phase order:

1. Research and registration map.
2. Data/model/service changes, if any.
3. Component/library implementation.
4. Registration, routing, barrels, and thumbnails; defer changelog and generated registry metadata
   to `/review-changelog`.
5. Accessibility, responsive, SSR, and state/error handling.
6. Tests and visual/e2e coverage.
7. Formatting and verification.
8. Documentation and plan sync.

For a complete component category, explicitly include the `new-component-list` workflow and its
registration checklist.

### Reference Files

```markdown
| File                                                             | Purpose          |
| ---------------------------------------------------------------- | ---------------- |
| [button.constant.ts](../../src/app/constants/button.constant.ts) | Registry pattern |
```

### Implementation Details

Ground details in the approved spec and researched files. Include:

- Component selectors/classes and import paths.
- SpartanNG entry points from specific packages.
- Tailwind/theme-token guidance.
- Animation and motion guidance: easing, duration, transform/opacity-only performance, hover/touch
  behavior, paired-element timing, and `prefers-reduced-motion` requirements.
- Signal/service/routing patterns.
- Accessibility and keyboard behavior.
- SSR-safe handling for browser APIs.
- Explicitly defer changelog writing and generated registry metadata to `/review-changelog`.
- Verification commands.

## Step 6: Validate the Plan

Before presenting, check:

- Every task traces back to the approved spec.
- Paths match this repo; no `frontend/`, `service/`, `.NET`, `CLAUDE.md`, `Agent`, or `TodoWrite`
  leftovers.
- The plan preserves current naming/import/registration patterns.
- Open questions are explicit instead of guessed.
- Verification covers the changed surface area.

## Step 7: Present and Iterate

Show the plan path and summarize the phases. Ask the user whether they want edits. Once accepted,
tell them to run `/implement <plan path>` in a new session.

## Guidelines

DO: spec first, plan only, read local patterns, use SimUI paths, include file paths, use `[ ]` /
`[x]` / `[SKIP]`, include verification commands, flag SSR/accessibility risks.

DON'T: implement code, skip the approved spec gate, invent design decisions missing from the spec,
use old full-stack paths, use npm/Yarn, or require docs that do not exist.

## Examples

| Command                                                                       | Action                                                                                                            |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/create-implementation-plan Add tooltip component category with 12 examples` | Brainstorm spec, then plan a new SimUI category with examples, registry, page, route, thumbnail, and verification |
| `/create-implementation-plan docs/specs/2026-07-05-tooltip-design.md`         | Plan from the approved spec                                                                                       |
| `/create-implementation-plan Add loading state to payment success page`       | Brainstorm spec, then plan page/service changes and verification                                                  |
| `/create-implementation-plan Angular 22 migration task 3`                     | Read migration docs/TODO, brainstorm if needed, then plan that migration slice                                    |
