import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar09Component } from '../examples';

@Component({
	selector: 'sim-sidebar-09-preview-page',
	imports: [Sidebar09Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-09 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar09PreviewPage {}
