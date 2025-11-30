import { Component } from '@angular/core';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-20',
	imports: [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list
				orientation="vertical"
				class="[&>button]:data-[state=active]:bg-muted mt-0 flex w-fit flex-col bg-transparent [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="w-full justify-start">Overview</button>
				<button hlmTabsTrigger="tab02" class="w-full justify-start">Projects</button>
				<button hlmTabsTrigger="tab03" class="w-full justify-start">Packages</button>
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
export class Tabs20Component {}