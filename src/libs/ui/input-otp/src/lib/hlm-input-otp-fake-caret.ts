import { ChangeDetectionStrategy, Component } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Component({
	selector: 'hlm-input-otp-fake-caret',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="animate-caret-blink bg-foreground h-4 w-px duration-1000"></div>
	`,
})
export class HlmInputOtpFakeCaret {
	constructor() {
		classes(() => 'pointer-events-none absolute inset-0 flex items-center justify-center');
	}
}
