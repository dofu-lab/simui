import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import { defaultPreset } from '@/app/constants/theme-presets';
import { HistoryValue, ThemeHistory, ThemePreset, ThemeStyleProps } from '@/app/types';
import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, RendererFactory2, computed, effect, inject, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ThemeStorageService } from './theme-storage.service';

export type ColorScheme = 'light' | 'dark';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _renderer = inject(RendererFactory2).createRenderer(null, null);
	private readonly _document = inject(DOCUMENT);
	private readonly _query = inject(MediaMatcher).matchMedia('(prefers-color-scheme: dark)');
	private readonly _localStorageService = inject(LocalStorageService);
	private readonly themeStorage = inject(ThemeStorageService);
	private readonly _darkMode = signal<ColorScheme>('light');
	private readonly _systemDarkMode = signal<ColorScheme>('light');
	private readonly initialPreset: ThemePreset = defaultPreset;
	public readonly history = signal<ThemeHistory[]>([]);
	public readonly currentPreset = signal<ThemePreset | undefined>(defaultPreset);
	public readonly currentPresetStyles = computed(() => {
		const currentPreset = this.currentPreset();
		const appearance = this.appearance();
		if (currentPreset && appearance) {
			const styles = currentPreset.styles[appearance];
			return styles;
		}
		return undefined;
	});

	public readonly appearance = this._darkMode.asReadonly();

	constructor() {
		this._systemDarkMode.set(this._query.matches ? 'dark' : 'light');
		this._query.onchange = (e: MediaQueryListEvent) => this._systemDarkMode.set(e.matches ? 'dark' : 'light');
		this.syncInitialStateFromLocalStorage();
		this.setupDarkModeEffect();

		// Load from local storage
		const savedPreset = this._localStorageService.getItem<ThemePreset>(STORAGE_KEYS.THEME_PRESET);
		if (savedPreset) {
			this.currentPreset.set(savedPreset);
		}

		// Initialize history
		const currentPreset = this.currentPreset();
		if (currentPreset) {
			this.initialPreset = currentPreset;
			this.history.set([{ preset: currentPreset, timestamp: Date.now() }]);
		}

		effect(() => {
			const currentPreset = this.currentPreset();
			const appearance = this.appearance();

			// Save to local storage
			if (currentPreset) {
				this._localStorageService.setItem(STORAGE_KEYS.THEME_PRESET, currentPreset);
			}

			if (currentPreset && appearance) {
				const styles = currentPreset.styles[appearance];
				for (const [key, value] of Object.entries(styles)) {
					this._document.documentElement.style.setProperty(`--${key}`, value as string);
				}
			}
		});
	}

	private syncInitialStateFromLocalStorage(): void {
		if (isPlatformBrowser(this._platformId)) {
			this._darkMode.set(this._localStorageService.getItem<ColorScheme>(STORAGE_KEYS.APPEARANCE) ?? 'light');
		}
	}
	private setupDarkModeEffect(): void {
		effect(() => {
			const darkMode = this._darkMode();

			if (darkMode === 'dark') {
				this._renderer.addClass(this._document.documentElement, 'dark');
			} else {
				if (this._document.documentElement.className.includes('dark')) {
					this._renderer.removeClass(this._document.documentElement, 'dark');
				}
			}
		});
	}

	public setAppearance(newMode: ColorScheme): void {
		this._localStorageService.setItem(STORAGE_KEYS.APPEARANCE, newMode);
		this._darkMode.set(newMode);
	}

	public setPreset(preset: ThemePreset): void {
		const historyValue: HistoryValue = {
			targetKey: 'selector',
			oldValue: this.currentPreset()?.id ?? '',
			newValue: preset.id,
			colorScheme: this.appearance() ?? 'light',
		};
		this.addHistory(preset, historyValue);

		this.currentPreset.set(preset);
	}

	public updateColor(key: keyof ThemeStyleProps, value: string): void {
		let currentPreset = this.currentPreset();
		const appearance = this.appearance();

		if (!currentPreset || !appearance) {
			return;
		}

		if (currentPreset.id) {
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
		this.addHistory(newPreset, historyValue);

		this.currentPreset.set(newPreset);
		this.themeStorage.updateTheme(newPreset);
	}

	public restore(historyItem: ThemeHistory): void {
		const history = this.history();
		const index = history.findIndex((h) => h === historyItem);
		if (index !== -1) {
			this.history.update((h) => h.slice(0, index + 1));
			this.currentPreset.set(historyItem.preset);
		}
	}

	public addHistory(preset: ThemePreset, values?: HistoryValue): void {
		this.history.update((history) => [...history, { values, preset, timestamp: Date.now() }]);
	}

	public undo(): void {
		if (this.history().length > 1) {
			this.history.update((history) => history.slice(0, history.length - 1));
			this.currentPreset.set(this.history()[this.history().length - 1].preset);
		}
	}

	public reset(): void {
		this.currentPreset.set(this.initialPreset);
		this.history.set([{ preset: this.initialPreset, timestamp: Date.now() }]);
	}
}
