import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

interface AttachmentCard {
	readonly name: string;
	readonly description: string;
	readonly type: 'document' | 'image' | 'video' | 'audio' | 'featured';
	readonly size?: string;
}

@Component({
	selector: 'sim-attachment-09',
	imports: [HlmAttachmentImports, HlmBadgeImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full min-w-0 max-w-sm' },
	template: `
		<hlm-attachment class="w-full max-w-sm flex-col items-stretch justify-between gap-3 rounded-xl p-4 shadow-none">
			<hlm-attachment-content class="w-full">
				<span hlmAttachmentTitle>{{ attachment.name }}</span>
				<span hlmAttachmentDescription>{{ attachment.description }}</span>
			</hlm-attachment-content>

			<div class="flex min-w-0 items-center justify-between gap-3">
				@switch (attachment.type) {
					@case ('document') {
						<span
							hlmBadge
							variant="outline"
							class="h-6 rounded-md border-emerald-200 bg-emerald-50 px-2 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
							document
						</span>
					}
					@case ('image') {
						<span
							hlmBadge
							variant="outline"
							class="h-6 rounded-md border-blue-200 bg-blue-50 px-2 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
							image
						</span>
					}
					@case ('video') {
						<span
							hlmBadge
							variant="outline"
							class="h-6 rounded-md border-violet-200 bg-violet-50 px-2 text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
							video
						</span>
					}
					@case ('audio') {
						<span
							hlmBadge
							variant="outline"
							class="h-6 rounded-md border-rose-200 bg-rose-50 px-2 text-rose-700 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-300">
							audio
						</span>
					}
					@case ('featured') {
						<span
							hlmBadge
							variant="outline"
							class="h-6 rounded-md border-amber-300 bg-amber-50 px-2 text-amber-700 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300">
							featured
						</span>
					}
				}

				@if (attachment.size) {
					<span class="text-muted-foreground shrink-0 text-sm">{{ attachment.size }}</span>
				}
			</div>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Attachment card with type badge</p>
	`,
})
export class Attachment09Component {
	protected readonly attachment: AttachmentCard = {
		name: 'Product Specs',
		description: 'Technical documentation',
		type: 'document',
		size: '1.2 MB',
	};
}
