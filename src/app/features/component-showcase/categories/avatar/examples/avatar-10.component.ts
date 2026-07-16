import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-10',
	imports: [HlmAvatarImports, HlmBadgeImports],
	template: `
		<div class="relative">
			<hlm-avatar class="border-border/50 size-10 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<span hlmBadge class="border-background absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center p-0">
				9
			</span>
		</div>
	`,
})
export class Avatar10Component {}
