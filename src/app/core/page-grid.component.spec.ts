import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AnalyticsService } from '../services/analytics.service';
import { PageGridComponent } from './page-grid.component';
import { CodeLoaderService } from './services/code-loader.service';
import type { ComponentCardItem } from './types';

@Component({
	selector: 'sim-test-grid-demo',
	template: '<button type="button">Grid demo</button>',
})
class GridDemoComponent {}

describe('PageGridComponent full view', () => {
	let fixture: ComponentFixture<PageGridComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;

	const components: ComponentCardItem[] = [
		{ id: 'button-01', component: GridDemoComponent, layout: 'third', alignment: 'center' },
		{ id: 'button-02', component: GridDemoComponent, layout: 'third', alignment: 'center' },
	];

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', ['trackComponentNavigationClicked']);

		await TestBed.configureTestingModule({
			imports: [PageGridComponent, GridDemoComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: { fragment: of(null) } },
				{ provide: AnalyticsService, useValue: analyticsService },
				{ provide: CodeLoaderService, useValue: { preloadComponents: jasmine.createSpy('preloadComponents') } },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(PageGridComponent);
		fixture.componentRef.setInput('components', components);
		fixture.detectChanges();
	});

	it('opens full view for the first component', () => {
		const component = fixture.componentInstance as unknown as {
			openFullView: (id: string) => void;
			selectedFullViewIndex: () => number | null;
			fullViewOpen: () => boolean;
		};

		component.openFullView('button-01');

		expect(component.selectedFullViewIndex()).toBe(0);
		expect(component.fullViewOpen()).toBeTrue();
	});

	it('moves between components without closing full view', () => {
		const component = fixture.componentInstance as unknown as {
			openFullView: (id: string) => void;
			goToNextFullView: () => void;
			goToPreviousFullView: () => void;
			selectedFullViewIndex: () => number | null;
			fullViewOpen: () => boolean;
		};

		component.openFullView('button-01');
		component.goToNextFullView();
		expect(component.selectedFullViewIndex()).toBe(1);
		expect(component.fullViewOpen()).toBeTrue();

		component.goToPreviousFullView();
		expect(component.selectedFullViewIndex()).toBe(0);
		expect(component.fullViewOpen()).toBeTrue();
	});

	it('tracks the full view navigation button position', () => {
		const component = fixture.componentInstance as unknown as {
			openFullView: (id: string) => void;
			goToNextFullView: (request: { direction: 'next'; position: 'header' }) => void;
			selectedFullViewIndex: () => number | null;
		};

		component.openFullView('button-01');
		component.goToNextFullView({ direction: 'next', position: 'header' });

		expect(component.selectedFullViewIndex()).toBe(1);
		expect(analyticsService.trackComponentNavigationClicked).toHaveBeenCalledOnceWith('button-01', {
			direction: 'next',
			position: 'header',
			toComponentId: 'button-02',
			fromIndex: 0,
			toIndex: 1,
			totalComponents: 2,
		});
	});
});
