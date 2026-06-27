import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-08',
	imports: [HlmAvatarImports],
	template: `
		<div class="relative">
			<hlm-avatar class="border-border/50 size-10 rounded-lg border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div class="border-background absolute -top-1 -right-1 size-3 rounded-full border-2 bg-emerald-500"></div>
		</div>
	`,
})
export class Avatar08Component {}
