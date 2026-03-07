import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse, AuthState, GoogleSignInRequest, UserDto } from '../models/auth.models';

// How many seconds before expiry to trigger a proactive silent refresh
const REFRESH_BUFFER_SECONDS = 5 * 60; // 5 minutes

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly http = inject(HttpClient);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly apiUrl = `${environment.apiUrl}/v1/auth`;

	// Reactive state using signals
	private readonly authState = signal<AuthState>({
		user: null,
		token: null,
		isAuthenticated: false,
	});

	private refreshTimerRef: ReturnType<typeof setTimeout> | null = null;

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
				this.authState.set({ user, token, isAuthenticated: true });

				// Schedule next refresh based on remaining token lifetime
				const remainingSeconds = this.getTokenRemainingSeconds(token);
				if (remainingSeconds <= 0) {
					// Already expired — attempt silent refresh immediately
					this.silentRefresh();
				} else {
					this.scheduleTokenRefresh(remainingSeconds);
				}
			} catch {
				this.clearAuthState();
			}
		}
	}

	/**
	 * Decodes the JWT payload and returns the number of seconds remaining until expiry.
	 * Returns 0 if the token is expired or unparseable.
	 */
	private getTokenRemainingSeconds(token: string): number {
		try {
			const payloadBase64 = token.split('.')[1];
			const payload = JSON.parse(atob(payloadBase64)) as { exp: number };
			const expMs = payload.exp * 1000;
			return Math.max(0, Math.floor((expMs - Date.now()) / 1000));
		} catch {
			return 0;
		}
	}

	/**
	 * Sets a timer to silently refresh the access token REFRESH_BUFFER_SECONDS before expiry.
	 */
	private scheduleTokenRefresh(expiresInSeconds: number): void {
		if (!this.isBrowser) return;
		this.clearRefreshTimer();

		const delaySeconds = Math.max(0, expiresInSeconds - REFRESH_BUFFER_SECONDS);
		const delayMs = delaySeconds * 1000;

		this.refreshTimerRef = setTimeout(() => {
			this.silentRefresh();
		}, delayMs);
	}

	private clearRefreshTimer(): void {
		if (this.refreshTimerRef !== null) {
			clearTimeout(this.refreshTimerRef);
			this.refreshTimerRef = null;
		}
	}

	/**
	 * Performs a silent refresh using a hidden iframe.
	 * The iframe loads /silent-refresh.html which calls the refresh endpoint
	 * with credentials (HttpOnly cookie) and posts the result back via postMessage.
	 */
	private silentRefresh(): void {
		const refreshUrl = `${this.apiUrl}/refresh`;
		const iframeSrc = `/silent-refresh.html?apiUrl=${encodeURIComponent(refreshUrl)}`;

		const iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		iframe.setAttribute('aria-hidden', 'true');
		iframe.src = iframeSrc;

		const TIMEOUT_MS = 10_000;

		const cleanup = () => {
			window.removeEventListener('message', onMessage);
			clearTimeout(timeoutId);
			iframe.remove();
		};

		const onMessage = (event: MessageEvent) => {
			// Only accept messages from our own origin
			if (event.origin !== window.location.origin) return;

			if (event.data?.type === 'silent-refresh-success') {
				const response = event.data.response as AuthResponse;
				this.authState.set({
					user: response.user,
					token: response.token,
					isAuthenticated: true,
				});
				this.scheduleTokenRefresh(response.expiresIn);
				cleanup();
			} else if (event.data?.type === 'silent-refresh-error') {
				// Refresh token is invalid/expired — force sign out
				this.clearRefreshTimer();
				this.clearAuthState();
				this.router.navigate(['/']);
				cleanup();
			}
		};

		// Timeout fallback in case the iframe never responds
		const timeoutId = setTimeout(() => {
			this.clearRefreshTimer();
			this.clearAuthState();
			this.router.navigate(['/']);
			cleanup();
		}, TIMEOUT_MS);

		window.addEventListener('message', onMessage);
		document.body.appendChild(iframe);
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
	 * Handles the OAuth callback by exchanging the authorization code for tokens
	 */
	handleGoogleCallback(code: string): Observable<AuthResponse> {
		const request: GoogleSignInRequest = { code };

		return this.http.post<AuthResponse>(`${this.apiUrl}/google`, request, { withCredentials: true }).pipe(
			tap((response) => {
				this.authState.set({
					user: response.user,
					token: response.token,
					isAuthenticated: true,
				});
				this.scheduleTokenRefresh(response.expiresIn);
			}),
		);
	}

	signOut(): void {
		this.clearRefreshTimer();
		// Revoke refresh token server-side (fire-and-forget)
		this.http.post(`${this.apiUrl}/signout`, {}, { withCredentials: true }).subscribe({ error: () => {} });
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

	/**
	 * Forces an immediate token refresh via the /refresh endpoint.
	 * Useful after events that change the user's server-side state (e.g. payment).
	 * Returns an Observable that emits the AuthResponse on success.
	 */
	refreshSession(): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(`${this.apiUrl}/refresh`, {}, { withCredentials: true }).pipe(
			tap((response) => {
				this.authState.set({
					user: response.user,
					token: response.token,
					isAuthenticated: true,
				});
				this.scheduleTokenRefresh(response.expiresIn);
			}),
		);
	}
}
