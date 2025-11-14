import { Component, computed, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';
import { ResizableHandleComponent } from '../../lib-resizable';

@Component({
	selector: 'hlm-resizable-handle',
	imports: [ResizableHandleComponent, NgIcon],
	template: `
		<resizable-handle [class]="_computedClass()">
			<ng-content>
				@if (withHandle()) {
					<div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
						<ng-icon hlm name="lucideGripVertical" [style.--ng-icon__size]="'10px'" />
					</div>
				}
			</ng-content>
		</resizable-handle>
	`,
	host: {},
})
export class HlmResizableHandleComponent {
	public readonly userClass = input<ClassValue>({ alias: 'class' });
	public layout = input<'horizontal' | 'vertical'>('vertical');
	public withHandle = input<boolean>(false);

	public readonly _computedClass = computed(() =>
		hlm(
			'relative flex w-px h-full items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
			this.userClass(),
		),
	);
}
