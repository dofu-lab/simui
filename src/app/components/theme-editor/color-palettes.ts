import { ThemeStorageService } from '@/app/core/services';
import { Component, inject } from '@angular/core';
import { ColorCard } from './color-card';
import { ColorTypeSelector } from './color-type-selector';

@Component({
	selector: 'sim-color-palettes',
	imports: [ColorCard, ColorTypeSelector],
	template: `
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-2">
				<div class="flex items-end justify-between">
					<span class="text-md text-accent-foreground font-medium">Primary color</span>
					<sim-color-type />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.background" name="Background" colorKey="background" />
					<sim-color-card [color]="currentPresetStyles()?.foreground" name="Foreground" colorKey="foreground" />
					<sim-color-card [color]="currentPresetStyles()?.primary" name="Primary" colorKey="primary" />
					<sim-color-card
						[color]="currentPresetStyles()?.['primary-foreground']"
						name="Primary Foreground"
						colorKey="primary-foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Secondary and Accent</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.secondary" name="Secondary" colorKey="secondary" />
					<sim-color-card
						[color]="currentPresetStyles()?.['secondary-foreground']"
						name="Secondary Foreground"
						colorKey="secondary-foreground" />
					<sim-color-card [color]="currentPresetStyles()?.accent" name="Accent" colorKey="accent" />
					<sim-color-card
						[color]="currentPresetStyles()?.['accent-foreground']"
						name="Accent Foreground"
						colorKey="accent-foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<span class="text-md text-accent-foreground font-medium">UI Components</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.card" name="Card" colorKey="card" />
					<sim-color-card
						[color]="currentPresetStyles()?.['card-foreground']"
						name="Card Foreground"
						colorKey="card-foreground" />
					<sim-color-card [color]="currentPresetStyles()?.popover" name="Popover" colorKey="popover" />
					<sim-color-card
						[color]="currentPresetStyles()?.['popover-foreground']"
						name="Popover Foreground"
						colorKey="popover-foreground" />
					<sim-color-card [color]="currentPresetStyles()?.muted" name="Muted" colorKey="muted" />
					<sim-color-card
						[color]="currentPresetStyles()?.['muted-foreground']"
						name="Muted Foreground"
						colorKey="muted-foreground" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Utility & Form</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.border" name="Border" colorKey="border" />
					<sim-color-card [color]="currentPresetStyles()?.input" name="Input" colorKey="input" />
					<sim-color-card [color]="currentPresetStyles()?.ring" name="Ring" colorKey="ring" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<span class="text-md text-accent-foreground font-medium">Sidebar</span>
				<div class="grid grid-cols-4 gap-4">
					<sim-color-card [color]="currentPresetStyles()?.sidebar" name="Sidebar Background" colorKey="sidebar" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-foreground']"
						name="Sidebar Foreground"
						colorKey="sidebar-foreground" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-primary']"
						name="Sidebar Primary"
						colorKey="sidebar-primary" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-primary-foreground']"
						name="Sidebar Primary Foreground"
						colorKey="sidebar-primary-foreground" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-accent']"
						name="Sidebar Accent"
						colorKey="sidebar-accent" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-accent-foreground']"
						name="Sidebar Accent Foreground"
						colorKey="sidebar-accent-foreground" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-border']"
						name="Sidebar Border"
						colorKey="sidebar-border" />
					<sim-color-card
						[color]="currentPresetStyles()?.['sidebar-ring']"
						name="Sidebar Ring"
						colorKey="sidebar-ring" />
				</div>
			</div>
		</div>
	`,
})
export class ColorPalettes {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly currentPresetStyles = this.themeStorageService.currentThemeStyles;
}
