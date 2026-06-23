import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus } from '@ng-icons/lucide';
import { classes } from '@spartan-ng/helm/utils';

@Component({
	selector: 'hlm-input-otp-separator',
	imports: [NgIcon],
	providers: [provideIcons({ lucideMinus })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		role: 'separator',
		'data-slot': 'input-otp-separator',
	},
	template: `
		<ng-icon name="lucideMinus" />
	`,
})
export class HlmInputOtpSeparator {
	constructor() {
		classes(() => "[&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center");
	}
}
