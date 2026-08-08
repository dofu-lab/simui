import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar01Component } from '../examples';

@Component({
	selector: 'sim-sidebar-01-preview-page',
	imports: [Sidebar01Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-01 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar01PreviewPage {}
