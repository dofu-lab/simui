import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-04',
	standalone: true,
	imports: [NgIcon, HlmButtonDirective, HlmIconDirective],
	providers: [provideIcons({ lucideArchive })],
	template: `
		<button hlmBtn size="sm">
			<ng-icon hlm name="lucideArchive" size="sm" class="mr-1" />
			Archive
		</button>
	`,
})
export class Button04Component {}

export const button04Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-04',
  standalone: true,
  imports: [NgIcon, HlmButtonDirective, HlmIconDirective],
  providers: [provideIcons({ lucideArchive })],
  template: \`
    <button hlmBtn size="sm">
      <ng-icon hlm name="lucideArchive" size="sm" class="mr-1" />
      Archive
    </button>
  \`,
})
export class Button04Component {}
`;
