import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideListFilter } from '@ng-icons/lucide';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-01',
	providers: [provideIcons({ lucideListFilter })],
	imports: [
		BrnPopoverComponent,
		BrnPopoverContentDirective,
		BrnPopoverTriggerDirective,
		FormsModule,
		HlmButtonDirective,
		HlmCheckboxComponent,
		HlmIconDirective,
		HlmLabelDirective,
		HlmPopoverContentDirective,
		NgIcon,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative" brnPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideListFilter" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-50 gap-3" *brnPopoverContent="let ctx">
				<div class="text-muted-foreground text-xs font-semibold">Filters</div>

				<div class="space-y-2">
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.realTime" />
						Real Time
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.topChannels" />
						Top Channels
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.lastOrders" />
						Last Orders
					</label>
					<label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.totalSpent" />
						Total Spent
					</label>
				</div>

				<hr class="border-muted" />

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

	clearFilters(ctx: { close: () => void }) {
		this.filters = {
			realTime: false,
			topChannels: false,
			lastOrders: false,
			totalSpent: false,
		};
		ctx.close();
	}

	applyFilters(ctx: { close: () => void }) {
		console.log('Applied filters:', this.filters);
		ctx.close();
	}
}

export const Popover01Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideListFilter } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { FormsModule } from '@angular/forms';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'sim-popover-01',
  providers: [provideIcons({ lucideListFilter })],
  imports: [
    HlmButtonDirective,
    HlmIconDirective,
    NgIcon,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmButtonDirective,
    HlmCheckboxComponent,
    FormsModule,
    HlmLabelDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative" brnPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideListFilter" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-50 gap-3" *brnPopoverContent="let ctx">
				<div class="text-muted-foreground text-xs font-semibold">Filters</div>

				<div class="space-y-2">
          <label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.realTime" />
						Real Time
					</label>
          <label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.topChannels" />
						Top Channels
					</label>
          <label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.lastOrders" />
						Last Orders
					</label>
          <label class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox class="mr-2" [(ngModel)]="filters.totalSpent" />
						Total Spent
					</label>
				</div>

				<hr class="border-muted" />

				<div class="flex justify-between gap-3">
					<button hlmBtn variant="outline" size="sm" class="h-7 w-fit px-2 text-xs" (click)="clearFilters(ctx)">Clear</button>
					<button hlmBtn variant="default" size="sm" class="h-7 w-fit px-2 text-xs" (click)="applyFilters(ctx)">Apply</button>
				</div>
			</div>
		</brn-popover>
  \`,
})
export class Popover01Component {
  filters = {
    realTime: false,
    topChannels: false,
    lastOrders: false,
    totalSpent: false,
  };

  clearFilters(ctx: { close: () => void }) {
    this.filters = {
      realTime: false,
      topChannels: false,
      lastOrders: false,
      totalSpent: false,
    };
    ctx.close();
  }

  applyFilters(ctx: { close: () => void }) {
    console.log('Applied filters:', this.filters);
    ctx.close();
  }
}
`;
