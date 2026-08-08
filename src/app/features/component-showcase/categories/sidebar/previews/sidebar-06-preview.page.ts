import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar06Component } from '../examples';

@Component({
	selector: 'sim-sidebar-06-preview-page',
	imports: [Sidebar06Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-06 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar06PreviewPage {}
