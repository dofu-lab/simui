import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface ImageAttachment {
	readonly id: number;
	readonly name: string;
	readonly preview: string;
}

@Component({
	selector: 'sim-attachment-10',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideX })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full max-w-[600px]' },
	template: `
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3" role="list" aria-label="Image attachments">
			@for (attachment of attachments(); track attachment.id) {
				<hlm-attachment
					class="relative aspect-square min-w-0 overflow-visible rounded-3xl border-0 bg-transparent p-0 shadow-none"
					role="listitem">
					<img
						class="size-full rounded-[inherit] object-cover"
						[src]="attachment.preview"
						[alt]="attachment.name + ' preview'" />
					<hlm-attachment-actions class="absolute -end-2 -top-2">
						<button
							hlmAttachmentAction
							variant="default"
							class="border-background rounded-full border-2"
							[attr.aria-label]="'Remove ' + attachment.name"
							(click)="remove(attachment.id)">
							<ng-icon hlm name="lucideX" size="xs" />
						</button>
					</hlm-attachment-actions>
				</hlm-attachment>
			} @empty {
				<p class="text-muted-foreground col-span-full py-12 text-center text-sm" role="status">
					All attachments removed
				</p>
			}
		</div>
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Removable image attachment grid</p>
	`,
})
export class Attachment10Component {
	protected readonly attachments = signal<ImageAttachment[]>([
		{ id: 1, name: 'bg-03.jpg', preview: 'assets/backgrounds/bg-03.jpg' },
		{ id: 2, name: 'bg-04.jpg', preview: 'assets/backgrounds/bg-04.jpg' },
		{ id: 3, name: 'bg-05.jpg', preview: 'assets/backgrounds/bg-05.jpg' },
	]);

	protected remove(id: number): void {
		this.attachments.update((attachments) => attachments.filter((attachment) => attachment.id !== id));
	}
}
