import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheckCircle, lucideZap } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { repeat, take, takeWhile } from 'rxjs';
import { UserRole } from '../models/user-role';
import { AuthService } from '../services/auth.service';

const MAX_POLL_ATTEMPTS = 10;
const POLL_INTERVAL_MS = 2000;

@Component({
	selector: 'sim-payment-success',
	imports: [HlmButton, HlmIcon, HlmSpinner, NgIcon, RouterLink],
	providers: [provideIcons({ lucideCheckCircle, lucideZap })],
	host: { class: 'flex flex-1 size-full' },
	template: `
		<div class="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-6 px-4 py-20 text-center">
			@if (isRefreshing()) {
				<hlm-spinner class="size-10" />
				<p class="text-muted-foreground text-sm">Activating your Pro subscription…</p>
			} @else {
				<div class="flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
					<ng-icon hlm name="lucideCheckCircle" class="text-green-600 dark:text-green-400" size="xl" />
				</div>

				<div class="flex flex-col gap-2">
					<h1 class="text-2xl font-bold">You're now a Pro member!</h1>
					<p class="text-muted-foreground text-sm">
						Thank you for subscribing. Your account has been upgraded — enjoy unlimited themes and full version history.
					</p>
				</div>

				<div class="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
					<button hlmBtn routerLink="/theme-editor" class="gap-2">
						<ng-icon hlm name="lucideZap" size="sm" />
						Start creating themes
					</button>
					<button hlmBtn variant="outline" routerLink="/profile">View profile</button>
				</div>
			}
		</div>
	`,
})
export class PaymentSuccessComponent implements OnInit {
	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);

	protected readonly isRefreshing = signal(true);

	ngOnInit(): void {
		// Poll the refresh endpoint until the server reflects the new PaidUser role.
		// The payment webhook may arrive a few seconds after the redirect.
		let attempts = 0;

		this.authService
			.refreshSession()
			.pipe(
				repeat({ delay: POLL_INTERVAL_MS }),
				takeWhile((response) => {
					attempts++;
					const isPaid = response.user.role === UserRole.PaidUser || response.user.role === UserRole.Admin;
					return !isPaid && attempts < MAX_POLL_ATTEMPTS;
				}, true /* inclusive — emit the last value that passes the predicate */),
				take(MAX_POLL_ATTEMPTS),
			)
			.subscribe({
				next: (response) => {
					const isPaid = response.user.role === UserRole.PaidUser || response.user.role === UserRole.Admin;
					if (isPaid) {
						this.isRefreshing.set(false);
						setTimeout(() => {
							console.log('Redirecting to theme editor after successful refresh');
							this.router.navigate(['/theme-editor']);
						}, 3000);
					}
				},
				error: () => {
					// Refresh failed — still show the success UI
					this.isRefreshing.set(false);
					setTimeout(() => {
						console.log('Redirecting to theme editor after failed refresh');
						this.router.navigate(['/theme-editor']);
					}, 3000);
				},
				complete: () => {
					// Max attempts reached without role update — show success anyway
					this.isRefreshing.set(false);
					setTimeout(() => {
						console.log('Redirecting to theme editor after max attempts reached');
						this.router.navigate(['/theme-editor']);
					}, 3000);
				},
			});
	}
}
