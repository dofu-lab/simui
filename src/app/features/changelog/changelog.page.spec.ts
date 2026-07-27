import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { ChangelogComponent } from './changelog.page';

describe('ChangelogComponent', () => {
	let fixture: ComponentFixture<ChangelogComponent>;
	const status = signal<'loading' | 'ready' | 'error'>('ready');
	const selectedVersion = signal<string | null>('1.1.2');
	const comparison = {
		fromVersion: '1.0.2',
		toVersion: '1.1.2',
		added: ['card-01'],
		updated: ['button-01'],
		removed: ['alert-01'],
	};
	const releases = signal([
		{
			version: '1.1.2',
			publishedAt: '2026-07-27',
			indexPath: '/registry/releases/1.1.2.json',
			components: ['button-01', 'card-01'],
		},
		{
			version: '1.0.2',
			publishedAt: '2026-07-26',
			indexPath: '/registry/releases/1.0.2.json',
			components: ['alert-01', 'button-01'],
		},
	]);
	const service = {
		status,
		selectedVersion,
		releases,
		isLoading: () => status() === 'loading',
		hasError: () => status() === 'error',
		manifest: signal({
			schemaVersion: 5,
			latest: '1.1.2',
			releases: releases(),
			comparisons: [comparison],
			changelog: [
				{
					id: '2026-07-27-version-aware-component-source',
					date: '2026-07-27',
					spartanVersion: '1.1.2',
					type: 'feature' as const,
					title: 'Version-aware component source',
					description: 'Choose component source that matches the selected SpartanUI release.',
				},
				{
					id: '2026-07-27-clearer-release-history',
					date: '2026-07-27',
					spartanVersion: '1.1.2',
					type: 'improvement' as const,
					title: 'Clearer release history',
					description: 'Read multiple changes from the same day.',
				},
				{
					id: '2026-07-26-versioned-registry-baseline',
					date: '2026-07-26',
					spartanVersion: '1.0.2',
					type: 'improvement' as const,
					title: 'Versioned registry baseline',
					description: 'Established the first preserved component-source snapshot.',
				},
			],
		}),
	};

	beforeEach(async () => {
		status.set('ready');
		selectedVersion.set('1.1.2');
		await TestBed.configureTestingModule({
			imports: [ChangelogComponent],
			providers: [provideRouter([]), { provide: RegistryVersionService, useValue: service }],
		}).compileComponents();
		fixture = TestBed.createComponent(ChangelogComponent);
		fixture.detectChanges();
	});

	it('groups product updates and registry changes together by date', () => {
		const text = fixture.nativeElement.textContent as string;

		expect(text).toContain('SimUI changelog');
		expect(text).toContain('July 27, 2026');
		expect(text).toContain('July 26, 2026');
		expect(text).toContain('SpartanUI v1.1.2');
		expect(text).toContain('Version-aware component source');
		expect(text).toContain('Clearer release history');
		expect(text).toContain('Choose component source that matches the selected SpartanUI release.');
		expect(text).not.toContain('Registry compatibility history');
		expect(text).toContain('Component source changes');
		expect(text).toContain('card-01');
		expect(text).toContain('button-01');
		expect(text).toContain('alert-01');
		expect(text).toContain('Registry compatibility baseline');
		expect(fixture.nativeElement.querySelectorAll('article').length).toBe(2);
		expect(fixture.nativeElement.querySelectorAll('[aria-label="feature changes"]').length).toBe(1);
		const productUpdate = [...fixture.nativeElement.querySelectorAll('li')].find((item: HTMLElement) =>
			item.textContent.includes('Version-aware component source'),
		);
		expect(productUpdate?.textContent).not.toContain('SpartanUI v1.1.2');
	});

	it('renders loading and failure states', () => {
		status.set('loading');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Loading changelog');

		status.set('error');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Changelog is unavailable');
	});
});
