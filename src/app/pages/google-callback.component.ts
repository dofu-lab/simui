import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-google-callback',
	imports: [],
	template: `
		<div class="flex min-h-screen flex-col items-center justify-center gap-4">
			<div class="flex items-center gap-3">
				<div class="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent"></div>
				<p class="text-muted-foreground text-lg">Signing you in...</p>
			</div>
			@if (errorMessage) {
				<div class="text-destructive mt-4 rounded-lg border border-red-300 bg-red-50 p-4">
					<p class="font-semibold">Sign-in failed</p>
					<p class="text-sm">{{ errorMessage }}</p>
					<button class="text-primary hover:text-primary/80 mt-2 text-sm underline" (click)="returnToHome()">
						Return to home
					</button>
				</div>
			}
		</div>
	`,
})
export class GoogleCallbackComponent implements OnInit {
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);
	private readonly authService = inject(AuthService);
	private readonly platformId = inject(PLATFORM_ID);

	errorMessage: string | null = null;

	ngOnInit(): void {
		// Authorization codes are single-use. During SSR the server-side render
		// would consume the code, then the browser hydration would try the same
		// code again causing an "invalid_grant" from Google. Skip on the server.
		if (!isPlatformBrowser(this.platformId)) return;

		// Extract the authorization code from the URL query parameters
		const code = this.route.snapshot.queryParamMap.get('code');
		const error = this.route.snapshot.queryParamMap.get('error');

		if (error) {
			// Handle OAuth errors (e.g., user cancelled the flow)
			this.errorMessage = 'Authentication was cancelled or failed. Please try again.';
			return;
		}

		if (!code) {
			this.errorMessage = 'No authorization code received. Please try again.';
			return;
		}

		// Exchange the code for tokens via the backend
		this.authService.handleGoogleCallback(code).subscribe({
			next: () => {
				// Successfully authenticated, navigate to home or dashboard
				this.router.navigate(['/']);
			},
			error: (err) => {
				console.error('Google authentication error:', err);
				this.errorMessage = err.error?.message || 'Failed to complete sign-in. Please try again.';
			},
		});
	}

	returnToHome(): void {
		this.router.navigate(['/']);
	}
}
