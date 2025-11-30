import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCompass, lucideComponent, lucideHouse } from '@ng-icons/lucide';
import {
	HlmBreadcrumb,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-breadcrumb-04',
	providers: [provideIcons({ lucideHouse, lucideComponent, lucideCompass })],
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		HlmIcon,
		NgIcon,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center gap-1">
						<ng-icon hlm name="lucideHouse" size="sm" />
						<span>Home</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/components" class="flex items-center gap-1">
						<ng-icon hlm name="lucideComponent" size="sm" />
						<span>Components</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<ng-icon hlm name="lucideCompass" size="sm" class="text-foreground" />
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb04Component {}