import type { Locator, Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

type SnapshotOptions = NonNullable<Parameters<ReturnType<typeof expect<Locator>>['toHaveScreenshot']>[0]>;

export function componentCard(page: Page, id: string): Locator {
	return page.locator(`sim-component-card#${id}`);
}

const renderedVariants = new WeakMap<Page, { pathname: string; ids: string[] }>();

/** Open the isolated full view before interacting with or capturing a component. */
export async function componentPreview(page: Page, id: string): Promise<Locator> {
	const url = new URL(page.url());
	let variants = renderedVariants.get(page);
	if (variants?.pathname !== url.pathname) {
		variants = {
			pathname: url.pathname,
			ids: await page.locator('sim-component-card').evaluateAll((cards) => cards.map((card) => card.id)),
		};
		renderedVariants.set(page, variants);
	}
	const preview = page.getByTestId('component-preview-animation-host').and(page.locator(`[data-component-id="${id}"]`));
	// Preserve the suites' handling of registry variants omitted from the category grid.
	if (!variants.ids.includes(id)) return preview;

	url.searchParams.set('full', 'preview');
	url.hash = id;
	// Reusing the current preview preserves state between setup and upload helpers.
	if (page.url() !== url.href) {
		const currentUrl = new URL(page.url());
		await page.goto(url.href);
		// Fragment-only navigation does not reliably notify Angular's router.
		if (currentUrl.pathname === url.pathname && currentUrl.search === url.search) await page.reload();
		await expect(preview).toBeVisible();
		// Sheet autofocus should not add a focus ring to baseline previews.
		await preview.evaluate(() => {
			if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
		});
	}
	await expect(preview).toHaveAttribute('data-component-id', id);
	await expect(preview).toBeVisible();
	await preview.evaluate(() => document.fonts.ready);
	await expect
		.poll(() => preview.locator('img').evaluateAll((images) => images.every((img) => img.complete)), {
			timeout: 10_000,
			message: `${id} preview images should finish loading`,
		})
		.toBe(true);
	await preview
		.locator('img')
		.evaluateAll((images) => Promise.all(images.map((img) => img.decode().catch(() => undefined))));

	return preview;
}

/**
 * Takes a visual snapshot of each variant's isolated preview animation host.
 * Uses soft assertions so a single failing snapshot does not block the rest.
 * Variants that are in the registry but not rendered on the page are silently skipped.
 *
 * @param page    - Playwright Page
 * @param type    - Component type slug used as the snapshot subdirectory (e.g. "accordion")
 * @param ids     - Array of component variant IDs (e.g. ["accordion-01", "accordion-02"])
 * @param options - Optional snapshot comparison options (e.g. maxDiffPixelRatio)
 * @param prepare - Optional setup for a variant that must reach a settled state
 */
export async function snapshotVariants(
	page: Page,
	type: string,
	ids: string[],
	options?: SnapshotOptions,
	prepare?: (preview: Locator, id: string) => Promise<void>,
): Promise<void> {
	expect(ids.length, `${type} must have registry variants to snapshot`).toBeGreaterThan(0);
	// Each variant now gets its own document load instead of sharing the grid.
	test.setTimeout(Math.max(test.info().timeout, ids.length * 5000));
	for (const id of ids) {
		const card = await componentPreview(page, id);
		// Skip variants that exist in the registry but are not rendered on the page
		// (e.g. commented out in the component constants file).
		const isPresent = await card
			.waitFor({ state: 'visible', timeout: 5000 })
			.then(() => true)
			.catch(() => false);
		if (!isPresent) continue;
		await prepare?.(card, id);
		await card.scrollIntoViewIfNeeded();
		await page.mouse.move(0, 0);
		await expect.soft(card).toHaveScreenshot(`${type}/${id}.png`, options ?? {});
	}
}
