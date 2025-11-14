import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmResizablePanelGroup]',
	host: {
		'[class]': 'computedClass()',
	},
})
export class HlmResizablePanelGroupComponent {
	public readonly userClass = input<ClassValue>({ alias: 'class' });

	public readonly computedClass = computed(() =>
		hlm('flex h-full w-full overflow-hidden data-[panel-group-direction=vertical]:flex-col', this.userClass()),
	);
}
