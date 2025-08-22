import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse } from '@ng-icons/lucide';
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
	selector: 'sim-breadcrumb-08',
	standalone: true,
	providers: [provideIcons({ lucideHouse })],
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
		<nav hlmBreadcrumb class="rounded-md border px-3 py-2 shadow-xs">
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center">
						<ng-icon hlm name="lucideHouse" size="sm" />
					</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink hlmL link="/components">Components</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb08Component {}

export const breadcrumb08Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse } from '@ng-icons/lucide';
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
	selector: 'sim-breadcrumb-08',
	standalone: true,
	providers: [provideIcons({ lucideHouse })],
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
	template: \`
		<nav hlmBreadcrumb class="rounded-md border px-3 py-2 shadow-xs">
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center">
						<ng-icon hlm name="lucideHouse" size="sm" />
					</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink hlmL link="/components">Components</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	\`,
})
export class Breadcrumb08Component {}`;
