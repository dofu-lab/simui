import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AnalyticsService } from '../../services/analytics.service';

@Injectable({
	providedIn: 'root',
})
export class SeoService {
	constructor(
		private readonly titleService: Title,
		private readonly metaService: Meta,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		private readonly analyticsService: AnalyticsService,
	) {}

	init() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map((event) => ({ route: this.activatedRoute, url: event.urlAfterRedirects })),
				map(({ route, url }) => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return { route, url };
				}),
				mergeMap(({ route, url }) => route.data.pipe(map((data) => ({ data, url })))),
			)
			.subscribe(({ data, url }) => {
				// Set Title
				if (data['title']) {
					this.titleService.setTitle(`${data['title']} - SimUI`);
				} else {
					this.titleService.setTitle('SimUI - Modern Angular UI Component Library');
				}

				// Set Meta Tags
				if (data['description']) {
					this.metaService.updateTag({ name: 'description', content: data['description'] });
				} else {
					this.metaService.updateTag({
						name: 'description',
						content: 'SimUI is a modern, responsive Angular UI component library for web developers.',
					});
				}

				if (data['keywords']) {
					this.metaService.updateTag({ name: 'keywords', content: data['keywords'] });
				}

				// Open Graph / Twitter Card support can be added here
				this.metaService.updateTag({
					property: 'og:title',
					content: data['title'] ? `${data['title']} - SimUI` : 'SimUI',
				});
				this.metaService.updateTag({
					property: 'og:description',
					content: data['description'] || 'SimUI is a modern, responsive Angular UI component library.',
				});

				// Track page view in analytics
				const pageTitle = data['title'] ? `${data['title']} - SimUI` : 'SimUI - Modern Angular UI Component Library';
				this.analyticsService.trackPageView(url, pageTitle);
			});
	}
}
