import { Component } from '@angular/core';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-04',
	imports: [HlmTabsImports],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="h-auto w-full rounded-none border-b bg-transparent p-0" aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="data-[state=active]:after:bg-primary! relative mr-0 rounded-none border-none px-3 py-2 after:absolute after:inset-x-0 after:-bottom-0.5! after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
					Tab 1
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary! relative mr-0 rounded-none border-none px-3 py-2 after:absolute after:inset-x-0 after:-bottom-0.5! after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
					Tab 2
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary! relative mr-0 rounded-none border-none px-3 py-2 after:absolute after:inset-x-0 after:-bottom-0.5! after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none! data-[state=active]:after:opacity-100 dark:data-[state=active]:bg-transparent">
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
export class Tabs04Component {}
