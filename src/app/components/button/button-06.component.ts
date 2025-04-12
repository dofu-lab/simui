import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-06',
	standalone: true,
	providers: [provideIcons({ lucideX })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="secondary" size="sm">
			<ng-icon hlm name="lucideX" size="sm" class="mr-1" />
			Discard
		</button>
	`,
})
export class Button06Component {}

export const button06Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-06',
  standalone: true,
  providers: [provideIcons({ lucideX })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn variant="secondary" size="sm">
      <ng-icon hlm name="lucideX" size="sm" class="mr-1" />
      Discard
    </button>
  \`,
})
export class Button06Component {}
`;
