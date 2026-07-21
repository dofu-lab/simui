import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-07',
	imports: [HlmButtonImports, HlmPopoverImports],
	template: `
		<hlm-popover sideOffset="5">
			<button hlmBtn hlmPopoverTrigger variant="outline" size="sm">
				<div class="flex items-center gap-2">
					<span class="inline-block size-4 rounded-full" [style.background]="selectedColor"></span>
					Pick a color
				</div>
			</button>
			<div hlmPopoverContent class="grid w-fit gap-4 p-2" *hlmPopoverPortal="let ctx">
				<div class="text-sm font-semibold">Choose a color</div>
				<div class="grid w-fit grid-cols-5 gap-2">
					@for (color of colors; track $index) {
						<button
							class="border-muted hover:ring-ring size-8 rounded-full border transition-colors hover:ring-2 focus:outline-none motion-reduce:transition-none"
							[style.background]="color"
							[attr.aria-label]="color"
							(click)="selectColor(color, ctx)"></button>
					}
				</div>
				@if (selectedColor) {
					<div class="text-muted-foreground text-center text-xs">Selected: {{ selectedColor }}</div>
				}
			</div>
		</hlm-popover>
	`,
})
export class Popover07Component {
	protected readonly colors: string[] = [
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
	protected selectedColor = '#60A5FA';

	public selectColor(color: string, ctx: { close: () => void }): void {
		this.selectedColor = color;
		ctx.close();
	}
}
