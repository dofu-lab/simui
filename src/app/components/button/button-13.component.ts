import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
	selector: 'sim-button-13',
	standalone: true,
	imports: [HlmButtonDirective, HlmSpinnerComponent],
	template: `
		<button hlmBtn disabled size="sm" class="group">
			<hlm-spinner size="xs" class="mr-2" />
			Saving...
		</button>
	`,
})
export class Button13Component {}

export const button13Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
  selector: 'sim-button-13',
  standalone: true,
  imports: [HlmButtonDirective, HlmSpinnerComponent],
  template: \`
    <button hlmBtn disabled size="sm" class="group">
      <hlm-spinner size="xs" class="mr-2" />
      Saving...
    </button>
  \`,
})
export class Button13Component {}
`;
