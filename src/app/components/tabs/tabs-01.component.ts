import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-01',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="grid w-full grid-cols-3" aria-label="tabs example">
				<button hlmTabsTrigger="tab01">Tab 1</button>
				<button hlmTabsTrigger="tab02">Tab 2</button>
				<button hlmTabsTrigger="tab03">Tab 3</button>
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
export class Tabs01Component {}

export const tabs01Code = `import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-01',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="grid w-full grid-cols-3" aria-label="tabs example">
				<button hlmTabsTrigger="tab01">Tab 1</button>
				<button hlmTabsTrigger="tab02">Tab 2</button>
				<button hlmTabsTrigger="tab03">Tab 3</button>
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
	\`,
})
export class Tabs01Component {}`;
