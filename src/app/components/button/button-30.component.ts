import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate, BrnTooltipTrigger } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-30',
	providers: [provideIcons({ lucideCheck, lucideCopy })],
	imports: [NgClass, HlmButton, HlmIcon, HlmTooltip, HlmTooltipTrigger, BrnTooltipContentTemplate, NgIcon],
	template: `
		<hlm-tooltip>
			<button hlmBtn hlmTooltipTrigger variant="outline" size="icon" [disabled]="copied()" (click)="onSelect()">
				<ng-icon
					hlm
					name="lucideCopy"
					size="sm"
					class="transition-all"
					[ngClass]="{
						'scale-0 opacity-0': copied(),
						'scale-100 opacity-100': !copied(),
					}" />
				<ng-icon
					hlm
					name="lucideCheck"
					size="sm"
					class="absolute text-emerald-500 transition-all"
					[ngClass]="{
						'scale-0 opacity-0': !copied(),
						'scale-100 opacity-100': copied(),
					}" />
			</button>
			<span *brnTooltipContent class="flex items-center">Copy to clipboard</span>
		</hlm-tooltip>
	`,
})
export class Button30Component {
	tooltip = viewChild<BrnTooltipTrigger>(BrnTooltipTrigger);
	clipboard = inject(Clipboard);
	copied = signal<boolean>(false);

	public onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const button30Code = `import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate, BrnTooltipTrigger } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-30',
	providers: [provideIcons({ lucideCheck, lucideCopy })],
	imports: [NgClass, HlmButton, HlmIcon, HlmTooltip, HlmTooltipTrigger, BrnTooltipContentTemplate, NgIcon],
	template: \`
		<hlm-tooltip>
			<button hlmBtn hlmTooltipTrigger variant="outline" size="icon" [disabled]="copied()" (click)="onSelect()">
				<ng-icon
					hlm
					name="lucideCopy"
					size="sm"
					class="transition-all"
					[ngClass]="{
						'scale-0 opacity-0': copied(),
						'scale-100 opacity-100': !copied(),
					}" />
				<ng-icon
					hlm
					name="lucideCheck"
					size="sm"
					class="absolute text-emerald-500 transition-all"
					[ngClass]="{
						'scale-0 opacity-0': !copied(),
						'scale-100 opacity-100': copied(),
					}" />
			</button>
			<span *brnTooltipContent class="flex items-center">Copy to clipboard</span>
		</hlm-tooltip>
	\`,
})
export class Button30Component {
	tooltip = viewChild<BrnTooltipTrigger>(BrnTooltipTrigger);
	clipboard = inject(Clipboard);
	copied = signal<boolean>(false);

	public onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}`;
