import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowDown, lucideArrowLeftRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface CurrencyDef {
	code: string;
	flag: string | null;
	rateToVND: number;
	decimals: string;
}

const CURRENCIES: CurrencyDef[] = [
	{ code: 'VND', flag: 'assets/flags/VN.svg', rateToVND: 1, decimals: '1.0-0' },
	{ code: 'USD', flag: 'assets/flags/US.svg', rateToVND: 25000, decimals: '1.2-2' },
	{ code: 'EUR', flag: null, rateToVND: 27000, decimals: '1.2-2' },
	{ code: 'JPY', flag: 'assets/flags/JP.svg', rateToVND: 165, decimals: '1.0-0' },
	{ code: 'AUD', flag: 'assets/flags/AU.svg', rateToVND: 16000, decimals: '1.2-2' },
];

@Component({
	selector: 'sim-card-12',
	imports: [NgIcon, DatePipe, CurrencyPipe, HlmIconImports, HlmCardImports, HlmButtonImports, HlmBadgeImports],
	providers: [provideIcons({ lucideArrowDown, lucideArrowLeftRight })],
	host: { class: 'w-full' },
	styles: [
		`
			@keyframes slotEnter {
				from {
					transform: translateY(110%);
					filter: blur(4px);
				}
				to {
					transform: translateY(0);
					filter: blur(0);
				}
			}
			@keyframes slotLeave {
				from {
					transform: translateY(0);
					filter: blur(0);
				}
				to {
					transform: translateY(-110%);
					filter: blur(4px);
				}
			}
			.slot-enter {
				animation: slotEnter 150ms 120ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
			}
			.slot-leave {
				animation: slotLeave 120ms cubic-bezier(0.55, 0, 1, 0.45) both;
			}
			@media (prefers-reduced-motion: reduce) {
				.slot-enter,
				.slot-leave {
					animation-duration: 1ms;
					animation-delay: 0ms;
				}
			}
		`,
	],
	template: `
		<section class="bg-muted mx-auto flex w-full max-w-120 flex-col gap-4 rounded-4xl px-1.5 shadow-none">
			<div hlmCardHeader class="flex flex-row items-center justify-between px-6 pt-4">
				<div class="flex items-center gap-2">
					<h3 hlmCardTitle>Convert</h3>
					<span hlmBadge variant="outline" class="text-accent-foreground py-3">
						<span class="relative overflow-hidden">
							<span class="invisible whitespace-nowrap" aria-hidden="true">
								1 {{ badgeSlot().sendCode }} = {{ badgeSlot().rate }} {{ badgeSlot().getCode }}
							</span>
							@for (slot of [badgeSlot()]; track slot.key) {
								<span
									[animate.enter]="'slot-enter'"
									[animate.leave]="'slot-leave'"
									class="absolute inset-0 flex items-center whitespace-nowrap">
									1 {{ slot.sendCode }} = {{ slot.rate }} {{ slot.getCode }}
								</span>
							}
						</span>
					</span>
				</div>
				<span hlmBadge variant="secondary" class="text-muted-foreground gap-1.5">
					<div class="size-1.5 rounded-full bg-emerald-500"></div>
					<span>Live</span>
					<span>·</span>
					<span>{{ currentDate | date: 'shortTime' }}</span>
				</span>
			</div>
			<section class="ring-background! w-full rounded-3xl py-4" hlmCard>
				<div hlmCardContent class="flex flex-col items-center gap-1 px-4">
					<div class="border-input bg-muted flex w-full items-center justify-between rounded-3xl border p-4">
						<div class="bg-background flex items-center gap-1 rounded-full border px-3 py-2">
							<div class="relative overflow-hidden">
								<!-- ghost grid: all currencies overlap so container holds max width -->
								<div class="invisible grid" aria-hidden="true">
									@for (c of currencies; track c.code) {
										<span class="col-start-1 row-start-1 flex items-center gap-1 whitespace-nowrap">
											<span class="size-5"></span>
											<span class="ml-2 text-lg font-semibold">{{ c.code }}</span>
										</span>
									}
								</div>
								@for (slot of [sendSlot()]; track slot.key) {
									<div
										[animate.enter]="'slot-enter'"
										[animate.leave]="'slot-leave'"
										class="absolute inset-0 flex items-center gap-1 whitespace-nowrap">
										@if (slot.currency.flag) {
											<img [src]="slot.currency.flag" class="size-5 rounded-sm" [alt]="slot.currency.code + ' flag'" />
										} @else {
											<span
												class="flex size-5 items-center justify-center rounded-full bg-blue-500/20 text-[9px] font-bold text-blue-600">
												EU
											</span>
										}
										<span class="ml-2 text-lg font-semibold">{{ slot.currency.code }}</span>
									</div>
								}
							</div>
							<button
								hlmBtn
								variant="ghost"
								size="icon-sm"
								class="rounded-full"
								(click)="cycleSendCurrency()"
								aria-label="Change send currency">
								<ng-icon name="lucideArrowDown" />
							</button>
						</div>
						<div class="flex flex-col items-end gap-0.5">
							<span class="text-muted-foreground text-right text-xs">YOU SEND</span>
							<div class="relative overflow-hidden">
								<span class="invisible text-2xl whitespace-nowrap tabular-nums" aria-hidden="true">
									{{
										sendAmountSlot().amount
											| currency: sendAmountSlot().code : 'symbol-narrow' : sendAmountSlot().decimals
									}}
								</span>
								@for (slot of [sendAmountSlot()]; track slot.key) {
									<span
										[animate.enter]="'slot-enter'"
										[animate.leave]="'slot-leave'"
										class="absolute inset-0 flex items-center justify-end text-right text-2xl whitespace-nowrap tabular-nums">
										{{ slot.amount | currency: slot.code : 'symbol-narrow' : slot.decimals }}
									</span>
								}
							</div>
						</div>
					</div>

					<button
						hlmBtn
						variant="outline"
						size="icon-lg"
						class="mx-auto rounded-full"
						(click)="swapCurrencies()"
						aria-label="Swap currencies">
						<ng-icon name="lucideArrowLeftRight" />
					</button>

					<div class="border-input bg-muted flex w-full items-center justify-between rounded-3xl border p-4">
						<div class="bg-background flex items-center gap-1 rounded-full border px-3 py-2">
							<div class="relative overflow-hidden">
								<!-- ghost grid: all currencies overlap so container holds max width -->
								<div class="invisible grid" aria-hidden="true">
									@for (c of currencies; track c.code) {
										<span class="col-start-1 row-start-1 flex items-center gap-1 whitespace-nowrap">
											<span class="size-5"></span>
											<span class="ml-2 text-lg font-semibold">{{ c.code }}</span>
										</span>
									}
								</div>
								@for (slot of [getSlot()]; track slot.key) {
									<div
										[animate.enter]="'slot-enter'"
										[animate.leave]="'slot-leave'"
										class="absolute inset-0 flex items-center gap-1 whitespace-nowrap">
										@if (slot.currency.flag) {
											<img [src]="slot.currency.flag" class="size-5 rounded-sm" [alt]="slot.currency.code + ' flag'" />
										} @else {
											<span
												class="flex size-5 items-center justify-center rounded-full bg-blue-500/20 text-[9px] font-bold text-blue-600">
												EU
											</span>
										}
										<span class="ml-2 text-lg font-semibold">{{ slot.currency.code }}</span>
									</div>
								}
							</div>
							<button
								hlmBtn
								variant="ghost"
								size="icon-sm"
								class="rounded-full"
								(click)="cycleGetCurrency()"
								aria-label="Change receive currency">
								<ng-icon name="lucideArrowDown" />
							</button>
						</div>
						<div class="flex flex-col items-end gap-0.5">
							<span class="text-muted-foreground text-right text-xs">THEY GET</span>
							<div class="relative overflow-hidden">
								<!-- ghost: sizes the container so absolute children are visible -->
								<span class="invisible text-2xl whitespace-nowrap tabular-nums" aria-hidden="true">
									{{ amountSlot().amount | currency: getCurrency().code : 'symbol-narrow' : getCurrency().decimals }}
								</span>
								@for (slot of [amountSlot()]; track slot.key) {
									<span
										[animate.enter]="'slot-enter'"
										[animate.leave]="'slot-leave'"
										class="absolute inset-0 flex items-center justify-end text-right text-2xl whitespace-nowrap tabular-nums">
										{{ slot.amount | currency: getCurrency().code : 'symbol-narrow' : getCurrency().decimals }}
									</span>
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div hlmCardFooter class="bg-muted items-center= flex-col px-6 pb-4">
				<div class="text-muted-foreground flex items-center gap-1 text-xs">
					<p>Tap a currency to switch - use the arrow to swap</p>
				</div>
			</div>
		</section>
	`,
})
export class Card12Component {
	protected readonly currentDate = new Date();
	protected readonly currencies = CURRENCIES;

