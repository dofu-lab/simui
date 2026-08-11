import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar11Component } from '../examples';

@Component({
	selector: 'sim-sidebar-11-preview-page',
	imports: [Sidebar11Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-11 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar11PreviewPage {}
