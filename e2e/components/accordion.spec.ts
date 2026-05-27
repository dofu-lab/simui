import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Accordion', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('accordion');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'accordion', COMPONENT_IDS.accordion);
	});

	test.describe('Expanded snapshots', () => {
		for (const id of COMPONENT_IDS.accordion) {
			test(`captures expanded states in ${id}`, async ({ page }) => {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				test.skip(!isPresent, `${id} is not rendered on the accordion page`);

				const items = card.locator('hlm-accordion > hlm-accordion-item');
				const itemCount = await items.count();
				expect(itemCount).toBeGreaterThan(0);

				for (let i = 0; i < itemCount; i++) {
					const item = items.nth(i);
					const trigger = item.locator('button[data-slot="accordion-trigger"]').first();
					const content = item.locator('hlm-accordion-content').first();

					await trigger.scrollIntoViewIfNeeded();
					const expanded = await trigger.getAttribute('aria-expanded');
					if (expanded !== 'true') {
						await trigger.click();
					}

					await expect(trigger).toHaveAttribute('aria-expanded', 'true');
					await expect(content).toHaveAttribute('data-state', 'open');
					await expect.soft(card).toHaveScreenshot(`accordion-expanded/${id}-item-${i + 1}.png`);
				}
			});
		}
	});

	test.describe('Behavior', () => {
		for (const id of COMPONENT_IDS.accordion) {
			test(`expands an item in ${id}`, async ({ page }) => {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				test.skip(!isPresent, `${id} is not rendered on the accordion page`);

				const triggers = card.locator('button[data-slot="accordion-trigger"]');
				const triggerCount = await triggers.count();
				expect(triggerCount).toBeGreaterThan(0);

				let targetTrigger = triggers.first();
				for (let i = 0; i < triggerCount; i++) {
					const candidate = triggers.nth(i);
					const expanded = await candidate.getAttribute('aria-expanded');
					if (expanded !== 'true') {
						targetTrigger = candidate;
						break;
					}
				}

				const targetItem = targetTrigger.locator('xpath=ancestor::hlm-accordion-item[1]');
				const targetContent = targetItem.locator('hlm-accordion-content').first();

				await targetTrigger.click();
				await expect(targetTrigger).toHaveAttribute('aria-expanded', 'true');
				await expect(targetContent).toHaveAttribute('data-state', 'open');
			});
		}
	});
});
