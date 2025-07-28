import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCompass, lucideComponent, lucideHouse } from '@ng-icons/lucide';
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
	selector: 'sim-breadcrumb-04',
	standalone: true,
	providers: [provideIcons({ lucideHouse, lucideComponent, lucideCompass })],
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
					<a hlmBreadcrumbLink link="/home" class="flex items-center gap-1">
						<ng-icon hlm name="lucideHouse" size="sm" />
						<span>Home</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator></li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/components" class="flex items-center gap-1">
						<ng-icon hlm name="lucideComponent" size="sm" />
						<span>Components</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<ng-icon hlm name="lucideCompass" size="sm" class="text-foreground" />
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb04Component {}

export const breadcrumb04Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCompass, lucideComponent, lucideHouse } from '@ng-icons/lucide';
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
	selector: 'sim-breadcrumb-04',
	standalone: true,
	providers: [provideIcons({ lucideHouse, lucideComponent, lucideCompass })],
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
					<a hlmBreadcrumbLink link="/home" class="flex items-center gap-1">
						<ng-icon hlm name="lucideHouse" size="sm" />
						<span>Home</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator></li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/components" class="flex items-center gap-1">
						<ng-icon hlm name="lucideComponent" size="sm" />
						<span>Components</span>
					</a>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<ng-icon hlm name="lucideCompass" size="sm" class="text-foreground" />
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	\`,
})
export class Breadcrumb04Component {}`;
