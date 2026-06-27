import { getComponentAnalyticsProperties } from './analytics.service';

describe('getComponentAnalyticsProperties', () => {
	it('derives category and number from a simple component id', () => {
		expect(getComponentAnalyticsProperties('button-01')).toEqual({
			component_id: 'button-01',
			component_category: 'button',
			component_number: '01',
		});
	});

	it('keeps hyphenated category names intact', () => {
		expect(getComponentAnalyticsProperties('event-calendar-01')).toEqual({
			component_id: 'event-calendar-01',
			component_category: 'event-calendar',
			component_number: '01',
		});
	});

	it('uses the full id as the category when no numeric suffix exists', () => {
		expect(getComponentAnalyticsProperties('custom-component')).toEqual({
			component_id: 'custom-component',
			component_category: 'custom-component',
			component_number: undefined,
		});
	});
});
