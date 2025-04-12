import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[dfCardBody]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class CardBodyDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('p-5', this.userClass()));
}
