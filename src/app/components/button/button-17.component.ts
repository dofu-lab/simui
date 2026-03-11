import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-17',
	imports: [HlmButton, HlmAvatarImports],
	template: `
		<button hlmBtn size="sm" class="rounded-full pl-1">
			<hlm-avatar class="size-6">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			&#64;alancooper
		</button>
	`,
})
export class Button17Component {}
