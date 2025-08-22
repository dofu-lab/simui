import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import {
	HlmBreadcrumb,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-breadcrumb-02',
	standalone: true,
	providers: [provideIcons({ lucideAlignJustify })],
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		BrnMenuTrigger,
		HlmMenu,
		HlmMenuItem,
		HlmIcon,
		NgIcon,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
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
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
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
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import {
	HlmBreadcrumb,
	HlmBreadcrumbItem,
	HlmBreadcrumbLink,
	HlmBreadcrumbList,
	HlmBreadcrumbPage,
	HlmBreadcrumbSeparator,
} from '@spartan-ng/helm/breadcrumb';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-breadcrumb-02',
	standalone: true,
	providers: [provideIcons({ lucideAlignJustify })],
	imports: [
		HlmBreadcrumb,
		HlmBreadcrumbSeparator,
		HlmBreadcrumbList,
		HlmBreadcrumbItem,
		HlmBreadcrumbPage,
		HlmBreadcrumbLink,
		BrnMenuTrigger,
		HlmMenu,
		HlmMenuItem,
		HlmIcon,
		NgIcon,
	],
	template: \`
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home">Home</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
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
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	\`,
})
export class Breadcrumb02Component {}`;
