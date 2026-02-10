import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import { ColorScheme } from '@/app/types';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ThemeService } from './theme.service';

@Injectable({
	providedIn: 'root',
})
export class AppearanceService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly localStorageService = inject(LocalStorageService);
	private readonly themeService = inject(ThemeService);

	public readonly appearance = signal<ColorScheme | undefined>(undefined);

	constructor() {
		this.loadAppearanceFromStorage();
	}

	public setAppearance(appearance: ColorScheme): void {
		this.appearance.set(appearance);
		const success = this.localStorageService.setItem(STORAGE_KEYS.APPEARANCE, appearance);
		if (!success) {
			console.error('Failed to save appearance to storage');
		}
		this.themeService.setAppearance(appearance);
	}

	private loadAppearanceFromStorage(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const savedAppearance = this.localStorageService.getItem<ColorScheme>(STORAGE_KEYS.APPEARANCE);
		if (savedAppearance && (savedAppearance === 'light' || savedAppearance === 'dark')) {
			this.appearance.set(savedAppearance);
		} else if (savedAppearance) {
			console.warn('Invalid appearance value in storage:', savedAppearance);
			// Keep the current default value ('light')
		}
		// If no saved appearance, keep the default 'light' value from signal initialization
	}
}
