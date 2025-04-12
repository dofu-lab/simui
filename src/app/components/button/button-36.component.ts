import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideQrCode } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-36',
	standalone: true,
	providers: [provideIcons({ lucideQrCode })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn class="rounded-none rounded-s-md border-r shadow-none focus-visible:z-10" size="sm">
				<ng-icon hlm name="lucideQrCode" size="sm" />
			</button>
			<button hlmBtn class="rounded-none rounded-e-md shadow-none focus-visible:z-10" size="sm">Sign in</button>
		</div>
	`,
})
export class Button36Component {}

export const button36Code = `
import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideQrCode } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-36',
  standalone: true,
  providers: [provideIcons({ lucideQrCode })],
  imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
  template: \`
    <div
      class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse"
    >
      <button
        hlmBtn
        class="rounded-none rounded-s-md border-r shadow-none focus-visible:z-10"
        size="sm"
      >
        <ng-icon hlm name="lucideQrCode" size="sm" />
      </button>
      <button
        hlmBtn
        class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
        size="sm"
      >
        Sign in
      </button>
    </div>
  \`,
})
export class Button36Component {}
`;
