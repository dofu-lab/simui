import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideListFilter } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-01',
	providers: [provideIcons({ lucideListFilter })],
	imports: [
		BrnPopover,
		BrnPopoverContent,
		BrnPopoverTrigger,
		FormsModule,
		HlmButton,
		HlmCheckbox,
		HlmIcon,
		HlmLabel,
		HlmPopoverContent,
		NgIcon,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative size-9" brnPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideListFilter" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-36 gap-3 p-3" *brnPopoverContent="let ctx">
				<div class="text-muted-foreground text-xs font-semibold">Filters</div>

				<div class="space-y-2">
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox [(ngModel)]="filters.realTime" />
						Real Time
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox [(ngModel)]="filters.topChannels" />
						Top Channels
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox [(ngModel)]="filters.lastOrders" />
						Last Orders
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox [(ngModel)]="filters.totalSpent" />
						Total Spent
					</label>
				</div>

				<hr class="border-muted -mx-4" />

				<div class="flex justify-between gap-3">
					<button hlmBtn variant="outline" size="sm" class="h-7 w-fit px-2 text-xs" (click)="clearFilters(ctx)">
						Clear
					</button>
					<button hlmBtn variant="default" size="sm" class="h-7 w-fit px-2 text-xs" (click)="applyFilters(ctx)">
						Apply
					</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover01Component {
	filters = {
		realTime: false,
		topChannels: false,
		lastOrders: false,
		totalSpent: false,
	};

	public clearFilters(ctx: { close: () => void }): void {
		this.filters = {
			realTime: false,
			topChannels: false,
			lastOrders: false,
			totalSpent: false,
		};
		ctx.close();
	}

	public applyFilters(ctx: { close: () => void }): void {
		console.log('Applied filters:', this.filters);
		ctx.close();
	}
}