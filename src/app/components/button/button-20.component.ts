import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-20',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="outline" size="icon" class="rounded-full">
			<ng-icon hlm name="lucidePlus" size="sm" />
		</button>
	`,
})
export class Button20Component {}

export const button20Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';

@Component({
  selector: 'sim-button-20',
  standalone: true,
  providers: [provideIcons({ lucidePlus })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn variant="outline" size="icon" class="rounded-full">
      <ng-icon hlm name="lucidePlus" size="sm" />
    </button>
  \`,
})
export class Button20Component {}
`;
