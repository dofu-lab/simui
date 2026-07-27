import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { RegistryVersionMenuComponent } from './registry-version-menu.component';

describe('RegistryVersionMenuComponent', () => {
	let fixture: ComponentFixture<RegistryVersionMenuComponent>;
	const status = signal<'loading' | 'ready' | 'error'>('ready');
	const selectedVersion = signal<string | null>('1.0.2');
	const selectedComparison = signal({
		fromVersion: '0.9.0',
		toVersion: '1.0.2',
		added: ['card-01'],
		updated: ['button-01'],
		removed: ['alert-01'],
	});
	const selectVersion = jasmine.createSpy('selectVersion').and.resolveTo(true);
	const service = {
		status,
		selectedVersion,
		selectedComparison,
		isLoading: () => status() === 'loading',
		isReady: () => status() === 'ready',
		hasError: () => status() === 'error',
		manifest: signal({ latest: '1.0.2', comparisons: [selectedComparison()] }),
		releases: signal([
			{ version: '1.0.2', publishedAt: '2026-07-26', indexPath: '/registry/releases/1.0.2.json', components: [] },
			{ version: '0.9.0', publishedAt: '2026-06-01', indexPath: '/registry/releases/0.9.0.json', components: [] },
		]),
		selectVersion,
	};

	beforeEach(async () => {
		status.set('ready');
		selectedVersion.set('1.0.2');
		selectVersion.calls.reset();
		await TestBed.configureTestingModule({
			imports: [RegistryVersionMenuComponent],
			providers: [provideRouter([]), { provide: RegistryVersionService, useValue: service }],
		}).compileComponents();
		fixture = TestBed.createComponent(RegistryVersionMenuComponent);
		fixture.detectChanges();
	});

	it('renders the selected version as an accessible badge trigger', () => {
		const trigger = fixture.nativeElement.querySelector('button[hlmPopoverTrigger]') as HTMLButtonElement;

		expect(trigger).not.toBeNull();
		expect(trigger.textContent).toContain('v1.0.2');
		expect(trigger.getAttribute('aria-label')).toContain('Change version');
		expect(fixture.nativeElement.innerHTML).toContain('focus-visible:ring');
	});

	it('delegates a string selection to the global service', () => {
		(
			fixture.componentInstance as unknown as {
				selectVersion: (value: unknown) => void;
			}
		).selectVersion('0.9.0');

		expect(selectVersion).toHaveBeenCalledOnceWith('0.9.0');
	});

	it('shows concise loading and error states in the badge', () => {
		status.set('loading');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('…');

		status.set('error');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Unavailable');
	});
});
