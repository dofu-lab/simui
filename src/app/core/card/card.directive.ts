import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[dfCard]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class CardDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm('rounded-xl bg-background border-secondary border-[1px] shadow-xs overflow-hidden', this.userClass()),
	);
}
