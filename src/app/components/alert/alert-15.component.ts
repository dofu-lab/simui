import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/helm/alert';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-15',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3">
			<span>
				<ng-icon hlm hlmAlertIcon variant="destructive" name="lucideCircleAlert" class="text-red-500" />
			</span>
			<div>
				<h4 hlmAlertTitle class="text-sm font-medium">Password does not meet requirements:</h4>
				<ul hlmAlertDesc class="text-muted-foreground list-inside list-disc text-sm">
					<li>Minimum 8 characters</li>
					<li>Include a special character</li>
				</ul>
			</div>
		</div>
	`,
})
export class Alert15Component {}

export const alert15Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/helm/alert';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-15',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<div hlmAlert class="flex gap-3">
			<span>
				<ng-icon hlm hlmAlertIcon variant="destructive" name="lucideCircleAlert" class="text-red-500" />
			</span>
			<div>
				<h4 hlmAlertTitle class="text-sm font-medium">Password does not meet requirements:</h4>
				<ul hlmAlertDesc class="text-muted-foreground list-inside list-disc text-sm">
					<li>Minimum 8 characters</li>
					<li>Include a special character</li>
				</ul>
			</div>
		</div>
	\`,
})
export class Alert15Component {}`;
