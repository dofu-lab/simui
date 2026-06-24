import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-05',
	imports: [HlmButtonImports, HlmInputImports, HlmPopoverImports],
	template: `
		<hlm-popover sideOffset="5">
			<button hlmBtn hlmPopoverTrigger variant="outline" size="sm">Feedback</button>
			<div hlmPopoverContent class="grid gap-2" *hlmPopoverPortal="let ctx">
				<div class="text-sm font-semibold">Send us feedback</div>
				<textarea class="min-h-20 w-full" hlmInput placeholder="Type your message here."></textarea>

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
