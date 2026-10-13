import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFileArchive, lucideFileSpreadsheet, lucideFileText, lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface AttachmentItem {
	readonly id: number;
	readonly name: string;
	readonly meta: string;
	readonly icon: string;
}

@Component({
	selector: 'sim-attachment-06',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideFileArchive, lucideFileSpreadsheet, lucideFileText, lucideX })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full max-w-sm' },
	template: `
		<div class="flex flex-col gap-3" role="list" aria-label="Attached files">
			@for (attachment of attachments(); track attachment.id) {
				<hlm-attachment class="w-full" role="listitem">
					<hlm-attachment-media>
						<ng-icon hlm [name]="attachment.icon" size="sm" />
					</hlm-attachment-media>
					<hlm-attachment-content>
						<span hlmAttachmentTitle>{{ attachment.name }}</span>
						<span hlmAttachmentDescription>{{ attachment.meta }}</span>
					</hlm-attachment-content>
					<hlm-attachment-actions>
						<button hlmAttachmentAction [attr.aria-label]="'Remove ' + attachment.name" (click)="remove(attachment.id)">
							<ng-icon hlm name="lucideX" size="xs" />
						</button>
					</hlm-attachment-actions>
				</hlm-attachment>
			} @empty {
				<p class="text-muted-foreground py-8 text-center text-sm" role="status">All attachments removed</p>
			}
		</div>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Removable file attachment list</p>
	`,
})
export class Attachment06Component {
	protected readonly attachments = signal<AttachmentItem[]>([
		{ id: 1, name: 'Q4-report.pdf', meta: '1.2 MB · PDF', icon: 'lucideFileText' },
		{ id: 2, name: 'budget.xlsx', meta: '580 KB · Spreadsheet', icon: 'lucideFileSpreadsheet' },
		{ id: 3, name: 'source-assets.zip', meta: '6.3 MB · Archive', icon: 'lucideFileArchive' },
	]);

	protected remove(id: number): void {
		this.attachments.update((attachments) => attachments.filter((attachment) => attachment.id !== id));
	}
}
