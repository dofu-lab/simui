import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-19',
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
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list
				class="text-foreground mt-0 flex-col gap-1 rounded-none bg-transparent px-1 py-0"
				orientation="vertical"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" class="mr-2" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" class="mr-2" />
					Project
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePackage" size="sm" class="mr-2" />
					Packages
				</button>
			</hlm-tabs-list>
			<div class="grow rounded-md border text-start">
				<div hlmTabsContent="tab01" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Overview</p>
				</div>
				<div hlmTabsContent="tab02" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Project</p>
				</div>
				<div hlmTabsContent="tab03" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Packages</p>
				</div>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs19Component {}

export const tabs19Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-19',
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
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list
				class="text-foreground mt-0 flex-col gap-1 rounded-none bg-transparent px-1 py-0"
				orientation="vertical"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" class="mr-2" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" class="mr-2" />
					Project
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePackage" size="sm" class="mr-2" />
					Packages
				</button>
			</hlm-tabs-list>
			<div class="grow rounded-md border text-start">
				<div hlmTabsContent="tab01" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Overview</p>
				</div>
				<div hlmTabsContent="tab02" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Project</p>
				</div>
				<div hlmTabsContent="tab03" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Packages</p>
				</div>
			</div>
		</hlm-tabs>
	\`,
})
export class Tabs19Component {}
`;
