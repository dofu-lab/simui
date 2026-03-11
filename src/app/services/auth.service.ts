import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { effect, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse, AuthState, GoogleSignInRequest, UserDto } from '../models/auth.models';
import { AnalyticsService } from './analytics.service';

// How many seconds before expiry to trigger a proactive silent refresh
const REFRESH_BUFFER_SECONDS = 5 * 60; // 5 minutes

// Max number of consecutive silent-refresh retries before forcing sign-out
const MAX_REFRESH_RETRIES = 3;

@Injectable({
	providedIn: 'root',
})
export class AuthService implements OnDestroy {
	private readonly http = inject(HttpClient);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly apiUrl = `${environment.apiUrl}/v1/auth`;

	// Reactive state using signals
	private readonly authState = signal<AuthState>({
		user: null,
		token: null,
		isAuthenticated: false,
	});

	private refreshTimerRef: ReturnType<typeof setTimeout> | null = null;
	private refreshRetryCount = 0;
	private readonly onVisibilityChange = () => this.handleVisibilityChange();

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

		// Detect when the user returns to the tab after it was backgrounded.
		// Browsers throttle/freeze setTimeout in inactive tabs, so the scheduled
		// refresh timer may drift significantly. Re-checking on visibility change
		// ensures we always have a valid token when the user is actually present.
		if (this.isBrowser) {
			document.addEventListener('visibilitychange', this.onVisibilityChange);
		}
	}

	ngOnDestroy(): void {
		if (this.isBrowser) {
			document.removeEventListener('visibilitychange', this.onVisibilityChange);
		}
		this.clearRefreshTimer();
	}

	/**
	 * Called whenever the tab becomes visible or hidden.
	 * On becoming visible, we correct for any timer drift caused by browser throttling:
	 * - If the token is already expired → attempt silent refresh immediately.
	 * - If the token is expiring soon → attempt silent refresh immediately.
	 * - If the token is still healthy → reschedule the timer with the corrected remaining time.
	 */
	private handleVisibilityChange(): void {
		if (document.visibilityState !== 'visible') return;
		if (!this.authState().isAuthenticated) return;

		const token = this.authState().token;
		if (!token) return;

		const remainingSeconds = this.getTokenRemainingSeconds(token);
		if (remainingSeconds <= REFRESH_BUFFER_SECONDS) {
			// Token already expired or expiring within the buffer window — refresh now.
			this.silentRefresh();
		} else {
			// Token is still healthy but the timer may have drifted — reschedule it
			// with the actual remaining time so it fires at the right moment.
			this.scheduleTokenRefresh(remainingSeconds);
		}
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
			// Guard against timer drift: the browser may have throttled this timer
			// (e.g. the tab was backgrounded). Re-check the actual remaining time
			// before deciding what to do.
			const token = this.authState().token;
			if (!token) return;

			const actualRemaining = this.getTokenRemainingSeconds(token);
			if (actualRemaining > REFRESH_BUFFER_SECONDS) {
				// Timer fired early (unusual) — reschedule with the corrected delay.
				this.scheduleTokenRefresh(actualRemaining);
			} else {
				this.silentRefresh();
			}
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
				this.refreshRetryCount = 0;
				this.authState.set({
					user: response.user,
					token: response.token,
					isAuthenticated: true,
				});
				this.scheduleTokenRefresh(response.expiresIn);
				cleanup();
			} else if (event.data?.type === 'silent-refresh-error') {
				cleanup();
				this.handleRefreshFailure();
			}
		};

		// Timeout fallback in case the iframe never responds
		const timeoutId = setTimeout(() => {
			cleanup();
			this.handleRefreshFailure();
		}, TIMEOUT_MS);

		window.addEventListener('message', onMessage);
		document.body.appendChild(iframe);
	}

	/**
	 * Called when a silent refresh attempt fails (error response or timeout).
	 * Retries up to MAX_REFRESH_RETRIES times with exponential back-off before
	 * forcing a sign-out. This handles transient network hiccups and the brief
	 * window where the browser is waking up from suspension.
	 */
	private handleRefreshFailure(): void {
		if (this.refreshRetryCount < MAX_REFRESH_RETRIES) {
			const backoffMs = Math.pow(2, this.refreshRetryCount) * 1000; // 1s, 2s, 4s
			this.refreshRetryCount++;
			this.refreshTimerRef = setTimeout(() => this.silentRefresh(), backoffMs);
		} else {
			// All retries exhausted — refresh token is likely expired; sign out.
			this.refreshRetryCount = 0;
			this.clearRefreshTimer();
			this.clearAuthState();
			this.router.navigate(['/']);
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
				this.analyticsService.identifyUser(response.user.id, {
					email: response.user.email,
					name: response.user.name ?? undefined,
					role: response.user.role,
				});
			}),
		);
	}

	signOut(): void {
		this.clearRefreshTimer();
		// Revoke refresh token server-side (fire-and-forget)
		this.http.post(`${this.apiUrl}/signout`, {}, { withCredentials: true }).subscribe({ error: () => {} });
		this.analyticsService.resetUser();
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
