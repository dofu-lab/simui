import { Component } from '@angular/core';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-07',
	imports: [HlmButton, BrnPopover, BrnPopoverTrigger, BrnPopoverContent, HlmPopoverContent],
	template: `
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">
				<div class="flex items-center gap-2">
					<span class="inline-block h-4 w-4 rounded-full" [style.background]="selectedColor"></span>
					Pick a color
				</div>
			</button>

			<div hlmPopoverContent class="grid w-fit gap-4 p-2" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Choose a color</div>

				<div class="grid w-fit grid-cols-5 gap-2">
					@for (color of colors; track $index) {
						<button
							class="border-muted hover:ring-ring h-8 w-8 rounded-full border transition-colors hover:ring-2 focus:outline-none"
							[style.background]="color"
							[attr.aria-label]="color"
							(click)="selectColor(color, ctx)"></button>
					}
				</div>

				@if (selectedColor) {
					<div class="text-muted-foreground text-center text-xs">Selected: {{ selectedColor }}</div>
				}
			</div>
		</brn-popover>
	`,
})
export class Popover07Component {
	public readonly colors = [
		'#F87171',
		'#33BF24',
		'#60A5FA',
		'#A78BFA',
		'#F472B6',
		'#10B981',
		'#FACC15',
		'#F97316',
		'#ADDCF6',
		'#000000',
	];
	selectedColor = '#60A5FA';

	public selectColor(color: string, ctx: { close: () => void }): void {
		this.selectedColor = color;
		ctx.close();
	}
}