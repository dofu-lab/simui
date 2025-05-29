import { Component } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-07',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>
				<div class="flex items-center gap-2">
					<span class="inline-block h-4 w-4 rounded-full border" [style.background]="selectedColor"></span>
					Pick a color
				</div>
			</button>

			<div hlmPopoverContent class="grid gap-4 p-2" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Choose a color</div>

				<div class="grid grid-cols-5 gap-2">
					@for (color of colors; track $index) {
						<button
							class="border-muted hover:ring-ring h-8 w-8 rounded-full border transition-colors hover:ring-2 focus:outline-none"
							[style.background]="color"
							(click)="selectColor(color, ctx)"
							[attr.aria-label]="color"></button>
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
	colors = [
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

	selectColor(color: string, ctx: { close: () => void }) {
		this.selectedColor = color;
		ctx.close();
	}
}

export const Popover07Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
  selector: 'sim-popover-07',
  imports: [
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
      <button variant="outline" brnPopoverTrigger hlmBtn>
        <div class="flex items-center gap-2">
          <span class="inline-block h-4 w-4 rounded-full border" [style.background]="selectedColor"></span>
          Pick a color
        </div>
      </button>

      <div hlmPopoverContent class="grid gap-4 p-2" *brnPopoverContent="let ctx">
        <div class="text-sm font-semibold">Choose a color</div>

        <div class="grid grid-cols-5 gap-2">
          @for (color of colors; track $index) {
            <button
              class="h-8 w-8 rounded-full border border-muted transition-colors hover:ring-2 hover:ring-ring focus:outline-none"
              [style.background]="color"
              (click)="selectColor(color, ctx)"
              [attr.aria-label]="color"
            ></button>
          }
        </div>

        @if (selectedColor) {
          <div class="text-xs text-muted-foreground text-center">
            Selected: {{ selectedColor }}
          </div>
        }
      </div>
    </brn-popover>
  \`,
})
export class Popover07Component {
  colors = ['#F87171', '#33BF24', '#60A5FA', '#A78BFA', '#F472B6', '#10B981', '#FACC15', '#F97316', '#ADDCF6','#000000'];
  selectedColor = '#60A5FA';

  selectColor(color: string, ctx: { close: () => void }) {
    this.selectedColor = color;
    ctx.close();
  }
}
`;
