import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { of, Subject } from 'rxjs';
import { ComponentFullViewComponent } from './component-full-view.component';
import type { ComponentCardItem } from './types';

@Component({
	selector: 'sim-test-first-demo',
	template: '<button type="button">First demo</button>',
})
class FirstDemoComponent {}

@Component({
	selector: 'sim-test-second-demo',
	template: '<button type="button">Second demo</button>',
})
class SecondDemoComponent {}

describe('ComponentFullViewComponent', () => {
	let fixture: ComponentFixture<ComponentFullViewComponent>;
	let codeLoaderService: jasmine.SpyObj<CodeLoaderService>;
	let registryVersion: ReturnType<typeof signal<string | null>>;
	let componentAvailable: ReturnType<typeof signal<boolean>>;

	const components: ComponentCardItem[] = [
		{ id: 'button-01', component: FirstDemoComponent, layout: 'third', alignment: 'center' },
		{ id: 'button-02', component: SecondDemoComponent, layout: 'third', alignment: 'center' },
	];

	beforeEach(async () => {
		codeLoaderService = jasmine.createSpyObj<CodeLoaderService>('CodeLoaderService', ['loadComponentCode']);
		codeLoaderService.loadComponentCode.and.returnValue(of('component code'));
		registryVersion = signal('1.0.2');
		componentAvailable = signal(true);

		await TestBed.configureTestingModule({
			imports: [ComponentFullViewComponent, FirstDemoComponent, SecondDemoComponent],
			providers: [
				{ provide: CodeLoaderService, useValue: codeLoaderService },
				{
					provide: RegistryVersionService,
					useValue: {
						status: signal('ready'),
						selectedVersion: registryVersion,
						isReady: () => true,
						isLoading: () => false,
						hasError: () => false,
						isComponentAvailable: () => componentAvailable(),
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ComponentFullViewComponent);
		fixture.componentRef.setInput('components', components);
		fixture.componentRef.setInput('selectedIndex', 0);
		fixture.componentRef.setInput('open', true);
		fixture.detectChanges();
	});

	it('loads code for the selected component', () => {
		expect(codeLoaderService.loadComponentCode).toHaveBeenCalledOnceWith('1.0.2', 'button-01');
	});

	it('builds a versioned installation command', () => {
		const component = fixture.componentInstance as unknown as { installCommand: () => string };
		expect(component.installCommand()).toBe('npx @dofu-lab/simui-cli add button-01 --spartan-version 1.0.2');
	});

	it('disables previous at the first component and enables next', () => {
		const component = fixture.componentInstance as unknown as {
			canGoPrevious: () => boolean;
			canGoNext: () => boolean;
		};

		expect(component.canGoPrevious()).toBeFalse();
		expect(component.canGoNext()).toBeTrue();
	});

	it('disables next at the last component and enables previous', () => {
		fixture.componentRef.setInput('selectedIndex', 1);
		fixture.detectChanges();

		const component = fixture.componentInstance as unknown as {
			canGoPrevious: () => boolean;
			canGoNext: () => boolean;
		};

		expect(component.canGoPrevious()).toBeTrue();
		expect(component.canGoNext()).toBeFalse();
	});

	it('emits navigation requests without closing', () => {
		const previousSpy = jasmine.createSpy('previousRequested');
		const nextSpy = jasmine.createSpy('nextRequested');
		const closeSpy = jasmine.createSpy('closeRequested');
		fixture.componentInstance.previousRequested.subscribe(previousSpy);
		fixture.componentInstance.nextRequested.subscribe(nextSpy);
		fixture.componentInstance.closeRequested.subscribe(closeSpy);

		const component = fixture.componentInstance as unknown as {
			requestNavigation: (direction: 'previous' | 'next', position: 'header' | 'left_panel') => void;
		};

		component.requestNavigation('next', 'header');
		fixture.componentRef.setInput('selectedIndex', 1);
		fixture.detectChanges();
		component.requestNavigation('previous', 'left_panel');

		expect(previousSpy).toHaveBeenCalledOnceWith({ direction: 'previous', position: 'left_panel' });
		expect(nextSpy).toHaveBeenCalledOnceWith({ direction: 'next', position: 'header' });
		expect(closeSpy).not.toHaveBeenCalled();
	});

	it('sets the next preview animation direction before emitting navigation', () => {
		const nextSpy = jasmine.createSpy('nextRequested');
		fixture.componentInstance.nextRequested.subscribe(nextSpy);

		const component = fixture.componentInstance as unknown as {
			previewNavigationDirection: () => 'previous' | 'next' | null;
			previewEnterAnimationClass: () => string;
			previewLeaveAnimationClass: () => string;
			requestNavigation: (direction: 'previous' | 'next', position: 'header' | 'left_panel') => void;
		};

		component.requestNavigation('next', 'header');

		expect(component.previewNavigationDirection()).toBe('next');
		expect(component.previewEnterAnimationClass()).toBe('preview-swipe-next-enter');
		expect(component.previewLeaveAnimationClass()).toBe('preview-swipe-next-leave');
		expect(nextSpy).toHaveBeenCalledOnceWith({ direction: 'next', position: 'header' });
	});

	it('sets the previous preview animation direction before emitting navigation', () => {
		fixture.componentRef.setInput('selectedIndex', 1);
		fixture.detectChanges();
		const previousSpy = jasmine.createSpy('previousRequested');
		fixture.componentInstance.previousRequested.subscribe(previousSpy);

		const component = fixture.componentInstance as unknown as {
			previewNavigationDirection: () => 'previous' | 'next' | null;
			previewEnterAnimationClass: () => string;
			previewLeaveAnimationClass: () => string;
			requestNavigation: (direction: 'previous' | 'next', position: 'header' | 'left_panel') => void;
		};

		component.requestNavigation('previous', 'left_panel');

		expect(component.previewNavigationDirection()).toBe('previous');
		expect(component.previewEnterAnimationClass()).toBe('preview-swipe-previous-enter');
		expect(component.previewLeaveAnimationClass()).toBe('preview-swipe-previous-leave');
		expect(previousSpy).toHaveBeenCalledOnceWith({ direction: 'previous', position: 'left_panel' });
	});

	it('does not set animation direction or emit when previous is disabled', () => {
		const previousSpy = jasmine.createSpy('previousRequested');
		fixture.componentInstance.previousRequested.subscribe(previousSpy);

		const component = fixture.componentInstance as unknown as {
			previewNavigationDirection: () => 'previous' | 'next' | null;
			requestNavigation: (direction: 'previous' | 'next', position: 'header' | 'left_panel') => void;
		};

		component.requestNavigation('previous', 'header');

		expect(component.previewNavigationDirection()).toBeNull();
		expect(previousSpy).not.toHaveBeenCalled();
	});

	it('does not set animation direction or emit when next is disabled', () => {
		fixture.componentRef.setInput('selectedIndex', 1);
		fixture.detectChanges();
		const nextSpy = jasmine.createSpy('nextRequested');
		fixture.componentInstance.nextRequested.subscribe(nextSpy);

		const component = fixture.componentInstance as unknown as {
			previewNavigationDirection: () => 'previous' | 'next' | null;
			requestNavigation: (direction: 'previous' | 'next', position: 'header' | 'left_panel') => void;
		};

		component.requestNavigation('next', 'left_panel');

		expect(component.previewNavigationDirection()).toBeNull();
		expect(nextSpy).not.toHaveBeenCalled();
	});

	it('renders the animation host around the selected preview component', async () => {
		await fixture.whenStable();
		await fixture.whenRenderingDone();
		fixture.detectChanges();

		const animationHost = fixture.nativeElement.ownerDocument.querySelector(
			'[data-testid="component-preview-animation-host"]',
		) as HTMLElement | null;

		expect(animationHost).not.toBeNull();
		expect(animationHost?.textContent).toContain('First demo');
	});

	it('applies category-specific classes to the portaled preview frame', async () => {
		fixture.componentRef.setInput('previewClass', 'sidebar-preview-frame');
		fixture.detectChanges();
		await fixture.whenRenderingDone();

		const previewFrame = fixture.nativeElement.ownerDocument.querySelector(
			'[data-testid="component-full-view-preview"]',
		) as HTMLElement | null;

		expect(previewFrame).not.toBeNull();
		expect(previewFrame?.classList.contains('sidebar-preview-frame')).toBeTrue();
	});

	it('emits close when the sheet closes while open', () => {
		const closeSpy = jasmine.createSpy('closeRequested');
		fixture.componentInstance.closeRequested.subscribe(closeSpy);

		(
			fixture.componentInstance as unknown as { handleSheetStateChange: (state: 'open' | 'closed') => void }
		).handleSheetStateChange('closed');

		expect(closeSpy).toHaveBeenCalled();
	});

	it('shows a loading state while selected component code is pending', () => {
		const pendingCode = new Subject<string>();
		codeLoaderService.loadComponentCode.and.returnValue(pendingCode.asObservable());
		fixture = TestBed.createComponent(ComponentFullViewComponent);
		fixture.componentRef.setInput('components', components);
		fixture.componentRef.setInput('selectedIndex', 0);
		fixture.componentRef.setInput('open', true);
		fixture.detectChanges();

		const component = fixture.componentInstance as unknown as { sourceStatus: () => string };
		expect(component.sourceStatus()).toBe('loading');

		pendingCode.next('loaded code');
		pendingCode.complete();

		expect(component.sourceStatus()).toBe('ready');
	});

	it('does not display a response from the previously selected version', () => {
		const currentRequest = new Subject<string>();
		const historicalRequest = new Subject<string>();
		codeLoaderService.loadComponentCode.calls.reset();
		codeLoaderService.loadComponentCode.and.callFake((version) =>
			version === '1.0.2' ? currentRequest : historicalRequest,
		);
		fixture = TestBed.createComponent(ComponentFullViewComponent);
		fixture.componentRef.setInput('components', components);
		fixture.componentRef.setInput('selectedIndex', 0);
		fixture.componentRef.setInput('open', true);
		fixture.detectChanges();

		registryVersion.set('0.9.0');
		fixture.detectChanges();
		currentRequest.next('current source');

		const component = fixture.componentInstance as unknown as {
			displayCode: () => string;
			sourceStatus: () => string;
		};
		expect(component.displayCode()).toBe('');
		expect(component.sourceStatus()).toBe('loading');

		historicalRequest.next('historical source');
		expect(component.displayCode()).toBe('historical source');
		expect(component.sourceStatus()).toBe('ready');
	});

	it('skips source loading and reports unavailable when the manifest omits the component', () => {
		componentAvailable.set(false);
		codeLoaderService.loadComponentCode.calls.reset();
		fixture = TestBed.createComponent(ComponentFullViewComponent);
		fixture.componentRef.setInput('components', components);
		fixture.componentRef.setInput('selectedIndex', 0);
		fixture.componentRef.setInput('open', true);
		fixture.detectChanges();

		const component = fixture.componentInstance as unknown as { sourceStatus: () => string };
		expect(component.sourceStatus()).toBe('unavailable');
		expect(codeLoaderService.loadComponentCode).not.toHaveBeenCalled();
	});
});
