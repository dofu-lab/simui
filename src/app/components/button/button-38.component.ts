import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-38',
	standalone: true,
	providers: [provideIcons({ lucideChevronLeft })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<button hlmBtn class="relative ps-12" size="sm">
			<span
				class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center">
				<ng-icon hlm name="lucideChevronLeft" size="sm" />
			</span>
			Previous
		</button>
	`,
})
export class Button38Component {}

export const button38Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-38',
	standalone: true,
	providers: [provideIcons({ lucideChevronLeft })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: \`
		<button hlmBtn class="relative ps-12" size="sm">
			<span
				class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center">
				<ng-icon hlm name="lucideChevronLeft" size="sm" />
			</span>
			Previous
		</button>
	\`,
})
export class Button38Component {}`;
