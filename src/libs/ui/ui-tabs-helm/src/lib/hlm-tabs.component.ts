import { Component, input } from '@angular/core';
import { BrnTabs } from '@spartan-ng/brain/tabs';

@Component({
	selector: 'hlm-tabs',
	standalone: true,
	hostDirectives: [
		{
			directive: BrnTabs,
			inputs: ['orientation', 'direction', 'activationMode', 'brnTabs: tab'],
			outputs: ['tabActivated'],
		},
	],
	template: '<ng-content/>',
})
export class HlmTabs {
	public readonly tab = input.required<string>();
}
