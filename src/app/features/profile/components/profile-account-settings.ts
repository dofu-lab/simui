import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PaymentHttpService, SubscriptionStatus } from '@core/services/payment-http.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideExternalLink, lucideZap } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-profile-account-settings',
	imports: [HlmBadgeImports, HlmButtonImports, HlmCardImports, HlmIconImports, HlmSpinnerImports, NgIcon, RouterLink],
	providers: [provideIcons({ lucideExternalLink, lucideZap })],
	template: `
		<div class="flex max-w-xl flex-col gap-4 pr-4">
			<div hlmCard class="flex flex-col gap-4 rounded-md border p-4 shadow-none">
				<div class="flex items-center justify-between">
					<h2 class="text-base font-semibold">Current plan</h2>
					@if (subscriptionLoading()) {
						<hlm-spinner class="size-4" />
					}
				</div>

				@if (subscriptionLoading()) {
					<p class="text-muted-foreground text-sm">Loading subscription info…</p>
				} @else if (subscription()?.isPaid) {
					<div class="flex items-center gap-2">
						<span hlmBadge class="bg-primary text-primary-foreground gap-1">
							<ng-icon hlm name="lucideZap" size="sm" />
							Pro
						</span>
						<span class="text-muted-foreground text-sm">{{ subscription()?.status }}</span>
					</div>
					<p class="text-muted-foreground text-sm">You have access to unlimited themes and full version history.</p>
					@if (subscription()?.customerPortalUrl) {
						<a
							hlmBtn
							variant="outline"
							class="w-fit gap-2"
							[href]="subscription()!.customerPortalUrl!"
							target="_blank"
							rel="noopener noreferrer">
							<ng-icon hlm name="lucideExternalLink" size="sm" />
							Manage subscription
						</a>
					}
				} @else {
					<div class="flex items-center gap-2">
						<span hlmBadge variant="outline">Free</span>
						<span class="text-muted-foreground text-sm">Limited features</span>
					</div>
					<ul class="text-muted-foreground flex flex-col gap-1 text-sm">
						<li>• Up to 5 saved themes</li>
						<li>• Last 3 days of version history</li>
					</ul>
					<button hlmBtn class="w-fit gap-2" routerLink="/pricing">
						<ng-icon hlm name="lucideZap" size="sm" />
						Upgrade to Pro
					</button>
				}
			</div>
		</div>
	`,
})
export class ProfileAccountSettings implements OnInit {
	private readonly paymentService = inject(PaymentHttpService);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly subscription = signal<SubscriptionStatus | null>(null);
	protected readonly subscriptionLoading = signal(false);

	public ngOnInit(): void {
		this.subscriptionLoading.set(true);
		this.paymentService
			.getSubscription()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (status) => {
					this.subscription.set(status);
					this.subscriptionLoading.set(false);
				},
				error: () => this.subscriptionLoading.set(false),
			});
	}
}
