import type { Locator, Page } from '@playwright/test';
import { expect, test } from './fixtures/base.fixture';

const profiles = [
	{
		name: 'GitHub',
		href: 'https://github.com/dongphuong0905',
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/dongphuongtran/',
	},
	{
		name: 'X',
		href: 'https://x.com/PhuongTranDong',
	},
] as const;

function profileNavigation(page: Page): Locator {
	return page.getByRole('navigation', { name: 'Phuong Tran profiles and contact' });
}

async function expectNoHorizontalOverflow(page: Page): Promise<void> {
	const viewportFits = await page.evaluate(
		() => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
	);
	expect(viewportFits).toBe(true);
}

test.describe('Author page', () => {
	test('is discoverable from the shared footer', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: 'Phuong Tran' }).click();

		await expect(page).toHaveURL(/\/author$/);
		await expect(page.getByRole('heading', { level: 1, name: 'Hi, I’m Phuong Tran.' })).toBeVisible();
	});

	test('renders the cross-functional profile, role, and collaboration invitation', async ({ page }) => {
		await page.goto('/author');

		await expect(page.getByRole('heading', { level: 1, name: 'Hi, I’m Phuong Tran.' })).toBeVisible();
		await expect(page.getByText('Scrum Master and Squad Lead')).toBeVisible();
		for (const capability of ['Angular and React', 'React Native', 'Backend', 'AI integration & agents']) {
			await expect(
				page.getByText(capability, { exact: capability === 'Backend' || capability.includes('&') }),
			).toBeVisible();
		}
		await expect(page.getByRole('heading', { name: 'Engineering with product ownership' })).toBeVisible();
		await expect(page.getByText(/open to thoughtful collaboration and suitable new opportunities/i)).toBeVisible();
	});

	test('exposes safe profile destinations and a non-interactive email address', async ({ page }) => {
		await page.goto('/author');
		const navigation = profileNavigation(page);

		for (const profile of profiles) {
			const link = navigation.getByRole('link', { name: profile.name, exact: true });
			await expect(link).toHaveAttribute('href', profile.href);
			await expect(link).toHaveAttribute('target', '_blank');
			await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
		}

		await expect(navigation.getByText('trandongphuongtdp@gmail.com', { exact: true })).toBeVisible();
		await expect(navigation.locator('a[href^="mailto:"]')).toHaveCount(0);
	});

	test('keeps every profile link keyboard reachable with a visible focus indicator', async ({ page }) => {
		await page.goto('/author');
		const navigation = profileNavigation(page);
		const links = profiles.map((profile) => navigation.getByRole('link', { name: profile.name, exact: true }));

		await links[0].focus();
		for (let index = 0; index < links.length; index += 1) {
			if (index > 0) await page.keyboard.press('Tab');
			await expect(links[index]).toBeFocused();
			const hasFocusIndicator = await links[index].evaluate((link) => {
				const styles = getComputedStyle(link);
				return styles.boxShadow !== 'none' || Number.parseFloat(styles.outlineWidth) > 0;
			});
			expect(hasFocusIndicator).toBe(true);
		}
	});

	test('has no horizontal overflow in mobile, desktop, or dark layouts', async ({ page }) => {
		const consoleErrors: string[] = [];
		page.on('console', (message) => {
			if (message.type() === 'error') consoleErrors.push(message.text());
		});

		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto('/author');
		await expectNoHorizontalOverflow(page);

		await page.setViewportSize({ width: 1280, height: 800 });
		await expectNoHorizontalOverflow(page);
		await page.evaluate(() => document.documentElement.classList.add('dark'));
		await expectNoHorizontalOverflow(page);
		expect(consoleErrors).toEqual([]);
	});

	test('disables author motion when reduced motion is requested', async ({ browser }) => {
		const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1280, height: 800 } });
		const page = await context.newPage();
		await page.goto('/author');

		const revealMotion = await page.locator('.author-page-reveal').evaluate((element) => {
			const styles = getComputedStyle(element);
			return { name: styles.animationName, duration: styles.animationDuration };
		});
		expect(revealMotion.name === 'none' || revealMotion.duration === '0s').toBe(true);

		for (const profile of profiles) {
			const transition = await profileNavigation(page)
				.getByRole('link', { name: profile.name, exact: true })
				.evaluate((link) => {
					const styles = getComputedStyle(link);
					return { property: styles.transitionProperty, duration: styles.transitionDuration };
				});
			expect(transition.property === 'none' || transition.duration === '0s').toBe(true);
		}

		await context.close();
	});
});
