import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-19',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucidePlus" size="sm" class="mr-2" />
			Add new
		</button>
	`,
})
export class Button19Component {}

export const button19Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';

@Component({
  selector: 'sim-button-19',
  standalone: true,
  providers: [provideIcons({ lucidePlus })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn variant="outline" size="sm">
      <ng-icon hlm name="lucidePlus" size="sm" class="mr-2" />
      Add new
    </button>
  \`,
})
export class Button19Component {}
`;
