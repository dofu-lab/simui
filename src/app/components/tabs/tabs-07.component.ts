import { Component } from '@angular/core';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-07',
	imports: [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01">
			<hlm-tabs-list
				class="relative h-auto w-full gap-0.5 bg-transparent p-0 [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<div class="bg-border absolute bottom-[0.5px] h-px w-full"></div>
				<button
					hlmTabsTrigger="tab01"
					class="border-border bg-muted dark:data-[state=active]:bg-background data-[state=active]:border-b-background flex-none overflow-hidden rounded-b-none px-3 py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					Tab 1
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="border-border bg-muted dark:data-[state=active]:bg-background data-[state=active]:border-b-background flex-none overflow-hidden rounded-b-none px-3 py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					Tab 2
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="border-border bg-muted dark:data-[state=active]:bg-background data-[state=active]:border-b-background flex-none overflow-hidden rounded-b-none px-3 py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					Tab 3
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs07Component {}
