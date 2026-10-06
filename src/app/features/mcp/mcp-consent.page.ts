import { environment } from '@/environments/environment';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { McpAuthorizationRequestDto, McpConsentDecision } from '@core/models/mcp.models';
import { McpHttpService } from '@core/services/mcp-http.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideLockKeyhole, lucideShieldCheck } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

type ConsentError = 'expired' | 'consumed' | 'not-found' | 'invalid' | 'unavailable';

export function isSafeMcpContinuationUrl(candidate: string, apiUrl: string): boolean {
	try {
		const url = new URL(candidate);
		const expectedOrigin = new URL(apiUrl).origin;
		const keys = [...url.searchParams.keys()];
		return (
			url.origin === expectedOrigin &&
			url.pathname === '/connect/authorize/continue' &&
			!url.hash &&
			keys.length === 1 &&
			keys[0] === 'ticket' &&
			Boolean(url.searchParams.get('ticket'))
		);
	} catch {
		return false;
	}
}

@Component({
	selector: 'sim-mcp-consent',
	imports: [DatePipe, HlmAlertImports, HlmButtonImports, HlmCardImports, HlmIconImports, HlmSpinnerImports, NgIcon],
	providers: [provideIcons({ lucideCircleAlert, lucideLockKeyhole, lucideShieldCheck })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'flex min-h-full flex-1 items-center justify-center px-4 py-12' },
	template: `
		<main class="w-full max-w-lg" aria-labelledby="consent-title">
			<div hlmCard class="flex flex-col gap-6 p-6 sm:p-8">
				@if (loading()) {
					<div class="flex min-h-64 flex-col items-center justify-center gap-3" role="status">
						<hlm-spinner class="size-8" />
						<p class="text-muted-foreground text-sm">Loading authorization request…</p>
					</div>
				} @else if (error()) {
					<div class="flex min-h-64 flex-col items-center justify-center gap-5 text-center" role="alert">
						<ng-icon hlm name="lucideCircleAlert" size="xl" class="text-destructive" />
						<div class="space-y-2">
							<h1 id="consent-title" class="text-xl font-semibold">{{ errorTitle() }}</h1>
							<p class="text-muted-foreground text-sm">{{ errorDescription() }}</p>
						</div>
						@if (error() === 'unavailable') {
							<button hlmBtn variant="outline" (click)="loadRequest()">Try again</button>
						}
					</div>
				} @else if (request(); as consent) {
					<div class="flex flex-col items-center gap-3 text-center">
						<div class="bg-primary/10 flex size-12 items-center justify-center rounded-full">
							<ng-icon hlm name="lucideShieldCheck" size="lg" class="text-primary" />
						</div>
						<div>
							<h1 id="consent-title" class="text-xl font-semibold">Allow {{ consent.clientName }} to use SimUI?</h1>
							<p class="text-muted-foreground mt-1 text-sm">
								You are authorizing this connection as {{ consent.accountEmail }}.
							</p>
						</div>
					</div>

					<div hlmAlert>
						<ng-icon hlm name="lucideLockKeyhole" size="sm" />
						<h2 hlmAlertTitle>Requested access</h2>
						<div hlmAlertDescription>
							<ul class="mt-2 list-disc space-y-1 pl-5">
								@for (scope of consent.requestedScopes; track scope) {
									<li>{{ scopeDescription(scope) }}</li>
								}
							</ul>
						</div>
					</div>

					<p class="text-muted-foreground text-xs">
						This request expires {{ consent.expiresAtUtc | date: 'medium' }}. SimUI never shares your Google password,
						payment details, saved themes, or other account sessions with the MCP client.
					</p>

					@if (decisionError()) {
						<p class="text-destructive text-sm" role="alert">{{ decisionError() }}</p>
					}

					<div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
						<button hlmBtn variant="outline" [disabled]="deciding()" (click)="decide('deny')">
							{{ deciding() === 'deny' ? 'Denying…' : 'Deny' }}
						</button>
						<button hlmBtn [disabled]="deciding()" (click)="decide('allow')">
							@if (deciding() === 'allow') {
								<hlm-spinner class="mr-2 size-4" />
								Allowing…
							} @else {
								Allow access
							}
						</button>
					</div>
				}
			</div>
		</main>
	`,
})
export class McpConsentComponent implements OnInit {
	private readonly route = inject(ActivatedRoute);
	private readonly mcpService = inject(McpHttpService);
	private readonly destroyRef = inject(DestroyRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly requestId = this.route.snapshot.queryParamMap.get('requestId') ?? '';

	protected readonly request = signal<McpAuthorizationRequestDto | null>(null);
	protected readonly loading = signal(true);
	protected readonly error = signal<ConsentError | null>(null);
	protected readonly deciding = signal<McpConsentDecision | null>(null);
	protected readonly decisionError = signal<string | null>(null);

	ngOnInit(): void {
		this.loadRequest();
	}

	protected loadRequest(): void {
		if (!this.requestId) {
			this.loading.set(false);
			this.error.set('invalid');
			return;
		}

		this.loading.set(true);
		this.error.set(null);
		this.mcpService
			.getAuthorizationRequest(this.requestId)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (request) => {
					this.request.set(request);
					this.loading.set(false);
				},
				error: (error: HttpErrorResponse) => {
					this.loading.set(false);
					this.error.set(error.status === 404 ? 'not-found' : error.status === 410 ? 'expired' : 'unavailable');
				},
			});
	}

	protected decide(decision: McpConsentDecision): void {
		if (this.deciding()) return;
		this.deciding.set(decision);
		this.decisionError.set(null);
		this.mcpService
			.decideAuthorizationRequest(this.requestId, decision)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: ({ continuationUrl }) => {
					if (!isSafeMcpContinuationUrl(continuationUrl, environment.apiUrl)) {
						this.deciding.set(null);
						this.decisionError.set('The server returned an unsafe continuation address. Nothing was shared.');
						return;
					}
					if (isPlatformBrowser(this.platformId)) {
						window.location.assign(continuationUrl);
					}
				},
				error: (error: HttpErrorResponse) => {
					this.deciding.set(null);
					if (error.status === 409) this.error.set('consumed');
					else if (error.status === 410) this.error.set('expired');
					else this.decisionError.set('We could not save your decision. Please try again.');
				},
			});
	}

	protected scopeDescription(scope: string): string {
		return scope === 'mcp:components:read'
			? 'Read SimUI’s public component catalog and source files, and count successful component calls toward your quota.'
			: scope;
	}

	protected errorTitle(): string {
		switch (this.error()) {
			case 'expired':
				return 'This request has expired';
			case 'consumed':
				return 'This request was already used';
			case 'not-found':
				return 'Authorization request not found';
			case 'invalid':
				return 'Invalid authorization link';
			default:
				return 'Authorization is temporarily unavailable';
		}
	}

	protected errorDescription(): string {
		switch (this.error()) {
			case 'expired':
				return 'Return to your MCP client and start the connection again.';
			case 'consumed':
				return 'Return to your MCP client to continue or start a new connection.';
			case 'not-found':
			case 'invalid':
				return 'Check the link or restart setup from your MCP client.';
			default:
				return 'Check your connection and retry this request.';
		}
	}
}
