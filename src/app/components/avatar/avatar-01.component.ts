import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-01',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<hlm-avatar class="border-border/50 size-10 border">
			<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
			<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
		</hlm-avatar>
	`,
})
export class Avatar01Component {}