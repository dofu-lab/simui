import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[dfCardFooter]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class CardFooterDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm('px-4 py-3 border-t-[1px] border-border-secondary', this.userClass()),
	);
}
