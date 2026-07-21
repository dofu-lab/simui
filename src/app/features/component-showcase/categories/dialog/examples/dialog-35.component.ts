import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus, lucideUserRoundCheck } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-35',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmButtonImports, HlmDialogImports],
	providers: [provideIcons({ lucideUserRoundCheck, lucideMinus, lucidePlus })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button hlmDialogTrigger hlmBtn variant="outline">Purchase seats</button>
			<hlm-dialog-content class="w-[calc(100vw-2rem)] gap-0 p-0 sm:max-w-[400px]" *hlmDialogPortal="let ctx">
				<div class="border-input flex gap-4 border-b p-6">
					<div class="flex size-11 items-center justify-center rounded-lg border shadow-xs">
						<ng-icon hlm name="lucideUserRoundCheck" class="text-muted-foreground" />
					</div>
					<div class="flex flex-col gap-0.5">
						<p class="text-md font-semibold">Purchase seats</p>
						<p class="text-muted-foreground text-sm">Select how many seats you need.</p>
					</div>
				</div>
				<div class="flex flex-col gap-3 px-6 pt-4 pb-8">
					<div class="flex h-22.5 items-center justify-center">
						<div class="flex items-center gap-6">
							<button hlmBtn size="icon" variant="outline" (click)="decreaseSeats()" [disabled]="purchaseSeats() === 1">
								<ng-icon name="lucideMinus" class="text-muted-foreground text-xl" />
							</button>
							<span class="flex size-22.5 items-center justify-center text-center text-7xl font-semibold select-none">
								{{ purchaseSeats() }}
							</span>
							<button hlmBtn size="icon" variant="outline" (click)="increaseSeats()">
								<ng-icon name="lucidePlus" class="text-muted-foreground text-xl" />
							</button>
						</div>
					</div>
					<div class="border-input border-t"></div>
					<div class="flex flex-col gap-3">
						<div class="flex">
							<span class="flex-1 text-base font-semibold">Price per seat</span>
							<span class="text-muted-foreground text-base">$ {{ pricePerSeat() }}</span>
						</div>
						<div class="flex">
							<span class="flex-1 text-base font-semibold">Total</span>
							<span class="text-muted-foreground text-base">$ {{ totalPrice() }}</span>
						</div>
					</div>
				</div>
				<div class="border-input flex gap-2 border-t p-6">
					<button hlmBtn variant="outline" size="sm" class="flex-1" (click)="ctx.close()">Cancel</button>
					<button hlmBtn size="sm" class="flex-1" (click)="ctx.close()">Purchase seats</button>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog35Component {
	protected readonly purchaseSeats = signal(28);
	protected readonly pricePerSeat = signal(10);
	protected readonly totalPrice = computed(() => this.purchaseSeats() * this.pricePerSeat());

	protected increaseSeats(): void {
		this.purchaseSeats.set(this.purchaseSeats() + 1);
	}

	protected decreaseSeats(): void {
		if (this.purchaseSeats() > 1) {
			this.purchaseSeats.set(this.purchaseSeats() - 1);
		}
	}
}
