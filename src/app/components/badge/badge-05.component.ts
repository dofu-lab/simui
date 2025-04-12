import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
	selector: 'sim-badge-05',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge class="rounded-sm">Badge</span>
	`,
})
export class Badge05Component {}

export const badge05Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'sim-badge-05',
  standalone: true,
  imports: [HlmBadgeDirective],
  template: \` <span hlmBadge class="rounded-sm"> Badge </span> \`,
})
export class Badge05Component {}
`;
