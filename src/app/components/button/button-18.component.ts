import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-18',
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmButton, NgIcon, HlmAvatarImports],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="rounded-full pl-1!">
			<hlm-avatar class="size-6">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			<ng-icon name="lucideChevronDown" />
		</button>
	`,
})
export class Button18Component {}
