import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

async function getPopoverTrigger(card: Locator, id: string): Promise<Locator> {
	const variantHost = card.locator(`sim-${id}`);
	const triggerByDirective = variantHost.locator('[hlmPopoverTrigger]').first();
	if ((await triggerByDirective.count()) > 0) {
		return triggerByDirective;
	}

	return variantHost.getByRole('button').first();
}

async function openPopoverForVariant(page: Page, id: string): Promise<{ card: Locator; trigger: Locator }> {
	const card = page.locator(`component-card#${id}`);
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
	const { card, trigger } = await openPopoverForVariant(page, id);
	const cardBox = await card.boundingBox();
	if (!cardBox) {
		throw new Error(`Unable to capture open popover snapshot for ${id}`);
	}

	const viewport = page.viewportSize();
	if (!viewport) {
		throw new Error('Viewport size is not available');
	}

	const horizontalPadding = 120;
	const verticalPadding = 280;
	const x = Math.floor(Math.max(0, cardBox.x - horizontalPadding));
	const y = Math.floor(Math.max(0, cardBox.y - verticalPadding));
	const right = Math.ceil(Math.min(viewport.width, cardBox.x + cardBox.width + horizontalPadding));
	const bottom = Math.ceil(Math.min(viewport.height, cardBox.y + cardBox.height + verticalPadding));

	await expect.soft(page).toHaveScreenshot(`popover/open-${id}.png`, {
		clip: {
			x,
			y,
			width: right - x,
			height: bottom - y,
		},
		maxDiffPixelRatio: 0.02,
	});

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
