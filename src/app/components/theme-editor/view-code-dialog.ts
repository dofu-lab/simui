import { CodePreviewComponent } from '@/app/core/code-preview.component';
import { ColorService } from '@/app/core/services/color.service';
import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { getShadowMap } from '@/app/core/utils/shadow.utils';
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
	private readonly themeStorage = inject(ThemeStorageService);
	private readonly _colorService = inject(ColorService);

	public preset = input<ThemePreset>();

	protected cssCode = computed(() => {
		const preset = this.preset();
		if (!preset) return '';

		const formatStyles = (styles: ThemeStyleProps) => {
			return Object.entries(styles as unknown as Record<string, string>)
				.map(([key, value]) => {
					// Only convert colors, not other CSS properties like spacing, shadow, radius, etc.
					const isColorProperty = !key.includes('radius') && !key.includes('shadow') && !key.includes('spacing');
					const formattedValue = isColorProperty
						? this._colorService.convertColor(value, this.themeStorage.colorType())
						: value;
					return `\t--${key}: ${formattedValue};`;
				})
				.join('\n');
		};

		const formatShadowStyles = (styles: Partial<ThemeStyleProps>) => {
			const shadowMap = getShadowMap(styles);
			return Object.entries(shadowMap)
				.map(([key, value]) => `\t--${key}: ${value};`)
				.join('\n');
		};

		const lightStyles = preset.styles.light ? formatStyles(preset.styles.light) : '';
		const lightShadow = formatShadowStyles(getShadowMap(preset.styles.light));
		const darkStyles = preset.styles.dark ? formatStyles(preset.styles.dark) : '';
		const darkShadow = formatShadowStyles(getShadowMap(preset.styles.dark));

		return `:root {
	color-scheme: light;

${lightStyles}
${lightShadow}
}

:root.dark {
	color-scheme: dark;

${darkStyles}
${darkShadow}
}

@theme inline {
	--shadow-2xs: var(--shadow-2xs);
	--shadow-xs: var(--shadow-xs);
	--shadow-sm: var(--shadow-sm);
	--shadow: var(--shadow);
	--shadow-md: var(--shadow-md);
	--shadow-lg: var(--shadow-lg);
	--shadow-xl: var(--shadow-xl);
	--shadow-2xl: var(--shadow-2xl);
}
`;
	});
}
