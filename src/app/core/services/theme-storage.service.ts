import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import { builtInPresets } from '@/app/constants/theme-presets';
import { ColorType, ThemePreset } from '@/app/types';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeStorageService {
	private readonly _localStorageService = inject(LocalStorageService);
	private _themes = signal<ThemePreset[]>([]);
	private _colorType = signal<ColorType>('hex');

	public themes = computed(() => this._themes());
	public colorType = computed(() => this._colorType());

	constructor() {
		this.loadThemes();

		const colorType = this._localStorageService.getItem<ColorType>(STORAGE_KEYS.COLOR_TYPE);
		if (colorType) {
			this._colorType.set(colorType);
		}
	}

	public loadThemes() {
		this._themes.set(builtInPresets);
	}

	public updateTheme(theme: ThemePreset) {
		const themeIndex = this.themes().findIndex((t) => t.id === theme.id);

		if (themeIndex >= 0) {
			this._themes.update((themes) => themes.map((t) => (t.id === theme.id ? theme : t)));
		} else {
			this._themes.update((themes) => [...themes, theme]);
		}
	}

	public removeTheme(themeId: string) {
		this._themes.update((themes) => themes.filter((t) => t.id !== themeId));
	}

	public setColorType(colorType: ColorType) {
		this._colorType.set(colorType);
		this._localStorageService.setItem(STORAGE_KEYS.COLOR_TYPE, colorType);
	}
}
