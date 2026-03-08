import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideLoader, lucideX, lucideZap } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { toast } from 'ngx-sonner';
import { AuthService } from '../services/auth.service';
import { PaymentHttpService } from '../services/payment-http.service';

interface PlanFeature {
	label: string;
	included: boolean;
}

const FREE_FEATURES: PlanFeature[] = [
	{ label: 'Up to 5 saved themes', included: true },
	{ label: 'Last 3 days of history', included: true },
	{ label: 'All UI components', included: true },
	{ label: 'Unlimited saved themes', included: false },
	{ label: 'Full version history', included: false },
	{ label: 'Priority support', included: false },
];

const PRO_FEATURES: PlanFeature[] = [
	{ label: 'Unlimited saved themes', included: true },
	{ label: 'Full version history', included: true },
	{ label: 'All UI components', included: true },
	{ label: 'Priority support', included: true },
	{ label: 'Early access to new features', included: true },
	{ label: 'Cancel anytime', included: true },
];

@Component({
	selector: 'sim-pricing',
	imports: [HlmButton, HlmCardImports, HlmBadge, HlmIcon, HlmSpinner, NgIcon, RouterLink],
	providers: [provideIcons({ lucideCheck, lucideX, lucideZap, lucideLoader })],
	host: { class: 'flex flex-1 size-full' },
	template: `
		<div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-16">
			<!-- Header -->
			<div class="flex flex-col items-center gap-3 text-center">
				<span hlmBadge variant="outline" class="gap-1">
					<ng-icon hlm name="lucideZap" size="sm" class="text-yellow-500" />
					Pricing
				</span>
				<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h1>
				<p class="text-muted-foreground max-w-md text-base">Start for free. Upgrade when you need more power.</p>
			</div>

			<!-- Billing toggle -->
			<div class="bg-muted flex items-center gap-1 rounded-full p-1 text-sm">
				<button
					hlmBtn
					[variant]="billingCycle() === 'monthly' ? 'default' : 'ghost'"
					size="sm"
					class="rounded-full"
					(click)="billingCycle.set('monthly')">
					Monthly
				</button>
				<button
					hlmBtn
					[variant]="billingCycle() === 'yearly' ? 'default' : 'ghost'"
					size="sm"
					class="rounded-full"
					(click)="billingCycle.set('yearly')">
					Yearly
					<span hlmBadge variant="outline" class="ml-1.5 text-xs text-green-600">Save 17%</span>
				</button>
			</div>

			<!-- Plans grid -->
			<div class="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
				<!-- Free Plan -->
				<div hlmCard class="flex flex-col gap-6 p-6">
					<div class="flex flex-col gap-3">
						<p class="text-sm font-medium tracking-wider uppercase">Free</p>
						<div class="flex items-end gap-1">
							<span class="text-4xl font-bold">$0</span>
							<span class="text-muted-foreground pb-1 text-sm">/ month</span>
						</div>
						<p class="text-muted-foreground text-sm">Everything you need to get started.</p>
					</div>

					<ul class="flex flex-col gap-2">
						@for (feature of freeFeatures; track feature.label) {
							<li class="flex items-center gap-2 text-sm">
								@if (feature.included) {
									<ng-icon hlm name="lucideCheck" size="sm" class="shrink-0 text-green-500" />
								} @else {
									<ng-icon hlm name="lucideX" size="sm" class="text-muted-foreground/50 shrink-0" />
								}
								<span [class.text-muted-foreground]="!feature.included">{{ feature.label }}</span>
							</li>
						}
					</ul>

					<button hlmBtn variant="outline" class="mt-auto w-full" routerLink="/theme-editor">Get started free</button>
				</div>

				<!-- Pro Plan -->
				<div hlmCard class="flex flex-col gap-6 p-6">
					<div class="flex flex-col gap-3">
						<p class="text-sm font-medium tracking-wider uppercase">Pro</p>

						@if (billingCycle() === 'monthly') {
							<div class="flex items-end gap-1">
								<span class="text-4xl font-bold">$8</span>
								<span class="text-muted-foreground pb-1 text-sm">/ month</span>
							</div>
							<p class="text-muted-foreground text-sm">Billed $8 monthly.</p>
						} @else {
							<div class="flex items-end gap-1">
								<span class="text-4xl font-bold">$80</span>
								<span class="text-muted-foreground pb-1 text-sm">/ year</span>
							</div>
							<p class="text-muted-foreground text-sm">Billed $80 yearly — save $16.</p>
						}
					</div>

					<ul class="flex flex-col gap-2">
						@for (feature of proFeatures; track feature.label) {
							<li class="flex items-center gap-2 text-sm">
								<ng-icon hlm name="lucideCheck" size="sm" class="shrink-0 text-green-500" />
								<span>{{ feature.label }}</span>
							</li>
						}
					</ul>

					<button hlmBtn class="mt-auto w-full" [disabled]="isRedirecting()" (click)="onSubscribe()">
						@if (isRedirecting()) {
							<hlm-spinner class="mr-2 size-4" />
							Redirecting to checkout...
						} @else {
							Subscribe to Pro
						}
					</button>
				</div>
			</div>

			<!-- FAQ note -->
			<p class="text-muted-foreground text-center text-sm">
				Payments are securely processed by
				<a href="https://polar.sh" target="_blank" rel="noopener noreferrer" class="underline">Polar.sh</a>
				. Cancel your subscription anytime from your profile.
			</p>
		</div>
	`,
})
export class PricingComponent {
	private readonly authService = inject(AuthService);
	private readonly paymentService = inject(PaymentHttpService);
	private readonly router = inject(Router);

	protected readonly freeFeatures = FREE_FEATURES;
	protected readonly proFeatures = PRO_FEATURES;
	protected readonly isRedirecting = signal(false);
	protected readonly billingCycle = signal<'monthly' | 'yearly'>('monthly');

	protected onSubscribe(): void {
		if (!this.authService.isAuthenticated()) {
			toast('Sign in required', {
				description: 'Please sign in to subscribe to Pro.',
			});
			return;
		}

		this.isRedirecting.set(true);
		this.paymentService.createCheckout(this.billingCycle()).subscribe({
			next: (response) => {
				window.location.href = response.checkoutUrl;
			},
			error: () => {
				this.isRedirecting.set(false);
				toast('Something went wrong', {
					description: 'Could not create checkout session. Please try again.',
				});
			},
		});
	}
}
