import { Clipboard } from '@angular/cdk/clipboard';
import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultUrlSerializer, Router } from '@angular/router';
import { AnalyticsService } from '@core/services/analytics.service';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { of } from 'rxjs';
import { ComponentCardComponent } from './component-card.component';

@Component({
	selector: 'sim-test-demo',
	template: '<button type="button">Demo action</button>',
})
class TestDemoComponent {}

describe('ComponentCardComponent analytics', () => {
	let fixture: ComponentFixture<ComponentCardComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;
	let clipboard: jasmine.SpyObj<Clipboard>;
	let registryVersion: ReturnType<typeof signal<string | null>>;
	let intersectionCallback: IntersectionObserverCallback;

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', [
			'trackComponentCodeSheetOpened',
			'trackComponentDemoInteracted',
			'trackComponentFullViewRequested',
			'trackComponentShared',
			'trackComponentViewed',
		]);
		clipboard = jasmine.createSpyObj<Clipboard>('Clipboard', ['copy']);
		registryVersion = signal('1.0.2');

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
				{ provide: Clipboard, useValue: clipboard },
				{ provide: CodeLoaderService, useValue: { loadComponentCode: () => of('component code') } },
				{
					provide: RegistryVersionService,
					useValue: {
						status: signal('ready'),
						selectedVersion: registryVersion,
						isReady: () => true,
						isLoading: () => false,
						hasError: () => false,
						isComponentAvailable: () => true,
					},
				},
				{
					provide: Router,
					useValue: {
						url: '/components/button?theme=dark',
						parseUrl: (url: string) => new DefaultUrlSerializer().parse(url),
						serializeUrl: (tree: Parameters<DefaultUrlSerializer['serialize']>[0]) =>
							new DefaultUrlSerializer().serialize(tree),
					},
				},
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

	it('builds installation commands from the globally selected version', () => {
		const component = fixture.componentInstance as unknown as { installCommand: () => string };
		expect(component.installCommand()).toBe('npx @dofu-lab/simui-cli add button-01 --spartan-version 1.0.2');

		registryVersion.set('0.9.0');
		expect(component.installCommand()).toBe('npx @dofu-lab/simui-cli add button-01 --spartan-version 0.9.0');
	});

	it('adds the selected version only to the copied component link', () => {
		(fixture.componentInstance as unknown as { shareComponent: () => void }).shareComponent();

		expect(clipboard.copy).toHaveBeenCalledWith(
			`${document.location.origin}/components/button?theme=dark&spartan=1.0.2#button-01`,
		);
	});

	it('emits the full-view request for the current component', () => {
		const fullViewSpy = jasmine.createSpy('fullViewRequested');
		fixture.componentInstance.fullViewRequested.subscribe(fullViewSpy);

		(fixture.componentInstance as unknown as { requestFullView: () => void }).requestFullView();

		expect(fullViewSpy).toHaveBeenCalledOnceWith('button-01');
		expect(analyticsService.trackComponentFullViewRequested).toHaveBeenCalledOnceWith('button-01');
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
