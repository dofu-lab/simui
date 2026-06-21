---
name: tailwindcss-styling
description: Implement, review, and refactor SimUI styling with Tailwind CSS v4. Use for Angular template classes, responsive layouts, dark mode, semantic color tokens, state and data variants, transitions, class composition with hlm(), or changes to src/styles.css and Tailwind/PostCSS configuration.
---

# Style SimUI with Tailwind CSS

Apply Tailwind CSS v4 using SimUI's CSS-first configuration, semantic theme system, Angular templates, and SpartanNG composition patterns.

## Inspect first

Before editing:

1. Read the target component and nearby components with a similar purpose.
2. Read `src/styles.css` when changing colors, shadows, radii, animation tokens, dark mode, or global behavior.
3. Read `.postcssrc.json` and `package.json` before changing Tailwind tooling.
4. For Spartan components or Helm wrappers, use the `spartan` skill and read `.agents/skills/spartan/rules/styling.md`.
5. Read [references/simui-tailwind.md](references/simui-tailwind.md) when working with project tokens, Tailwind v4 syntax, reusable class composition, or motion.

Treat existing project configuration as authoritative. Do not introduce Tailwind v3 conventions.

## Implement

### Prefer utilities

- Style Angular inline templates with Tailwind utilities.
- Add component CSS only when utilities cannot express the behavior cleanly, such as complex keyframes or reusable CSS primitives.
- Keep layout mobile-first and add responsive variants only where the design changes.
- Prefer `flex` or `grid` with `gap-*`; avoid `space-x-*` and `space-y-*`.
- Use `size-*` when width and height are equal.
- Use logical properties such as `ms-*`, `me-*`, `ps-*`, and `pe-*` when directionality matters.
- Use `truncate` or `line-clamp-*` instead of rebuilding their declarations.

### Use the theme correctly

- Use semantic utilities for application surfaces and component chrome: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `border-input`, and `ring-ring`.
- Pair semantic backgrounds with their foreground tokens, such as `bg-primary text-primary-foreground`.
- Do not add manual dark-mode overrides when a semantic token already changes between `:root` and `:root.dark`.
- Use raw palette colors only for intentional non-theme meaning such as status, data visualization, brand accents, avatars, or self-contained showcase artwork. Provide suitable light and dark contrast where needed.
- Extend shared theme values in `src/styles.css`; do not create `tailwind.config.js`.

### Compose classes safely

- Let Prettier's Tailwind plugin order static class lists.
- Use `hlm()` from `@spartan-ng/helm/utils` for conditional or consumer-overridable classes. Do not concatenate class strings manually.
- Use `classes()` for reusable host styling when callers should be able to override base classes.
- Put consumer classes last when merging with `hlm()` so they win conflicts.
- Prefer existing Spartan `variant` and `size` inputs over overriding a component's internal visual styles.

### Handle states and motion

- Prefer native Tailwind variants: `hover:`, `focus-visible:`, `disabled:`, `aria-*`, `data-*`, `group-*`, and `has-*`.
- Preserve visible focus, disabled behavior, contrast, and pointer/keyboard semantics.
- Animate `transform` and `opacity` for routine interactions.
- Keep microinteractions short and purposeful; add `motion-reduce:` behavior for nonessential motion.
- Do not add manual z-index to CDK-backed Spartan overlays.

## Modify global configuration carefully

Preserve SimUI's current CSS-first setup:

- Layered Tailwind imports and the Spartan preset in `src/styles.css`
- `@custom-variant dark (&:is(.dark *))`
- Light tokens in `:root` and dark tokens in `:root.dark`
- `@theme` or `@theme inline` for values exposed as Tailwind utilities
- `@tailwindcss/postcss` in `.postcssrc.json`

Add a shared token only when multiple consumers need it. Keep one-off arbitrary values local when they communicate a genuinely unique design constraint.

## Verify

1. Format touched files with the configured Prettier setup.
2. Run `pnpm build` after Angular or global style changes.
3. Run focused tests when styling changes affect interaction, layout assertions, or visual snapshots.
4. Check light and dark themes, relevant responsive widths, keyboard focus, and reduced motion when applicable.
5. Report the styling decisions, files changed, and verification results.
