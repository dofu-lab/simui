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
	selector: 'sim-tabs-13',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmTabsComponent,
		HlmTabsListComponent,
		HlmTabsTriggerDirective,
		HlmTabsContentDirective,
	],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="text-muted-foreground/70 h-auto w-full rounded-none border-b bg-transparent p-0"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="hover:text-muted-foreground data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
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
export class Tabs13Component {}

export const tabs13Code = `import { Component } from '@angular/core';
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
	selector: 'sim-tabs-13',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmTabsComponent,
		HlmTabsListComponent,
		HlmTabsTriggerDirective,
		HlmTabsContentDirective,
	],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="text-muted-foreground/70 h-auto w-full rounded-none border-b bg-transparent p-0"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="hover:text-muted-foreground data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary relative flex-col gap-2 rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
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
export class Tabs13Component {}`;
