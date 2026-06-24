import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-02',
	imports: [HlmAvatarImports],
	template: `
		<hlm-avatar class="border-border/50 size-10 border">
			<span hlmAvatarFallback class="bg-muted">ML</span>
		</hlm-avatar>
	`,
})
export class Avatar02Component {}
