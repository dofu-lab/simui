import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CodeLoaderService {
	private readonly http = inject(HttpClient);
	private componentsData: { [key: string]: string } = {};
	private dataLoaded = false;
	private loadRequest$?: Observable<void>;

	private loadComponentsData(): Observable<void> {
		if (this.dataLoaded) {
			return of(void 0);
		}

		if (this.loadRequest$) {
			return this.loadRequest$;
		}

		this.loadRequest$ = this.http.get<{ [key: string]: string }>(`/assets/generated-code/components.json`).pipe(
			tap((data) => {
				this.componentsData = data;
				this.dataLoaded = true;
			}),
			map(() => void 0),
			catchError((error) => {
				console.error('Error loading components data:', error);
				this.componentsData = {};
				this.dataLoaded = true;
				return of(void 0);
			}),
			shareReplay(1),
		);

		return this.loadRequest$;
	}

	loadComponentCode(componentName: string): Observable<string> {
		return this.loadComponentsData().pipe(map(() => this.componentsData[componentName] || ''));
	}

	getComponentCode(componentName: string): string {
		return this.componentsData[componentName] || '';
	}
}
