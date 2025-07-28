import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbPageDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmMenuComponent, HlmMenuItemDirective } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-breadcrumb-02',
	standalone: true,
	providers: [provideIcons({ lucideAlignJustify })],
	imports: [
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbPageDirective,
		HlmBreadcrumbLinkDirective,
		BrnMenuTriggerDirective,
		HlmMenuComponent,
		HlmMenuItemDirective,
		HlmIconDirective,
		NgIcon,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<ng-icon hlm name="lucideAlignJustify" size="sm" [brnMenuTriggerFor]="breadcrumbDropdown" />
					<ng-template #breadcrumbDropdown>
						<hlm-menu class="w">
							<button hlmMenuItem id="document">
								<span>Documentation</span>
							</button>
							<button hlmMenuItem id="themes">
								<span>Themes</span>
							</button>
							<button hlmMenuItem id="github">
								<span>Github</span>
							</button>
						</hlm-menu>
					</ng-template>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb02Component {}

export const breadcrumb02Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbPageDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmMenuComponent, HlmMenuItemDirective } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-breadcrumb-02',
	standalone: true,
	providers: [provideIcons({ lucideAlignJustify })],
	imports: [
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbPageDirective,
		HlmBreadcrumbLinkDirective,
		BrnMenuTriggerDirective,
		HlmMenuComponent,
		HlmMenuItemDirective,
		HlmIconDirective,
		NgIcon,
	],
	template: \`
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<ng-icon hlm name="lucideAlignJustify" size="sm" [brnMenuTriggerFor]="breadcrumbDropdown" />
					<ng-template #breadcrumbDropdown>
						<hlm-menu class="w">
							<button hlmMenuItem id="document">
								<span>Documentation</span>
							</button>
							<button hlmMenuItem id="themes">
								<span>Themes</span>
							</button>
							<button hlmMenuItem id="github">
								<span>Github</span>
							</button>
						</hlm-menu>
					</ng-template>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	\`,
})
export class Breadcrumb02Component {}`;
