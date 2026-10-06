import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { McpConnectionDto, McpStatusDto } from '@core/models/mcp.models';
import { McpHttpService } from '@core/services/mcp-http.service';
import { of, Subject, throwError } from 'rxjs';
import { McpSettings } from './mcp-settings';

describe('McpSettings', () => {
	let fixture: ComponentFixture<McpSettings>;
	let mcpService: jasmine.SpyObj<McpHttpService>;
	const freeStatus: McpStatusDto = {
		enabled: true,
		mcpUrl: 'https://api.simui.dev/mcp',
		plan: 'Free',
		quota: {
			usedPercent: 80,
			periodStartUtc: '2026-07-01T00:00:00Z',
			resetAtUtc: '2026-08-01T00:00:00Z',
		},
		rateLimit: { permitLimit: 60, windowSeconds: 60 },
		warningLevel: 'approaching',
		setupClients: [
			{
				id: 'generic',
				label: 'Generic MCP client',
				configuration: { url: 'https://api.simui.dev/mcp' },
			},
		],
	};

	beforeEach(async () => {
		mcpService = jasmine.createSpyObj<McpHttpService>('McpHttpService', [
			'getStatus',
			'getConnections',
			'revokeConnection',
		]);
		mcpService.getStatus.and.returnValue(of(freeStatus));
		mcpService.getConnections.and.returnValue(of({ connections: [] }));

		await TestBed.configureTestingModule({
			imports: [McpSettings],
			providers: [{ provide: McpHttpService, useValue: mcpService }, provideRouter([])],
		}).compileComponents();
		fixture = TestBed.createComponent(McpSettings);
	});

	it('renders quota warning, UTC reset, setup, and the empty connection state', () => {
		fixture.detectChanges();
		const text = fixture.nativeElement.textContent as string;
		expect(text).toContain('20% remaining');
		expect(text).toContain('80% used');
		expect(text).toContain('approaching the monthly limit');
		expect(text).toContain('Claude');
		expect(text).toContain('.mcp.json · json');
		expect(text).toContain('Codex');
		expect(text).toContain('config.toml · toml');
		expect(text).toContain('"mcpServers"');
		expect(text).toContain('[mcp_servers.simui]');
		expect(text).not.toContain('[object Object]');
		expect(text).toContain('No active connections');
		expect(text).toMatch(/Aug 1, 2026, 12:00:00\sAM UTC/);
		expect(fixture.nativeElement.querySelector('hlm-progress').getAttribute('aria-label')).toContain(
			'80% of monthly MCP usage used',
		);
	});

	it('switches between Claude and Codex setup tabs', () => {
		fixture.detectChanges();
		const tabs = fixture.nativeElement.querySelectorAll('[role="tab"]') as NodeListOf<HTMLButtonElement>;
		const panels = fixture.nativeElement.querySelectorAll('[role="tabpanel"]') as NodeListOf<HTMLElement>;

		expect(tabs.length).toBe(2);
		expect(tabs[0].textContent).toContain('Claude');
		expect(tabs[0].getAttribute('aria-selected')).toBe('true');
		expect(panels[0].hidden).toBeFalse();
		expect(panels[1].hidden).toBeTrue();

		tabs[1].click();
		fixture.detectChanges();

		expect(tabs[1].textContent).toContain('Codex');
		expect(tabs[1].getAttribute('aria-selected')).toBe('true');
		expect(panels[0].hidden).toBeTrue();
		expect(panels[1].hidden).toBeFalse();
	});

	it('treats a disabled backend status as authoritative', () => {
		mcpService.getStatus.and.returnValue(
			of({
				enabled: false,
				mcpUrl: '',
				plan: 'Free',
				quota: {
					usedPercent: 0,
					periodStartUtc: '2026-07-01T00:00:00Z',
					resetAtUtc: '2026-08-01T00:00:00Z',
				},
				rateLimit: { permitLimit: 60, windowSeconds: 60 },
				warningLevel: 'none',
				setupClients: [],
			}),
		);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('MCP is not available');
		expect(fixture.nativeElement.textContent).not.toContain('Set up a client');
	});

	it('provides a retry state when either management request fails', () => {
		mcpService.getConnections.and.returnValue(throwError(() => new Error('offline')));
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Could not load MCP settings');
		expect(fixture.nativeElement.textContent).toContain('Try again');
	});

	it('renders loading, exhausted Free, and unlimited Pro states', () => {
		const status = new Subject<McpStatusDto>();
		mcpService.getStatus.and.returnValue(status);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('[role="status"]')).not.toBeNull();

		status.next({ ...freeStatus, quota: { ...freeStatus.quota, usedPercent: 100 }, warningLevel: 'exhausted' });
		status.complete();
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Monthly MCP quota reached');
		expect(fixture.nativeElement.textContent).toContain('View Pro');

		mcpService.getStatus.and.returnValue(
			of({
				...freeStatus,
				plan: 'Pro',
				quota: { ...freeStatus.quota, usedPercent: null },
				warningLevel: 'none',
			}),
		);
		(fixture.componentInstance as unknown as { load: () => void }).load();
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Unlimited');
		expect(fixture.nativeElement.textContent).toContain('60 calls per 60 seconds');
	});

	it('renders active connections and refreshes after idempotent revocation', () => {
		const connection: McpConnectionDto = {
			id: '11111111-1111-4111-8111-111111111111',
			clientId: 'https://client.example/mcp.json',
			clientName: 'Example IDE',
			createdAtUtc: '2026-07-20T10:00:00Z',
			lastUsedAtUtc: null,
			status: 'active',
		};
		mcpService.getConnections.and.returnValue(of({ connections: [connection] }));
		mcpService.revokeConnection.and.returnValue(of(undefined));
		(fixture.componentInstance as unknown as { load: () => void }).load();
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Example IDE');
		expect(fixture.nativeElement.textContent).toContain('Not used yet');

		const component = fixture.componentInstance as unknown as {
			openRevoke: (connection: McpConnectionDto, event: Event) => void;
			confirmRevoke: () => void;
		};
		const button = fixture.nativeElement.querySelector('li button') as HTMLButtonElement;
		component.openRevoke(connection, { currentTarget: button } as unknown as Event);
		component.confirmRevoke();
		fixture.detectChanges();
		expect(mcpService.revokeConnection).toHaveBeenCalledWith(connection.id);
		expect(fixture.nativeElement.textContent).toContain('No active connections');
	});

	it('announces clipboard unavailability and keeps revoke failures inside the active dialog', async () => {
		fixture.detectChanges();
		spyOn(navigator.clipboard, 'writeText').and.rejectWith(new DOMException('Clipboard denied', 'NotAllowedError'));
		await (
			fixture.componentInstance as unknown as {
				copyConfiguration: (id: string, value: string) => Promise<void>;
			}
		).copyConfiguration('codex', `[mcp_servers.simui]\nurl = "https://api.simui.dev/mcp"`);
		fixture.detectChanges();
		const liveRegion = fixture.nativeElement.querySelector('[aria-live="polite"]') as HTMLElement;
		expect(liveRegion.textContent?.length).toBeGreaterThan(0);

		const connection: McpConnectionDto = {
			id: '22222222-2222-4222-8222-222222222222',
			clientId: 'client',
			clientName: 'Failing IDE',
			createdAtUtc: '2026-07-20T10:00:00Z',
			lastUsedAtUtc: '2026-07-27T08:30:00Z',
			status: 'active',
		};
		mcpService.revokeConnection.and.returnValue(throwError(() => new Error('offline')));
		const component = fixture.componentInstance as unknown as {
			openRevoke: (connection: McpConnectionDto, event: Event) => void;
			confirmRevoke: () => void;
		};
		component.openRevoke(connection, new Event('click'));
		component.confirmRevoke();
		fixture.detectChanges();
		const dialog = document.body.querySelector('[role="dialog"]') as HTMLElement;
		expect(dialog).not.toBeNull();
		expect(dialog.querySelector('[role="alert"]')?.textContent).toContain('Could not revoke');
		expect(fixture.nativeElement.querySelector('section [role="alert"]')).toBeNull();
	});
});
