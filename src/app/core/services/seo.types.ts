import { Data } from '@angular/router';

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export interface SeoRouteData extends Data {
	title?: string;
	description?: string;
	keywords?: string;
	canonicalPath?: string;
	image?: string;
	robots?: string;
	structuredData?: JsonLd;
}
