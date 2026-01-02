import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import { defaultPreset } from '@/app/constants/theme-presets';
import { HistoryValue, ThemeHistory, ThemePreset, ThemeStyleProps } from '@/app/types';
import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LocalStorageService } from './local-storage.service';
import { ThemeStorageService } from './theme-storage.service';
import { ThemeService } from './theme.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeInjectorService {
	private readonly themeService = inject(ThemeService);
	private readonly themeStorage = inject(ThemeStorageService);
	private readonly _document = inject(DOCUMENT);
	private readonly _localStorageService = inject(LocalStorageService);
	private theme = this.themeService.darkMode$;
	private initialPreset: ThemePreset = defaultPreset;

	history = signal<ThemeHistory[]>([]);
	appearance = toSignal(this.theme);
	currentPreset = signal<ThemePreset | undefined>(defaultPreset);
	currentPresetStyles = computed(() => {
		const currentPreset = this.currentPreset();
		const appearance = this.appearance();
		if (currentPreset && appearance && appearance !== 'system') {
			const styles = currentPreset.styles[appearance];
			return styles;
		}
		return undefined;
	});

	constructor() {
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

			if (currentPreset && appearance && appearance !== 'system') {
				const styles = currentPreset.styles[appearance];
				for (const [key, value] of Object.entries(styles)) {
					this._document.documentElement.style.setProperty(`--${key}`, value as string);
				}
			}
		});
	}

	setPreset(preset: ThemePreset) {
		const historyValue: HistoryValue = {
			targetKey: 'selector',
			oldValue: this.currentPreset()?.id ?? '',
			newValue: preset.id,
			colorScheme: this.appearance() ?? 'light',
		};
		this.addHistory(preset, historyValue);

		this.currentPreset.set(preset);
	}

	updateColor(key: keyof ThemeStyleProps, value: string) {
		let currentPreset = this.currentPreset();
		const appearance = this.appearance();

		if (!currentPreset || !appearance || appearance === 'system') return;

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
