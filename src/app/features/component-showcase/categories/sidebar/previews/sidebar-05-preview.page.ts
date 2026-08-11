import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar05Component } from '../examples';

@Component({
	selector: 'sim-sidebar-05-preview-page',
	imports: [Sidebar05Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-05 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar05PreviewPage {}
