import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

export const mcpConsentGuard: CanActivateFn = (_route, state) => {
	const authService = inject(AuthService);
	const router = inject(Router);
	const platformId = inject(PLATFORM_ID);

	if (authService.isAuthenticated()) {
		return true;
	}

	if (isPlatformBrowser(platformId)) {
		authService.signInWithGoogle(state.url);
		return false;
	}

	return router.createUrlTree(['/']);
};
