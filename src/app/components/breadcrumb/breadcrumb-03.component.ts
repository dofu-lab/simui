import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse } from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-breadcrumb-03',
	providers: [provideIcons({ lucideHouse })],
	imports: [NgIcon, HlmBreadcrumbImports, HlmIconImports],
	template: `
		<nav hlmBreadcrumb>
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
export class Breadcrumb03Component {}
