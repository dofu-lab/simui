import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthService);
	const router = inject(Router);
	const token = authService.getAuthToken();

	// Clone the request and add the authorization header if token exists
	const authReq = token
		? req.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
				},
			})
		: req;

	return next(authReq).pipe(
		catchError((error) => {
			// Handle 401 Unauthorized errors
			if (error.status === 401) {
				authService.signOut();
				router.navigate(['/']);
			}
			return throwError(() => error);
		}),
	);
};
