import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

type SnapshotOptions = NonNullable<Parameters<ReturnType<typeof expect<Locator>>['toHaveScreenshot']>[0]>;

/**
 * Takes a visual snapshot of each component variant card by its host element ID.
 * Uses soft assertions so a single failing snapshot does not block the rest.
 * Variants that are in the registry but not rendered on the page are silently skipped.
 *
 * @param page    - Playwright Page
 * @param type    - Component type slug used as the snapshot subdirectory (e.g. "accordion")
 * @param ids     - Array of component variant IDs (e.g. ["accordion-01", "accordion-02"])
 * @param options - Optional snapshot comparison options (e.g. maxDiffPixelRatio)
 */
export async function snapshotVariants(
	page: Page,
	type: string,
	ids: string[],
	options?: SnapshotOptions,
): Promise<void> {
	for (const id of ids) {
		// Use component-card#<id> to avoid strict-mode violations when inner elements
		// (e.g. hlm-select, hlm-switch, input) share the same id as the card host.
		const card = page.locator(`component-card#${id}`);
		// Skip variants that exist in the registry but are not rendered on the page
		// (e.g. commented out in the component constants file).
		const isPresent = await card
			.waitFor({ state: 'visible', timeout: 5000 })
			.then(() => true)
			.catch(() => false);
		if (!isPresent) continue;
		await card.scrollIntoViewIfNeeded();
		await expect.soft(card).toHaveScreenshot(`${type}/${id}.png`, options ?? {});
	}
}
