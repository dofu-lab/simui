import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-22',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, HlmTooltipImports, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="icon" [showDelay]="10" [hideDelay]="10" [hlmTooltip]="tooltipContent">
			<ng-icon name="lucidePlus" />
		</button>
		<ng-template #tooltipContent><span class="flex items-center">Tooltip</span></ng-template>
	`,
})
export class Button22Component {}
