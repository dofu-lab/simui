import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-01',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex h-5 items-center justify-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	`,
})
export class Alert01Component {}

export const alert01Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-01',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex h-5 items-center justify-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	\`,
})
export class Alert01Component {}`;
