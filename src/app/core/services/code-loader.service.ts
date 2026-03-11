import { HttpClient } from '@angular/common/http';
import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CodeLoaderService {
	private readonly http = inject(HttpClient);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly cache = new Map<string, string>();
	private readonly inFlight = new Map<string, Observable<string>>();

	loadComponentCode(componentName: string): Observable<string> {
		if (!componentName) return of('');

		if (this.cache.has(componentName)) {
			return of(this.cache.get(componentName)!);
		}

		if (this.inFlight.has(componentName)) {
			return this.inFlight.get(componentName)!;
		}

		const request$ = this.http.get<{ content: string }>(`/registry/${componentName}.json`).pipe(
			map((data) => data.content),
			tap((code) => {
				this.cache.set(componentName, code);
				this.inFlight.delete(componentName);
			}),
			catchError((error) => {
				console.error(`Error loading component code for ${componentName}:`, error);
				this.inFlight.delete(componentName);
				return of('');
			}),
			shareReplay(1),
		);

		this.inFlight.set(componentName, request$);
		return request$;
	}

	preloadComponents(componentNames: string[]): void {
		if (!isPlatformBrowser(this.platformId)) return;
		for (const name of componentNames) {
			if (!this.cache.has(name) && !this.inFlight.has(name)) {
				this.loadComponentCode(name).subscribe();
			}
		}
	}
}
