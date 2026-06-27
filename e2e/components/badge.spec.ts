import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

const HOVER_BADGE_IDS = ['badge-20', 'badge-21', 'badge-22', 'badge-23'] as const;

test.describe('Badge', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('badge');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'badge', COMPONENT_IDS.badge);
	});

	test.describe('Hover badges', () => {
		for (const id of HOVER_BADGE_IDS) {
			test(`hover state snapshot for ${id}`, async ({ page }) => {
				const card = componentCard(page, id);
				await card.waitFor({ state: 'visible', timeout: 5000 });

				const badge = card.locator(`sim-${id} > span`).first();
				await badge.scrollIntoViewIfNeeded();
				await badge.hover();
				await expect.soft(card).toHaveScreenshot(`badge-hover/${id}.png`);
			});

			test(`changes visual style on hover for ${id}`, async ({ page }) => {
				const card = componentCard(page, id);
				await card.waitFor({ state: 'visible', timeout: 5000 });

				const badge = card.locator(`sim-${id} > span`).first();
				await badge.scrollIntoViewIfNeeded();

				const backgroundBeforeHover = await badge.evaluate((element) => getComputedStyle(element).backgroundColor);
				await badge.hover();
				const backgroundAfterHover = await badge.evaluate((element) => getComputedStyle(element).backgroundColor);

				expect(backgroundAfterHover).not.toBe(backgroundBeforeHover);
			});
		}
	});
});
