import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-tabs-16',
	imports: [NgIcon, HlmIcon, HlmTabsImports, HlmTooltipImports],
	host: {
		class: 'w-full',
	},
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2" orientation="vertical">
			<hlm-tabs-list class="mt-0 w-fit p-0.5" aria-label="tabs example">
				<div class="flex size-10 justify-center">
					<button hlmTabsTrigger="tab01" [hlmTooltip]="overviewTooltip">
						<ng-icon hlm name="lucideHouse" size="sm" class="mx-auto" />
					</button>
					<ng-template #overviewTooltip>
						<span class="flex items-center text-xs">Overview</span>
					</ng-template>
				</div>

				<div class="relative size-10">
					<button hlmTabsTrigger="tab02" position="right" [hlmTooltip]="projectTooltip">
						<ng-icon hlm name="lucidePanelsTopLeft" size="sm" class="mx-auto" />
					</button>
					<span
						class="bg-primary text-primary-foreground absolute top-1 right-0.5 flex size-4 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						3
					</span>
					<ng-template #projectTooltip>
						<span class="flex items-center text-xs">Project</span>
					</ng-template>
				</div>

				<div class="relative size-10">
					<button hlmTabsTrigger="tab03" position="right" [hlmTooltip]="packagesTooltip">
						<ng-icon hlm name="lucidePackage" size="sm" class="mx-auto" />
					</button>
					<ng-template #packagesTooltip>
						<span class="flex items-center text-xs">Packages</span>
					</ng-template>
				</div>
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
export class Tabs16Component {}
