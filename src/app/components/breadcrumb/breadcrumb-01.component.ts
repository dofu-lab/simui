import { Component } from '@angular/core';
import {
	HlmBreadcrumb,
	HlmBreadcrumbEllipsis,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
	selector: 'sim-breadcrumb-01',
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbEllipsis,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		HlmDropdownMenuImports,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<hlm-breadcrumb-ellipsis class="h-4 w-4" [hlmDropdownMenuTrigger]="breadcrumbDropdown" />
					<ng-template #breadcrumbDropdown>
						<hlm-dropdown-menu class="w">
							<button hlmDropdownMenuItem id="document">
								<span>Documentation</span>
							</button>
							<button hlmDropdownMenuItem id="themes">
								<span>Themes</span>
							</button>
							<button hlmDropdownMenuItem id="github">
								<span>Github</span>
							</button>
						</hlm-dropdown-menu>
					</ng-template>
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
export class Breadcrumb01Component {}

export const breadcrumb01Code = `import { Component } from '@angular/core';
import {
	HlmBreadcrumb,
	HlmBreadcrumbEllipsis,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
	selector: 'sim-breadcrumb-01',
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbEllipsis,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		HlmDropdownMenuImports,
	],
	template: \`
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<hlm-breadcrumb-ellipsis class="h-4 w-4" [hlmDropdownMenuTrigger]="breadcrumbDropdown" />
					<ng-template #breadcrumbDropdown>
						<hlm-dropdown-menu class="w">
							<button hlmDropdownMenuItem id="document">
								<span>Documentation</span>
							</button>
							<button hlmDropdownMenuItem id="themes">
								<span>Themes</span>
							</button>
							<button hlmDropdownMenuItem id="github">
								<span>Github</span>
							</button>
						</hlm-dropdown-menu>
					</ng-template>
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
export class Breadcrumb01Component {}`;
