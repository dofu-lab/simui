import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-10',
	imports: [NgIcon, HlmIcon, HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="grid h-auto w-full grid-cols-3 space-x-0 bg-transparent p-0 shadow-xs rtl:space-x-reverse"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="border-input data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative flex gap-2 overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s first:border-r-0 last:rounded-e last:border-l-0">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="border-input data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative flex gap-2 overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s first:border-r-0 last:rounded-e last:border-l-0">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="border-input data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative flex gap-2 overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s first:border-r-0 last:rounded-e last:border-l-0">
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
export class Tabs10Component {}