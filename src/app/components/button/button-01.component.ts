import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
	selector: 'sim-button-01',
	standalone: true,
	imports: [HlmButtonDirective],
	template: `
		<button hlmBtn size="sm">Primary</button>
	`,
})
export class Button01Component {}

export const button01Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-01',
  standalone: true,
  imports: [HlmButtonDirective],
  template: \` <button hlmBtn size="sm">Primary</button> \`,
})
export class Button01Component {}
`;
