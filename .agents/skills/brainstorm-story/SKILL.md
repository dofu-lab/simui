---
name: brainstorm-story
description: Polish a user story into a consistent design spec file through structured brainstorming dialogue BEFORE planning. Use when the user wants to refine, clarify, brainstorm, or "polish" a user story / work item / feature idea for this Angular 22 SimUI repository, or before running /create-implementation-plan on an ambiguous feature, bug, component category, UI variant, documentation, or migration task. Input is an issue/ticket key or URL, Figma/design link, or free-form feature description.
---

# Brainstorm Story

Turn a raw user story into a validated, consistently formatted spec at
`docs/specs/<YYYY-MM-DD>-<slug>-design.md`. The spec is the source of truth for
`/create-implementation-plan`.

<HARD-GATE>
Do NOT write application code, scaffold files, create an implementation plan, or invoke
implementation-focused skills until the spec is written AND the user has approved it. The only
next step after this skill is `/create-implementation-plan` in a new session, or returning control
to that command when it invoked this skill.
</HARD-GATE>

## Repository Context

This project is SimUI:

- Angular 22 standalone-component application under `src/`
- Tailwind CSS v4, SpartanNG, strict TypeScript, SSR/prerender
- Showcase examples: `src/app/components/{category}/`
- Component registries: `src/app/constants/`
- Showcase pages: `src/app/pages/`
- Home thumbnails: `src/app/core/thumbnails/`
- Routes: `src/app/app.routes.ts`
- Home catalog: `src/app/constants/home.constant.ts`
- Low-level UI primitives: `src/libs/ui/`
- Sim-specific libraries: `src/libs/sim/`

There is no `frontend/` or `service/` directory in this repo. Treat `AGENTS.md`, nearby code, and
the local skills as authoritative.

## Checklist

Create and maintain a task plan for these steps:

1. Gather inputs: issue/ticket text, comments, design/Figma links, free-form request.
2. Explore project context: relevant `src/` files, existing component categories, registries,
   routes, thumbnails, services, guards, docs, and recent conventions.
3. Ask clarifying questions in small batches until the spec can be written without guessing.
4. Propose approaches where real choices exist, with a recommendation and trade-offs.
5. Present the design section by section and get agreement before writing.
6. Write the spec using `references/spec-template.md` exactly.
7. Self-review the spec for placeholders, contradictions, scope drift, and ambiguity.
8. User review gate: wait for approval, then set Status to `Approved`.
9. Hand off to `/create-implementation-plan`.

## Step 1: Gather Inputs

Input may be an issue/ticket key or URL, a Figma/design link, or a free-form description.

- Ticket/issue present: fetch it if a connector is available; otherwise ask the user to paste the
  title, description, acceptance criteria, and relevant comments. Read the original description
  first, then comments oldest to newest. Later comments override earlier text.
- Figma/design present: fetch design context and screenshots if tools are available. Carry the
  findings into the design as Angular template, SpartanNG, Tailwind, accessibility, and responsive
  behavior notes.
- Free-form description: proceed from the description and derive a short kebab-case slug.

Contradictions and gaps become clarifying questions. Do not silently resolve them.

## Step 2: Explore Project Context

Do focused local research before asking final questions:

- Read `AGENTS.md`, `package.json`, `components.json`, and nearby files in `src/`.
- For new component categories, inspect an existing category end to end:
  `src/app/components/<category>/`, `src/app/constants/<category>.constant.ts`,
  `src/app/pages/<category>.component.ts`, `src/app/core/thumbnails/*`, routes, and
  `home.constant.ts`.
- For UI variants, inspect adjacent numbered examples and the registry entry shape.
- For services/auth/payment/theme work, inspect `src/app/services/`, `src/app/models/`,
  `src/app/guards/`, and `src/environments/`.
- For SSR-sensitive work, inspect `src/server.ts`, `src/main.server.ts`, and existing guards around
  browser-only APIs.
- For Angular 22 migration work, read `docs/angular-v22-migration/IMPLEMENTATION_PLAN.md` and
  `docs/angular-v22-migration/TODO.md` if they exist.

If the request spans multiple independent component categories or unrelated features, help the user
split it into separate specs.

## Step 3: Ask Clarifying Questions

Ask concise questions in batches of at most two. Use a structured user-input tool when available;
otherwise ask plainly in chat.

Focus on:

- User goal and success criteria.
- Scope: showcase category, example variant, page, service, docs, tooling, migration, or SSR.
- Required component count and names for new categories.
- Accessibility expectations, keyboard behavior, focus states, empty/loading/error states.
- Responsive behavior and design constraints.
- Whether visual verification with Playwright/screenshots is expected.
- Any risky dependencies, external APIs, auth/payment behavior, or environment variables.

Answered questions belong in Design Decisions, not Open Questions.

## Step 4: Propose Approaches

When meaningful choices exist, present 2-3 options with trade-offs and a recommendation. Examples:

- New component category via `new-component-list` vs. extending an existing category.
- SpartanNG primitive composition vs. Sim-specific component under `src/libs/sim/`.
- Local component state vs. shared service with signals.
- Static registry data vs. generated registry refresh via `pnpm run codes`.
- Unit test only vs. adding Playwright visual/flow coverage.

Skip this step only when there is genuinely one reasonable approach, and record that as a design
decision.

## Step 5: Present the Design

Before writing the file, summarize what will go into each relevant spec section:

- User flow and entry points.
- Components/pages/services/constants/routes affected.
- Data/API/environment implications, if any.
- Accessibility, responsive behavior, SSR safety, and error states.
- Verification strategy.

Get agreement before writing.

## Step 6: Write the Spec

- Read `references/spec-template.md` and follow it exactly.
- Write to `docs/specs/<YYYY-MM-DD>-<slug>-design.md`.
- Create `docs/specs/` if it does not exist.
- Use a ticket/issue key in the slug when present; otherwise use a short feature slug.
- Status starts as `Draft`.

## Step 7: Self-Review

Fix issues inline before presenting:

1. No `<...>`, TBD, TODO, stale old-project terms, or placeholder text.
2. Sections agree with each other and with the latest user answers.
3. Scope is one implementation plan's worth of work.
4. Affected SimUI areas are explicit.
5. Unknowns are in Open Questions and marked blocking or non-blocking.

## Step 8: User Review Gate

Ask the user to review the written spec before planning. If they request changes, apply them and
repeat the self-review. When they approve, set:

- `**Status**: Approved`
- Approval checkbox checked with the current date.

## Step 9: Hand Off

Standalone mode: tell the user to run `/create-implementation-plan` in a new session and point it
at the approved spec.

Embedded mode: return control to `/create-implementation-plan`; it may continue only after the spec
is approved.

## Key Principles

- Spec first, every time.
- Never guess; ask or mark an Open Question.
- Keep the spec concise but complete.
- Use SimUI paths and vocabulary only.
- Preserve accessibility, SSR safety, and existing Angular/Spartan/Tailwind conventions.
- Use `new-component-list` for complete component categories.
- Use `angular-developer`, `spartan`, `tailwindcss-styling`, and `playwright-cli` only when their
  task area is relevant.
