import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';

@Component({
	selector: 'sim-button-22',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [
		HlmButtonDirective,
		HlmIconDirective,
		HlmTooltipComponent,
		HlmTooltipTriggerDirective,
		BrnTooltipContentDirective,
		NgIcon,
	],
	template: `
		<hlm-tooltip>
			<button hlmBtn hlmTooltipTrigger variant="outline" size="icon" showDelay="10" hideDelay="10">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
			<span *brnTooltipContent class="flex items-center">Tooltip</span>
		</hlm-tooltip>
	`,
})
export class Button22Component {}

export const button22Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import {
  HlmTooltipComponent,
  HlmTooltipTriggerDirective,
} from '@spartan-ng/ui-tooltip-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';

@Component({
  selector: 'sim-button-22',
  standalone: true,
  providers: [provideIcons({ lucidePlus })],
  imports: [
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
        variant="outline"
        size="icon"
        showDelay="10"
        hideDelay="10"
      >
        <ng-icon hlm name="lucidePlus" size="sm" />
      </button>
      <span *brnTooltipContent class="flex items-center"> Tooltip </span>
    </hlm-tooltip>
  \`,
})
export class Button22Component {}
`;
