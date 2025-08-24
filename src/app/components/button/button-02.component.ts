import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-02',
	standalone: true,
	imports: [NgIcon, HlmButton, HlmIcon],
	providers: [provideIcons({ lucideTrash })],
	template: `
		<button hlmBtn variant="destructive" size="sm">
			<ng-icon hlm name="lucideTrash" size="sm" class="mr-1" />
			Delete
		</button>
	`,
})
export class Button02Component {}

export const button02Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-02',
	standalone: true,
	imports: [NgIcon, HlmButton, HlmIcon],
	providers: [provideIcons({ lucideTrash })],
	template: \`
		<button hlmBtn variant="destructive" size="sm">
			<ng-icon hlm name="lucideTrash" size="sm" class="mr-1" />
			Delete
		</button>
	\`,
})
export class Button02Component {}`;
