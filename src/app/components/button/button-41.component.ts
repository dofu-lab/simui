import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucidePin } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-41',
	providers: [provideIcons({ lucideChevronDown, lucidePin })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<button hlmBtn size="sm" class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucidePin" size="sm" class="mr-2 opacity-60" />
				Pinned
			</button>
		</div>
	`,
})
export class Button41Component {}

export const button41Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucidePin } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-41',
	providers: [provideIcons({ lucideChevronDown, lucidePin })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: \`
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<button hlmBtn size="sm" class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucidePin" size="sm" class="mr-2 opacity-60" />
				Pinned
			</button>
		</div>
	\`,
})
export class Button41Component {}`;
