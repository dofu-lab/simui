# Implementation Plan: Full-Screen Component View

**Spec**: [2026-07-05-full-screen-component-view-design.md](../specs/2026-07-05-full-screen-component-view-design.md)
**Ticket/Issue**: N/A
**Branch**: `feat/full-screen-component-view`
**Target**: page
**Scope**: Add a shared full-screen showcase viewer for one component at a time, with resizable desktop preview/code panels, mobile tabs, and in-overlay previous/next navigation.

---

## Summary

Add a new full-view action beside each component card's copy-link and view-code actions. Opening it should show a full-screen Spartan overlay hosted by the current showcase grid, render only the selected component preview, reuse the existing installation/source-code display, and let users move to previous or next components without closing the overlay.

## Open Questions

| #   | Question                                                                                        | Source | Answer                                   | Status   |
| --- | ----------------------------------------------------------------------------------------------- | ------ | ---------------------------------------- | -------- |
| 1   | Should opening the new full-view mode emit a dedicated analytics event separate from code view? | Spec   | Defer unless product needs separate data | Deferred |

## File Structure

```text
src/app/core/
├── component-card.component.ts
├── component-card.component.spec.ts
├── component-full-view.component.ts
├── component-full-view.component.spec.ts
├── index.ts
├── page-grid.component.ts
└── types.ts

src/app/services/analytics.service.ts
```

No route, home catalog, component registry, generated registry JSON, sitemap, or thumbnail changes are expected.

## Progress Tracker

### Phase 1: Research & Implementation Map

| Status | Task                                                                 | File                                                                                                  |
| ------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [x]    | Reconfirm current card action block, code sheet, and code load paths | `src/app/core/component-card.component.ts`, `src/app/core/services/code-loader.service.ts`            |
| [x]    | Reconfirm grid ownership of ordered category items                   | `src/app/core/page-grid.component.ts`, `src/app/core/types.ts`                                        |
| [x]    | Reconfirm Spartan sheet, resizable, and tabs APIs                    | `src/libs/ui/sheet/src`, `src/libs/ui/resizable/src`, `src/libs/ui/tabs/src`                          |
| [x]    | Decide whether to skip dedicated full-view analytics                 | `src/app/services/analytics.service.ts`, `docs/specs/2026-07-05-full-screen-component-view-design.md` |

### Phase 2: Shared State & Card Entry Point

| Status | Task                                                                                                       | File                                       |
| ------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [x]    | Extend component card with a new output using Angular `output()` for full-view requests                    | `src/app/core/component-card.component.ts` |
| [x]    | Add a full-view icon button beside copy-link and view-code with tooltip, `aria-label`, and keyboard access | `src/app/core/component-card.component.ts` |
| [x]    | Register the new Lucide icon through `provideIcons`                                                        | `src/app/core/component-card.component.ts` |
| [x]    | Handle the new card output in the page grid and store the active component id/index in signals             | `src/app/core/page-grid.component.ts`      |
| [x]    | Add computed state for selected item, selected index, first/last boundaries, and open/closed state         | `src/app/core/page-grid.component.ts`      |

### Phase 3: Full-View Overlay Component

| Status | Task                                                                                            | File                                                                     |
| ------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [x]    | Create a standalone `ComponentFullViewComponent` with `ChangeDetectionStrategy.OnPush`          | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Define required signal inputs for components, selected index/id, and CLI scope if needed        | `src/app/core/component-full-view.component.ts`, `src/app/core/types.ts` |
| [x]    | Define `previousRequested`, `nextRequested`, and close/open coordination using function outputs | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Render a Spartan sheet/dialog overlay with an accessible title and full-screen sizing overrides | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Use a sticky toolbar with component id, previous/next icon buttons, and close control           | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Render the selected preview through `NgComponentOutlet` in the left/preview surface             | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Reuse `CodeLoaderService` and `sim-code-preview` for installation and source code sections      | `src/app/core/component-full-view.component.ts`                          |
| [x]    | Export the new component from the core barrel if it is consumed through `../core`               | `src/app/core/index.ts`                                                  |

### Phase 4: Desktop, Mobile, A11y & SSR Behavior

