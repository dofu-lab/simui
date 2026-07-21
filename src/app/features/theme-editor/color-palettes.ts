import { Component, inject } from '@angular/core';
import { ThemeStorageService } from '@core/services';
import { ThemeStyleProps } from '@shared/types';
import { ColorCard } from './color-card';
import { ColorPairCard } from './color-pair-card';
import { ColorTypeSelector } from './color-type-selector';

@Component({
	selector: 'sim-color-palettes',
	imports: [ColorCard, ColorPairCard, ColorTypeSelector],
	template: `
		<div class="flex flex-col gap-8">
			<header
				class="border-border bg-background/95 sticky top-0 z-10 -mx-4 flex flex-col gap-3 overflow-hidden rounded-t-xl border-b px-4 py-3 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 class="text-base font-semibold">Theme colors</h2>
					<p class="text-muted-foreground text-sm">Edit semantic color pairs and check their text contrast.</p>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-muted-foreground text-xs font-medium">Color format</span>
					<sim-color-type />
				</div>
			</header>

			<section class="flex flex-col gap-3" aria-labelledby="core-colors-heading">
				<div>
					<h3 id="core-colors-heading" class="text-sm font-semibold">Core colors</h3>
					<p class="text-muted-foreground text-xs">Page surfaces and primary actions.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-pair-card
						label="Page"
						previewLabel="Body text"
						surfaceName="Background"
						surfaceKey="background"
						[surfaceColor]="styles().background"
						foregroundName="Foreground"
						foregroundKey="foreground"
						[foregroundColor]="styles().foreground" />
					<sim-color-pair-card
						label="Primary"
						previewLabel="Primary action"
						surfaceName="Primary"
						surfaceKey="primary"
						[surfaceColor]="styles().primary"
						foregroundName="On primary"
						foregroundKey="primary-foreground"
						[foregroundColor]="styles()['primary-foreground']" />
				</div>
			</section>

			<section class="flex flex-col gap-3" aria-labelledby="supporting-colors-heading">
				<div>
					<h3 id="supporting-colors-heading" class="text-sm font-semibold">Supporting colors</h3>
					<p class="text-muted-foreground text-xs">Secondary actions, highlights, and quiet content.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-pair-card
						label="Secondary"
						previewLabel="Secondary action"
						surfaceName="Secondary"
						surfaceKey="secondary"
						[surfaceColor]="styles().secondary"
						foregroundName="On secondary"
						foregroundKey="secondary-foreground"
						[foregroundColor]="styles()['secondary-foreground']" />
					<sim-color-pair-card
						label="Accent"
						previewLabel="Highlighted item"
						surfaceName="Accent"
						surfaceKey="accent"
						[surfaceColor]="styles().accent"
						foregroundName="On accent"
						foregroundKey="accent-foreground"
						[foregroundColor]="styles()['accent-foreground']" />
					<sim-color-pair-card
						label="Muted"
						previewLabel="Supporting text"
						surfaceName="Muted"
						surfaceKey="muted"
						[surfaceColor]="styles().muted"
						foregroundName="Muted foreground"
						foregroundKey="muted-foreground"
						[foregroundColor]="styles()['muted-foreground']" />
				</div>
			</section>

			<section class="flex flex-col gap-3" aria-labelledby="component-colors-heading">
				<div>
					<h3 id="component-colors-heading" class="text-sm font-semibold">Component surfaces</h3>
					<p class="text-muted-foreground text-xs">Containers and floating overlays.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-pair-card
						label="Card"
						previewLabel="Card content"
						surfaceName="Card"
						surfaceKey="card"
						[surfaceColor]="styles().card"
						foregroundName="Card foreground"
						foregroundKey="card-foreground"
						[foregroundColor]="styles()['card-foreground']" />
					<sim-color-pair-card
						label="Popover"
						previewLabel="Overlay content"
						surfaceName="Popover"
						surfaceKey="popover"
						[surfaceColor]="styles().popover"
						foregroundName="Popover foreground"
						foregroundKey="popover-foreground"
						[foregroundColor]="styles()['popover-foreground']" />
				</div>
			</section>

			<section class="flex flex-col gap-3" aria-labelledby="control-colors-heading">
				<div>
					<h3 id="control-colors-heading" class="text-sm font-semibold">Controls</h3>
					<p class="text-muted-foreground text-xs">Borders, form fields, and keyboard focus.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-card [color]="styles().border" name="Border" colorKey="border" />
					<sim-color-card [color]="styles().input" name="Input" colorKey="input" />
					<sim-color-card [color]="styles().ring" name="Focus ring" colorKey="ring" />
				</div>
			</section>

			<section class="flex flex-col gap-3" aria-labelledby="feedback-colors-heading">
				<div>
					<h3 id="feedback-colors-heading" class="text-sm font-semibold">Feedback</h3>
					<p class="text-muted-foreground text-xs">Destructive actions and error states.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-pair-card
						label="Destructive"
						previewLabel="Delete item"
						surfaceName="Destructive"
						surfaceKey="destructive"
						[surfaceColor]="styles().destructive"
						foregroundName="On destructive"
						foregroundKey="destructive-foreground"
						[foregroundColor]="styles()['destructive-foreground']" />
				</div>
			</section>

			<section class="flex flex-col gap-3" aria-labelledby="sidebar-colors-heading">
				<div>
					<h3 id="sidebar-colors-heading" class="text-sm font-semibold">Sidebar</h3>
					<p class="text-muted-foreground text-xs">Navigation surfaces, actions, and controls.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-pair-card
						label="Sidebar"
						previewLabel="Navigation item"
						surfaceName="Sidebar background"
						surfaceKey="sidebar"
						[surfaceColor]="styles().sidebar"
						foregroundName="Sidebar foreground"
						foregroundKey="sidebar-foreground"
						[foregroundColor]="styles()['sidebar-foreground']" />
					<sim-color-pair-card
						label="Sidebar primary"
						previewLabel="Active item"
						surfaceName="Sidebar primary"
						surfaceKey="sidebar-primary"
						[surfaceColor]="styles()['sidebar-primary']"
						foregroundName="On sidebar primary"
						foregroundKey="sidebar-primary-foreground"
						[foregroundColor]="styles()['sidebar-primary-foreground']" />
					<sim-color-pair-card
						label="Sidebar accent"
						previewLabel="Hovered item"
						surfaceName="Sidebar accent"
						surfaceKey="sidebar-accent"
						[surfaceColor]="styles()['sidebar-accent']"
						foregroundName="On sidebar accent"
						foregroundKey="sidebar-accent-foreground"
						[foregroundColor]="styles()['sidebar-accent-foreground']" />
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					<sim-color-card [color]="styles()['sidebar-border']" name="Sidebar border" colorKey="sidebar-border" />
					<sim-color-card [color]="styles()['sidebar-ring']" name="Sidebar focus ring" colorKey="sidebar-ring" />
				</div>
			</section>
		</div>
	`,
})
export class ColorPalettes {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected styles(): ThemeStyleProps {
		return this.themeStorageService.currentThemeStyles()!;
	}
}
