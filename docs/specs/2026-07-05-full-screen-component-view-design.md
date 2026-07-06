# Spec: Full-Screen Component View

**Ticket/Issue**: N/A
**Date**: 2026-07-05
**Status**: Approved
**Target**: page
**Figma/Design**: None

---

## 1. Summary

Add a full-screen component viewing mode to SimUI showcase pages so users can inspect one component preview and its installation/source code without leaving the current category page. The entry point should live beside the existing copy-link and view-code actions on each component card. The full view should preserve the current project visual language while adding resizable preview/code panels and in-place previous/next navigation.

## 2. Reconciled Requirements

| #   | Requirement                                                                                                                           | Source       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| R1  | Add a full-screen sheet/dialog mode for viewing one showcase component at a time.                                                     | Request      |
| R2  | Place the full-view trigger icon in the same action block as the current view-code sheet icon.                                        | Request      |
| R3  | In full view, show the component preview in the left panel and code plus installation content in the right panel.                     | Request      |
| R4  | Reuse the current code sheet content model for installation command and component source display.                                     | Request      |
| R5  | Use the installed Spartan resizable components to allow desktop users to resize the preview and code panels.                          | Request      |
| R6  | Provide previous and next controls so users can navigate between components without closing full view.                                | Request      |
| R7  | Close full view with the Escape key.                                                                                                  | Request      |
| R8  | Keep the UI consistent with current SimUI, including Angular standalone components, SpartanNG, Tailwind v4 theme utilities, and a11y. | Request/Repo |
| R9  | On mobile, use Preview and Code tabs instead of a horizontal resizable split because narrow viewports cannot comfortably fit panels.  | Brainstorm   |
| R10 | Disable previous/next at the first and last component instead of wrapping around.                                                     | Brainstorm   |

## 3. Out of Scope

- Deep-linking full-view open state into the URL - not required for this workflow and can be added later if analytics or sharing needs it.
- Changing generated registry JSON files or component category data - the feature should reuse existing `ComponentCardItem` entries.
- Replacing the existing right-side code sheet - users should still be able to open the current code-only sheet.
- Adding new component categories or showcase examples - this is a shared viewing enhancement.
- Persisting custom panel sizes - not required for first implementation.

## 4. User Flow

1. User opens any component category page, such as Button.
2. User hovers or focuses a component card and sees the current action block with copy-link, view-code, and a new full-view icon.
3. User activates the full-view icon.
4. A full-screen sheet/dialog opens with a sticky toolbar showing the current component id, previous and next icon buttons, and a close button.
5. Desktop layout:
   - Left resizable panel renders only the selected component preview.
   - Right resizable panel renders Installation and Code sections matching the current code sheet.
   - Preview and code areas scroll independently where needed.
6. Mobile layout:
   - The toolbar remains available.
   - Preview and Code are available through compact tabs.
7. User selects Next or Previous.
8. The selected component changes in place, the preview updates, and the code loader loads or reuses source for the new component.
9. User presses Escape or the close button to close full view and return to the category page.

```text
Component card action block
  -> Full-view trigger
    -> Full-screen overlay
      -> Preview selected component
      -> Show installation/source code
      -> Previous/Next updates selected component
      -> ESC or close exits overlay
```

## 5. Acceptance Criteria (Refined)

- [ ] AC1: Given a component card is hovered or focused, when the action block is visible, then a full-view icon button appears beside the existing copy-link and view-code buttons with an accessible label and tooltip.
- [ ] AC2: Given the user activates the full-view button, then a full-screen overlay opens showing only that component preview on the left and installation/code content on the right.
- [ ] AC3: Given desktop viewport width, then the preview and code panels are separated by `hlm-resizable-handle` and can be resized with Spartan resizable behavior.
- [ ] AC4: Given mobile viewport width, then the overlay uses Preview and Code tabs instead of cramped side-by-side resizable panels.
- [ ] AC5: Given the selected component is not the first item in the current category list, when the user activates Previous, then the overlay updates to the previous component without closing.
- [ ] AC6: Given the selected component is not the last item in the current category list, when the user activates Next, then the overlay updates to the next component without closing.
- [ ] AC7: Given the selected component is first or last, then the corresponding Previous or Next button is disabled and remains visibly focusable semantics-compatible through the button disabled state.
- [ ] AC8: Given the full-view overlay is open, when the user presses Escape, then the overlay closes and focus returns according to the underlying Spartan sheet/dialog behavior.
- [ ] AC9: Given code for a selected component is loading, then the code panel shows the same loading treatment as the current code sheet and does not break the preview.
- [ ] AC10: Given code loading fails, then the overlay leaves the code section usable for retrying through later navigation/opening and does not throw an uncaught UI error.
- [ ] AC11: Given SSR/prerender execution, then the feature does not directly access browser-only APIs unless guarded with `isPlatformBrowser` or existing safe overlay behavior.
- [ ] AC12: Given implementation is complete, then touched files are formatted and `pnpm build` succeeds.

## 6. Design Decisions

