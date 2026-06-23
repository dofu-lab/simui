# SimUI Tailwind CSS v4 reference

## Contents

- [Configuration map](#configuration-map)
- [Semantic theme families](#semantic-theme-families)
- [CSS-first extensions](#css-first-extensions)
- [Angular and Spartan class composition](#angular-and-spartan-class-composition)
- [Responsive and motion checks](#responsive-and-motion-checks)

## Configuration map

- Global stylesheet: `src/styles.css`
- PostCSS: `.postcssrc.json`
- Tailwind package: `tailwindcss`
- PostCSS adapter: `@tailwindcss/postcss`
- Class sorting: `prettier-plugin-tailwindcss`
- Class merging: `hlm()` and `classes()` from `@spartan-ng/helm/utils`
- Spartan theme preset: `@spartan-ng/brain/hlm-tailwind-preset.css`
- Dark mode selector: `.dark` on the root element

Do not create `tailwind.config.js`, use `@tailwind base/components/utilities`, or copy Tailwind v3 setup patterns.

## Semantic theme families

Use these for normal application surfaces:

| Surface       | Content                           |
| ------------- | --------------------------------- |
| `background`  | `foreground`                      |
| `card`        | `card-foreground`                 |
| `popover`     | `popover-foreground`              |
| `primary`     | `primary-foreground`              |
| `secondary`   | `secondary-foreground`            |
| `muted`       | `muted-foreground`                |
| `accent`      | `accent-foreground`               |
| `destructive` | destructive-compatible foreground |

Standalone interaction tokens include `border`, `input`, and `ring`. Sidebar components use the `sidebar*` token family.

```html
<section class="border-border bg-card text-card-foreground rounded-xl border">
	<p class="text-muted-foreground">Supporting text</p>
</section>
```

Use raw palette colors only when the color itself carries deliberate meaning:

```html
<span class="size-2 rounded-full bg-emerald-500" aria-label="Online"></span>
```

Do not use raw colors as substitutes for theme surfaces:

```html
<!-- Avoid for normal application chrome -->
<div class="border-gray-200 bg-white text-black"></div>
```

## CSS-first extensions

Define light and dark values as CSS custom properties when users or themes may change them:

```css
:root {
	--example: oklch(0.7 0.12 250);
}

:root.dark {
	--example: oklch(0.8 0.1 250);
}

@theme inline {
	--color-example: var(--example);
}
```

Define shared animation utilities with `@theme` and ordinary keyframes:

```css
@theme {
	--animate-scan-line: scanning 1.5s linear infinite;
}

@keyframes scanning {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(100%);
	}
}
```

Use a local arbitrary value for a unique constraint:

```html
<div class="max-w-[300px] rounded-[18px]"></div>
```

Promote repeated arbitrary values into a token or shared Helm style.

## Angular and Spartan class composition

For conditional classes:

```ts
import { hlm } from '@spartan-ng/helm/utils';

const className = hlm('border-border bg-card rounded-lg border p-4', active() && 'ring-ring ring-2', userClass());
```

For reusable host styles that consumers may override:

```ts
import { classes } from '@spartan-ng/helm/utils';

constructor() {
	classes(() => 'inline-flex items-center gap-2 rounded-md');
}
```

Prefer data and ARIA state variants over duplicated component state:

```html
<button
	class="data-[state=open]:bg-accent aria-invalid:border-destructive focus-visible:ring-ring rounded-md focus-visible:ring-2">
	Open
</button>
```

## Responsive and motion checks

- Start with the smallest layout and layer `sm:`, `md:`, `lg:`, and larger variants.
- Prefer content-driven width constraints over fixed viewport assumptions.
- Avoid transition-all when a smaller transition property is practical.
- Add `motion-reduce:transition-none`, `motion-reduce:transform-none`, or equivalent behavior for decorative movement.
- Verify hover interactions also have keyboard-accessible focus behavior.
