import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar02Component } from '../examples';

@Component({
	selector: 'sim-sidebar-02-preview-page',
	imports: [Sidebar02Component],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-sidebar-02 class="block min-h-svh w-full" [showFullscreenButton]="false" />
	`,
	host: {
		class: 'bg-background fixed inset-0 z-60 block overflow-auto',
	},
})
export class Sidebar02PreviewPage {}
