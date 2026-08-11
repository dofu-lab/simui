import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar13Component } from '../examples';

@Component({
	selector: 'sim-sidebar-13-preview-page',
	imports: [Sidebar13Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-13 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar13PreviewPage {}
