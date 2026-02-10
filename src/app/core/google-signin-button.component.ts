import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-google-signin-button',
	imports: [CommonModule, HlmButton],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col items-center gap-2">
			<button hlmBtn variant="outline" size="sm" class="flex h-9 w-full gap-3" (click)="onSignInWithGoogle()">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_317_967)">
						<path
							d="M15.8442 8.18417C15.8442 7.64035 15.8001 7.09359 15.706 6.55859H8.16016V9.63925H12.4813C12.302 10.6328 11.7258 11.5117 10.8822 12.0703V14.0692H13.4602C14.9741 12.6758 15.8442 10.6181 15.8442 8.18417Z"
							fill="#4285F4" />
						<path
							d="M8.15974 16.0007C10.3174 16.0007 12.137 15.2923 13.4627 14.0694L10.8847 12.0705C10.1675 12.5585 9.2415 12.8348 8.16268 12.8348C6.0756 12.8348 4.30598 11.4268 3.67104 9.53369H1.01074V11.5943C2.36882 14.2958 5.13494 16.0007 8.15974 16.0007V16.0007Z"
							fill="#34A853" />
						<path
							d="M3.66852 9.53331C3.33341 8.53974 3.33341 7.46387 3.66852 6.4703V4.40967H1.01116C-0.123511 6.67019 -0.123511 9.33342 1.01116 11.5939L3.66852 9.53331V9.53331Z"
							fill="#FBBC04" />
						<path
							d="M8.15974 3.16644C9.30029 3.1488 10.4026 3.57798 11.2286 4.36578L13.5127 2.08174C12.0664 0.72367 10.1469 -0.0229773 8.15974 0.000539111C5.13494 0.000539111 2.36882 1.70548 1.01074 4.40987L3.6681 6.4705C4.3001 4.57449 6.07266 3.16644 8.15974 3.16644V3.16644Z"
							fill="#EA4335" />
					</g>
					<defs>
						<clipPath id="clip0_317_967">
							<rect width="16" height="16" fill="white" />
						</clipPath>
					</defs>
				</svg>
				Sign in with Google
			</button>
		</div>
	`,
})
export class GoogleSigninButtonComponent {
	private readonly authService = inject(AuthService);

	onSignInWithGoogle(): void {
		this.authService.signInWithGoogle();
	}
}
