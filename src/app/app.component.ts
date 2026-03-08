import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HeaderComponent, ThemeService } from './core';
import { CodeLoaderService } from './core/services/code-loader.service';
import { SeoService } from './core/services/seo.service';
import { AnalyticsService } from './services/analytics.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NgxSonnerToaster, HeaderComponent],
	providers: [CodeLoaderService],
	template: `
		<div class="relative flex min-h-svh flex-col overflow-clip px-2 [--header-height:4rem]">
			<ngx-sonner-toaster />
			<app-header class="sticky top-0 z-50" />
			<router-outlet />
		</div>
	`,
})
export class AppComponent implements OnInit {
	isNavbarOpen = signal<boolean>(true);
	private readonly codeLoaderService = inject(CodeLoaderService);
	private readonly seoService = inject(SeoService);
	private readonly themeInjectorService = inject(ThemeService);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly platformId = inject(PLATFORM_ID);

	ngOnInit() {
		this.seoService.init();
		// Initialize the service to preload component data
		this.codeLoaderService.loadComponentCode('').subscribe();
		this.observeWebVitals();
	}

	onNavbarChange(isOpen: boolean) {
		this.isNavbarOpen.set(isOpen);
	}

	private observeWebVitals(): void {
		if (!isPlatformBrowser(this.platformId) || typeof PerformanceObserver === 'undefined') return;

		// Largest Contentful Paint
		this.observeEntry('largest-contentful-paint', (entry) => {
			const lcp = entry as PerformanceEntry & { startTime: number };
			this.analyticsService.trackWebVital('LCP', Math.round(lcp.startTime), this.rateMetric('LCP', lcp.startTime));
		});

		// Cumulative Layout Shift
		this.observeEntry('layout-shift', (entry) => {
			const cls = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
			if (!cls.hadRecentInput) {
				this.analyticsService.trackWebVital('CLS', Number.parseFloat(cls.value.toFixed(4)), this.rateMetric('CLS', cls.value));
			}
		});

		// First Input Delay
		this.observeEntry('first-input', (entry) => {
			const fid = entry as PerformanceEntry & { processingStart: number; startTime: number };
			const delay = fid.processingStart - fid.startTime;
			this.analyticsService.trackWebVital('FID', Math.round(delay), this.rateMetric('FID', delay));
		});
	}

	private observeEntry(type: string, callback: (entry: PerformanceEntry) => void): void {
		try {
			const observer = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const last = entries.at(-1);
				if (last) {
					callback(last);
				}
			});
			observer.observe({ type, buffered: true });
		} catch {
			// PerformanceObserver may not support all entry types in all browsers
		}
	}

	private rateMetric(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
		const thresholds: Record<string, [number, number]> = {
			LCP: [2500, 4000],
			FID: [100, 300],
			CLS: [0.1, 0.25],
		};
		const [good, poor] = thresholds[metric] ?? [0, 0];
		if (value <= good) return 'good';
		if (value <= poor) return 'needs-improvement';
		return 'poor';
	}
}
