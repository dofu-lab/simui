import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AnalyticsService } from '@core/services/analytics.service';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { BehaviorSubject, of } from 'rxjs';
import { PageGridComponent } from './page-grid.component';
import type { ComponentCardItem } from './types';

@Component({
	selector: 'sim-test-grid-demo',
	template: '<button type="button">Grid demo</button>',
})
class GridDemoComponent {}

describe('PageGridComponent full view', () => {
	let fixture: ComponentFixture<PageGridComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;
	let location: jasmine.SpyObj<Location>;
	let fragmentSubject: BehaviorSubject<string | null>;
	let queryParamMapSubject: BehaviorSubject<ReturnType<typeof convertToParamMap>>;

	const components: ComponentCardItem[] = [
		{ id: 'button-01', component: GridDemoComponent, layout: 'third', alignment: 'center' },
		{ id: 'button-02', component: GridDemoComponent, layout: 'third', alignment: 'center' },
	];

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', ['trackComponentNavigationClicked']);
		location = jasmine.createSpyObj<Location>('Location', ['go', 'path']);
		location.path.and.returnValue('/components/button');
		fragmentSubject = new BehaviorSubject<string | null>(null);
		queryParamMapSubject = new BehaviorSubject(convertToParamMap({}));

		await TestBed.configureTestingModule({
			imports: [PageGridComponent, GridDemoComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						fragment: fragmentSubject.asObservable(),
						queryParamMap: queryParamMapSubject.asObservable(),
					},
				},
				{ provide: AnalyticsService, useValue: analyticsService },
				{
					provide: CodeLoaderService,
					useValue: {
						loadComponentCode: () => of('component code'),
						preloadComponents: jasmine.createSpy('preloadComponents'),
					},
				},
				{ provide: Location, useValue: location },
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
		expect(location.go).toHaveBeenCalledOnceWith('/components/button?full#button-01');
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
		expect(location.go).toHaveBeenCalledWith('/components/button?full#button-02');

		component.goToPreviousFullView();
		expect(component.selectedFullViewIndex()).toBe(0);
		expect(component.fullViewOpen()).toBeTrue();
		expect(location.go).toHaveBeenCalledWith('/components/button?full#button-01');
	});

	it('opens full view from the URL full view query param and component fragment', () => {
		const component = fixture.componentInstance as unknown as {
			selectedFullViewIndex: () => number | null;
			fullViewOpen: () => boolean;
		};

		fragmentSubject.next('button-02');
		queryParamMapSubject.next(convertToParamMap({ full: '' }));
		fixture.detectChanges();

		expect(component.selectedFullViewIndex()).toBe(1);
		expect(component.fullViewOpen()).toBeTrue();
	});

	it('removes URL params when full view closes', () => {
		const component = fixture.componentInstance as unknown as {
			openFullView: (id: string) => void;
			closeFullView: () => void;
			selectedFullViewIndex: () => number | null;
		};

		component.openFullView('button-01');
		component.closeFullView();

		expect(component.selectedFullViewIndex()).toBeNull();
		expect(location.go).toHaveBeenCalledWith('/components/button');
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
