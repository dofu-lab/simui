import { Component } from '@angular/core';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-18',
	imports: [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2" orientation="vertical">
			<hlm-tabs-list
				class="mt-0 h-auto flex-col gap-1 rounded-none border-l bg-transparent p-0"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="data-[state=active]:after:bg-primary! relative w-full justify-start rounded-none border-none after:absolute after:inset-y-0 after:-start-px! after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
					Overview
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary! relative w-full justify-start rounded-none border-none after:absolute after:inset-y-0 after:-start-px! after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
					Project
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary! relative w-full justify-start rounded-none border-none after:absolute after:inset-y-0 after:-start-px! after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
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
export class Tabs18Component {}
