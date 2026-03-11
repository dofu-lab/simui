import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePrinter } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-16',
	providers: [provideIcons({ lucidePrinter })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon name="lucidePrinter" />
			Print
			<span
				class="text-muted-foreground inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
				⌘ + P
			</span>
		</button>
	`,
})
export class Button16Component {}
