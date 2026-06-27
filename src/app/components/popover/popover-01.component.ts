import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideListFilter } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

interface FilterState {
	realTime: boolean;
	topChannels: boolean;
	lastOrders: boolean;
	totalSpent: boolean;
}

type FilterKey = keyof FilterState;

@Component({
	selector: 'sim-popover-01',
	imports: [
		NgIcon,
		FormsModule,
		HlmButtonImports,
		HlmCheckboxImports,
		HlmIconImports,
		HlmLabelImports,
		HlmPopoverImports,
	],
	providers: [provideIcons({ lucideListFilter })],
	template: `
		<hlm-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative size-9" hlmPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideListFilter" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-36 gap-3 p-3" *hlmPopoverPortal="let ctx">
				<div class="text-muted-foreground text-xs font-semibold">Filters</div>
				<div class="space-y-2">
					<label for="real-time" class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox
							inputId="real-time"
							[ngModel]="filters().realTime"
							(ngModelChange)="updateFilter('realTime', $event)" />
						Real Time
					</label>
					<label for="top-channels" class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox
							inputId="top-channels"
							[ngModel]="filters().topChannels"
							(ngModelChange)="updateFilter('topChannels', $event)" />
						Top Channels
					</label>
					<label for="last-orders" class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox
							inputId="last-orders"
							[ngModel]="filters().lastOrders"
							(ngModelChange)="updateFilter('lastOrders', $event)" />
						Last Orders
					</label>
					<label for="total-spent" class="text-foreground flex items-center font-normal" hlmLabel>
						<hlm-checkbox
							inputId="total-spent"
							[ngModel]="filters().totalSpent"
							(ngModelChange)="updateFilter('totalSpent', $event)" />
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
		</hlm-popover>
	`,
})
export class Popover01Component {
	protected readonly filters = signal<FilterState>({
		realTime: false,
		topChannels: false,
		lastOrders: false,
		totalSpent: false,
	});

	protected updateFilter(key: FilterKey, checked: boolean): void {
		this.filters.update((filters) => ({ ...filters, [key]: checked }));
	}

	public clearFilters(ctx: { close: () => void }): void {
		this.filters.set({
			realTime: false,
			topChannels: false,
			lastOrders: false,
			totalSpent: false,
		});
		ctx.close();
	}

	public applyFilters(ctx: { close: () => void }): void {
		ctx.close();
	}
}
