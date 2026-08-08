import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { componentCard } from '../utils/visual.helpers';

const variants = ['sidebar-04', 'sidebar-05', 'sidebar-06'] as const;

async function openFullscreen(page: Page, variant: (typeof variants)[number]): Promise<Locator> {
	await page.goto(`/components/sidebar/view/${variant}`);
	await page.waitForLoadState('networkidle');
	const host = page.locator(`sim-${variant}`);
	await expect(host).toBeVisible();
	await expect(host.getByRole('link', { name: 'View fullscreen' })).toHaveCount(0);
	await page.waitForFunction(() =>
		Array.from(document.querySelectorAll('img')).every((image) => (image as HTMLImageElement).complete),
	);
	return host;
}

async function expectNoViewportOverflow(page: Page): Promise<void> {
	const fitsViewport = await page.evaluate(
		() => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
	);
	expect(fitsViewport).toBe(true);
}

test.describe('Sidebar advanced variants', () => {
	test('registers 04-06 in numeric order', async ({ navigateToComponent, page }) => {
		await navigateToComponent('sidebar');

		for (const variant of variants) {
			await expect(componentCard(page, variant)).toBeVisible();
		}

		const renderedIds = await page
			.locator('sim-component-card[id^="sidebar-"]')
			.evaluateAll((cards) => cards.map((card) => card.id));
		expect(renderedIds.slice(-3)).toEqual([...variants]);
	});

	test('workspace switching, filtering, create menu, and account switching are functional', async ({ page }) => {
		const host = await openFullscreen(page, 'sidebar-04');
		await expect(host.getByRole('link', { name: 'View fullscreen' })).toHaveCount(0);

		const workspaceTrigger = host.getByRole('button', { name: /Switch workspace/ });
		await workspaceTrigger.focus();
		await page.keyboard.press('Enter');
		await page.getByRole('menuitem', { name: /Northstar Labs/ }).click();
		await expect(workspaceTrigger).toContainText('Northstar Labs');
		await expect(workspaceTrigger).toContainText('Pro');

		const search = host.getByRole('searchbox', { name: 'Search workspace navigation' });
		await search.fill('RESEARCH');
		await expect(host.getByRole('button', { name: /Research library/ })).toBeVisible();
		await search.fill('does not exist');
		await expect(host.getByRole('status')).toContainText('No matching navigation');
		await host.getByRole('button', { name: 'Clear search' }).click();
		await expect(host.getByRole('button', { name: 'Home' })).toBeVisible();

		const createTrigger = host.getByRole('button', { name: 'Create new' });
		await createTrigger.focus();
		await page.keyboard.press('Enter');
		const createMenu = page.getByRole('menu');
		await expect(createMenu.getByRole('menuitem', { name: 'Project' })).toBeVisible();
		await expect(createMenu.getByRole('menuitem', { name: 'Task' })).toBeVisible();
		await expect(createMenu.getByRole('menuitem', { name: 'Team' })).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(createTrigger).toBeFocused();

		const accountTrigger = host.getByRole('button', { name: /Open account menu/ });
		await accountTrigger.click();
		await page.getByText('Olivia Rhye', { exact: true }).last().click();
		await page.keyboard.press('Escape');
		await expect(accountTrigger).toContainText('Olivia Rhye');
	});

	test('project switching updates the full pulse and add menu', async ({ page }) => {
		const host = await openFullscreen(page, 'sidebar-05');
		const projectTrigger = host.getByRole('button', { name: /Switch project/ });
		await projectTrigger.click();
		await page.getByRole('menuitem', { name: /Mobile launch/ }).click();

		await expect(projectTrigger).toContainText('Mobile launch');
		await expect(host.getByLabel('Project health')).toContainText('Needs attention');
		await expect(host.getByLabel('Project health')).toContainText('0%');
		await expect(host.getByLabel('Project health')).toContainText('0/16 tasks');
		await expect(host.getByText('No teammates assigned yet.')).toBeVisible();
		await expect(host.getByText('No upcoming milestones.')).toBeVisible();

		const addTrigger = host.getByRole('button', { name: 'Add new' });
		await addTrigger.click();
		const menu = page.getByRole('menu');
		for (const item of ['Task', 'Milestone', 'File', 'Teammate']) {
			await expect(menu.getByRole('menuitem', { name: item })).toBeVisible();
		}
	});

	test('favorites and suggestions stay mutually exclusive through customization', async ({ page }) => {
		const host = await openFullscreen(page, 'sidebar-06');
		await expect(host.getByRole('button', { name: /Pin .* to Favorites/ })).toHaveCount(0);
		await expect(host.getByRole('button', { name: /Remove .* from Favorites/ })).toHaveCount(0);

		await host.getByRole('button', { name: 'Customize shortcuts' }).click();
		await host.getByRole('button', { name: 'Pin Team directory to Favorites' }).click();
		await expect(host.getByRole('button', { name: 'Remove Team directory from Favorites' })).toBeVisible();
		await expect(host.getByRole('button', { name: 'Pin Team directory to Favorites' })).toHaveCount(0);

		for (const favorite of ['Calendar', 'Reports', 'Team directory']) {
			await host.getByRole('button', { name: `Remove ${favorite} from Favorites` }).click();
		}
		await expect(host.getByText('No favorites yet')).toBeVisible();
		await expect(host.getByRole('button', { name: 'Add favorites' })).toBeVisible();
	});

	test('all-pinned state is announced without a blank Suggested group', async ({ page }) => {
		const host = await openFullscreen(page, 'sidebar-06');
		await host.getByRole('button', { name: 'Customize shortcuts' }).click();

		for (const shortcut of ['Documents', 'Team directory', 'Feedback']) {
			await host.getByRole('button', { name: `Pin ${shortcut} to Favorites` }).click();
		}
		await expect(host.getByText('All shortcuts are in Favorites.')).toBeVisible();
	});

	for (const variant of variants) {
		test(`${variant} account menu supports keyboard switching and focus return`, async ({ page }) => {
			const host = await openFullscreen(page, variant);
			const trigger = host.getByRole('button', { name: /Open account menu/ });
			await trigger.focus();
			await page.keyboard.press('Enter');
			await expect(page.getByRole('menuitem', { name: 'View profile' })).toBeVisible();
			await expect(page.getByRole('menuitem', { name: 'Account settings' })).toBeVisible();
			await expect(page.getByRole('menuitem', { name: 'Documentation' })).toBeVisible();
			await expect(page.getByRole('button', { name: 'Add account' })).toBeVisible();
			await expect(page.getByRole('menuitem', { name: 'Log out' })).toBeVisible();

			const olivia = page.getByRole('radio', { name: /Olivia Rhye/ });
			await olivia.focus();
			await page.keyboard.press('Space');
			await page.keyboard.press('Escape');
			await expect(trigger).toBeFocused();
			await expect(trigger).toContainText('Olivia Rhye');
		});
	}

	for (const variant of variants) {
		test(`${variant} keeps its account image mounted and its collapsed rail contained`, async ({ page }) => {
			const host = await openFullscreen(page, variant);
			const accountImage = host.getByRole('button', { name: /Open account menu/ }).locator('img');
			const imageHandle = await accountImage.elementHandle();
			expect(imageHandle).not.toBeNull();

			await host.getByRole('button', { name: 'Toggle sidebar' }).click();
			await expect(host.locator('hlm-sidebar')).toHaveAttribute('data-state', 'collapsed');
			expect(await imageHandle!.evaluate((image) => image.isConnected)).toBe(true);
			await expect(accountImage).toHaveCount(1);
			if (variant === 'sidebar-04') {
				await expect(host.getByRole('searchbox', { name: 'Search workspace navigation' })).toHaveCount(0);
			} else if (variant === 'sidebar-05') {
				await expect(host.getByLabel('Project health')).toBeHidden();
			} else {
				await expect(host.getByRole('button', { name: 'Documents' })).toBeHidden();
			}

			const hasHorizontalOverflow = await host
				.locator('hlm-sidebar')
				.evaluate((sidebar) => sidebar.scrollWidth > sidebar.clientWidth);
			expect(hasHorizontalOverflow).toBe(false);

			await host.getByRole('button', { name: 'Toggle sidebar' }).click();
			expect(await imageHandle!.evaluate((image) => image.isConnected)).toBe(true);
		});
	}

	for (const variant of variants) {
		test(`${variant} supports desktop light/dark and mobile visual states`, async ({ page }) => {
			const consoleErrors: string[] = [];
			page.on('console', (message) => {
				if (message.type() === 'error') consoleErrors.push(message.text());
			});
			let host = await openFullscreen(page, variant);
			await expectNoViewportOverflow(page);
			await expect(page).toHaveScreenshot(`sidebar/${variant}-desktop-expanded-light.png`, { fullPage: true });

			await page.evaluate(() => document.documentElement.classList.add('dark'));
			await host.getByRole('button', { name: 'Toggle sidebar' }).click();
			await expectNoViewportOverflow(page);
			await expect(page).toHaveScreenshot(`sidebar/${variant}-desktop-collapsed-dark.png`, { fullPage: true });

			await page.setViewportSize({ width: 390, height: 844 });
			host = await openFullscreen(page, variant);
			await host.getByRole('button', { name: 'Toggle sidebar' }).click();
			await expectNoViewportOverflow(page);
			await expect(page).toHaveScreenshot(`sidebar/${variant}-mobile-overlay-light.png`, { fullPage: true });
			expect(consoleErrors).toEqual([]);
		});
	}

	test('customization motion resolves to zero duration with reduced motion', async ({ browser }) => {
		const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1280, height: 800 } });
		const page = await context.newPage();
		const host = await openFullscreen(page, 'sidebar-06');
		await host.getByRole('button', { name: 'Customize shortcuts' }).click();
		const pinButton = host.getByRole('button', { name: 'Pin Documents to Favorites' });
		const transition = await pinButton.evaluate((button) => {
			const styles = getComputedStyle(button);
			return { duration: styles.transitionDuration, property: styles.transitionProperty };
		});
		expect(transition.property === 'none' || transition.duration === '0s').toBe(true);
		await context.close();
	});
});
