import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
	selector: 'sim-button-03',
	standalone: true,
	imports: [HlmButtonDirective],
	template: `
		<button hlmBtn size="sm" class="rounded-full">Rounded</button>
	`,
})
export class Button03Component {}

export const button03Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-03',
  standalone: true,
  imports: [HlmButtonDirective],
  template: \` <button hlmBtn size="sm" class="rounded-full">Rounded</button> \`,
})
export class Button03Component {}
`;
