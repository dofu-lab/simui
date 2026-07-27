import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CodeLoaderService } from './code-loader.service';

const newHash = 'a'.repeat(64);
const oldHash = 'b'.repeat(64);

describe('CodeLoaderService', () => {
	let service: CodeLoaderService;
	let http: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting(), { provide: PLATFORM_ID, useValue: 'browser' }],
		});
		service = TestBed.inject(CodeLoaderService);
		http = TestBed.inject(HttpTestingController);
	});

	afterEach(() => http.verify());

	it('resolves release indexes and deduplicates immutable blobs across versions', () => {
		const values: string[] = [];
		service.loadComponentCode('1.0.2', 'button-01').subscribe((value) => values.push(value));
		http.expectOne('/registry/releases/1.0.2.json').flush({
			schemaVersion: 1,
			version: '1.0.2',
			files: { 'button-01': newHash },
		});
		http.expectOne(`/registry/blobs/aa/${newHash}.json`).flush({ content: 'shared source' });

		service.loadComponentCode('0.9.0', 'button-01').subscribe((value) => values.push(value));
		http.expectOne('/registry/releases/0.9.0.json').flush({
			schemaVersion: 1,
			version: '0.9.0',
			files: { 'button-01': newHash },
		});
		http.expectNone(`/registry/blobs/aa/${newHash}.json`);

		expect(values).toEqual(['shared source', 'shared source']);
	});

	it('shares concurrent requests and clears failed blob requests for retry', () => {
		const first = service.loadComponentCode('1.0.2', 'button-01');
		const second = service.loadComponentCode('1.0.2', 'button-01');
		expect(second).toBe(first);
		first.subscribe({ error: () => undefined });
		second.subscribe({ error: () => undefined });
		http.expectOne('/registry/releases/1.0.2.json').flush({
			schemaVersion: 1,
			version: '1.0.2',
			files: { 'button-01': oldHash },
		});
		http.expectOne(`/registry/blobs/bb/${oldHash}.json`).flush('failed', { status: 500, statusText: 'Failed' });

		service.loadComponentCode('1.0.2', 'button-01').subscribe();
		http.expectOne(`/registry/blobs/bb/${oldHash}.json`).flush({ content: 'retry source' });
	});

	it('preloads only manifest-available components and contains individual failures', () => {
		expect(() =>
			service.preloadComponents('1.0.2', ['button-01', 'button-02'], (id) => id === 'button-01'),
		).not.toThrow();
		http.expectOne('/registry/releases/1.0.2.json').flush({
			schemaVersion: 1,
			version: '1.0.2',
			files: { 'button-01': newHash },
		});
		http.expectOne(`/registry/blobs/aa/${newHash}.json`).flush('missing', { status: 404, statusText: 'Missing' });
	});

	it('rejects unsafe version and component path segments before requesting', () => {
		expect(() => service.loadComponentCode('../latest', 'button-01')).toThrowError(/Invalid SpartanUI/);
		expect(() => service.loadComponentCode('1.0.2', '../button-01')).toThrowError(/Invalid registry component/);
		http.expectNone(() => true);
	});
});
