import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse, AuthState, GoogleSignInRequest, UserDto } from '../models/auth.models';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly http = inject(HttpClient);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly apiUrl = `${environment.apiUrl}/auth`;

	// Reactive state using signals
	private readonly authState = signal<AuthState>({
		user: null,
		token: null,
		isAuthenticated: false,
	});

	// Public readonly signals
	readonly user = this.authState.asReadonly();
	readonly isAuthenticated = () => this.authState().isAuthenticated;
	readonly currentUser = () => this.authState().user;

	constructor() {
		// Load auth state from localStorage on init (browser only)
		this.loadAuthState();

		// Save auth state to localStorage when it changes (browser only)
		effect(() => {
			if (!this.isBrowser) return;

			const state = this.authState();
			if (state.token) {
				localStorage.setItem('auth_token', state.token);
				localStorage.setItem('user', JSON.stringify(state.user));
			} else {
				localStorage.removeItem('auth_token');
				localStorage.removeItem('user');
			}
		});
	}

	private loadAuthState(): void {
		if (!this.isBrowser) return;

		const token = localStorage.getItem('auth_token');
		const userJson = localStorage.getItem('user');

		if (token && userJson) {
			try {
				const user = JSON.parse(userJson) as UserDto;
				this.authState.set({
					user,
					token,
					isAuthenticated: true,
				});
			} catch {
				this.clearAuthState();
			}
		}
	}

	/**
	 * Initiates Google OAuth flow by redirecting to Google's consent screen
	 */
	signInWithGoogle(): void {
		if (!this.isBrowser) return;

		const params = new URLSearchParams({
			client_id: environment.googleClientId,
			redirect_uri: `${window.location.origin}/auth/google/callback`,
			response_type: 'code',
			scope: 'openid email profile',
			access_type: 'offline',
			prompt: 'consent',
		});

		window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
	}

	/**
	 * Handles the OAuth callback by exchanging the authorization code for a JWT token
	 */
	handleGoogleCallback(code: string): Observable<AuthResponse> {
		const request: GoogleSignInRequest = { code };

		return this.http.post<AuthResponse>(`${this.apiUrl}/google`, request).pipe(
			tap((response) => {
				this.authState.set({
					user: response.user,
					token: response.token,
					isAuthenticated: true,
				});
			}),
		);
	}

	signOut(): void {
		this.clearAuthState();
		window.location.reload();
	}

	private clearAuthState(): void {
		this.authState.set({
			user: null,
			token: null,
			isAuthenticated: false,
		});
	}

	getAuthToken(): string | null {
		return this.authState().token;
	}

	getAuthHeaders(): HttpHeaders {
		const token = this.getAuthToken();
		return new HttpHeaders({
			Authorization: token ? `Bearer ${token}` : '',
		});
	}
}
