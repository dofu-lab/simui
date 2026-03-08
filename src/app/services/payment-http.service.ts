import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface CheckoutResponse {
	checkoutUrl: string;
}

export interface SubscriptionStatus {
	status: string;
	isPaid: boolean;
	customerPortalUrl: string | null;
}

@Injectable({
	providedIn: 'root',
})
export class PaymentHttpService {
	private readonly apiUrl = `${environment.apiUrl}/v1/payment`;
	private readonly http = inject(HttpClient);
	private readonly authService = inject(AuthService);

	/** Creates a Polar checkout session for the given plan and returns the hosted checkout URL. */
	public createCheckout(plan: 'monthly' | 'yearly' = 'monthly'): Observable<CheckoutResponse> {
		return this.http.post<CheckoutResponse>(`${this.apiUrl}/checkout`, { plan });
	}

	/** Returns the current user's subscription status. */
	public getSubscription(): Observable<SubscriptionStatus> {
		if (!this.authService.isAuthenticated()) {
			return of({ status: 'None', isPaid: false, customerPortalUrl: null });
		}
		return this.http.get<SubscriptionStatus>(`${this.apiUrl}/subscription`);
	}
}