| Status | Task                                                                                                                       | File                                                                                   |
| ------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [x]    | Compose desktop panels with `HlmResizableImports`, left preview default size, right code panel, and `hlm-resizable-handle` | `src/app/core/component-full-view.component.ts`                                        |
| [x]    | Compose mobile Preview/Code tabs with `HlmTabsImports` and no horizontal overflow                                          | `src/app/core/component-full-view.component.ts`                                        |
| [x]    | Use semantic Tailwind tokens such as `bg-background`, `text-foreground`, `bg-card`, and `border-border`                    | `src/app/core/component-full-view.component.ts`                                        |
| [x]    | Ensure preview and code areas have independent scroll containers and stable min-height/min-width constraints               | `src/app/core/component-full-view.component.ts`                                        |
| [x]    | Disable Previous at the first component and Next at the last component                                                     | `src/app/core/component-full-view.component.ts`, `src/app/core/page-grid.component.ts` |
| [x]    | Keep Escape close and focus management delegated to the Spartan overlay primitive                                          | `src/app/core/component-full-view.component.ts`                                        |
| [x]    | Avoid unguarded browser-only APIs; keep existing `DOCUMENT`/`IntersectionObserver` guards untouched                        | `src/app/core/page-grid.component.ts`, `src/app/core/component-card.component.ts`      |

### Phase 5: Tests

| Status | Task                                                                                                                            | File                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [x]    | Update existing card tests for the new full-view output/action without breaking code-sheet analytics                            | `src/app/core/component-card.component.spec.ts`      |
| [x]    | Add unit tests for full-view rendering, previous/next disabled states, navigation emissions, and code loading                   | `src/app/core/component-full-view.component.spec.ts` |
| [x]    | Add a page-grid unit test if state ownership and selected-index navigation is not covered by the full-view spec                 | `src/app/core/page-grid.component.spec.ts`           |
| [x]    | Consider a focused Playwright smoke test for opening full view, navigating next, switching mobile tabs, and closing with Escape | `e2e/`                                               |

### Phase 6: Formatting & Verification

| Status | Task                                                            | Command                                                                                                                                                                                                                                                                                                                    |
| ------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [x]    | Format touched files                                            | `pnpm exec prettier src/app/core/component-card.component.ts src/app/core/page-grid.component.ts src/app/core/component-full-view.component.ts src/app/core/component-card.component.spec.ts src/app/core/component-full-view.component.spec.ts docs/implementation-plan/2026-07-05-full-screen-component-view.md --write` |
| [x]    | Run focused unit tests for changed core components              | `pnpm test -- --include src/app/core` or repo-supported focused Karma command                                                                                                                                                                                                                                              |
| [x]    | Run application build after Angular source changes              | `pnpm build`                                                                                                                                                                                                                                                                                                               |
| [x]    | Run lint if the implementation touches shared app code broadly  | `pnpm lint`                                                                                                                                                                                                                                                                                                                |
| [x]    | If an e2e smoke test is added, run the relevant Playwright spec | `pnpm e2e -- e2e/components/full-screen-component-view.spec.ts`                                                                                                                                                                                                                                                            |

## Reference Files

| File                                                                                        | Purpose                                                          |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [component-card.component.ts](../../src/app/core/component-card.component.ts)               | Existing component preview, copy-link, code-sheet action block   |
| [page-grid.component.ts](../../src/app/core/page-grid.component.ts)                         | Ordered component list owner and registry preload behavior       |
| [types.ts](../../src/app/core/types.ts)                                                     | `ComponentCardItem` shape and card layout/alignment types        |
| [code-preview.component.ts](../../src/app/core/code-preview.component.ts)                   | Existing install/source code rendering and copy analytics        |
| [code-loader.service.ts](../../src/app/core/services/code-loader.service.ts)                | Registry source-code loading and preload cache                   |
| [theme-editor.ts](../../src/app/pages/theme-editor.ts)                                      | Existing `HlmResizableImports` composition example               |
| [hlm-sheet-content.ts](../../src/libs/ui/sheet/src/lib/hlm-sheet-content.ts)                | Sheet sizing classes, close button behavior, and override points |
| [tabs-01.component.ts](../../src/app/components/tabs/tabs-01.component.ts)                  | Simple `HlmTabsImports` usage pattern                            |
| [analytics.service.ts](../../src/app/services/analytics.service.ts)                         | Existing component code/copy analytics events                    |
| [component-card.component.spec.ts](../../src/app/core/component-card.component.spec.ts)     | Existing card analytics and interaction tests                    |
| [full-screen-component-view spec](../specs/2026-07-05-full-screen-component-view-design.md) | Approved requirements and acceptance criteria                    |

