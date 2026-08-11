import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar03Component } from '../examples';

@Component({
	selector: 'sim-sidebar-03-preview-page',
	imports: [Sidebar03Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-03 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar03PreviewPage {}
