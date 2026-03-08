import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AnalyticsErrorHandler } from './core/analytics-error-handler';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AnalyticsService } from './services/analytics.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
		{ provide: ErrorHandler, useClass: AnalyticsErrorHandler },
		provideAppInitializer(() => {
			const analytics = inject(AnalyticsService);
			analytics.init();
		}),
	],
};
