import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	// Authentication is restored from browser storage, so guards must run there.
	{ path: 'profile', renderMode: RenderMode.Client, headers: { 'Cache-Control': 'private, no-store' } },
	{ path: 'auth/google/callback', renderMode: RenderMode.Client, headers: { 'Cache-Control': 'private, no-store' } },
	{ path: 'payment/success', renderMode: RenderMode.Client, headers: { 'Cache-Control': 'private, no-store' } },
	{ path: '**', renderMode: RenderMode.Prerender },
];