| #   | Decision                         | Options Considered                                                                | Chosen                                                | Rationale                                                                                              |
| --- | -------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| D1  | Entry point location             | New page-level control / card action block / replace existing code icon           | Add an icon to the existing card action block         | Keeps the action contextual and matches the current copy-link and view-code interaction model.         |
| D2  | Full-view container              | Native route / custom fixed div / Spartan sheet or dialog                         | Spartan overlay, likely sheet/dialog composition      | Reuses existing accessible overlay behavior, Escape handling, focus management, and project styling.   |
| D3  | Component ownership              | Put all state in each card / lift selected component state to page grid / service | Lift active full-view state to `sim-page-grid`        | Previous/next needs the ordered category list, which already belongs to `PageGridComponent`.           |
| D4  | Code rendering                   | Duplicate code markup / reuse `sim-code-preview` and `CodeLoaderService`          | Reuse existing code preview and loader                | Preserves copy behavior, syntax highlighting, install command format, and analytics hooks.             |
| D5  | Panel resizing                   | Custom CSS splitter / Spartan resizable / fixed split                             | Spartan `HlmResizableImports` on desktop              | Resizable is already installed and used in `src/app/pages/theme-editor.ts`.                            |
| D6  | Previous/next placement          | Floating side controls / footer controls / sticky top toolbar                     | Sticky top toolbar                                    | Keeps navigation visible while panels scroll independently and avoids covering component previews.     |
| D7  | Boundary navigation              | Wrap around / disable unavailable direction / hide unavailable direction          | Disable unavailable direction                         | Predictable, accessible, and avoids surprising jumps from first to last.                               |
| D8  | Mobile layout                    | Horizontal resizable split / vertical stacked panels / tabs                       | Preview and Code tabs                                 | Gives users one focused surface at a time on narrow screens while preserving access to all content.    |
| D9  | Analytics                        | New events / reuse code sheet event / no analytics changes                        | Reuse existing copy events; optionally add open event | Copy/install analytics already exist. Opening full view may be tracked if the implementation adds it.  |
| D10 | Existing code sheet relationship | Replace current code sheet / keep both / redirect code icon to full view          | Keep both                                             | The request asks for the new icon beside the current code sheet block, not to remove the current flow. |

## 7. UI & Components

| Area / Component                                                | New / Modified    | Design | Notes                                                                                                                                                      |
| --------------------------------------------------------------- | ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/app/core/page-grid.component.ts`                           | Modified          | None   | Owns the ordered component list and active full-view selection; passes list context to cards or hosts the full-view overlay.                               |
| `src/app/core/component-card.component.ts`                      | Modified          | None   | Adds the full-view icon to the existing action block and emits/handles opening state while preserving share and code-sheet actions.                        |
| New shared full-view component under `src/app/core/`            | New               | None   | Recommended if the overlay markup would make `ComponentCardComponent` too large; renders toolbar, preview panel, code/install panel, tabs, and navigation. |
| `src/app/core/code-preview.component.ts`                        | Reused            | None   | Continue using current syntax highlighting, copy button, file name, line numbers, and loading behavior.                                                    |
| `src/app/core/services/code-loader.service.ts`                  | Reused            | None   | Load source from `/registry/{componentName}.json`; reuse cache/preload behavior where available.                                                           |
| `src/libs/ui/resizable/`                                        | Reused            | None   | Import `HlmResizableImports` from `@spartan-ng/helm/resizable` for desktop split panels.                                                                   |
| `src/app/services/analytics.service.ts`                         | Optional Modified | None   | Add a dedicated full-view opened event only if implementation needs separate tracking; otherwise reuse existing copy/install tracking.                     |
| `src/app/core/component-card.component.spec.ts` and/or new spec | Modified/New      | None   | Cover open behavior, navigation boundaries, and code loading behavior at component level where practical.                                                  |

## 8. Affected Files & Scope

- **Scope:** shared showcase page/card UI enhancement
- **Expected paths:** `src/app/core/page-grid.component.ts`, `src/app/core/component-card.component.ts`, optional `src/app/core/component-full-view.component.ts`, `src/app/core/types.ts`, `src/app/core/index.ts`, `src/app/core/component-card.component.spec.ts`, optional new full-view spec file
- **Registration:** N/A - no route, home catalog, registry, sitemap, or component category registration changes expected

## 9. Data, API & Environment

No data/API/environment changes. The feature should reuse existing component metadata in `ComponentCardItem[]`, existing install command generation, existing `/registry/{componentName}.json` code loading, and existing syntax highlighting/copy analytics behavior.

## 10. Edge Cases & Error Handling

| Case                          | Expected Behavior                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| First component selected      | Previous button is disabled.                                                                                        |
| Last component selected       | Next button is disabled.                                                                                            |
| Empty component list          | Full-view controls do not open; no overlay is shown.                                                                |
| Missing component type        | Preview panel shows no rendered component but overlay remains stable if an item has `component: null`.              |
| Code still loading            | Code section shows the existing loading treatment.                                                                  |
| Code request fails            | Loading state clears; no uncaught error is thrown; user can navigate away or reopen later.                          |
| Very large component preview  | Preview panel scrolls or centers content without overlapping toolbar/navigation.                                    |
| Very long source code         | Code panel scrolls independently through `sim-code-preview` and existing scroll utilities.                          |
| Mobile viewport               | Tabs replace desktop resizable split; no horizontal overflow from panel layout.                                     |
| Escape key                    | Overlay closes through Spartan sheet/dialog behavior.                                                               |
| SSR/prerender                 | Browser-only APIs remain guarded; dynamic component rendering and overlay setup do not require direct `window` use. |
| Focus and keyboard navigation | Trigger, close, previous, next, tabs, copy buttons, and resizable handle remain keyboard accessible.                |

## 11. Open Questions

| #   | Question                                                                                        | Blocking? | Status     |
| --- | ----------------------------------------------------------------------------------------------- | --------- | ---------- |
| Q1  | Should opening the new full-view mode emit a dedicated analytics event separate from code view? | No        | Unanswered |

## 12. Approval

- [x] Spec reviewed and approved by developer - 2026-07-05
