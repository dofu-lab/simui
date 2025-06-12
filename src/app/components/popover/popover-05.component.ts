import { Component } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-05',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
		HlmInputDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>Feedback</button>
			<div hlmPopoverContent class="grid gap-4" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Send us feedback</div>
				<textarea class="min-h-[80px] w-full" hlmInput placeholder="Type your message here."></textarea>

				<div class="flex justify-end">
					<button hlmBtn variant="default" size="sm" (click)="close(ctx)">Send feedback</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover05Component {
	close(ctx: { close: () => void }) {
		ctx.close();
	}
}

export const Popover05Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'sim-popover-05',
  imports: [
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmInputDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
      <button variant="outline" brnPopoverTrigger hlmBtn>
        Feedback
      </button>
      <div hlmPopoverContent class="grid gap-2" *brnPopoverContent="let ctx">
        <div class="text-sm font-semibold">Send us feedback</div>
        <textarea class="min-h-[80px] w-full" hlmInput placeholder="Type your message here."></textarea>

        <div class="flex justify-end gap-2">
          <button hlmBtn variant="default" size="sm" (click)="close(ctx)">Send feedback</button>
        </div>
      </div>
    </brn-popover>
  \`,
})
export class Popover05Component {
  close(ctx: { close: () => void }) {
    ctx.close();
  }
}
`;
