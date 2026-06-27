import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

async function getOpenMenu(page: Page): Promise<Locator> {
	const menu = page.locator('[role="menu"]').first();
	await expect(menu).toBeVisible({ timeout: 3000 });
	return menu;
}

async function snapshotOpenDropdownVariant(page: Page, id: string): Promise<void> {
	const card = componentCard(page, id);
	const trigger = card.getByRole('button').first();
	const isPresent = await card
		.waitFor({ state: 'visible', timeout: 5000 })
		.then(() => true)
		.catch(() => false);

	if (!isPresent) return;

	await card.scrollIntoViewIfNeeded();
	await trigger.click();

	const menu = await getOpenMenu(page);
	const cardBox = await card.boundingBox();
	if (!cardBox) {
		throw new Error(`Unable to capture open dropdown snapshot for ${id}`);
	}

	const viewport = page.viewportSize();
	if (!viewport) {
		throw new Error('Viewport size is not available');
	}

	const horizontalPadding = 80;
	const verticalPadding = 280;
	const x = Math.floor(Math.max(0, cardBox.x - horizontalPadding));
	const y = Math.floor(Math.max(0, cardBox.y - verticalPadding));
	const right = Math.ceil(Math.min(viewport.width, cardBox.x + cardBox.width + horizontalPadding));
	const bottom = Math.ceil(Math.min(viewport.height, cardBox.y + cardBox.height + verticalPadding));

	await expect.soft(page).toHaveScreenshot(`dropdown/open-${id}.png`, {
		clip: {
			x,
			y,
			width: right - x,
			height: bottom - y,
		},
	});

	await page.keyboard.press('Escape');
	await expect(menu).not.toBeVisible({ timeout: 3000 });
}

test.describe('Dropdown', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('dropdown');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'dropdown', COMPONENT_IDS.dropdown);
	});

	test('visual regression — open state for all variants', async ({ page }) => {
		for (const id of COMPONENT_IDS.dropdown) {
			await snapshotOpenDropdownVariant(page, id);
		}
	});

	test.describe('Behavior', () => {
		test('opens menu on trigger press and closes on Escape', async ({ page }) => {
			const trigger = componentCard(page, 'dropdown-01').locator('button').first();
			await trigger.focus();
			await page.keyboard.press('Enter');

			const menu = await getOpenMenu(page);
			await expect(menu).toContainText('Option 1');

			await page.keyboard.press('Escape');
			await expect(menu).not.toBeVisible({ timeout: 3000 });
		});

		test('menu closes after selecting an item', async ({ page }) => {
			const trigger = componentCard(page, 'dropdown-01').locator('button').first();
			await trigger.click();
			const menu = await getOpenMenu(page);
			const item = menu.locator('[role="menuitem"]').first();
			await item.click();
			await expect(menu).not.toBeVisible({ timeout: 3000 });
		});

		test('supports submenu and checkbox interactions in rich dropdown content', async ({ page }) => {
			const trigger = componentCard(page, 'dropdown-09').locator('button').first();
			const openNotificationsMenu = async (): Promise<void> => {
				await trigger.dispatchEvent('click');
				const rootMenu = await getOpenMenu(page);
				await rootMenu.getByRole('menuitem', { name: 'Notifications' }).hover();
				const notificationMenu = page
					.locator('[role="menu"]')
					.filter({ has: page.getByRole('menuitemcheckbox', { name: 'Email' }) })
					.first();
				await expect(notificationMenu).toBeVisible({ timeout: 3000 });
			};

			await openNotificationsMenu();

			const pushItem = page.getByRole('menuitemcheckbox', { name: 'Push' });
			await expect(pushItem).toHaveAttribute('aria-checked', 'false');
			await pushItem.click();
			await expect(pushItem).toHaveAttribute('aria-checked', 'true');
		});
	});
});
