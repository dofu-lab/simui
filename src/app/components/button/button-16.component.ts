import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePrinter } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-16',
	standalone: true,
	providers: [provideIcons({ lucidePrinter })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucidePrinter" size="sm" class="mr-2" />
			Print
			<span
				class="text-muted-foreground ml-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
				⌘ + P
			</span>
		</button>
	`,
})
export class Button16Component {}

export const button16Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePrinter } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-16',
	standalone: true,
	providers: [provideIcons({ lucidePrinter })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: \`
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucidePrinter" size="sm" class="mr-2" />
			Print
			<span
				class="text-muted-foreground ml-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
				⌘ + P
			</span>
		</button>
	\`,
})
export class Button16Component {}`;
