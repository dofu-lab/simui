import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-09',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmButtonImports, NgIcon],
	template: `
		<button hlmBtn size="sm" class="group/btn09">
			Next page
			<ng-icon
				name="lucideArrowRight"
				class="transition-transform motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover/btn09:translate-x-0.5" />
		</button>
	`,
})
export class Button09Component {}
