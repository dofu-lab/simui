# SimUI thumbnail language

## Source and canvas

- Treat all current `src/app/features/component-showcase/categories/**/*.thumbnail.ts` files as the live source of truth.
- Design for the home page preview frame in `src/app/features/home/home.page.ts`: approximately 300 px wide by 170 px high, with `bg-muted/50`, `overflow-hidden`, a border, `rounded-xl`, and horizontal padding.
- Use the common host by default:

```ts
host: { class: 'flex w-full h-full items-center justify-center' },
```

- Add `relative` and `overflow-hidden` to the host for overlays or stacked objects, as in dialog, notification, and popover compositions.
- Keep the main composition comfortably inside the frame. Existing widths cluster around `max-w-24`, `max-w-28`, `max-w-36`, `max-w-40`, `max-w-50`, and `max-w-72`; choose the smallest width that remains recognizable.

## Visual priorities

1. Communicate the component's signature silhouette.
2. Show one meaningful state: open accordion, selected option, active date, uploaded file, popover panel, or similar.
3. Abstract content into bars and blocks unless a tiny label is essential to recognition.
4. Use generous negative space and a compact composition rather than a miniature production screen.
5. Limit hierarchy to two or three muted tones plus one primary accent.

## Theme and color

- Use semantic tokens: `bg-card`, `bg-background`, `bg-muted`, `text-card-foreground`, `text-foreground`, `text-muted-foreground`, `border`, `border-input`, `border-border`, `bg-accent`, `bg-primary`, and `text-primary-foreground`.
- Represent text with rounded bars, commonly `h-1`, `h-1.5`, or `h-4`, using:
  - strong placeholder: `bg-muted-foreground/40`
  - ordinary placeholder: `bg-muted-foreground/20`
  - subtle block or empty field: `bg-muted-foreground/8` to `/15`
- Use `bg-primary` or a softened `bg-primary/50` for the single selected, active, or actionable element.
- Use `text-muted-foreground/88 size-4` for most inline Lucide-style SVG icons.
- Prefer token opacity over raw palette colors. Raw colors are acceptable only when intrinsic to the miniature, such as the three desktop window dots in the banner thumbnail.
- Rely on semantic tokens for dark mode. Add explicit `dark:` handling only for mixed gradients or surfaces whose formula genuinely differs.

## Surface recipe

Use this treatment for cards, inputs, menus, dialogs, alerts, and popovers when a raised surface is part of the component identity:

```html
<div
	class="text-card-foreground relative flex flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]"></div>
```

Adapt `rounded-xl` and `--radius-xl` together. Existing thumbnails commonly use `rounded-lg`, `rounded-xl`, or `rounded-2xl`, sometimes overriding the corresponding radius variable for a compact miniature. For flatter input-like surfaces, `bg-card/99 dark:bg-card` with the same border, inset highlight, and shadow is established.

Do not force the raised-surface recipe onto controls whose identity is clearer without a container. Checkbox, radio, slider, switch, and tabs use direct control silhouettes.

## Pattern families

- **Single surface:** alert, input, button, badge, avatar. Center one compact object with minimal content.
- **Structured card:** card, dialog, calendar, event calendar. Use a bounded surface and internal rows or grids.
- **Open state:** accordion, dropdown, select, popover. Show both trigger/context and revealed content.
- **Direct control:** checkbox, radio, slider, switch, tabs. Render the control itself with muted inactive state and one primary active state.
- **Layered state:** notification. Use restrained offsets and scale to imply a stack while keeping the front item readable.
- **Workflow/object:** file upload, image cropper, banner. Combine a recognizable object area with one supporting control or status row.
- **Navigation sequence:** breadcrumb, pagination. Use directional icons and repeated placeholder segments.

Choose the closest family first, then inspect at least two current examples in that family before coding.

## Structure and naming

Use this skeleton:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-{category}-thumbnail',
  host: { class: 'flex w-full h-full items-center justify-center' },
  template: `...`,
})
export class {PascalCategory}ThumbnailComponent {}
```

- Keep templates inline and components stateless.
- Use flex/grid gaps instead of manual spacing; use logical `ms/me/ps/pe` utilities where direction matters.
- Use inline SVG with `currentColor`; keep it decorative with `aria-hidden="true"` unless it conveys accessible content.
- Let Prettier and the Tailwind plugin normalize indentation and class order.

## Avoid copying accidents

- Do not treat an empty template as a visual pattern; it indicates unfinished work.
- Do not propagate unexplained stray classes or one-off raw colors.
- Do not duplicate the wrapper-level `data-slot="card-panel"`, hover translation, or local CSS-variable setup from avatar/badge unless the target needs that exact card-panel interaction.
- Do not assume `--btn-from` and `--btn-to` are locally defined. Verify their scope before using `from-(--btn-from) to-(--btn-to)`; use semantic `bg-primary` when the gradient is not required.
- Do not add text merely to make the thumbnail decorative. Tiny real labels should be rare and semantically useful.

## Review checklist

- Recognizable without the category title
- Balanced inside 300×170 with no accidental clipping
- Semantic in light and dark themes
- One obvious focal state
- No unnecessary runtime behavior or package imports
- Decorative SVGs hidden from assistive technology
- File, selector, class, barrel, and catalog registration consistent
