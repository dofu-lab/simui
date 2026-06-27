import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AnalyticsService } from '../services/analytics.service';
import { ComponentCardComponent } from './component-card.component';
import { CodeLoaderService } from './services/code-loader.service';

@Component({
	selector: 'test-demo',
	template: '<button type="button">Demo action</button>',
})
class TestDemoComponent {}

describe('ComponentCardComponent analytics', () => {
	let fixture: ComponentFixture<ComponentCardComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;
	let intersectionCallback: IntersectionObserverCallback;

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', [
			'trackComponentCodeSheetOpened',
			'trackComponentDemoInteracted',
			'trackComponentShared',
			'trackComponentViewed',
		]);

		class MockIntersectionObserver {
			constructor(callback: IntersectionObserverCallback) {
				intersectionCallback = callback;
			}

			observe = jasmine.createSpy('observe');
			unobserve = jasmine.createSpy('unobserve');
			disconnect = jasmine.createSpy('disconnect');
			takeRecords = jasmine.createSpy('takeRecords').and.returnValue([]);
			root = null;
			rootMargin = '0px';
			scrollMargin = '0px';
			thresholds = [0.5];
		}

		(globalThis as typeof globalThis & { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver =
			MockIntersectionObserver as typeof IntersectionObserver;

		await TestBed.configureTestingModule({
			imports: [ComponentCardComponent, TestDemoComponent],
			providers: [
				{ provide: AnalyticsService, useValue: analyticsService },
				{ provide: Clipboard, useValue: jasmine.createSpyObj<Clipboard>('Clipboard', ['copy']) },
				{ provide: CodeLoaderService, useValue: { loadComponentCode: () => of('component code') } },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ComponentCardComponent);
		fixture.componentRef.setInput('component', TestDemoComponent);
		fixture.componentRef.setInput('componentName', 'button-01');
		fixture.detectChanges();
	});

	it('tracks the code sheet open event', () => {
		(fixture.componentInstance as unknown as { trackCodeClick: () => void }).trackCodeClick();

		expect(analyticsService.trackComponentCodeSheetOpened).toHaveBeenCalledWith('button-01');
	});

	it('tracks only the first demo interaction per card instance', () => {
		const component = fixture.componentInstance as unknown as {
			trackDemoInteraction: (type: 'click' | 'keyboard') => void;
		};

		component.trackDemoInteraction('click');
		component.trackDemoInteraction('keyboard');

		expect(analyticsService.trackComponentDemoInteracted).toHaveBeenCalledOnceWith('button-01', 'click');
	});

	it('tracks a component view when the card enters the viewport', () => {
		intersectionCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);

		expect(analyticsService.trackComponentViewed).toHaveBeenCalledWith('button-01');
	});
});
