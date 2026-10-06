import { PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { PaymentHttpService } from '@core/services/payment-http.service';
import { MCP_ADVERTISEMENT_ENABLED } from '@core/tokens/mcp-advertisement';
import { PaymentSuccessComponent } from '@features/payment/payment-success.page';
import { PricingComponent } from '@features/pricing/pricing.page';
import { of } from 'rxjs';
import { ProfileAccountSettings } from './components/profile-account-settings';
import { ProfileSettingsNav } from './components/profile-settings-nav';
import { ProfileSettingsComponent } from './profile-settings.page';

describe('MCP advertisement flag', () => {
	afterEach(() => TestBed.resetTestingModule());

	it('normalizes a disabled direct MCP tab request to the default profile tab', async () => {
		await TestBed.configureTestingModule({
			imports: [ProfileSettingsComponent],
			providers: [
				{ provide: MCP_ADVERTISEMENT_ENABLED, useValue: false },
				{
					provide: ActivatedRoute,
					useValue: { snapshot: { queryParamMap: { get: () => 'mcp' } } },
				},
			],
		})
			.overrideComponent(ProfileSettingsComponent, {
				set: { imports: [], template: '<p data-testid="active-tab">{{ activeTab() }}</p>' },
			})
			.compileComponents();

		const fixture = TestBed.createComponent(ProfileSettingsComponent);
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('themes');
	});

	it('hides the profile navigation and account promotion when disabled', async () => {
		const paymentService = jasmine.createSpyObj<PaymentHttpService>('PaymentHttpService', ['getSubscription']);
		paymentService.getSubscription.and.returnValue(of({ status: 'None', isPaid: false, customerPortalUrl: null }));
		await TestBed.configureTestingModule({
			imports: [ProfileSettingsNav, ProfileAccountSettings],
			providers: [
				{ provide: MCP_ADVERTISEMENT_ENABLED, useValue: false },
				{ provide: PaymentHttpService, useValue: paymentService },
				provideRouter([]),
			],
		}).compileComponents();

		const navFixture = TestBed.createComponent(ProfileSettingsNav);
		navFixture.componentRef.setInput('activeTab', 'themes');
		navFixture.detectChanges();
		expect(navFixture.nativeElement.textContent).not.toContain('MCP');

		const accountFixture = TestBed.createComponent(ProfileAccountSettings);
		accountFixture.detectChanges();
		expect(accountFixture.nativeElement.textContent).not.toContain('MCP');
	});

	it('hides pricing MCP claims when disabled', async () => {
		await TestBed.configureTestingModule({
			imports: [PricingComponent],
			providers: [
				{ provide: MCP_ADVERTISEMENT_ENABLED, useValue: false },
				{ provide: AuthService, useValue: jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']) },
				{
					provide: PaymentHttpService,
					useValue: jasmine.createSpyObj<PaymentHttpService>('PaymentHttpService', ['createCheckout']),
				},
				provideRouter([]),
			],
		}).compileComponents();

		const fixture = TestBed.createComponent(PricingComponent);
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).not.toContain('MCP');
	});

	it('shows the profile fallback instead of the payment-success setup CTA when disabled', async () => {
		await TestBed.configureTestingModule({
			imports: [PaymentSuccessComponent],
			providers: [
				{ provide: MCP_ADVERTISEMENT_ENABLED, useValue: false },
				{ provide: PLATFORM_ID, useValue: 'server' },
				{ provide: AuthService, useValue: jasmine.createSpyObj<AuthService>('AuthService', ['refreshSession']) },
				provideRouter([]),
			],
		}).compileComponents();

		const fixture: ComponentFixture<PaymentSuccessComponent> = TestBed.createComponent(PaymentSuccessComponent);
		(fixture.componentInstance as unknown as { isRefreshing: { set: (value: boolean) => void } }).isRefreshing.set(
			false,
		);
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('View your profile');
		expect(fixture.nativeElement.textContent).not.toContain('Set up MCP');
		expect(fixture.nativeElement.textContent).not.toContain('MCP calls');
	});
});
