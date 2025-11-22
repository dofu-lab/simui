import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideQrCode } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-36',
	providers: [provideIcons({ lucideQrCode })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn class="rounded-none rounded-s-md border-r shadow-none focus-visible:z-10" size="sm">
				<ng-icon hlm name="lucideQrCode" size="sm" />
			</button>
			<button hlmBtn class="rounded-none rounded-e-md shadow-none focus-visible:z-10" size="sm">Sign in</button>
		</div>
	`,
})
export class Button36Component {}

export const button36Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideQrCode } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-36',
	providers: [provideIcons({ lucideQrCode })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: \`
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn class="rounded-none rounded-s-md border-r shadow-none focus-visible:z-10" size="sm">
				<ng-icon hlm name="lucideQrCode" size="sm" />
			</button>
			<button hlmBtn class="rounded-none rounded-e-md shadow-none focus-visible:z-10" size="sm">Sign in</button>
		</div>
	\`,
})
export class Button36Component {}`;
