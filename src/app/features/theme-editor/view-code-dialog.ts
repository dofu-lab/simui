import { Component, computed, inject, input } from '@angular/core';
import { ColorService } from '@core/services/color.service';
import { ThemeStorageService } from '@core/services/theme-storage.service';
import { CodePreviewComponent } from '@features/component-showcase/shared/code-preview.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBraces } from '@ng-icons/lucide';
import { ResizableSheetHandle } from '@shared/components/resizable-sheet-handle';
import { ThemePreset, ThemeStyleProps } from '@shared/types';
import { getShadowMap } from '@shared/utils/shadow.utils';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { ColorTypeSelector } from './color-type-selector';

@Component({
	selector: 'sim-theme-code-sheet',
	imports: [
		CodePreviewComponent,
		NgIcon,
		ColorTypeSelector,
		ResizableSheetHandle,
		HlmSheetImports,
		HlmIconImports,
		HlmButtonImports,
	],
	providers: [ColorService, provideIcons({ lucideBraces })],
	template: `
		<hlm-sheet side="right">
			<button hlmSheetTrigger hlmBtn size="sm" variant="ghost">
				<ng-icon hlm name="lucideBraces" size="sm" />
				View codes
			</button>
			<hlm-sheet-content
				*hlmSheetPortal="let ctx"
				class="flex max-h-dvh min-h-0 flex-col overflow-visible data-[side=right]:w-[calc(100%-(--spacing(12)))] data-[side=right]:max-w-sm data-[side=right]:sm:max-w-3xl">
				<sim-resizable-sheet-handle />
				<hlm-sheet-header class="flex-row items-center justify-between pr-15">
					<h3 hlmSheetTitle>Theme CSS code</h3>
					<sim-color-type />
				</hlm-sheet-header>
				<div class="spartan-scroll mb-4 flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-4">
					<sim-code-preview language="css" [code]="cssCode()" />
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
