import { environment } from '@/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { McpHttpService } from './mcp-http.service';

describe('McpHttpService', () => {
	let service: McpHttpService;
	let http: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting()],
		});
		service = TestBed.inject(McpHttpService);
		http = TestBed.inject(HttpTestingController);
	});

	afterEach(() => http.verify());

	it('loads status and connections from the authenticated management API', () => {
		service.getStatus().subscribe();
		const statusRequest = http.expectOne(`${environment.apiUrl}/v1/mcp/status`);
		expect(statusRequest.request.method).toBe('GET');
		statusRequest.flush({
			enabled: false,
			mcpUrl: '',
			plan: 'Free',
			quota: { usedPercent: 0, periodStartUtc: '', resetAtUtc: '' },
			rateLimit: { permitLimit: 60, windowSeconds: 60 },
			warningLevel: 'none',
			setupClients: [],
		});

		service.getConnections().subscribe();
		const connectionsRequest = http.expectOne(`${environment.apiUrl}/v1/mcp/connections`);
		expect(connectionsRequest.request.method).toBe('GET');
		connectionsRequest.flush({ connections: [] });
	});

	it('posts only an allow or deny decision to the request endpoint', () => {
		service.decideAuthorizationRequest('request-id', 'deny').subscribe();
		const request = http.expectOne(`${environment.apiUrl}/v1/mcp/authorization-requests/request-id/decision`);
		expect(request.request.method).toBe('POST');
		expect(request.request.body).toEqual({ decision: 'deny' });
		request.flush({
			continuationUrl: `${new URL(environment.apiUrl).origin}/connect/authorize/continue?ticket=one-time`,
		});
	});

	it('loads an authorization summary using an encoded request identifier', () => {
		service.getAuthorizationRequest('request/id').subscribe((response) => {
			expect(response.clientName).toBe('Example IDE');
			expect(response.requestedScopes).toEqual(['mcp:components:read']);
		});
		const request = http.expectOne(`${environment.apiUrl}/v1/mcp/authorization-requests/request%2Fid`);
		expect(request.request.method).toBe('GET');
		request.flush({
			clientName: 'Example IDE',
			requestedScopes: ['mcp:components:read'],
			accountEmail: 'developer@example.com',
			expiresAtUtc: '2026-07-28T08:00:00Z',
		});
	});

	it('uses DELETE for idempotent connection revocation and preserves errors', () => {
		let status = 0;
		service.revokeConnection('connection/id').subscribe({ error: (error) => (status = error.status) });
		const request = http.expectOne(`${environment.apiUrl}/v1/mcp/connections/connection%2Fid`);
		expect(request.request.method).toBe('DELETE');
		request.flush({}, { status: 404, statusText: 'Not found' });
		expect(status).toBe(404);
	});

	it('preserves authentication problem details for the interceptor and caller', () => {
		let problem: { status?: number; error?: { title?: string; traceId?: string } } = {};
		service.getStatus().subscribe({ error: (error) => (problem = error) });
		http
			.expectOne(`${environment.apiUrl}/v1/mcp/status`)
			.flush(
				{ title: 'Unauthorized', status: 401, traceId: 'trace-auth' },
				{ status: 401, statusText: 'Unauthorized' },
			);
		expect(problem.status).toBe(401);
		expect(problem.error?.title).toBe('Unauthorized');
		expect(problem.error?.traceId).toBe('trace-auth');
	});

	it('preserves quota problem details from a decision request', () => {
		let problem: { status?: number; error?: { title?: string; detail?: string } } = {};
		service.decideAuthorizationRequest('request-id', 'allow').subscribe({ error: (error) => (problem = error) });
		http
			.expectOne(`${environment.apiUrl}/v1/mcp/authorization-requests/request-id/decision`)
			.flush(
				{ title: 'Quota exceeded', status: 429, detail: 'Try again after the UTC reset.' },
				{ status: 429, statusText: 'Too Many Requests' },
			);
		expect(problem.status).toBe(429);
		expect(problem.error?.title).toBe('Quota exceeded');
		expect(problem.error?.detail).toContain('UTC reset');
	});
});
