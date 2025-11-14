import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmResizablePanel]',
	host: {
		'[class]': 'computedClass()',
	},
})
export class HlmResizablePanelDirective {
	public readonly userClass = input<ClassValue>({ alias: 'class' });

	public readonly computedClass = computed(() =>
		hlm('relative overflow-hidden flex-shrink-0 h-full', this.userClass()),
	);
}
