import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

async function getPopoverTrigger(card: Locator, id: string): Promise<Locator> {
	const variantHost = card.locator(`sim-${id}`);
	const triggerByDirective = variantHost.locator('[hlmPopoverTrigger]').first();
	if ((await triggerByDirective.count()) > 0) {
		return triggerByDirective;
	}

	return variantHost.getByRole('button').first();
}

async function openPopoverForVariant(page: Page, id: string): Promise<{ card: Locator; trigger: Locator }> {
	const card = componentCard(page, id);
	const isPresent = await card
		.waitFor({ state: 'visible', timeout: 5000 })
		.then(() => true)
		.catch(() => false);

	if (!isPresent) {
		throw new Error(`Popover variant ${id} is not rendered`);
	}

	await card.scrollIntoViewIfNeeded();
	const trigger = await getPopoverTrigger(card, id);
	await expect(trigger).toBeVisible();
	await trigger.click();
	await expect(trigger).toHaveAttribute('aria-expanded', 'true', { timeout: 3000 });

	return { card, trigger };
}

async function snapshotOpenPopoverVariant(page: Page, id: string): Promise<void> {
	const { trigger } = await openPopoverForVariant(page, id);
	const popover = page.locator('[data-slot="popover-content"]:visible').last();
	await expect(popover).toBeVisible();
	await expect.soft(popover).toHaveScreenshot(`popover/open-${id}.png`, { maxDiffPixelRatio: 0.02 });

	await page.keyboard.press('Escape');
	await expect(trigger).toHaveAttribute('aria-expanded', 'false', { timeout: 3000 });
}

test.describe('Popover', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('popover');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'popover', COMPONENT_IDS.popover);
	});

	test('visual regression — open state for all variants', async ({ page }) => {
		for (const id of COMPONENT_IDS.popover) {
			await snapshotOpenPopoverVariant(page, id);
		}
	});

	test.describe('Behavior', () => {
		for (const id of COMPONENT_IDS.popover) {
			test(`${id} opens on trigger click and closes on Escape`, async ({ page }) => {
				const { trigger } = await openPopoverForVariant(page, id);
				await page.keyboard.press('Escape');
				await expect(trigger).toHaveAttribute('aria-expanded', 'false', { timeout: 3000 });
			});
		}
	});
});
