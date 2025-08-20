import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSquareArrowOutUpRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-37',
	standalone: true,
	providers: [provideIcons({ lucideSquareArrowOutUpRight })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" variant="outline" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				Preview
			</button>
			<button
				hlmBtn
				size="sm"
				variant="outline"
				class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideSquareArrowOutUpRight" size="sm" />
			</button>
		</div>
	`,
})
export class Button37Component {}

export const button37Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSquareArrowOutUpRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-37',
	standalone: true,
	providers: [provideIcons({ lucideSquareArrowOutUpRight })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: \`
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" variant="outline" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				Preview
			</button>
			<button
				hlmBtn
				size="sm"
				variant="outline"
				class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideSquareArrowOutUpRight" size="sm" />
			</button>
		</div>
	\`,
})
export class Button37Component {}`;
