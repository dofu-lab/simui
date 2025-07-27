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
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Feedback</button>
			<div hlmPopoverContent class="grid gap-2" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Send us feedback</div>
				<textarea class="min-h-[80px] w-full" hlmInput placeholder="Type your message here."></textarea>

				<div class="mt-1 flex justify-end">
					<button hlmBtn variant="default" size="sm" (click)="close(ctx)">Send feedback</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover05Component {
	public close(ctx: { close: () => void }): void {
		ctx.close();
	}
}

export const Popover05Code = `
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
	template: \`
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Feedback</button>
			<div hlmPopoverContent class="grid gap-2" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Send us feedback</div>
				<textarea class="min-h-[80px] w-full" hlmInput placeholder="Type your message here."></textarea>

				<div class="mt-1 flex justify-end">
					<button hlmBtn variant="default" size="sm" (click)="close(ctx)">Send feedback</button>
				</div>
			</div>
		</brn-popover>
	\`,
})
export class Popover05Component {
	public close(ctx: { close: () => void }): void {
		ctx.close();
	}
}
`;
