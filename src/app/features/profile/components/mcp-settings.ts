import { DatePipe, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	ElementRef,
	inject,
	OnInit,
	PLATFORM_ID,
	signal,
	viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { McpConnectionDto, McpSetupClientDto, McpStatusDto } from '@core/models/mcp.models';
import { McpHttpService } from '@core/services/mcp-http.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCable,
	lucideCheck,
	lucideClipboard,
	lucideRefreshCw,
	lucideTriangleAlert,
	lucideUnplug,
	lucideZap,
} from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'sim-mcp-settings',
	imports: [
		DatePipe,
		RouterLink,
		HlmAlertImports,
		HlmBadgeImports,
		HlmButtonImports,
		HlmCardImports,
		HlmDialogImports,
		HlmIconImports,
		HlmProgressImports,
		HlmSpinnerImports,
		HlmTabsImports,
		NgIcon,
	],
	providers: [
		provideIcons({
			lucideCable,
			lucideCheck,
			lucideClipboard,
			lucideRefreshCw,
			lucideTriangleAlert,
			lucideUnplug,
			lucideZap,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<section class="flex max-w-3xl flex-col gap-5 px-2 pr-4 pb-8 sm:px-0" aria-labelledby="mcp-settings-title">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h1 id="mcp-settings-title" class="text-xl font-semibold">MCP connections</h1>
					<p class="text-muted-foreground mt-1 text-sm">
						Use SimUI components from compatible coding assistants and IDEs.
					</p>
				</div>
				<button
					hlmBtn
					variant="outline"
					size="sm"
					[disabled]="loading()"
					(click)="load()"
					aria-label="Refresh MCP status">
					<ng-icon hlm name="lucideRefreshCw" size="sm" />
					Refresh
				</button>
			</div>

			@if (loading()) {
				<div class="space-y-4" role="status" aria-label="Loading MCP settings">
					<div hlmCard class="space-y-4 p-5">
						<div class="bg-muted h-5 w-32 rounded motion-safe:animate-pulse"></div>
						<div class="bg-muted h-3 w-full rounded motion-safe:animate-pulse"></div>
						<div class="bg-muted h-3 w-2/3 rounded motion-safe:animate-pulse"></div>
					</div>
					<div hlmCard class="bg-muted/30 h-32 motion-safe:animate-pulse"></div>
				</div>
			} @else if (loadError()) {
				<div hlmAlert variant="destructive" role="alert">
					<ng-icon hlm name="lucideTriangleAlert" size="sm" />
					<h2 hlmAlertTitle>Could not load MCP settings</h2>
					<p hlmAlertDescription>Check your connection and try again.</p>
					<button hlmBtn hlmAlertAction variant="outline" size="sm" (click)="load()">Try again</button>
				</div>
			} @else if (status(); as currentStatus) {
				@if (!currentStatus.enabled) {
					<div hlmCard class="flex flex-col items-center gap-3 p-8 text-center">
						<ng-icon hlm name="lucideUnplug" size="xl" class="text-muted-foreground" />
						<div>
							<h2 class="font-semibold">MCP is not available</h2>
							<p class="text-muted-foreground mt-1 text-sm">
								The service is currently disabled. Existing SimUI features are unaffected.
							</p>
						</div>
					</div>
				} @else {
					<div hlmCard class="flex flex-col gap-4 p-5">
						<div class="flex flex-wrap items-center justify-between gap-3">
							<div>
								<h2 class="font-semibold">Usage</h2>
								<p class="text-muted-foreground text-sm">{{ currentStatus.plan }} plan</p>
							</div>
							@if (currentStatus.quota.usedPercent === null) {
								<span hlmBadge class="gap-1">
									<ng-icon hlm name="lucideZap" size="sm" />
									Unlimited
								</span>
							} @else {
								<span hlmBadge variant="outline">{{ quotaRemainingPercent() }}% remaining</span>
							}
						</div>

						@if (currentStatus.quota.usedPercent !== null) {
							<div class="space-y-2">
								<hlm-progress
									[value]="quotaUsedPercent()"
									[attr.aria-label]="quotaUsedPercent() + '% of monthly MCP usage used'">
									<hlm-progress-indicator />
								</hlm-progress>
								<p class="text-muted-foreground text-xs">
									{{ quotaUsedPercent() }}% used. Resets
									{{ currentStatus.quota.resetAtUtc | date: 'medium' : 'UTC' }} UTC.
								</p>
							</div>
							@if (currentStatus.warningLevel === 'approaching') {
								<div hlmAlert role="status">
									<ng-icon hlm name="lucideTriangleAlert" size="sm" />
									<h3 hlmAlertTitle>You’re approaching the monthly limit</h3>
									<p hlmAlertDescription>Upgrade to Pro for unlimited monthly MCP calls.</p>
								</div>
							} @else if (currentStatus.warningLevel === 'exhausted') {
								<div hlmAlert variant="destructive" role="alert">
									<ng-icon hlm name="lucideTriangleAlert" size="sm" />
									<h3 hlmAlertTitle>Monthly MCP quota reached</h3>
									<p hlmAlertDescription>Calls resume at the UTC reset, or upgrade now for unlimited access.</p>
									<a hlmBtn hlmAlertAction size="sm" routerLink="/pricing">View Pro</a>
								</div>
							}
						} @else {
							<p class="text-muted-foreground text-sm">
								Unlimited monthly calls with a fair-use rate limit of {{ currentStatus.rateLimit.permitLimit }} calls
								per {{ currentStatus.rateLimit.windowSeconds }} seconds.
							</p>
						}
					</div>

					<div class="space-y-3">
						<div>
							<h2 class="font-semibold">Set up a client</h2>
							<p class="text-muted-foreground text-sm">Choose the configuration format for Claude or Codex.</p>
						</div>
						<hlm-tabs tab="claude" class="w-full gap-3">
							<hlm-tabs-list class="grid w-full grid-cols-2" aria-label="MCP client providers">
								@for (client of setupClients(); track client.id) {
									<button [hlmTabsTrigger]="client.id">{{ client.label }}</button>
								}
							</hlm-tabs-list>
							@for (client of setupClients(); track client.id) {
								<div hlmCard [hlmTabsContent]="client.id" class="min-w-0 p-4">
									<div class="flex flex-col gap-3">
										<div class="flex items-center justify-between gap-3">
											<p class="text-muted-foreground text-xs">
												{{ client.fileName }}
												<span aria-hidden="true">·</span>
												{{ client.format }}
											</p>
											<button
												hlmBtn
												variant="outline"
												size="sm"
												(click)="copyConfiguration(client.id, client.configuration)"
												[attr.aria-label]="'Copy ' + client.label + ' configuration'">
												<ng-icon
													hlm
													[name]="copiedClient() === client.id ? 'lucideCheck' : 'lucideClipboard'"
													size="sm" />
												{{ copiedClient() === client.id ? 'Copied' : 'Copy' }}
											</button>
										</div>
										<pre
											class="bg-muted max-w-full overflow-x-auto rounded-md p-3 text-xs"><code>{{ formatConfiguration(client.configuration) }}</code></pre>
									</div>
								</div>
							}
						</hlm-tabs>
						<p class="sr-only" aria-live="polite">{{ copyAnnouncement() }}</p>
					</div>

					<div class="space-y-3">
						<div>
							<h2 class="font-semibold">Authorized clients</h2>
							<p class="text-muted-foreground text-sm">Revoking a client invalidates its SimUI MCP tokens.</p>
						</div>
						@if (activeConnections().length === 0) {
							<div hlmCard class="flex flex-col items-center gap-2 p-7 text-center">
								<ng-icon hlm name="lucideCable" size="lg" class="text-muted-foreground" />
								<p class="font-medium">No active connections</p>
								<p class="text-muted-foreground text-sm">Authorize a compatible client to see it here.</p>
							</div>
						} @else {
							<ul class="space-y-2">
								@for (connection of activeConnections(); track connection.id) {
									<li hlmCard class="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
										<div class="min-w-0">
											<p class="truncate font-medium">{{ connection.clientName }}</p>
											<p class="text-muted-foreground truncate text-xs">{{ connection.clientId }}</p>
											<p class="text-muted-foreground mt-1 text-xs">
												Last used
												@if (connection.lastUsedAtUtc) {
													{{ connection.lastUsedAtUtc | date: 'medium' }}
												} @else {
													Not used yet
												}
											</p>
										</div>
										<button
											hlmBtn
											variant="outline"
											size="sm"
											[disabled]="revokingId() === connection.id"
											(click)="openRevoke(connection, $event)">
											@if (revokingId() === connection.id) {
												<hlm-spinner class="size-4" />
												Revoking…
											} @else {
												Revoke
											}
										</button>
									</li>
								}
							</ul>
						}
					</div>
				}
			}
		</section>

		<hlm-dialog #revokeDialog>
			<button #revokeDialogButton hlmDialogTrigger class="hidden">Open revoke confirmation</button>
			<hlm-dialog-content class="max-w-[calc(100%-2rem)] sm:max-w-md" *hlmDialogPortal="let ctx">
				<hlm-dialog-header>
					<h2 hlmDialogTitle>Revoke {{ selectedConnection()?.clientName }}?</h2>
					<p hlmDialogDescription>
						This client will immediately lose access to SimUI MCP. You can authorize it again later.
					</p>
				</hlm-dialog-header>
				@if (revokeError()) {
					<div hlmAlert variant="destructive" role="alert">
						<ng-icon hlm name="lucideTriangleAlert" size="sm" />
						<h3 hlmAlertTitle>Connection was not revoked</h3>
						<p hlmAlertDescription>{{ revokeError() }}</p>
					</div>
				}
				<hlm-dialog-footer class="gap-2">
					<button hlmBtn variant="outline" [disabled]="revokingId() !== null" (click)="cancelRevoke()">Cancel</button>
					<button hlmBtn variant="destructive" [disabled]="revokingId() !== null" (click)="confirmRevoke()">
						@if (revokingId()) {
							<hlm-spinner class="mr-2 size-4" />
							Revoking…
						} @else {
							Revoke access
						}
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class McpSettings implements OnInit {
	private readonly mcpService = inject(McpHttpService);
	private readonly destroyRef = inject(DestroyRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly revokeDialogButton = viewChild<ElementRef<HTMLButtonElement>>('revokeDialogButton');
	private readonly revokeDialog = viewChild<HlmDialog>('revokeDialog');
	private restoreFocusElement: HTMLElement | null = null;

	protected readonly status = signal<McpStatusDto | null>(null);
	protected readonly connections = signal<McpConnectionDto[]>([]);
	protected readonly loading = signal(true);
	protected readonly loadError = signal(false);
	protected readonly copiedClient = signal<string | null>(null);
	protected readonly copyAnnouncement = signal('');
	protected readonly selectedConnection = signal<McpConnectionDto | null>(null);
	protected readonly revokingId = signal<string | null>(null);
	protected readonly revokeError = signal<string | null>(null);
	protected readonly activeConnections = computed(() =>
		this.connections().filter((connection) => connection.status === 'active'),
	);
	protected readonly quotaUsedPercent = computed(() => {
		const usedPercent = this.status()?.quota.usedPercent;
		return usedPercent === null || usedPercent === undefined ? 0 : Math.min(100, Math.max(0, Math.round(usedPercent)));
	});
	protected readonly quotaRemainingPercent = computed(() => 100 - this.quotaUsedPercent());
	protected readonly setupClients = computed<McpSetupClientDto[]>(() => {
		const currentStatus = this.status();
		if (!currentStatus) return [];

		const findClient = (id: 'claude' | 'codex') =>
			currentStatus.setupClients.find((client) => client.id.toLowerCase().includes(id));
		const claude = findClient('claude');
		const codex = findClient('codex');

		return [
			{
				id: 'claude',
				label: 'Claude',
				format: 'json',
				fileName: '.mcp.json',
				configuration:
					claude?.configuration ??
					({
						mcpServers: {
							simui: { type: 'http', url: currentStatus.mcpUrl },
						},
					} satisfies Record<string, unknown>),
			},
			{
				id: 'codex',
				label: 'Codex',
				format: 'toml',
				fileName: 'config.toml',
				configuration:
					codex?.configuration ?? `[mcp_servers.simui]\nurl = "${this.escapeTomlString(currentStatus.mcpUrl)}"`,
			},
		];
	});

	ngOnInit(): void {
		this.load();
	}

	protected load(): void {
		this.loading.set(true);
		this.loadError.set(false);
		forkJoin({
			status: this.mcpService.getStatus(),
			connections: this.mcpService.getConnections(),
		})
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: ({ status, connections }) => {
					this.status.set(status);
					this.connections.set(connections.connections);
					this.loading.set(false);
				},
				error: () => {
					this.loading.set(false);
					this.loadError.set(true);
				},
			});
	}

	protected formatConfiguration(configuration: string | Record<string, unknown>): string {
		return typeof configuration === 'string' ? configuration : JSON.stringify(configuration, null, 2);
	}

	private escapeTomlString(value: string): string {
		return value.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
	}

	protected async copyConfiguration(id: string, configuration: string | Record<string, unknown>): Promise<void> {
		if (!isPlatformBrowser(this.platformId) || !navigator.clipboard?.writeText) {
			this.copyAnnouncement.set('Clipboard access is unavailable. Select and copy the configuration manually.');
			return;
		}
		try {
			await navigator.clipboard.writeText(this.formatConfiguration(configuration));
			this.copiedClient.set(id);
			this.copyAnnouncement.set('Configuration copied to clipboard.');
		} catch {
			this.copyAnnouncement.set('Could not copy the configuration. Select and copy it manually.');
		}
	}

	protected openRevoke(connection: McpConnectionDto, event: Event): void {
		this.restoreFocusElement = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
		this.selectedConnection.set(connection);
		this.revokeError.set(null);
		this.revokeDialogButton()?.nativeElement.click();
	}

	protected cancelRevoke(): void {
		this.revokeDialog()?.close({});
		this.selectedConnection.set(null);
		this.restoreFocus();
	}

	protected confirmRevoke(): void {
		const connection = this.selectedConnection();
		if (!connection || this.revokingId()) return;
		this.revokingId.set(connection.id);
		this.revokeError.set(null);
		this.mcpService
			.revokeConnection(connection.id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: () => {
					this.connections.update((items) =>
						items.map((item) => (item.id === connection.id ? { ...item, status: 'revoked' } : item)),
					);
					this.finishRevoke();
				},
				error: (error: HttpErrorResponse) => {
					if (error.status === 404) {
						this.connections.update((items) => items.filter((item) => item.id !== connection.id));
						this.finishRevoke();
						return;
					}
					this.revokingId.set(null);
					this.revokeError.set('Could not revoke this connection. Please try again.');
				},
			});
	}

	private finishRevoke(): void {
		this.revokingId.set(null);
		this.selectedConnection.set(null);
		this.revokeDialog()?.close({});
		this.restoreFocus();
	}

	private restoreFocus(): void {
		if (!isPlatformBrowser(this.platformId)) return;
		const element = this.restoreFocusElement;
		this.restoreFocusElement = null;
		requestAnimationFrame(() => element?.focus());
	}
}
