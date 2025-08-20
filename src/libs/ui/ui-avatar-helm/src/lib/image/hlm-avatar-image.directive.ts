import { Directive, computed, inject, input } from '@angular/core';
import { BrnAvatarImage } from '@spartan-ng/brain/avatar';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Directive({
	selector: 'img[hlmAvatarImage]',
	standalone: true,
	exportAs: 'avatarImage',
	hostDirectives: [BrnAvatarImage],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmAvatarImage {
	public canShow = inject(BrnAvatarImage).canShow;

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => hlm('aspect-square object-cover h-full w-full', this.userClass()));
}
