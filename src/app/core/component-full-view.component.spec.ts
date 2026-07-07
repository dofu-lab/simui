import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { ComponentFullViewComponent } from './component-full-view.component';
import { CodeLoaderService } from './services/code-loader.service';
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

	const components: ComponentCardItem[] = [
		{ id: 'button-01', component: FirstDemoComponent, layout: 'third', alignment: 'center' },
		{ id: 'button-02', component: SecondDemoComponent, layout: 'third', alignment: 'center' },
	];

	beforeEach(async () => {
		codeLoaderService = jasmine.createSpyObj<CodeLoaderService>('CodeLoaderService', ['loadComponentCode']);
		codeLoaderService.loadComponentCode.and.returnValue(of('component code'));

		await TestBed.configureTestingModule({
			imports: [ComponentFullViewComponent, FirstDemoComponent, SecondDemoComponent],
			providers: [{ provide: CodeLoaderService, useValue: codeLoaderService }],
		}).compileComponents();

		fixture = TestBed.createComponent(ComponentFullViewComponent);
		fixture.componentRef.setInput('components', components);
		fixture.componentRef.setInput('selectedIndex', 0);
		fixture.componentRef.setInput('open', true);
		fixture.detectChanges();
	});

	it('loads code for the selected component', () => {
		expect(codeLoaderService.loadComponentCode).toHaveBeenCalledOnceWith('button-01');
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

		const component = fixture.componentInstance as unknown as { codeLoading: () => boolean };
		expect(component.codeLoading()).toBeTrue();

		pendingCode.next('loaded code');
		pendingCode.complete();

		expect(component.codeLoading()).toBeFalse();
	});
});
