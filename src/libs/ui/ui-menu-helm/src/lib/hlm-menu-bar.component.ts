import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnMenuBar } from '@spartan-ng/brain/menu';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-menu-bar',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnMenuBar],
	template: '<ng-content/>',
})
export class HlmMenuBar {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		hlm('border-border flex h-10 items-center space-x-1 rounded-md border bg-background p-1', this.userClass()),
	);
}
