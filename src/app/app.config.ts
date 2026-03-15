import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	ErrorHandler,
	inject,
	provideAppInitializer,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { AnalyticsErrorHandler } from './core/analytics-error-handler';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AnalyticsService } from './services/analytics.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
		{ provide: ErrorHandler, useClass: AnalyticsErrorHandler },
		provideAppInitializer(() => {
			const analytics = inject(AnalyticsService);
			analytics.init();
		}),
	],
};
