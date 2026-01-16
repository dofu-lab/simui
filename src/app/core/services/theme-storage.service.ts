import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import {
	BUILT_IN_PRESETS,
	DEFAULT_PRESET,
	HISTORY_CLEANUP_THRESHOLD,
	MAX_HISTORY_SIZE,
} from '@/app/constants/theme-presets';
import {
	ColorScheme,
	ColorType,
	HistoryAction,
	HistoryValue,
	ThemeHistory,
	ThemePreset,
	ThemeStyleProps,
} from '@/app/types';
import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ThemeService } from './theme.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeStorageService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly localStorageService = inject(LocalStorageService);
	private readonly themeService = inject(ThemeService);

	public readonly history = signal<ThemeHistory[]>([]);
	public readonly colorType = signal<ColorType>('hex');
	public readonly appearance = signal<ColorScheme>('light');
	public readonly themePresets = signal<ThemePreset[]>([]);

	// Performance: Cache the current theme to avoid repeated array access
	public readonly currentTheme = computed(() => {
		const historyArray = this.history();
		const length = historyArray.length;
		return length > 0 ? (historyArray[length - 1]?.preset ?? DEFAULT_PRESET) : DEFAULT_PRESET;
	});

	public readonly currentThemeStyles = computed(() => {
		const currentTheme = this.currentTheme();
		const appearance = this.appearance();

		if (!currentTheme || !appearance) {
			return null;
		}

		return currentTheme.styles[appearance];
	});

	constructor() {
		this.loadFromStorage();

		effect(() => {
			const currentTheme = this.currentTheme();
			const appearance = this.appearance();

			if (currentTheme && appearance) {
				this.themeService.applyTheme(currentTheme, appearance);
			}
		});
	}

	public selectTheme(preset: ThemePreset): void {
		if (!preset || !preset.id || !preset.styles) {
			console.error('Invalid theme preset provided');
			return;
		}

		const historyValue: HistoryValue = {
			targetKey: 'selector',
			oldValue: this.currentTheme()?.id ?? '',
			newValue: preset.id,
			colorScheme: this.appearance() ?? 'light',
		};
		this.addHistory(preset, 'APPLY', historyValue);
	}

	public setColorType(colorType: ColorType): void {
		this.colorType.set(colorType);
		const success = this.localStorageService.setItem(STORAGE_KEYS.COLOR_TYPE, colorType);
		if (!success) {
			console.error('Failed to save color type to storage');
		}
	}

	public setAppearance(appearance: ColorScheme): void {
		this.appearance.set(appearance);
		const success = this.localStorageService.setItem(STORAGE_KEYS.APPEARANCE, appearance);
		if (!success) {
			console.error('Failed to save appearance to storage');
		}
		this.themeService.setAppearance(appearance);
	}

	public addHistoryEntry(entry: ThemeHistory): void {
		if (!entry || !entry.preset || !entry.timestamp || !entry.action) {
			console.error('Invalid history entry provided');
			return;
		}

		const currentHistory = this.history();
		let newHistory = [...currentHistory, entry];

		// Performance: Trim history if it exceeds maximum size
		if (newHistory.length > MAX_HISTORY_SIZE) {
			// Remove oldest entries, keeping the most recent ones
			const excessCount = newHistory.length - HISTORY_CLEANUP_THRESHOLD;
			newHistory = newHistory.slice(excessCount);
		}

		this.history.set(newHistory);
		const success = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, newHistory);
		if (!success) {
			console.error('Failed to save history to storage');
		}
	}

	public undoHistoryEntry(): void {
		const history = this.history();
		if (history.length > 1) {
			this.history.update((h) => h.slice(0, h.length - 1));
			const success = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, this.history());
			if (!success) {
				console.error('Failed to save history after undo');
			}
		}
	}

	public restore(historyItem: ThemeHistory): void {
		if (!historyItem || !historyItem.preset || !historyItem.timestamp) {
			console.error('Invalid history item provided');
			return;
		}

		const history = this.history();
		// Performance: Use findIndex once and cache the result
		const index = history.findIndex(
			(h) => h.timestamp === historyItem.timestamp && h.preset.id === historyItem.preset.id,
		);

		if (index !== -1) {
			// Performance: More efficient slice operation
			const restoredHistory = history.slice(0, index + 1);
			this.history.set(restoredHistory);
			const success = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, restoredHistory);
			if (!success) {
				console.error('Failed to save history after restore');
			}
		}
	}

	public addThemePreset(preset: ThemePreset): void {
		if (!preset || !preset.id || !preset.styles) {
			console.error('Invalid theme preset provided');
			return;
		}

		const currentPresets = this.themePresets();
		this.themePresets.set([...currentPresets, preset]);
	}

	public addHistory(preset: ThemePreset, action: HistoryAction, values?: HistoryValue): void {
		if (!preset || !action) {
			console.error('Invalid preset or action provided');
			return;
		}

		const newEntry: ThemeHistory = {
			values,
			preset,
			timestamp: Date.now(),
			action,
		};

		// Use addHistoryEntry for consistent history management
		this.addHistoryEntry(newEntry);
	}

	public changeColor(key: keyof ThemeStyleProps, value: string): void {
		let currentPreset = this.currentTheme();
		const appearance = this.appearance();

		if (!currentPreset || !appearance) {
			console.error('No current theme or appearance available');
			return;
		}

		if (!currentPreset.styles || !currentPreset.styles[appearance]) {
			console.error('Invalid theme structure');
			return;
		}

		if (currentPreset.source !== 'UNSAVED') {
			currentPreset = { ...currentPreset, id: crypto.randomUUID(), source: 'UNSAVED', label: 'Custom theme (unsaved)' };
		}

		const oldValue = currentPreset.styles[appearance][key];

		const newPreset: ThemePreset = {
			...currentPreset,
			styles: {
				...currentPreset.styles,
				[appearance]: {
					...currentPreset.styles[appearance],
					[key]: value,
				},
			},
		};

		const historyValue: HistoryValue = {
			targetKey: key,
			oldValue: oldValue ?? 'empty',
			newValue: value,
			colorScheme: appearance,
		};

		const action = key === 'radius' ? 'CHANGE_RADIUS' : 'CHANGE_COLOR';

		this.addHistory(newPreset, action, historyValue);
	}

	public reset(): void {
		const defaultPreset = BUILT_IN_PRESETS[0];
		if (!defaultPreset) {
			console.error('No default preset available');
			return;
		}

		const initialHistory: ThemeHistory = {
			preset: defaultPreset,
			timestamp: Date.now(),
			action: 'APPLY',
			values: {
				oldValue: '',
				newValue: defaultPreset.id,
				targetKey: 'selector',
				colorScheme: 'light',
			},
		};

		this.history.set([initialHistory]);
		this.appearance.set('light');
		this.colorType.set('hex');

		const historySuccess = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, [initialHistory]);
		const appearanceSuccess = this.localStorageService.setItem(STORAGE_KEYS.APPEARANCE, 'light');
		const colorTypeSuccess = this.localStorageService.setItem(STORAGE_KEYS.COLOR_TYPE, 'hex');

		if (!historySuccess || !appearanceSuccess || !colorTypeSuccess) {
			console.error('Failed to save reset data to storage');
		}
	}

	public updateTheme(theme: ThemePreset, action: HistoryAction): void {
		if (!theme || !theme.id || !action) {
			console.error('Invalid theme or action provided');
			return;
		}

		const themeIndex = this.themePresets().findIndex((t) => t.id === theme.id);

		if (themeIndex >= 0) {
			this.themePresets.update((themes) => themes.map((t) => (t.id === theme.id ? theme : t)));
		} else {
			this.themePresets.update((themes) => [...themes, theme]);
		}

		const newHistory: ThemeHistory = {
			preset: theme,
			timestamp: Date.now(),
			action,
			values: {
				oldValue: '',
				newValue: 'New theme saved',
				targetKey: 'selector',
				colorScheme: this.appearance() ?? 'light',
			},
		};
		this.addHistoryEntry(newHistory);
	}

	/**
	 * Performance: Clean up old history entries manually if needed
	 * This can be called periodically or when history grows too large
	 */
	public cleanupHistory(): void {
		const currentHistory = this.history();
		if (currentHistory.length > HISTORY_CLEANUP_THRESHOLD) {
			// Keep only the most recent entries
			const trimmedHistory = currentHistory.slice(-HISTORY_CLEANUP_THRESHOLD);
			this.history.set(trimmedHistory);
			const success = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, trimmedHistory);
			if (!success) {
				console.error('Failed to save cleaned history');
			}
		}
	}

	/**
	 * Performance: Get history statistics for monitoring
	 */
	public getHistoryStats(): { count: number; size: string; nearLimit: boolean } {
		const count = this.history().length;
		const sizeInBytes = JSON.stringify(this.history()).length;
		const sizeInKB = (sizeInBytes / 1024).toFixed(2);

		return {
			count,
			size: `${sizeInKB} KB`,
			nearLimit: count > HISTORY_CLEANUP_THRESHOLD,
		};
	}

	private loadFromStorage(): void {
		// Load themes
		this.themePresets.set(BUILT_IN_PRESETS);

		this.loadAppearanceFromStorage();
		this.loadColorTypeFromStorage();
		this.loadHistoryFromStorage();
	}

	private loadAppearanceFromStorage(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const savedAppearance = this.localStorageService.getItem<ColorScheme>(STORAGE_KEYS.APPEARANCE);
		if (savedAppearance) {
			this.appearance.set(savedAppearance);
		} else if (savedAppearance) {
			console.warn('Invalid appearance value in storage:', savedAppearance);
		}
	}

	private loadColorTypeFromStorage(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const savedColorType = this.localStorageService.getItem<ColorType>(STORAGE_KEYS.COLOR_TYPE);
		if (savedColorType) {
			this.colorType.set(savedColorType);
		} else if (savedColorType) {
			console.warn('Invalid color type value in storage:', savedColorType);
		}
	}

	private loadHistoryFromStorage(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const savedHistory = this.localStorageService.getItem<ThemeHistory[]>(STORAGE_KEYS.HISTORY);
		if (savedHistory && Array.isArray(savedHistory)) {
			// Performance: Check if history is too large and needs cleanup
			let historyToLoad = savedHistory;
			if (savedHistory.length > MAX_HISTORY_SIZE) {
				// Trim to prevent performance issues
				historyToLoad = savedHistory.slice(-HISTORY_CLEANUP_THRESHOLD);
				console.warn(
					`History was too large (${savedHistory.length} entries), trimmed to ${historyToLoad.length} entries`,
				);

				// Save the trimmed history back to storage
				this.localStorageService.setItem(STORAGE_KEYS.HISTORY, historyToLoad);
			}

			this.history.set(historyToLoad);
		} else if (savedHistory) {
			console.warn('Invalid history format in storage:', typeof savedHistory);
		}
	}
}
