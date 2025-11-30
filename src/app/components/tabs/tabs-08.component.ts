import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-08',
	imports: [NgIcon, HlmIcon, HlmBadge, HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="h-auto w-full p-0.5" aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="gap-1.5">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button hlmTabsTrigger="tab02" class="gap-1.5">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Project
					<span hlmBadge variant="secondary" class="bg-primary/15 px-1.5">3</span>
				</button>
				<button hlmTabsTrigger="tab03" class="gap-1.5">
					<ng-icon hlm name="lucidePackage" size="sm" />
					Package
					<span hlmBadge>New</span>
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Project</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Package</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs08Component {}