	// Each slot bundles an animation key + the full currency so @for can track changes
	protected readonly sendSlot = signal({ key: 0, currency: CURRENCIES[0] });
	protected readonly getSlot = signal({ key: 0, currency: CURRENCIES[1] });
	protected readonly sendAmount = signal(2_000_000);
	protected readonly sendAmountSlot = signal({
		key: 0,
		amount: 2_000_000,
		code: CURRENCIES[0].code,
		decimals: CURRENCIES[0].decimals,
	});
	protected readonly amountSlot = signal({ key: 0, amount: 80 });
	protected readonly badgeSlot = signal({ key: 0, sendCode: 'VND', rate: '0.00004', getCode: 'USD' });

	protected readonly sendCurrency = computed(() => this.sendSlot().currency);
	protected readonly getCurrency = computed(() => this.getSlot().currency);

	protected readonly formattedRate = computed(() => {
		const rate = this.sendSlot().currency.rateToVND / this.getSlot().currency.rateToVND;
		return new Intl.NumberFormat('en', { maximumSignificantDigits: 4 }).format(rate);
	});

	protected cycleSendCurrency(): void {
		const curIdx = CURRENCIES.indexOf(this.sendSlot().currency);
		const getIdx = CURRENCIES.indexOf(this.getSlot().currency);
		let next = (curIdx + 1) % CURRENCIES.length;
		if (next === getIdx) next = (next + 1) % CURRENCIES.length;
		this.sendSlot.update((s) => ({ key: s.key + 1, currency: CURRENCIES[next] }));
		this.sendAmountSlot.update((s) => ({
			key: s.key + 1,
			amount: s.amount,
			code: CURRENCIES[next].code,
			decimals: CURRENCIES[next].decimals,
		}));
		this.triggerAnimation();
	}

