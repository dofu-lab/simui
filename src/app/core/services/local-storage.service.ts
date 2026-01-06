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

		try {
			const item = localStorage.getItem(key);
			if (!item) {
				return null;
			}

			try {
				return JSON.parse(item) as T;
			} catch (parseError) {
				console.warn(`Failed to parse stored value for key "${key}":`, parseError);
				return item as unknown as T;
			}
		} catch (error) {
			console.error(`Failed to get item from localStorage for key "${key}":`, error);
			return null;
		}
	}

	setItem(key: string, value: unknown): boolean {
		if (!this._isBrowser) {
			return false;
		}

		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.error(`Failed to set item in localStorage for key "${key}":`, error);
			
			// Handle specific localStorage errors
			if (error instanceof Error) {
				if (error.name === 'QuotaExceededError') {
					console.error('localStorage quota exceeded. Consider clearing old data.');
				} else if (error.name === 'SecurityError') {
					console.error('localStorage access denied. Storage may be disabled.');
				}
			}
			return false;
		}
	}

	removeItem(key: string): boolean {
		if (!this._isBrowser) {
			return false;
		}

		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.error(`Failed to remove item from localStorage for key "${key}":`, error);
			return false;
		}
	}

	clear(): boolean {
		if (!this._isBrowser) {
			return false;
		}

		try {
			localStorage.clear();
			return true;
		} catch (error) {
			console.error('Failed to clear localStorage:', error);
			return false;
		}
	}
}
