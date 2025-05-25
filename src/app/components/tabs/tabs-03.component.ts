import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-03',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-primary [&>button]:data-[state=active]:text-primary-foreground grid w-full grid-cols-3 bg-transparent [&>button]:data-[state=active]:rounded-full [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
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
export class Tabs03Component {}

export const tabs03Code = `
import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-03',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-primary [&>button]:data-[state=active]:text-primary-foreground grid w-full grid-cols-3 bg-transparent [&>button]:data-[state=active]:rounded-full [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
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
export class Tabs03Component {}
`;
