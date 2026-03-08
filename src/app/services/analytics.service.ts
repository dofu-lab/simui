import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import posthog from 'posthog-js';
import { environment } from '../../environments/environment';

export interface EventProperties {
	[key: string]: string | number | boolean | null | undefined;
}

@Injectable({
	providedIn: 'root',
})
export class AnalyticsService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly ngZone = inject(NgZone);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private initialized = false;

	init(): void {
		if (!this.isBrowser || !environment.posthogKey || this.initialized) return;

		// Run outside Angular zone to prevent PostHog listeners (session recording, etc.)
		// from triggering unnecessary change detection cycles.
		this.ngZone.runOutsideAngular(() => {
			posthog.init(environment.posthogKey, {
				api_host: environment.posthogHost,
				// Use PostHog's latest recommended defaults (2026-01-30 release)
				defaults: '2026-01-30',
				// Cookieless: use in-memory persistence so no cookie consent banner needed
				persistence: 'memory',
				// Disable automatic pageview capture — we handle it via router events
				capture_pageview: false,
				// Disable automatic performance capture — we handle it manually
				capture_performance: false,
				// Only enable session recordings in production
				disable_session_recording: !environment.production,
				// Respect user's Do Not Track preference
				respect_dnt: true,
			});
		});

		this.initialized = true;
	}

	/**
	 * Track a page view. Called after each NavigationEnd.
	 */
	trackPageView(url: string, title?: string): void {
		if (!this.isReady()) return;

		posthog.capture('$pageview', {
			$current_url: `${globalThis.location.origin}${url}`,
			page_title: title,
		});
	}

	/**
	 * Track a custom event with optional properties.
	 */
	trackEvent(event: string, properties?: EventProperties): void {
		if (!this.isReady()) return;
		posthog.capture(event, properties);
	}

	/**
	 * Identify an authenticated user so events are linked to their profile.
	 */
	identifyUser(userId: string, properties?: { email?: string; name?: string; role?: string }): void {
		if (!this.isReady()) return;
		posthog.identify(userId, properties);
	}

	/**
	 * Reset the current user identity (call on sign-out).
	 */
	resetUser(): void {
		if (!this.isReady()) return;
		posthog.reset();
	}

	/**
	 * Track an error with contextual metadata.
	 */
	captureException(error: unknown, properties?: EventProperties): void {
		if (!this.isReady()) return;

		let message: string;
		if (error instanceof Error) {
			message = error.message;
		} else {
			try {
				message = JSON.stringify(error) ?? 'Unknown error';
			} catch {
				message = 'Unknown error';
			}
		}
		const err = error instanceof Error ? error : new Error(message);
		posthog.capture('$exception', {
			$exception_message: err.message,
			$exception_type: err.name,
			$exception_stack_trace_raw: err.stack,
			...properties,
		});
	}

	/**
	 * Track a Core Web Vital metric.
	 */
	trackWebVital(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor'): void {
		if (!this.isReady()) return;
		posthog.capture('web_vital', { metric: name, value, rating });
	}

	private isReady(): boolean {
		return this.isBrowser && this.initialized;
	}
}
