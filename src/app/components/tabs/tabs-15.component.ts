import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-tabs-15',
	imports: [NgIcon, HlmIcon, HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent, HlmTooltipImports],
	host: {
		class: 'w-full',
	},
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-col items-center">
			<hlm-tabs-list class="h-auto w-fit p-0.5 group-data-horizontal/tabs:h-fit" aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="size-10" [hlmTooltip]="overviewTooltip">
					<ng-icon hlm name="lucideHouse" size="sm" />
				</button>
				<ng-template #overviewTooltip>
					<span class="flex items-center text-xs">Overview</span>
				</ng-template>

				<span class="relative">
					<button hlmTabsTrigger="tab02" class="size-10" [hlmTooltip]="projectTooltip">
						<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					</button>
					<span
						class="bg-primary text-primary-foreground absolute top-1 right-0.5 flex size-4 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						3
					</span>
				</span>
				<ng-template #projectTooltip>
					<span class="flex items-center text-xs">Project</span>
				</ng-template>

				<button hlmTabsTrigger="tab03" class="size-10" [hlmTooltip]="packagesTooltip">
					<ng-icon hlm name="lucidePackage" size="sm" />
				</button>
				<ng-template #packagesTooltip>
					<span class="flex items-center text-xs">Packages</span>
				</ng-template>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Project</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs15Component {}
