import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class SeoService {
	constructor(
		private titleService: Title,
		private metaService: Meta,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) {}

	init() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map((route) => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				}),
				mergeMap((route) => route.data),
			)
			.subscribe((data) => {
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
			});
	}
}
