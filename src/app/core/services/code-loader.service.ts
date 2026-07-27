import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, PLATFORM_ID, Service } from '@angular/core';
import {
	isExactRegistryVersion,
	isRegistryComponentId,
	type RegistryReleaseIndex,
	validateRegistryReleaseIndex,
} from '@shared/types/registry-manifest';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, finalize, map, shareReplay, switchMap, tap } from 'rxjs/operators';

@Service()
export class CodeLoaderService {
	private readonly http = inject(HttpClient);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly codeCache = new Map<string, string>();
	private readonly blobRequests = new Map<string, Observable<string>>();
	private readonly indexRequests = new Map<string, Observable<RegistryReleaseIndex>>();
	private readonly componentRequests = new Map<string, Observable<string>>();

	loadComponentCode(version: string, componentId: string): Observable<string> {
		const key = this.registryKey(version, componentId);
		const pendingRequest = this.componentRequests.get(key);
		if (pendingRequest) return pendingRequest;

		const request$ = this.loadReleaseIndex(version).pipe(
			map((index) => {
				const hash = index.files[componentId];
				if (!hash) throw new Error(`Component "${componentId}" is unavailable for SpartanUI ${version}.`);
				return hash;
			}),
			switchMap((hash) => this.loadBlob(hash)),
			finalize(() => this.componentRequests.delete(key)),
			shareReplay({ bufferSize: 1, refCount: false }),
		);
		this.componentRequests.set(key, request$);
		return request$;
	}

	preloadComponents(
		version: string,
		componentIds: string[],
		isAvailable: (componentId: string) => boolean = () => true,
	): void {
		if (!isPlatformBrowser(this.platformId) || !isExactRegistryVersion(version)) return;
		for (const componentId of componentIds) {
			if (!isAvailable(componentId)) continue;
			this.loadComponentCode(version, componentId)
				.pipe(catchError(() => EMPTY))
				.subscribe();
		}
	}

	private loadReleaseIndex(version: string): Observable<RegistryReleaseIndex> {
		const existing = this.indexRequests.get(version);
		if (existing) return existing;
		const request$ = this.http.get<unknown>(`/registry/releases/${version}.json`).pipe(
			map((value) => validateRegistryReleaseIndex(value, version)),
			shareReplay({ bufferSize: 1, refCount: false }),
		);
		this.indexRequests.set(version, request$);
		return request$;
	}

	private loadBlob(hash: string): Observable<string> {
		const cached = this.codeCache.get(hash);
		if (cached !== undefined) return of(cached);
		const existing = this.blobRequests.get(hash);
		if (existing) return existing;
		const request$ = this.http.get<unknown>(`/registry/blobs/${hash.slice(0, 2)}/${hash}.json`).pipe(
			map((value) => {
				if (!isRecord(value) || typeof value['content'] !== 'string') {
					throw new Error(`Registry blob ${hash} is invalid.`);
				}
				return value['content'];
			}),
			tap((code) => this.codeCache.set(hash, code)),
			finalize(() => this.blobRequests.delete(hash)),
			shareReplay({ bufferSize: 1, refCount: false }),
		);
		this.blobRequests.set(hash, request$);
		return request$;
	}

	private registryKey(version: string, componentId: string): string {
		if (!isExactRegistryVersion(version)) throw new Error(`Invalid SpartanUI registry version "${version}".`);
		if (!isRegistryComponentId(componentId)) throw new Error(`Invalid registry component ID "${componentId}".`);
		return `${version}:${componentId}`;
	}
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}
