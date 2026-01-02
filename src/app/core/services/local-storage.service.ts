import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _isBrowser = isPlatformBrowser(this._platformId);

	getItem<T>(key: string): T | null {
		if (!this._isBrowser) {
			return null;
		}

		const item = localStorage.getItem(key);
		if (!item) {
			return null;
		}

		try {
			return JSON.parse(item) as T;
		} catch {
			return item as unknown as T;
		}
	}

	setItem(key: string, value: unknown): void {
		if (!this._isBrowser) {
			return;
		}

		if (typeof value === 'object') {
			localStorage.setItem(key, JSON.stringify(value));
		} else {
			localStorage.setItem(key, String(value));
		}
	}

	removeItem(key: string): void {
		if (!this._isBrowser) {
			return;
		}

		localStorage.removeItem(key);
	}

	clear(): void {
		if (!this._isBrowser) {
			return;
		}

		localStorage.clear();
	}
}
