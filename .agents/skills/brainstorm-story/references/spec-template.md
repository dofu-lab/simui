# Spec Template

Copy this structure exactly when writing `docs/specs/<YYYY-MM-DD>-<slug>-design.md`. Every section
MUST be present. Write `None.` or `N/A - <reason>` rather than omitting a section. Replace all
`<placeholders>`. Do NOT add, rename, or reorder sections.

---

```markdown
# Spec: <Title>

**Ticket/Issue**: <link, key, or n/a>
**Date**: <YYYY-MM-DD>
**Status**: Draft
**Target**: <showcase category | component variant | page | service | docs | tooling | migration | other>
**Figma/Design**: <link(s) or None>

---

## 1. Summary

<2-4 sentences describing what is being built or changed and why, from the user's perspective.>

## 2. Reconciled Requirements

<Final agreed requirements after reconciling the request, ticket/issue text, comments, design links,
project context, and brainstorming dialogue. Number each requirement and cite the source.>

| #   | Requirement   | Source                                         |
| --- | ------------- | ---------------------------------------------- |
| R1  | <requirement> | Request / AC <n> / Comment <date> / Brainstorm |

## 3. Out of Scope

<Explicit non-goals. Anything discussed but deferred or rejected goes here with a one-line reason.>

- <non-goal> - <reason>

## 4. User Flow

<Step-by-step behavior and entry/exit points. For showcase work, include how users find, preview,
copy, or interact with the component. Use an ASCII flow diagram if branching is involved.>

## 5. Acceptance Criteria (Refined)

<Testable criteria in checklist form. These supersede the original ticket/request when they
conflict; call out any such conflict explicitly.>

- [ ] AC1: <Given/When/Then or concrete observable behavior>

## 6. Design Decisions

<Every decision made during brainstorming where more than one approach existed. Record the choice
and rejected alternatives.>

| #   | Decision   | Options Considered | Chosen | Rationale |
| --- | ---------- | ------------------ | ------ | --------- |
| D1  | <decision> | A / B / C          | B      | <why>     |

## 7. UI & Components

<List each Angular component, page, registry, thumbnail, or library component touched. For each:
new or modified, design link if available, SpartanNG/SimUI pieces reused, and notable UI behavior
such as empty states, loading states, keyboard interaction, focus, and responsiveness. Write "No UI
changes." if none.>

| Area / Component | New / Modified | Design | Notes |
| ---------------- | -------------- | ------ | ----- |

## 8. Affected Files & Scope

<Which SimUI areas the work touches. Always state this explicitly.>

- **Scope:** <single component variant | full component category | page | service | docs | tooling | migration | other>
- **Expected paths:** <`src/app/components/...`, `src/app/constants/...`, etc.>
- **Registration:** <routes, barrels, home catalog, generated registry, sitemap/llms, or N/A>

## 9. Data, API & Environment

<Data/API/environment needs: existing services to reuse, new environment variables, analytics,
payment/auth/theme behavior, generated metadata, or external assets. Write "No data/API/environment
changes." if none.>

## 10. Edge Cases & Error Handling

<Edge cases with expected behavior: SSR/prerender, browser-only APIs, empty data, slow network,
validation errors, permission denied, missing environment variables, unsupported viewport, etc.>

| Case   | Expected Behavior |
| ------ | ----------------- |
| <case> | <behavior>        |

## 11. Open Questions

<Only questions that remain unanswered after brainstorming. Anything answered during dialogue
belongs in Design Decisions. Blocking questions must be resolved before implementation; non-blocking
ones may be deferred.>

| #   | Question   | Blocking? | Status     |
| --- | ---------- | --------- | ---------- |
| Q1  | <question> | Yes / No  | Unanswered |

## 12. Approval

- [ ] Spec reviewed and approved by developer - <date>
```

---

## Section Rules

- **Status field:** stays `Draft` until the user explicitly approves; then set to `Approved` and
  check the Approval box with today's date.
- **Target and Scope:** use this repo's real areas, not `frontend/`, `service/`, or full-stack
  terms from other projects.
- **Registration:** for new component categories, mention constants barrels, pages barrels, route,
  thumbnail barrel, `home.constant.ts`, and whether `pnpm run codes` is needed.
- **Design Decisions vs Open Questions:** answered questions are Decisions. Open Questions are only
  what is genuinely still unknown.
- **No placeholders in a finished spec:** before presenting for review, every `<...>`, TBD, and TODO
  must be gone.
