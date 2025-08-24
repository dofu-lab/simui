import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-09',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: `
		<button hlmBtn size="sm" class="group">
			Next page
			<ng-icon hlm name="lucideArrowRight" size="sm" class="ms-1 transition-transform group-hover:translate-x-0.5" />
		</button>
	`,
})
export class Button09Component {}

export const button09Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-09',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: \`
		<button hlmBtn size="sm" class="group">
			Next page
			<ng-icon hlm name="lucideArrowRight" size="sm" class="ms-1 transition-transform group-hover:translate-x-0.5" />
		</button>
	\`,
})
export class Button09Component {}`;
