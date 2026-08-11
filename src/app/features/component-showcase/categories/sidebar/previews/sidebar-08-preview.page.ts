import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar08Component } from '../examples';

@Component({
	selector: 'sim-sidebar-08-preview-page',
	imports: [Sidebar08Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-08 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar08PreviewPage {}
