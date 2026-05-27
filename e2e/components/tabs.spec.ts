import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

async function getVisibleCard(page: import('@playwright/test').Page, id: string) {
	const card = page.locator(`component-card#${id}`);
	const isPresent = await card
		.waitFor({ state: 'visible', timeout: 5000 })
		.then(() => true)
		.catch(() => false);
	if (!isPresent) return null;
	await card.scrollIntoViewIfNeeded();
	return card;
}

async function expectTabActive(card: import('@playwright/test').Locator, tabIndex: number): Promise<boolean> {
	const tabs = card.locator('[role="tab"]');
	const totalTabs = await tabs.count();
	if (totalTabs <= tabIndex) return false;

	const targetTab = tabs.nth(tabIndex);
	await targetTab.click({ force: true });
	await expect(targetTab).toHaveAttribute('data-state', 'active');

	const activePanels = card.locator('[role="tabpanel"]:not([hidden]):not([data-state="inactive"])');
	await expect(activePanels).toHaveCount(1);
	return true;
}

test.describe('Tabs', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('tabs');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'tabs', COMPONENT_IDS.tabs);
	});

	test('visual regression — open second and third tab states', async ({ page }) => {
		for (const id of COMPONENT_IDS.tabs) {
			const card = await getVisibleCard(page, id);
			if (!card) continue;

			const openedSecond = await expectTabActive(card, 1);
			if (openedSecond) {
				await expect.soft(card).toHaveScreenshot(`tabs-open-second/${id}.png`);
			}

			const openedThird = await expectTabActive(card, 2);
			if (openedThird) {
				await expect.soft(card).toHaveScreenshot(`tabs-open-third/${id}.png`);
			}
		}
	});

	test.describe('Behavior', () => {
		test('opens second and third tab when available for every rendered variant', async ({ page }) => {
			for (const id of COMPONENT_IDS.tabs) {
				const card = await getVisibleCard(page, id);
				if (!card) continue;

				const openedSecond = await expectTabActive(card, 1);
				expect(openedSecond, `${id} should expose at least two tabs`).toBeTruthy();

				const totalTabs = await card.locator('[role="tab"]').count();
				if (totalTabs >= 3) {
					const openedThird = await expectTabActive(card, 2);
					expect(openedThird, `${id} should allow opening the third tab`).toBeTruthy();
				}
			}
		});
	});
});
