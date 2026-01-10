import { ThemeStorageService } from '@/app/core/services';
import { Component, inject } from '@angular/core';
import { ColorCard } from './color-card';

@Component({
	selector: 'sim-color-palettes',
	imports: [ColorCard],
	template: `
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Primary color</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.background" name="Background" />
					<sim-color-card [color]="currentPresetStyles()?.foreground" name="Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.primary" name="Primary" />
					<sim-color-card [color]="currentPresetStyles()?.['primary-foreground']" name="Primary Foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Secondary and Accent</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.secondary" name="Secondary" />
					<sim-color-card [color]="currentPresetStyles()?.['secondary-foreground']" name="Secondary Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.accent" name="Accent" />
					<sim-color-card [color]="currentPresetStyles()?.['accent-foreground']" name="Accent Foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<span class="text-md text-accent-foreground font-medium">UI Components</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.card" name="Card" />
					<sim-color-card [color]="currentPresetStyles()?.['card-foreground']" name="Card Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.popover" name="Popover" />
					<sim-color-card [color]="currentPresetStyles()?.['popover-foreground']" name="Popover Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.muted" name="Muted" />
					<sim-color-card [color]="currentPresetStyles()?.['muted-foreground']" name="Muted Foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Utility & Form</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.border" name="Border" />
					<sim-color-card [color]="currentPresetStyles()?.input" name="Input" />
					<sim-color-card [color]="currentPresetStyles()?.ring" name="Ring" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Sidebar</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.sidebar" name="Sidebar Background" />
					<sim-color-card [color]="currentPresetStyles()?.['sidebar-foreground']" name="Sidebar Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.['sidebar-primary']" name="Sidebar Primary" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-primary-foreground']"
						name="Sidebar Primary Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.['sidebar-accent']" name="Sidebar Accent" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-accent-foreground']"
						name="Sidebar Accent Foreground" />
					<sim-color-card [color]="currentPresetStyles()?.['sidebar-border']" name="Sidebar Border" />
					<sim-color-card [color]="currentPresetStyles()?.['sidebar-ring']" name="Sidebar Ring" />
				</div>
			</div>
		</div>
	`,
})
export class ColorPalettes {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly currentPresetStyles = this.themeStorageService.currentThemeStyles;
}
