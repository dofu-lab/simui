import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
	selector: 'sim-button-05',
	standalone: true,
	imports: [HlmButtonDirective],
	template: `
		<button hlmBtn disabled size="sm">Disabled</button>
	`,
})
export class Button05Component {}

export const button05Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-05',
  standalone: true,
  imports: [HlmButtonDirective],
  template: \` <button hlmBtn disabled size="sm">Disabled</button> \`,
})
export class Button05Component {}
`;
