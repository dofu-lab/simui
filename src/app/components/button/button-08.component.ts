import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-08',
	standalone: true,
	providers: [provideIcons({ lucideArrowLeft })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="group">
			<ng-icon
				hlm
				name="lucideArrowLeft"
				size="sm"
				class="-ms-1 mr-1 transition-transform group-hover:-translate-x-0.5" />
			Go back
		</button>
	`,
})
export class Button08Component {}

export const button08Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-08',
  standalone: true,
  providers: [provideIcons({ lucideArrowLeft })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn variant="ghost" size="sm" class="group">
      <ng-icon
        hlm
        name="lucideArrowLeft"
        size="sm"
        class="-ms-1 mr-1 transition-transform group-hover:-translate-x-0.5"
      />
      Go back
    </button>
  \`,
})
export class Button08Component {}
`;
