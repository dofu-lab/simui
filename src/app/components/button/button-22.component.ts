import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-22',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, HlmIcon, HlmTooltip, HlmTooltipTrigger, BrnTooltipContentTemplate, NgIcon],
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

export const button22Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-22',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, HlmIcon, HlmTooltip, HlmTooltipTrigger, BrnTooltipContentTemplate, NgIcon],
	template: \`
		<hlm-tooltip>
			<button hlmBtn hlmTooltipTrigger variant="outline" size="icon" showDelay="10" hideDelay="10">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
			<span *brnTooltipContent class="flex items-center">Tooltip</span>
		</hlm-tooltip>
	\`,
})
export class Button22Component {}`;
