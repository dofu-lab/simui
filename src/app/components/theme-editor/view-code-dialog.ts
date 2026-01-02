import { CodePreviewComponent } from '@/app/core/code-preview.component';
import { ColorService } from '@/app/core/services/color.service';
import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { ThemePreset, ThemeStyleProps } from '@/app/types';
import { Component, computed, inject, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBraces } from '@ng-icons/lucide';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { ColorTypeSelector } from './color-type-selector';

@Component({
	selector: 'sim-theme-code-sheet',
	standalone: true,
	imports: [HlmSheetImports, BrnSheetImports, CodePreviewComponent, NgIcon, HlmIcon, HlmButton, ColorTypeSelector],
	providers: [ColorService, provideIcons({ lucideBraces })],
	template: `
		<hlm-sheet side="right">
			<button brnSheetTrigger hlmBtn size="sm" variant="ghost">
				<ng-icon hlm name="lucideBraces" size="sm" />
				View codes
			</button>
			<hlm-sheet-content
				*brnSheetContent="let ctx"
				class="flex h-full w-[calc(100%-(--spacing(12)))] max-w-sm flex-col sm:max-w-3xl">
				<hlm-sheet-header>
					<h3 hlmSheetTitle>Theme CSS code</h3>
				</hlm-sheet-header>
				<div class="flex flex-1 flex-col gap-2 px-4 pb-4">
					<sim-color-type />
					<div class="h-full min-h-0 flex-1 overflow-auto">
						<code-preview [code]="cssCode()" />
					</div>
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
})
export class ThemeCodeSheet {
	private themeStorage = inject(ThemeStorageService);

	public preset = input<ThemePreset>();

	private _colorService = inject(ColorService);

	protected cssCode = computed(() => {
		const preset = this.preset();
		if (!preset) return '';

		const formatStyles = (styles: ThemeStyleProps) => {
			return Object.entries(styles as unknown as Record<string, string>)
				.map(([key, value]) => `\t--${key}: ${this._colorService.convertColor(value, this.themeStorage.colorType())};`)
				.join('\n');
		};

		const lightStyles = preset.styles.light ? formatStyles(preset.styles.light) : '';
		const darkStyles = preset.styles.dark ? formatStyles(preset.styles.dark) : '';

		return `:root {
	color-scheme: light;

${lightStyles}
}

:root.dark {
	color-scheme: dark;

${darkStyles}
}`;
	});
}
