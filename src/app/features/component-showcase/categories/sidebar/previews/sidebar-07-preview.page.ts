import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar07Component } from '../examples';

@Component({
	selector: 'sim-sidebar-07-preview-page',
	imports: [Sidebar07Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-07 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar07PreviewPage {}
