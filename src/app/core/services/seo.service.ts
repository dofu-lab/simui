import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from '@core/services/analytics.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import {
	SEO_DEFAULT_DESCRIPTION,
	SEO_DEFAULT_IMAGE,
	SEO_DEFAULT_KEYWORDS,
	SEO_DEFAULT_TITLE,
	SEO_ORGANIZATION_SCHEMA,
	SEO_SITE_NAME,
	SEO_SITE_ORIGIN,
	SEO_SOURCE_CODE_SCHEMA,
} from './seo.constants';
import { JsonLd, SeoRouteData } from './seo.types';

@Injectable({ providedIn: 'root' })
export class SeoService {
	private readonly titleService = inject(Title);
	private readonly metaService = inject(Meta);
	private readonly router = inject(Router);
	private readonly activatedRoute = inject(ActivatedRoute);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly document = inject(DOCUMENT);
	private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

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
				mergeMap(({ route, url }) => route.data.pipe(map((data: SeoRouteData) => ({ data, url })))),
			)
			.subscribe(({ data, url }) => {
				const pageTitle = this.resolveTitle(data);
				const description = data.description || SEO_DEFAULT_DESCRIPTION;
				const canonicalUrl = this.toAbsoluteUrl(data.canonicalPath || url.split('?')[0] || '/');
				const imageUrl = this.toAbsoluteUrl(data.image || SEO_DEFAULT_IMAGE);
				const robots = data.robots || 'index, follow';

				this.titleService.setTitle(pageTitle);
				this.updateMetaTags(
					pageTitle,
					description,
					canonicalUrl,
					imageUrl,
					data.keywords || SEO_DEFAULT_KEYWORDS,
					robots,
				);
				this.updateCanonical(canonicalUrl);
				this.updateJsonLd(this.resolveStructuredData(data, canonicalUrl, pageTitle, description));
				this.analyticsService.trackPageView(url, pageTitle);
			});
	}

	private resolveTitle(data: SeoRouteData): string {
		if (!data.title) return SEO_DEFAULT_TITLE;
		return data.title.includes(SEO_SITE_NAME) ? data.title : `${data.title} - ${SEO_SITE_NAME}`;
	}

	private updateMetaTags(
		title: string,
		description: string,
		canonicalUrl: string,
		imageUrl: string,
		keywords: string,
		robots: string,
	): void {
		this.metaService.updateTag({ name: 'description', content: description });
		this.metaService.updateTag({ name: 'keywords', content: keywords });
		this.metaService.updateTag({ name: 'robots', content: robots });
		this.metaService.updateTag({ name: 'author', content: SEO_SITE_NAME });
		this.metaService.updateTag({ property: 'og:site_name', content: SEO_SITE_NAME });
		this.metaService.updateTag({ property: 'og:type', content: 'website' });
		this.metaService.updateTag({ property: 'og:title', content: title });
		this.metaService.updateTag({ property: 'og:description', content: description });
		this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
		this.metaService.updateTag({ property: 'og:image', content: imageUrl });
		this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
		this.metaService.updateTag({ name: 'twitter:title', content: title });
		this.metaService.updateTag({ name: 'twitter:description', content: description });
		this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
	}

	private updateCanonical(canonicalUrl: string): void {
		let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

		if (!link) {
			link = this.renderer.createElement('link') as HTMLLinkElement;
			this.renderer.setAttribute(link, 'rel', 'canonical');
			this.renderer.appendChild(this.document.head, link);
		}

		this.renderer.setAttribute(link, 'href', canonicalUrl);
	}

	private updateJsonLd(structuredData: JsonLd): void {
		const existing = this.document.querySelector('script[data-simui-seo="json-ld"]');
		if (existing) {
			this.renderer.removeChild(this.document.head, existing);
		}

		const script = this.renderer.createElement('script') as HTMLScriptElement;
		this.renderer.setAttribute(script, 'type', 'application/ld+json');
		this.renderer.setAttribute(script, 'data-simui-seo', 'json-ld');
		script.text = JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': Array.isArray(structuredData) ? structuredData : [structuredData],
		});
		this.renderer.appendChild(this.document.head, script);
	}

	private resolveStructuredData(
		data: SeoRouteData,
		canonicalUrl: string,
		title: string,
		description: string,
	): Record<string, unknown>[] {
		const pageSchema = data.structuredData
			? this.withAbsoluteUrl(data.structuredData, canonicalUrl, title, description)
			: {
					'@type': 'WebPage',
					'@id': `${canonicalUrl}#webpage`,
					url: canonicalUrl,
					name: title,
					description,
					isPartOf: { '@id': `${SEO_SITE_ORIGIN}/#website` },
					publisher: { '@id': `${SEO_SITE_ORIGIN}/#organization` },
				};

		return [
			{
				'@type': 'WebSite',
				'@id': `${SEO_SITE_ORIGIN}/#website`,
				name: SEO_SITE_NAME,
				url: SEO_SITE_ORIGIN,
				description: SEO_DEFAULT_DESCRIPTION,
				publisher: { '@id': `${SEO_SITE_ORIGIN}/#organization` },
			},
			SEO_ORGANIZATION_SCHEMA,
			SEO_SOURCE_CODE_SCHEMA,
			...(Array.isArray(pageSchema) ? pageSchema : [pageSchema]),
		];
	}

	private withAbsoluteUrl(structuredData: JsonLd, canonicalUrl: string, title: string, description: string): JsonLd {
		const enrich = (schema: Record<string, unknown>): Record<string, unknown> => ({
			'@id': schema['@id'] || `${canonicalUrl}#${String(schema['@type'] || 'webpage').toLowerCase()}`,
			url: schema['url'] || canonicalUrl,
			name: schema['name'] || title,
			description: schema['description'] || description,
			...schema,
		});

		return Array.isArray(structuredData) ? structuredData.map(enrich) : enrich(structuredData);
	}

	private toAbsoluteUrl(pathOrUrl: string): string {
		if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
		const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
		return `${SEO_SITE_ORIGIN}${path}`;
	}
}