## Implementation Details

### Component Ownership

- Keep `ComponentCardComponent` responsible for rendering the normal card preview and existing right-side code sheet.
- Add a function output such as `fullViewRequested = output<string>()` and emit the current `componentName()` when the new icon button is activated.
- Keep `PageGridComponent` responsible for the ordered `components()` list and active full-view selection because previous/next needs list order.
- Prefer signals/computed state in `PageGridComponent`, for example:
  - selected id/index writable signal
  - selected item computed from `components()[selectedIndex()]`
  - `canGoPrevious` and `canGoNext` computed from selected index
- Guard against stale selection if `components()` changes by closing full view or clearing the selected index when the selected component no longer exists.

### Overlay Composition

- Implement a new `sim-component-full-view` component if the template would make `PageGridComponent` too large.
- Use `HlmSheetImports` or `HlmDialogImports` from specific `@spartan-ng/helm/...` entry points. A sheet is preferred because existing showcase code already uses sheets and the copied sheet content can be widened with classes.
- If using sheet, apply full-screen classes on `hlm-sheet-content`, such as `data-[side=right]:w-dvw data-[side=right]:max-w-none inset-y-0`, and set `showCloseButton="false"` if a custom toolbar close button is used.
- Include `hlm-sheet-header`, an `hlmSheetTitle`, and optional `hlmSheetDescription` or `sr-only` text so the overlay remains accessible.
- Keep previous, next, and close controls as `hlmBtn` icon buttons with visible focus rings, `aria-label`s, disabled states, and Lucide icons registered through `provideIcons`.

### Code & Install Panel

- Reuse the current install command pattern: `npx ${cliScope} add ${componentName}` with default `@dofu-lab/simui-cli`.
- Reuse `CodeLoaderService.loadComponentCode(componentName)` and maintain a per-component display-code/loading state, either by relying on the service cache or by storing loaded code in a local map signal.
- Reuse `sim-code-preview` for both install and source code:
  - install command: `language="sh"`, `analyticsCopyKind="install_cli"`
  - component source: `analyticsCopyKind="component_code"`, `[fileName]="componentName"`
- On navigation, load code for the newly selected component if it is not already available and clear loading state on error.

### Layout & Styling

- Mobile-first layout should default to tabs and promote to resizable split on `md` or `lg` width.
- Desktop preview panel should use stable container classes such as `min-h-0`, `overflow-auto`, `bg-background`, and centering utilities that match card preview alignment without inheriting the card's grid span.
- Desktop code panel should use `min-h-0`, `overflow-hidden`, and a nested `spartan-scroll` container so long code does not push the toolbar off screen.
- Use semantic tokens only for overlay chrome: `bg-background`, `bg-popover`, `text-foreground`, `text-muted-foreground`, `border-border`, `ring-ring`, `bg-card`.
- Avoid manual overlay z-index. Let CDK/Spartan handle stacking.
- Keep motion to the built-in Spartan sheet transitions and avoid adding extra animations unless there is a concrete UX reason.

### Testing Guidance

- Unit tests should use the repo's existing TestBed style around core components, while being mindful that newer Angular guidance favors act/wait/assert with `fixture.whenStable()`.
- Mock `CodeLoaderService` with `of('component code')` for happy path and `throwError` for error-path coverage.
- For full-view tests, create two or three small inline test demo components and a fake `ComponentCardItem[]` list.
- Verify:
  - the full-view button emits the requested component id
  - the code-sheet button still calls `trackComponentCodeSheetOpened`
  - first/last navigation buttons disable correctly
  - next/previous emit or update selection without closing
  - code loading is triggered for selected component changes
  - mobile tabs and desktop resizable markup are present through CSS-responsive structure where practical
- Playwright smoke coverage is optional but useful if implementation risk is high. Prefer a focused test on a stable category page such as `/button`.

### Verification Commands

Run these after implementation:

```bash
pnpm exec prettier src/app/core/component-card.component.ts src/app/core/page-grid.component.ts src/app/core/component-full-view.component.ts src/app/core/component-card.component.spec.ts src/app/core/component-full-view.component.spec.ts docs/implementation-plan/2026-07-05-full-screen-component-view.md --write
pnpm build
pnpm lint
```

If unit or e2e tests are added or touched, also run the focused test command supported by the repo for those files.
