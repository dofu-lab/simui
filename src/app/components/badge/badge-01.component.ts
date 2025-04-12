import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
	selector: 'sim-badge-01',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge>Badge</span>
	`,
})
export class Badge01Component {}

export const badge01Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'sim-badge-01',
  standalone: true,
  imports: [HlmBadgeDirective],
  template: \` <span hlmBadge> Badge </span> \`,
})
export class Badge01Component {}
`;
