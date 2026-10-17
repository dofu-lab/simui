# Component snapshots

Component snapshots use `/components/{category}?full=preview#{component-id}`.
This full view renders the example without the category grid, code panel, version
labels, or navigation controls. Capture `data-testid="component-preview-animation-host"`.

Use `snapshotVariants()` for default states. For interaction states, call
`await componentPreview(page, id)` before changing the component, then capture the
returned locator. The helper waits for fonts and images and preserves state when
called again for the current example. `componentCard()` remains available for
tests of the category grid itself. Portaled overlays and fullscreen sidebar routes
have their own screenshot targets.

Variant IDs come from the latest release in `public/registry/manifest.json`.
Missing or empty registry metadata fails instead of silently disabling snapshots.

Run `pnpm e2e:update` to refresh baselines and `pnpm e2e` to compare them.
