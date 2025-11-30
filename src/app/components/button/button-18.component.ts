import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-18',
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmButton, HlmAvatar, HlmAvatarImage, HlmAvatarFallback, NgIcon, HlmIcon],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="rounded-full pl-1.5">
			<hlm-avatar class="mr-2 size-6">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			<ng-icon hlm name="lucideChevronDown" size="sm" />
		</button>
	`,
})
export class Button18Component {}