import { environment } from '@/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { McpHttpService } from '@core/services/mcp-http.service';
import { of, throwError } from 'rxjs';
import { isSafeMcpContinuationUrl, McpConsentComponent } from './mcp-consent.page';

describe('McpConsentComponent', () => {
	let fixture: ComponentFixture<McpConsentComponent>;
	let mcpService: jasmine.SpyObj<McpHttpService>;

	beforeEach(async () => {
		mcpService = jasmine.createSpyObj<McpHttpService>('McpHttpService', [
			'getAuthorizationRequest',
			'decideAuthorizationRequest',
		]);
		mcpService.getAuthorizationRequest.and.returnValue(
			of({
				clientName: 'Example IDE',
				requestedScopes: ['mcp:components:read'],
				accountEmail: 'developer@example.com',
				expiresAtUtc: '2026-07-28T08:00:00Z',
			}),
		);

		await TestBed.configureTestingModule({
			imports: [McpConsentComponent],
			providers: [
				{ provide: McpHttpService, useValue: mcpService },
				{
					provide: ActivatedRoute,
					useValue: { snapshot: { queryParamMap: { get: () => 'request-id' } } },
				},
			],
		}).compileComponents();
		fixture = TestBed.createComponent(McpConsentComponent);
	});

	it('shows the request summary without exposing protocol secrets', () => {
		fixture.detectChanges();
		const text = fixture.nativeElement.textContent as string;
		expect(text).toContain('Allow Example IDE to use SimUI?');
		expect(text).toContain('developer@example.com');
		expect(text).toContain('public component catalog');
		expect(text).not.toContain('redirect_uri');
		expect(text).not.toContain('code_challenge');
	});

	it('renders the expired state returned by the API', () => {
		mcpService.getAuthorizationRequest.and.returnValue(
			throwError(() => new HttpErrorResponse({ status: 410, statusText: 'Gone' })),
		);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('This request has expired');
	});

	it('renders unknown and retryable request states', () => {
		mcpService.getAuthorizationRequest.and.returnValue(
			throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Not found' })),
		);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('Authorization request not found');

		mcpService.getAuthorizationRequest.and.returnValue(
			throwError(() => new HttpErrorResponse({ status: 503, statusText: 'Unavailable' })),
		);
		(fixture.componentInstance as unknown as { loadRequest: () => void }).loadRequest();
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('temporarily unavailable');
		expect(fixture.nativeElement.textContent).toContain('Try again');
	});

	it('submits allow and deny and renders consumed decision errors', () => {
		mcpService.decideAuthorizationRequest.and.returnValue(
			throwError(() => new HttpErrorResponse({ status: 409, statusText: 'Conflict' })),
		);
		fixture.detectChanges();
		const component = fixture.componentInstance as unknown as {
			decide: (decision: 'allow' | 'deny') => void;
		};
		component.decide('allow');
		fixture.detectChanges();
		expect(mcpService.decideAuthorizationRequest).toHaveBeenCalledWith('request-id', 'allow');
		expect(fixture.nativeElement.textContent).toContain('already used');

		mcpService.decideAuthorizationRequest.calls.reset();
		mcpService.decideAuthorizationRequest.and.returnValue(
			throwError(() => new HttpErrorResponse({ status: 503, statusText: 'Unavailable' })),
		);
		component.decide('deny');
		expect(mcpService.decideAuthorizationRequest).toHaveBeenCalledWith('request-id', 'deny');
	});

	it('rejects a continuation URL on another origin', () => {
		mcpService.decideAuthorizationRequest.and.returnValue(
			of({ continuationUrl: 'https://attacker.example/connect/authorize/continue?ticket=stolen' }),
		);
		fixture.detectChanges();
		(fixture.componentInstance as unknown as { decide: (decision: 'allow') => void }).decide('allow');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('unsafe continuation address');
	});
});

describe('isSafeMcpContinuationUrl', () => {
	const origin = new URL(environment.apiUrl).origin;

	it('accepts only the backend continuation endpoint with one opaque ticket', () => {
		expect(
			isSafeMcpContinuationUrl(`${origin}/connect/authorize/continue?ticket=opaque`, environment.apiUrl),
		).toBeTrue();
		expect(isSafeMcpContinuationUrl(`${origin}/other?ticket=opaque`, environment.apiUrl)).toBeFalse();
		expect(
			isSafeMcpContinuationUrl(
				`${origin}/connect/authorize/continue?ticket=opaque&next=https://attacker.example`,
				environment.apiUrl,
			),
		).toBeFalse();
		expect(
			isSafeMcpContinuationUrl('https://attacker.example/connect/authorize/continue?ticket=opaque', environment.apiUrl),
		).toBeFalse();
	});
});
