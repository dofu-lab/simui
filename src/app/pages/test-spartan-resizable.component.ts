import {
	ResizableHandleComponent,
	ResizablePanelComponent,
	ResizablePanelGroupComponent,
} from '@/libs/sim/lib-resizable';
import {
	HlmResizableHandleDirective,
	HlmResizablePanelDirective,
	HlmResizablePanelGroupComponent,
} from '@/libs/sim/ui-resizable-helm/';
import { HlmIcon } from '@/libs/ui/ui-icon-helm/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGripVertical } from '@ng-icons/lucide';

@Component({
	selector: 'spartan-resizable',
	imports: [
		ResizablePanelGroupComponent,
		ResizablePanelComponent,
		HlmResizablePanelGroupComponent,
		HlmResizablePanelDirective,
		HlmResizableHandleDirective,
		ResizableHandleComponent,
		NgIcon,
		HlmIcon,
	],
	providers: [provideIcons({ lucideGripVertical })],
	host: {
		class: 'flex h-[500px]',
	},
	template: `
		<resizable-panel-group hlmResizablePanelGroup class="h-[500px] w-[1000px] rounded-lg border" layout="horizontal">
			<resizable-panel hlmResizablePanel>
				<div class="flex h-full items-center justify-center p-6">a</div>
			</resizable-panel>

			<resizable-handle hlmResizableHandle>
				<div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
					<ng-icon hlm name="lucideGripVertical" [style.--ng-icon__size]="'10px'" />
				</div>
			</resizable-handle>

			<resizable-panel hlmResizablePanel>
				<div class="flex h-full items-center justify-center p-6">ab</div>
			</resizable-panel>

			<resizable-handle hlmResizableHandle>
				<div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
					<ng-icon hlm name="lucideGripVertical" [style.--ng-icon__size]="'10px'" />
				</div>
			</resizable-handle>
			<resizable-panel hlmResizablePanel>
				<resizable-panel-group hlmResizablePanelGroup layout="vertical">
					<resizable-panel hlmResizablePanel>
						<div class="flex h-full items-center justify-center p-6">a</div>
					</resizable-panel>

					<resizable-handle hlmResizableHandle>
						<div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
							<ng-icon hlm name="lucideGripVertical" [style.--ng-icon__size]="'10px'" />
						</div>
					</resizable-handle>

					<resizable-panel hlmResizablePanel>
						<div class="flex h-full items-center justify-center p-6">b</div>
					</resizable-panel>
				</resizable-panel-group>
			</resizable-panel>
		</resizable-panel-group>
	`,
})
export class SpartanResizableComponent {}
