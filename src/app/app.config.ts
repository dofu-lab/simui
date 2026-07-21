import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	ErrorHandler,
	inject,
	provideAppInitializer,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { authInterceptor } from '@core/interceptors/auth.interceptor';
import { AnalyticsService } from '@core/services/analytics.service';
import { AnalyticsErrorHandler } from '@core/shell/analytics-error-handler';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
		provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
		provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
		{ provide: ErrorHandler, useClass: AnalyticsErrorHandler },
		provideAppInitializer(() => {
			const analytics = inject(AnalyticsService);
			analytics.init();
		}),
	],
};
