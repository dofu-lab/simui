import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-11',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmTabsComponent,
		HlmTabsListComponent,
		HlmTabsTriggerDirective,
		HlmTabsContentDirective,
	],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01" class="">
			<hlm-tabs-list
				class="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePackage" size="sm" />
					Packages
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs11Component {}

export const tabs11Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-11',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmTabsComponent,
		HlmTabsListComponent,
		HlmTabsTriggerDirective,
		HlmTabsContentDirective,
	],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	host: {
		class: 'w-full',
	},
	template: \`
		<hlm-tabs tab="tab01" class="">
			<hlm-tabs-list
				class="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="bg-muted flex gap-2 overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePackage" size="sm" />
					Packages
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
		</hlm-tabs>
	\`,
})
export class Tabs11Component {}`;
