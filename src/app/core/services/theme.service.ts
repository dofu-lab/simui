import { ColorScheme, ThemePreset } from '@/app/types';
import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, inject } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private readonly _renderer = inject(RendererFactory2).createRenderer(null, null);
	private readonly _document = inject(DOCUMENT);

	public setAppearance(appearance: ColorScheme): void {
		if (appearance === 'dark') {
			this._renderer.addClass(this._document.documentElement, 'dark');
		} else {
			if (this._document.documentElement.className.includes('dark')) {
				this._renderer.removeClass(this._document.documentElement, 'dark');
			}
		}
	}

	public applyTheme(theme: ThemePreset, appearance: ColorScheme): void {
		if (theme && appearance) {
			const styles = theme.styles[appearance];
			for (const [key, value] of Object.entries(styles)) {
				this._document.documentElement.style.setProperty(`--${key}`, value as string);
			}
		}
	}

	public applyRadius(radius: string): void {
		this._document.documentElement.style.setProperty(`--radius`, radius);
	}
}
