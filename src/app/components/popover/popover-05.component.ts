import { Component } from '@angular/core';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-05',
	imports: [HlmButton, HlmInput, HlmPopoverImports, BrnPopoverImports],
	template: `
		<hlm-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Feedback</button>
			<div hlmPopoverContent class="grid gap-2" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">Send us feedback</div>
				<textarea class="min-h-[80px] w-full" hlmInput placeholder="Type your message here."></textarea>

				<div class="mt-1 flex justify-end">
					<button hlmBtn variant="default" size="sm" (click)="close(ctx)">Send feedback</button>
				</div>
			</div>
		</hlm-popover>
	`,
})
export class Popover05Component {
	public close(ctx: { close: () => void }): void {
		ctx.close();
	}
}
