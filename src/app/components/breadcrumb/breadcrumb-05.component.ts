import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucideSlash } from '@ng-icons/lucide';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbPageDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-breadcrumb-05',
	standalone: true,
	providers: [provideIcons({ lucideHouse, lucideSlash })],
	imports: [
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbPageDirective,
		HlmBreadcrumbLinkDirective,
		HlmIconDirective,
		NgIcon,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center">
						<ng-icon hlm name="lucideHouse" size="sm" />
					</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm hlm size="sm" name="lucideSlash" />
				</li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink hlmL link="/components">Components</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm hlm size="sm" name="lucideSlash" />
				</li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb05Component {}

export const breadcrumb05Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucideSlash } from '@ng-icons/lucide';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbPageDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-breadcrumb-05',
	standalone: true,
	providers: [provideIcons({ lucideHouse, lucideSlash })],
	imports: [
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbPageDirective,
		HlmBreadcrumbLinkDirective,
		HlmIconDirective,
		NgIcon,
	],
	template: \`
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center">
						<ng-icon hlm name="lucideHouse" size="sm" />
					</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm hlm size="sm" name="lucideSlash" />
				</li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink hlmL link="/components">Components</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm hlm size="sm" name="lucideSlash" />
				</li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	\`,
})
export class Breadcrumb05Component {}`;
