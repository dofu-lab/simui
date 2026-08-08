---
description: Review completed SimUI changes, write the user-facing changelog, and publish generated registry metadata.
argument-hint: <optional scope, SpartanUI version, or changelog context>
---

# Review Changelog

Review completed work in this SimUI repository before writing its changelog entry. This is the
explicit, on-demand workflow allowed to update `src/tools/registry-changelog.json` and run the
registry generator.

Input: `$ARGUMENTS`

## Step 1: Read Context

Read:

- `AGENTS.md`
- `package.json`
- `src/tools/registry-changelog.json`
- Any plan or spec named in the arguments
- Relevant implementation files and nearby patterns

Use the repository's configured Node version and `pnpm`. Read any skills required by the changed
surface before reviewing it.

## Step 2: Establish the Review Scope

Inspect all staged, unstaged, and untracked changes with `git status`, `git diff`, and
`git diff --cached`. Treat the whole publishable working tree as the default scope, even when the
arguments highlight one feature, because `pnpm codes` snapshots the current repository state.

Separate changes into:

- User-facing source changes that belong in the changelog.
- Tests, plans, formatting, and internal-only work that provide evidence but do not need entries.
- Generated files under `public/registry/`, which must not be used as the source of truth.
- Unrelated or unfinished changes that should not be published accidentally.

If unrelated or unfinished publishable changes are present and cannot be safely included in the
review, stop before editing the changelog or running the registry generator. Report the exact files
that need the user's direction. Never discard, stash, or rewrite unrelated work.

## Step 3: Review Before Writing

Review the scoped implementation for correctness, regressions, accessibility, SSR safety,
registration completeness, generated-output compatibility, and conformity with nearby patterns.
Use relevant tests or verification commands when needed to support the review, but do not change
product source code in this command.

Report findings first, ordered by severity, with file and line references. If a correctness,
security, data-loss, build, or user-visible regression finding remains, stop and do not create a
changelog entry. Minor non-blocking observations may be reported while continuing.

If there are no findings, state that clearly and continue. If the reviewed changes contain no
user-facing feature, improvement, fix, breaking change, compatibility change, or workflow change,
stop without adding an entry or regenerating the registry.

## Step 4: Draft the Changelog

Derive the changelog from the reviewed source changes, not from commit messages or generated files.
Use `$ARGUMENTS` as optional context, but verify it against the implementation.

Determine the compatible SpartanUI version from `package.json` unless the user explicitly supplies
a different supported version. Create the smallest number of entries that accurately represent the
logical user-facing changes. Each entry must have:

- A unique date-prefixed `id` using the current calendar date.
- The current calendar `date`.
- The compatible `spartanVersion`.
- A `type` of `feature`, `improvement`, `fix`, or `breaking`.
- A concise user-facing `title`.
- A description explaining what changed and why it matters to SimUI users.

Avoid implementation details, test notes, formatting work, and duplicate entries. Keep entries
newest first; multiple entries may share a date and SpartanUI version.

## Step 5: Write and Publish

1. Update only `src/tools/registry-changelog.json` directly.
2. Format the changelog with the configured Prettier setup.
3. Run `pnpm codes`; let the script exclusively create or update files under `public/registry/`.
4. Run `pnpm codes:test` to validate the generator when available.
5. Inspect the resulting registry diff and confirm the new changelog entry appears in
   `public/registry/manifest.json` with the expected SpartanUI release metadata.

Never hand-edit generated registry manifests, releases, or blobs. If generation or validation
fails, report the failure and leave the source changelog entry visible for follow-up; do not fake or
partially repair generated output.

## Step 6: Final Report

Report:

- Review findings, or explicitly say no findings were found.
- The changelog entry or entries created.
- The compatible SpartanUI version used.
- Results of `pnpm codes` and `pnpm codes:test`.
- Generated registry files changed at a summary level.
- Any remaining risks or follow-up work.
