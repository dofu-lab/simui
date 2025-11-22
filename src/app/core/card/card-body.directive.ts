import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[dfCardBody]',
	host: {
		'[class]': '_computedClass()',
	},
})
export class CardBodyDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('p-2', this.userClass()));
}
