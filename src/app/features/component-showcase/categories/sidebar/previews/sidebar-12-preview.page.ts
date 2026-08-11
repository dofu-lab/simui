import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar12Component } from '../examples';

@Component({
	selector: 'sim-sidebar-12-preview-page',
	imports: [Sidebar12Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-12 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar12PreviewPage {}
