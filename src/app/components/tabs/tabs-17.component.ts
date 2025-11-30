import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-17',
	imports: [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	host: {
		class: 'w-full',
	},
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list class="mt-0 h-auto w-fit p-0.5" orientation="vertical" aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="w-full">Overview</button>
				<button hlmTabsTrigger="tab02" class="w-full">Project</button>
				<button hlmTabsTrigger="tab03" class="w-full">Package</button>
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
export class Tabs17Component {}