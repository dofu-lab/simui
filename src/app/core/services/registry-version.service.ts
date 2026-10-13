import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { computed, DestroyRef, inject, PLATFORM_ID, REQUEST, Service, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { STORAGE_KEYS } from '@shared/constants/storage-keys';
import {
	isExactRegistryVersion,
	type RegistryManifest,
	type RegistryRelease,
	validateRegistryManifest,
} from '@shared/types/registry-manifest';
import { filter } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

export type RegistryManifestStatus = 'loading' | 'ready' | 'error';

@Service()
export class RegistryVersionService {
	private readonly http = inject(HttpClient);
	private readonly router = inject(Router);
	private readonly destroyRef = inject(DestroyRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly request = inject(REQUEST, { optional: true });
	private readonly localStorageService = inject(LocalStorageService);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly manifestState = signal<RegistryManifest | null>(null);
	private readonly selectedVersionState = signal<string | null>(null);
	private readonly statusState = signal<RegistryManifestStatus>('loading');
	private hasSynchronizedFromUrl = false;

	public readonly manifest = this.manifestState.asReadonly();
	public readonly selectedVersion = this.selectedVersionState.asReadonly();
	public readonly status = this.statusState.asReadonly();
	public readonly isLoading = computed(() => this.status() === 'loading');
	public readonly isReady = computed(() => this.status() === 'ready');
	public readonly hasError = computed(() => this.status() === 'error');
	public readonly releases = computed(() => this.manifest()?.releases ?? []);
	public readonly versions = computed(() => this.releases().map((release) => release.version));
	public readonly selectedRelease = computed<RegistryRelease | null>(() => {
		const version = this.selectedVersion();
		return this.releases().find((release) => release.version === version) ?? null;
	});
	public readonly selectedComparison = computed(
		() => this.manifest()?.comparisons.find((comparison) => comparison.toVersion === this.selectedVersion()) ?? null,
	);
	public readonly selectedIndexPath = computed(() => this.selectedRelease()?.indexPath ?? null);

	constructor() {
		this.router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe(() => {
				if (this.isReady() && this.isBrowser) {
					void this.synchronizeFromUrl();
				}
			});

		this.http
			.get<unknown>(this.manifestUrl())
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (value) => {
					try {
						const manifest = validateRegistryManifest(value);
						this.manifestState.set(manifest);
						this.statusState.set('ready');
						if (this.isBrowser) {
							if (this.router.navigated) {
								void this.synchronizeFromUrl();
							}
						} else {
							this.selectedVersionState.set(manifest.latest);
						}
					} catch {
						this.failManifest();
					}
				},
				error: () => this.failManifest(),
			});
	}

	public isComponentAvailable(componentId: string): boolean {
		return this.selectedRelease()?.components.includes(componentId) ?? false;
	}

	public async selectVersion(version: string): Promise<boolean> {
		if (!this.isBrowser || !this.isPublishedVersion(version)) {
			return false;
		}

		this.selectedVersionState.set(version);
		return true;
	}

	private async synchronizeFromUrl(): Promise<void> {
		const manifest = this.manifest();
		if (!manifest) return;

		const tree = this.router.parseUrl(this.router.url);
		const queryValue = tree.queryParams['spartan'];
		const requestedVersion = typeof queryValue === 'string' && isExactRegistryVersion(queryValue) ? queryValue : null;
		const isFirstSynchronization = !this.hasSynchronizedFromUrl;
		this.hasSynchronizedFromUrl = true;
		const currentVersion = this.selectedVersion();
		const selectedVersion =
			requestedVersion && this.isPublishedVersion(requestedVersion)
				? requestedVersion
				: !isFirstSynchronization && currentVersion && this.isPublishedVersion(currentVersion)
					? currentVersion
					: manifest.latest;

		if (isFirstSynchronization) {
			this.localStorageService.removeItem(STORAGE_KEYS.SPARTAN_REGISTRY_VERSION);
		}
		this.selectedVersionState.set(selectedVersion);

		if (queryValue !== undefined) {
			const queryParams = { ...tree.queryParams };
			delete queryParams['spartan'];
			tree.queryParams = queryParams;
			await this.router.navigateByUrl(tree, { replaceUrl: true });
		}
	}

	private isPublishedVersion(version: string): boolean {
		return isExactRegistryVersion(version) && this.releases().some((release) => release.version === version);
	}

	private manifestUrl(): string {
		if (this.isBrowser || !this.request) {
			return '/registry/manifest.json';
		}
		return new URL('/registry/manifest.json', this.request.url).toString();
	}

	private failManifest(): void {
		this.manifestState.set(null);
		this.selectedVersionState.set(null);
		this.statusState.set('error');
	}
}
