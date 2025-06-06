import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnTooltipContentDirective, BrnTooltipTriggerDirective } from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';

@Component({
	selector: 'sim-button-30',
	standalone: true,
	providers: [provideIcons({ lucideCheck, lucideCopy })],
	imports: [
		NgClass,
		HlmButtonDirective,
		HlmIconDirective,
		HlmTooltipComponent,
		HlmTooltipTriggerDirective,
		BrnTooltipContentDirective,
		NgIcon,
	],
	template: `
		<hlm-tooltip>
			<button
				hlmBtn
				hlmTooltipTrigger
				hideDelay="1"
				showDelay="1"
				exitAnimationDuration="0"
				variant="outline"
				size="icon"
				[disabled]="copied()"
				(click)="onSelect()">
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
			<span *brnTooltipContent class="flex items-center">
				{{ tooltipLabel() }}
			</span>
		</hlm-tooltip>
	`,
})
export class Button30Component {
	tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
	clipboard = inject(Clipboard);
	copied = signal<boolean>(false);

	tooltipLabel = computed(() => (this.copied() ? '' : 'Copy to clipboard'));

	public onSelect(): void {
		this.tooltip()?.hide();
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const button30Code = `
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import {
  HlmTooltipComponent,
  HlmTooltipTriggerDirective,
} from '@spartan-ng/ui-tooltip-helm';
import {
  BrnTooltipContentDirective,
  BrnTooltipTriggerDirective,
} from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgClass } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'sim-button-30',
  standalone: true,
  providers: [provideIcons({ lucideCheck, lucideCopy })],
  imports: [
    NgClass,
    HlmButtonDirective,
    HlmIconDirective,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    BrnTooltipContentDirective,
    NgIcon,
  ],
  template: \`
    <hlm-tooltip>
      <button
        hlmBtn
        hlmTooltipTrigger
        hideDelay="1"
        showDelay="1"
        exitAnimationDuration="0"
        variant="outline"
        size="icon"
        [disabled]="copied()"
        (click)="onSelect()"
      >
        <ng-icon
          hlm
          name="lucideCopy"
          size="sm"
          class="transition-all"
          [ngClass]="{
            'scale-0 opacity-0': copied(),
            'scale-100 opacity-100': !copied(),
          }"
        />
        <ng-icon
          hlm
          name="lucideCheck"
          size="sm"
          class="absolute text-emerald-500 transition-all"
          [ngClass]="{
            'scale-0 opacity-0': !copied(),
            'scale-100 opacity-100': copied(),
          }"
        />
      </button>
      <span *brnTooltipContent class="flex items-center">
        {{ tooltipLabel() }}
      </span>
    </hlm-tooltip>
  \`,
})
export class Button30Component {
  tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
  clipboard = inject(Clipboard);
  copied = signal<boolean>(false);

  tooltipLabel = computed(() => (this.copied() ? '' : 'Copy to clipboard'));

  public onSelect(): void {
    this.tooltip()?.hide();
    this.copied.set(true);
    this.clipboard.copy('I love Angular!');

    setTimeout(() => {
      this.copied.set(false);
    }, 1500);
  }
}
`;
