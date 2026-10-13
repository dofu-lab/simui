import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideRefreshCw, lucideTriangleAlert } from '@ng-icons/lucide';
import { type AttachmentState, HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-07',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideCircleCheck, lucideRefreshCw, lucideTriangleAlert })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment [state]="state()" class="w-full">
			<hlm-attachment-media>
				<ng-icon hlm [name]="state() === 'error' ? 'lucideTriangleAlert' : 'lucideCircleCheck'" size="sm" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>customer-data.csv</span>
				<span hlmAttachmentDescription aria-live="polite">
					{{ state() === 'error' ? 'Upload interrupted · Try again' : 'Upload complete · 936 KB' }}
				</span>
			</hlm-attachment-content>
			@if (state() === 'error') {
				<hlm-attachment-actions>
					<button hlmAttachmentAction aria-label="Retry customer-data.csv upload" (click)="retry()">
						<ng-icon hlm name="lucideRefreshCw" size="xs" />
					</button>
				</hlm-attachment-actions>
			}
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Failed attachment with retry action</p>
	`,
})
export class Attachment07Component {
	protected readonly state = signal<AttachmentState>('error');

	protected retry(): void {
		this.state.set('done');
	}
}
