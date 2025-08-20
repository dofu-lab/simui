import { Component } from '@angular/core';
import { BrnMenuGroup } from '@spartan-ng/brain/menu';

@Component({
	selector: 'hlm-menu-group',
	standalone: true,
	host: {
		class: 'block',
	},
	hostDirectives: [BrnMenuGroup],
	template: `
		<ng-content />
	`,
})
export class HlmMenuGroup {}
