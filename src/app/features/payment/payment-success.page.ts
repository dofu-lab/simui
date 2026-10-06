import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { UserRole } from '@core/models/user-role';
import { AuthService } from '@core/services/auth.service';
import { MCP_ADVERTISEMENT_ENABLED } from '@core/tokens/mcp-advertisement';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheckCircle, lucideZap } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { repeat, take, takeWhile } from 'rxjs';

const MAX_POLL_ATTEMPTS = 10;
const POLL_INTERVAL_MS = 2000;

@Component({
	selector: 'sim-payment-success',
	imports: [HlmButtonImports, HlmIconImports, HlmSpinnerImports, NgIcon, RouterLink],
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
					@if (mcpAdvertised) {
						<p class="text-muted-foreground text-sm">
							Thank you for subscribing. Enjoy unlimited themes, full version history, and unlimited monthly MCP calls
							subject to the fair-use rate limit.
						</p>
					} @else {
						<p class="text-muted-foreground text-sm">
							Thank you for subscribing. Enjoy unlimited themes and full version history.
						</p>
					}
				</div>

				<div class="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
					<button hlmBtn routerLink="/theme-editor" class="gap-2">
						<ng-icon hlm name="lucideZap" size="sm" />
						Start creating themes
					</button>
					@if (mcpAdvertised) {
						<button hlmBtn variant="outline" routerLink="/profile" [queryParams]="{ tab: 'mcp' }">Set up MCP</button>
					} @else {
						<button hlmBtn variant="outline" routerLink="/profile">View your profile</button>
					}
				</div>
			}
		</div>
	`,
})
export class PaymentSuccessComponent implements OnInit {
	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly destroyRef = inject(DestroyRef);
	protected readonly mcpAdvertised = inject(MCP_ADVERTISEMENT_ENABLED);
	private redirectScheduled = false;

	protected readonly isRefreshing = signal(true);

	ngOnInit(): void {
		if (!isPlatformBrowser(this.platformId)) return;

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
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe({
				next: (response) => {
					const isPaid = response.user.role === UserRole.PaidUser || response.user.role === UserRole.Admin;
					if (isPaid) {
						this.isRefreshing.set(false);
						this.scheduleRedirect();
					}
				},
				error: () => {
					// Refresh failed — still show the success UI
					this.isRefreshing.set(false);
					this.scheduleRedirect();
				},
				complete: () => {
					// Max attempts reached without role update — show success anyway
					this.isRefreshing.set(false);
					this.scheduleRedirect();
				},
			});
	}

	private scheduleRedirect(): void {
		if (this.redirectScheduled) {
			return;
		}
		this.redirectScheduled = true;
		setTimeout(() => {
			this.router.navigate(['/theme-editor']);
		}, 3000);
	}
}
