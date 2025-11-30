import { Component } from '@angular/core';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-06',
	imports: [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="grid h-auto w-full grid-cols-3 space-x-0 bg-transparent p-0 shadow-xs rtl:space-x-reverse"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary border-input relative overflow-hidden rounded-none px-3 py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s first:border-r-0 last:rounded-e">
					Tab 1
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary border-input relative overflow-hidden rounded-none px-3 py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e">
					Tab 2
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary border-input relative overflow-hidden rounded-none px-3 py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e last:border-l-0">
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
export class Tabs06Component {}