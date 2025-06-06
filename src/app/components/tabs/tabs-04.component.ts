import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-04',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="h-auto w-full rounded-none border-b bg-transparent p-0" aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					Tab 1
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					Tab 2
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
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

export const tabs04Code = `
import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
	selector: 'sim-tabs-04',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list class="h-auto w-full rounded-none border-b bg-transparent p-0" aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					Tab 1
				</button>
				<button
					hlmTabsTrigger="tab02"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
					Tab 2
				</button>
				<button
					hlmTabsTrigger="tab03"
					class="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
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
	\`,
})
export class Tabs04Component {}
`;