	protected cycleGetCurrency(): void {
		const curIdx = CURRENCIES.indexOf(this.getSlot().currency);
		const sendIdx = CURRENCIES.indexOf(this.sendSlot().currency);
		let next = (curIdx + 1) % CURRENCIES.length;
		if (next === sendIdx) next = (next + 1) % CURRENCIES.length;
		this.getSlot.update((s) => ({ key: s.key + 1, currency: CURRENCIES[next] }));
		this.triggerAnimation();
	}

	protected swapCurrencies(): void {
		const sendCurrency = this.sendSlot().currency;
		const getCurrency = this.getSlot().currency;
		const prevGetAmount = this.amountSlot().amount;
		this.sendSlot.update((s) => ({ key: s.key + 1, currency: getCurrency }));
		this.getSlot.update((s) => ({ key: s.key + 1, currency: sendCurrency }));
		this.sendAmount.set(prevGetAmount);
		this.sendAmountSlot.update((s) => ({
			key: s.key + 1,
			amount: prevGetAmount,
			code: getCurrency.code,
			decimals: getCurrency.decimals,
		}));
		this.triggerAnimation();
	}

	private calcGetAmount(): number {
		return (this.sendAmount() * this.sendSlot().currency.rateToVND) / this.getSlot().currency.rateToVND;
	}

	private triggerAnimation(): void {
		const to = this.calcGetAmount();
		this.amountSlot.update((s) => ({ key: s.key + 1, amount: to }));
		const rate = this.sendSlot().currency.rateToVND / this.getSlot().currency.rateToVND;
		const formattedRate = new Intl.NumberFormat('en', { maximumSignificantDigits: 4 }).format(rate);
		this.badgeSlot.update((s) => ({
			key: s.key + 1,
			sendCode: this.sendSlot().currency.code,
			rate: formattedRate,
			getCode: this.getSlot().currency.code,
		}));
	}
}
