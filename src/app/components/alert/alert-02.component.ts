import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-02',
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-amber-500/50 py-3 text-amber-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	`,
})
export class Alert02Component {}

export const alert02Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-02',
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<div hlmAlert class="flex gap-3 border-amber-500/50 py-3 text-amber-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	\`,
})
export class Alert02Component {}`;
