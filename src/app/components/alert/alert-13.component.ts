import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-13',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div
			hlmAlert
			class="flex gap-3 border-[#9BF4D0] bg-[#9BF4D0] py-3 text-[#002116] dark:border-[#166534] dark:bg-[#14532d] dark:text-[#86efac]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" />
			</span>
			<p hlmAlertDesc>Completed successfully!</p>
		</div>
	`,
})
export class Alert13Component {}

export const alert13Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-13',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<div
			hlmAlert
			class="flex gap-3 border-[#9BF4D0] bg-[#9BF4D0] py-3 text-[#002116] dark:border-[#166534] dark:bg-[#14532d] dark:text-[#86efac]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" />
			</span>
			<p hlmAlertDesc>Completed successfully!</p>
		</div>
	\`,
})
export class Alert13Component {}`;
