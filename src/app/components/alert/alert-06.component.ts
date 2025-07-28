import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/helm/alert';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-06',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-emerald-500/50 py-3 text-emerald-600">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" />
			</span>
			<p hlmAlertDesc>Completed successfully!</p>
		</div>
	`,
})
export class Alert06Component {}

export const alert06Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/helm/alert';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-06',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<div hlmAlert class="flex gap-3 border-emerald-500/50 py-3 text-emerald-600">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" />
			</span>
			<p hlmAlertDesc>Completed successfully!</p>
		</div>
	\`,
})
export class Alert06Component {}`;
