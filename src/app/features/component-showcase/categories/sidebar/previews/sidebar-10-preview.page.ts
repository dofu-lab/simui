import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar10Component } from '../examples';

@Component({
	selector: 'sim-sidebar-10-preview-page',
	imports: [Sidebar10Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-10 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar10PreviewPage {}
