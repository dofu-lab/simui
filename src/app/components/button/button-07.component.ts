import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlame } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-07',
	providers: [provideIcons({ lucideFlame })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucideFlame" size="sm" class="mr-1" />
			Live
		</button>
	`,
})
export class Button07Component {}

export const button07Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlame } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-07',
	providers: [provideIcons({ lucideFlame })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: \`
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucideFlame" size="sm" class="mr-1" />
			Live
		</button>
	\`,
})
export class Button07Component {}`;
