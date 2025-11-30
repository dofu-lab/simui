import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify } from '@ng-icons/lucide';
import {
	HlmBreadcrumb,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-breadcrumb-02',
	providers: [provideIcons({ lucideAlignJustify })],
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		HlmIcon,
		NgIcon,
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
					<ng-icon hlm name="lucideAlignJustify" size="sm" [hlmDropdownMenuTrigger]="breadcrumbDropdown" />
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
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb02Component {}