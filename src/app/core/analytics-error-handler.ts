import { ErrorHandler, inject, Injectable } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Injectable()
export class AnalyticsErrorHandler implements ErrorHandler {
	private readonly analyticsService = inject(AnalyticsService);

	handleError(error: unknown): void {
		// Still log to console for local debugging
		console.error(error);
		this.analyticsService.captureException(error);
	}
}
