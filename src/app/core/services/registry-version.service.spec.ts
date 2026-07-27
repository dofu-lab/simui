import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PLATFORM_ID, REQUEST } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DefaultUrlSerializer, NavigationEnd, Router, UrlTree } from '@angular/router';
import { STORAGE_KEYS } from '@shared/constants/storage-keys';
import { of, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { RegistryVersionService } from './registry-version.service';

const manifest = {
	schemaVersion: 5,
	latest: '1.0.2',
	releases: [
		{
			version: '1.0.2',
			publishedAt: '2026-07-26',
			indexPath: '/registry/releases/1.0.2.json',
			components: ['button-01', 'button-02'],
		},
		{
			version: '0.9.0',
			publishedAt: '2026-06-01',
			indexPath: '/registry/releases/0.9.0.json',
			components: ['button-01'],
		},
	],
	comparisons: [
		{
			fromVersion: '0.9.0',
			toVersion: '1.0.2',
			added: ['button-02'],
			updated: ['button-01'],
			removed: [],
		},
	],
	changelog: [
		{
			id: '2026-07-26-version-aware-source',
			date: '2026-07-26',
			spartanVersion: '1.0.2',
			type: 'feature',
			title: 'Version-aware source',
			description: 'Choose source for the selected SpartanUI release.',
		},
		{
			id: '2026-06-01-registry-baseline',
			date: '2026-06-01',
			spartanVersion: '0.9.0',
			type: 'improvement',
			title: 'Registry baseline',
			description: 'Established the first versioned source snapshot.',
		},
	],
};

class RouterStub {
	readonly events = new Subject<NavigationEnd>();
	readonly serializer = new DefaultUrlSerializer();
	url = '/components/button?theme=dark#button-01';
	navigated = true;
	readonly navigations: Array<{ url: string; replaceUrl: boolean }> = [];

	parseUrl(url: string): UrlTree {
		return this.serializer.parse(url);
	}

	serializeUrl(tree: UrlTree): string {
		return this.serializer.serialize(tree);
	}

	navigateByUrl(tree: UrlTree, options?: { replaceUrl?: boolean }): Promise<boolean> {
		this.url = this.serializeUrl(tree);
		this.navigations.push({ url: this.url, replaceUrl: options?.replaceUrl ?? false });
		return Promise.resolve(true);
	}
}

describe('RegistryVersionService', () => {
	let http: HttpTestingController;
	let router: RouterStub;
	let localStorageService: jasmine.SpyObj<LocalStorageService>;

	beforeEach(() => {
		router = new RouterStub();
		localStorageService = jasmine.createSpyObj<LocalStorageService>('LocalStorageService', [
			'getItem',
			'setItem',
			'removeItem',
		]);
		localStorageService.getItem.and.returnValue(null);
		TestBed.configureTestingModule({
			providers: [
				provideHttpClient(),
				provideHttpClientTesting(),
				{ provide: Router, useValue: router },
				{ provide: PLATFORM_ID, useValue: 'browser' },
				{ provide: LocalStorageService, useValue: localStorageService },
			],
		});
		http = TestBed.inject(HttpTestingController);
	});

	afterEach(() => http.verify());

	it('loads once, falls back to latest, and keeps the browser URL clean', async () => {
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		expect(service.status()).toBe('ready');
		expect(service.selectedVersion()).toBe('1.0.2');
		expect(router.navigations).toEqual([]);
		expect(service.isComponentAvailable('button-02')).toBeTrue();
		expect(service.selectedComparison()).toEqual(manifest.comparisons[0]);
	});

	it('consumes a published shared-link value into local storage and removes it from the browser URL', async () => {
		router.url = '/components/button?spartan=0.9.0&full=#button-01';
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		expect(service.selectedVersion()).toBe('0.9.0');
		expect(service.selectedComparison()).toBeNull();
		expect(localStorageService.setItem).toHaveBeenCalledWith(STORAGE_KEYS.SPARTAN_REGISTRY_VERSION, '0.9.0');
		expect(router.navigations).toEqual([
			{
				url: '/components/button?full=#button-01',
				replaceUrl: true,
			},
		]);

		await service.selectVersion('1.0.2');
		expect(localStorageService.setItem).toHaveBeenCalledWith(STORAGE_KEYS.SPARTAN_REGISTRY_VERSION, '1.0.2');
		expect(router.navigations).toHaveSize(1);
	});

	it('restores a saved selection when the URL does not specify a version', async () => {
		localStorageService.getItem.and.returnValue('0.9.0');
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		expect(service.selectedVersion()).toBe('0.9.0');
		expect(router.navigations).toEqual([]);
	});

	it('removes an unavailable saved version and falls back to latest', async () => {
		localStorageService.getItem.and.returnValue('9.9.9');
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		expect(service.selectedVersion()).toBe('1.0.2');
		expect(localStorageService.removeItem).toHaveBeenCalledWith(STORAGE_KEYS.SPARTAN_REGISTRY_VERSION);
	});

	it('synchronizes selection when browser history emits a completed navigation', async () => {
		router.url = '/components/button';
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		router.url = '/components/button?spartan=0.9.0';
		router.events.next(new NavigationEnd(2, router.url, router.url));
		await Promise.resolve();

		expect(service.selectedVersion()).toBe('0.9.0');
		expect(localStorageService.setItem).toHaveBeenCalledWith(STORAGE_KEYS.SPARTAN_REGISTRY_VERSION, '0.9.0');
		expect(router.navigations.at(-1)).toEqual({
			url: '/components/button',
			replaceUrl: true,
		});
	});

	it('waits for initial router navigation before normalizing a shell-level request', async () => {
		router.navigated = false;
		router.url = '/';
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush(manifest);
		await Promise.resolve();

		expect(router.navigations).toEqual([]);
		expect(service.selectedVersion()).toBeNull();

		router.navigated = true;
		router.url = '/components/button?theme=dark#button-01';
		router.events.next(new NavigationEnd(1, router.url, router.url));
		await Promise.resolve();

		expect(service.selectedVersion()).toBe('1.0.2');
		expect(router.navigations).toEqual([]);
	});

	it('enters an explicit error state for an invalid manifest', () => {
		const service = TestBed.inject(RegistryVersionService);
		http.expectOne('/registry/manifest.json').flush({ ...manifest, latest: '9.9.9' });

		expect(service.status()).toBe('error');
		expect(service.selectedVersion()).toBeNull();
		expect(service.releases()).toEqual([]);
	});
});

describe('RegistryVersionService SSR', () => {
	it('requests the manifest from the server origin and deterministically selects latest without navigation', () => {
		const router = new RouterStub();
		const http = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
		const localStorageService = jasmine.createSpyObj<LocalStorageService>('LocalStorageService', [
			'getItem',
			'setItem',
			'removeItem',
		]);
		http.get.and.returnValue(of(manifest));

		TestBed.configureTestingModule({
			providers: [
				{ provide: HttpClient, useValue: http },
				{ provide: Router, useValue: router },
				{ provide: PLATFORM_ID, useValue: 'server' },
				{ provide: REQUEST, useValue: new Request('https://simui.dev/components/button?spartan=0.9.0') },
				{ provide: LocalStorageService, useValue: localStorageService },
			],
		});

		const service = TestBed.inject(RegistryVersionService);

		expect(http.get).toHaveBeenCalledOnceWith('https://simui.dev/registry/manifest.json');
		expect(service.selectedVersion()).toBe('1.0.2');
		expect(router.navigations).toEqual([]);
		expect(localStorageService.getItem).not.toHaveBeenCalled();
	});
});
