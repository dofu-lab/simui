import { NgModule } from '@angular/core';
import { HlmBreadcrumbEllipsis } from './lib/breadcrumb-ellipsis.component';
import { HlmBreadcrumbItem } from './lib/breadcrumb-item.directive';
import { HlmBreadcrumbLink } from './lib/breadcrumb-link.directive';
import { HlmBreadcrumbList } from './lib/breadcrumb-list.directive';
import { HlmBreadcrumbPage } from './lib/breadcrumb-page.directive';
import { HlmBreadcrumbSeparator } from './lib/breadcrumb-separator.component';
import { HlmBreadcrumb } from './lib/breadcrumb.directive';

export * from './lib/breadcrumb-ellipsis.component';
export * from './lib/breadcrumb-item.directive';
export * from './lib/breadcrumb-link.directive';
export * from './lib/breadcrumb-list.directive';
export * from './lib/breadcrumb-page.directive';
export * from './lib/breadcrumb-separator.component';
export * from './lib/breadcrumb.directive';

export const HlmBreadCrumbImports = [
	HlmBreadcrumb,
	HlmBreadcrumbEllipsis,
	HlmBreadcrumbSeparator,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbPage,
	HlmBreadcrumbList,
] as const;

@NgModule({
	imports: [...HlmBreadCrumbImports],
	exports: [...HlmBreadCrumbImports],
})
export class HlmBreadCrumbModule {}
