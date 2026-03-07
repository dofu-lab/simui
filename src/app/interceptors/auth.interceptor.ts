import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

// Auth endpoints that handle their own credentials via HttpOnly cookie
const COOKIE_AUTH_PATHS = ['/api/auth/refresh', '/api/auth/signout', '/api/auth/google'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthService);
	const router = inject(Router);
	const token = authService.getAuthToken();

	// Don't attach Bearer token to cookie-based auth endpoints
	const isCookieAuthRequest = COOKIE_AUTH_PATHS.some((path) => req.url.includes(path));

	// Clone the request and add the authorization header if token exists
	const authReq =
		token && !isCookieAuthRequest
			? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
			: req;

	return next(authReq).pipe(
		catchError((error) => {
			// Handle 401 Unauthorized errors — but not from cookie-based auth calls
			// (those handle their own errors inside AuthService.silentRefresh)
			if (error.status === 401 && !isCookieAuthRequest) {
				authService.signOut();
				router.navigate(['/']);
			}
			return throwError(() => error);
		}),
	);
};
