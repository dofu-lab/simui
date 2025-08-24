import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-04',
	standalone: true,
	imports: [NgIcon, HlmButton, HlmIcon],
	providers: [provideIcons({ lucideArchive })],
	template: `
		<button hlmBtn size="sm">
			<ng-icon hlm name="lucideArchive" size="sm" class="mr-1" />
			Archive
		</button>
	`,
})
export class Button04Component {}

export const button04Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-04',
	standalone: true,
	imports: [NgIcon, HlmButton, HlmIcon],
	providers: [provideIcons({ lucideArchive })],
	template: \`
		<button hlmBtn size="sm">
			<ng-icon hlm name="lucideArchive" size="sm" class="mr-1" />
			Archive
		</button>
	\`,
})
export class Button04Component {}`;
