import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-30',
	providers: [provideIcons({ lucideCheck, lucideCopy })],
	imports: [NgClass, HlmButton, HlmTooltipImports, NgIcon],
	template: `
		<button
			hlmBtn
			variant="outline"
			size="icon"
			[hlmTooltip]="tooltipContent"
			[disabled]="copied()"
			(click)="onSelect()">
			<ng-icon
				name="lucideCopy"
				class="transition-all"
				[ngClass]="{
					'scale-0 opacity-0': copied(),
					'scale-100 opacity-100': !copied(),
				}" />
			<ng-icon
				name="lucideCheck"
				class="absolute text-emerald-500 transition-all"
				[ngClass]="{
					'scale-0 opacity-0': !copied(),
					'scale-100 opacity-100': copied(),
				}" />
		</button>
		<ng-template #tooltipContent>
			<span class="flex items-center">Copy to clipboard</span>
		</ng-template>
	`,
})
export class Button30Component {
	protected readonly clipboard = inject(Clipboard);
	protected readonly copied = signal<boolean>(false);

	protected onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}
