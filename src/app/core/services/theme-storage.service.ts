import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import {
	BUILT_IN_PRESETS,
	DEFAULT_PRESET,
	HISTORY_CLEANUP_THRESHOLD,
	MAX_HISTORY_SIZE,
} from '@/app/constants/theme-presets';
import { ThemeHttpService } from '@/app/services';
import { AuthService } from '@/app/services/auth.service';
import { ColorType, HistoryAction, HistoryValue, ThemeHistory, ThemePreset, ThemeStyleProps } from '@/app/types';
import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppearanceService } from './appearance.service';
import { LocalStorageService } from './local-storage.service';
import { ThemeService } from './theme.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeStorageService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly localStorageService = inject(LocalStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly themeHttpService = inject(ThemeHttpService);
	private readonly appearanceService = inject(AppearanceService);
	private readonly authService = inject(AuthService);

	private readonly appearance = this.appearanceService.appearance;
	public readonly history = signal<ThemeHistory[]>([]);
	public readonly colorType = signal<ColorType>('hex');
	public readonly themePresets = signal<ThemePreset[]>(BUILT_IN_PRESETS);
	public readonly editMode = signal<{ themeId: string; originalTheme: ThemePreset } | null>(null);
	public readonly hasUnsavedChanges = signal<boolean>(false);
	public readonly currentTheme = signal<ThemePreset>(DEFAULT_PRESET);
	public readonly currentThemeStyles = computed(() => {
		const currentTheme = this.currentTheme();
		const appearance = this.appearance();

		if (!currentTheme || !appearance) {
			return null;
		}

		return currentTheme.styles[appearance];
	});

	public readonly themeResources = resource({
		params: () => ({
			isAuth: this.authService.isAuthenticated(),
		}),
		loader: async ({ params }) => {
			if (params.isAuth) {
				return firstValueFrom(this.themeHttpService.getThemes());
			}
			return [];
		},
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

		effect(() => {
			if (this.themeResources.hasValue()) {
				const userThemes = this.themeResources.value();
				// Always combine built-in themes with user themes from API
				this.themePresets.set([...BUILT_IN_PRESETS, ...userThemes]);
			}
		});
	}

	public selectTheme(preset: ThemePreset): void {
		if (!preset?.id || !preset.styles) {
			console.error('Invalid theme preset provided');
			return;
		}
		this.exitEditMode();

		// Clear history when selecting a new theme
		const initialHistory: ThemeHistory = {
			preset: preset,
			timestamp: Date.now(),
			action: 'APPLY',
			values: {
				oldValue: this.currentTheme().id,
				newValue: preset.id,
				targetKey: 'selector',
				colorScheme: 'light',
			},
		};

		this.currentTheme.set(preset);
		this.history.set([initialHistory]);
		this.localStorageService.setItem(STORAGE_KEYS.HISTORY, [initialHistory]);
	}

	public setColorType(colorType: ColorType): void {
		this.colorType.set(colorType);
		const success = this.localStorageService.setItem(STORAGE_KEYS.COLOR_TYPE, colorType);
		if (!success) {
			console.error('Failed to save color type to storage');
		}
	}

	public addHistoryEntry(entry: ThemeHistory): void {
		if (!entry?.preset || !entry.timestamp || !entry.action) {
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
		if (history.length === 1) {
			return;
		}

		const newHistory = history.slice(0, -1);
		this.history.set(newHistory);

		const lastEntry = newHistory.at(-1);
		if (lastEntry?.preset) {
			console.log('Reverting to theme from history:', lastEntry);
			this.currentTheme.set(lastEntry.preset);
		}

		const success = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, this.history());
		if (!success) {
			console.error('Failed to save history after undo');
		}
	}

	public restore(historyItem: ThemeHistory): void {
		if (!historyItem?.preset || !historyItem.timestamp) {
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
		if (!preset?.id || !preset.styles) {
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

		this.currentTheme.set(preset);

		const newEntry: ThemeHistory = {
			values,
			preset,
			timestamp: Date.now(),
			action,
		};

		// Use addHistoryEntry for consistent history management
		this.addHistoryEntry(newEntry);
	}

	public changeColor(key: keyof ThemeStyleProps, value: string, action: HistoryAction = 'CHANGE_COLOR'): void {
		let currentPreset = this.currentTheme();
		const appearance = this.appearance();

		if (!currentPreset || !appearance) {
			console.error('No current theme or appearance available');
			return;
		}

		if (!currentPreset.styles?.[appearance]) {
			console.error('Invalid theme structure');
			return;
		}

		// Mark as changed if in edit mode
		if (this.isInEditMode()) {
			this.markAsChanged();
		}

		if (currentPreset.source !== 'UNSAVED' && !this.isInEditMode()) {
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

		this.addHistory(newPreset, action, historyValue);
	}

	public reset(): void {
		const currentHistory = this.history();
		if (currentHistory.length === 0) {
			return;
		}

		// Keep only the first item in the history array
		const firstHistoryItem = currentHistory[0];
		const resetHistory = [firstHistoryItem];
		this.history.set(resetHistory);
		this.currentTheme.set(firstHistoryItem.preset);
		const historySuccess = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, resetHistory);

		if (!historySuccess) {
			console.error('Failed to save reset data to storage');
		}
	}

	public updateTheme(theme: ThemePreset, action: HistoryAction): void {
		if (!theme?.id || !action) {
			console.error('Invalid theme or action provided');
			return;
		}

		const themeIndex = this.themePresets().findIndex((t) => t.id === theme.id);

		if (themeIndex >= 0) {
			this.themePresets.update((themes) => themes.map((t) => (t.id === theme.id ? theme : t)));
		} else {
			this.themePresets.update((themes) => [...themes, theme]);
		}

		const initialHistory: ThemeHistory = {
			preset: theme,
			timestamp: Date.now(),
			action: 'APPLY',
			values: {
				oldValue: this.currentTheme().id,
				newValue: theme.id,
				targetKey: 'selector',
				colorScheme: 'light',
			},
		};

		this.history.set([initialHistory]);
		this.currentTheme.set(theme);
		const historySuccess = this.localStorageService.setItem(STORAGE_KEYS.HISTORY, [initialHistory]);
		if (!historySuccess) {
			console.error('Failed to save updated theme to storage');
		}
	}

	public async deleteTheme(theme: ThemePreset): Promise<void> {
		if (!theme?.id) {
			console.error('Invalid theme provided');
			return;
		}

		if (theme.source !== 'SAVED') {
			console.error('Can only delete saved themes');
			return;
		}

		try {
			// Call API to delete theme from server
			await firstValueFrom(this.themeHttpService.deleteTheme(theme.id));

			// Remove theme from local state
			this.themePresets.update((themes) => themes.filter((t) => t.id !== theme.id));

			// If the deleted theme was the current theme, reset to default
			if (this.currentTheme().id === theme.id) {
				this.selectTheme(DEFAULT_PRESET);
			}

			// If the deleted theme was being edited, exit edit mode
			const editModeData = this.editMode();
			if (editModeData?.themeId === theme.id) {
				this.exitEditMode();
			}
		} catch (error) {
			console.error('Failed to delete theme:', error);
			throw error;
		}
	}

	public enterEditMode(theme: ThemePreset): void {
		if (!theme?.id || theme.source !== 'SAVED') {
			console.error('Can only edit saved themes');
			return;
		}

		// Save the original theme for comparison
		this.editMode.set({
			themeId: theme.id,
			originalTheme: structuredClone(theme), // Deep clone
		});
		this.hasUnsavedChanges.set(false);
	}

	public exitEditMode(): void {
		this.editMode.set(null);
		this.hasUnsavedChanges.set(false);
	}

	public isInEditMode(): boolean {
		return this.editMode() !== null;
	}

	public markAsChanged(): void {
		if (this.isInEditMode()) {
			this.hasUnsavedChanges.set(true);
		}
	}

	public discardChanges(): void {
		const editModeData = this.editMode();
		if (editModeData?.originalTheme) {
			// Restore original theme
			this.selectTheme(editModeData.originalTheme);
			this.exitEditMode();
		}
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
		this.loadColorTypeFromStorage();
		this.loadHistoryFromStorage();
	}

	private loadColorTypeFromStorage(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const savedColorType = this.localStorageService.getItem<ColorType>(STORAGE_KEYS.COLOR_TYPE);
		if (savedColorType) {
			this.colorType.set(savedColorType);
		} else {
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
