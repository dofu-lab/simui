import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar04Component } from '../examples';

@Component({
	selector: 'sim-sidebar-04-preview-page',
	imports: [Sidebar04Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-04 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar04PreviewPage {}
