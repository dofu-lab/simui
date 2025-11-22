import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[dfCardBackground]',
	host: {
		'[class]': '_computedClass()',
	},
})
export class CardBackgroundDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm('relative rounded-xl bg-bg-secondary-subtle border-border-secondary border-[1px] shadow-xs', this.userClass()),
	);
}
