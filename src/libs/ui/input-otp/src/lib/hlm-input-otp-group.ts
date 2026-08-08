import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmInputOtpGroup],hlm-input-otp-group',
	host: { 'data-slot': 'input-otp-group' },
})
export class HlmInputOtpGroup {
	constructor() {
		classes(
			() =>
				'has-data-[matches-spartan-invalid=true]:ring-destructive/20 dark:has-data-[matches-spartan-invalid=true]:ring-destructive/40 has-data-[matches-spartan-invalid=true]:border-destructive rounded-md has-data-[matches-spartan-invalid=true]:ring-3 flex items-center',
		);
	}
}
