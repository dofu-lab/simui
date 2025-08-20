import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-20',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: `
		<button hlmBtn variant="outline" size="icon" class="rounded-full">
			<ng-icon hlm name="lucidePlus" size="sm" />
		</button>
	`,
})
export class Button20Component {}

export const button20Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-20',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: \`
		<button hlmBtn variant="outline" size="icon" class="rounded-full">
			<ng-icon hlm name="lucidePlus" size="sm" />
		</button>
	\`,
})
export class Button20Component {}`;
