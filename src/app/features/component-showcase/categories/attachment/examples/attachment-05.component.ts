import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-05',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideDownload, lucideX })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment-group class="mx-auto max-w-fit" role="list" aria-label="Image attachments">
			<hlm-attachment orientation="vertical" role="listitem">
				<hlm-attachment-media variant="image">
					<img src="assets/backgrounds/bg-03.jpg" alt="Coastal landscape preview" width="120" height="120" />
				</hlm-attachment-media>
				<hlm-attachment-content>
					<span hlmAttachmentTitle>coast.jpg</span>
					<span hlmAttachmentDescription>2.1 MB</span>
				</hlm-attachment-content>
				<hlm-attachment-actions>
					<button hlmAttachmentAction aria-label="Download coast.jpg">
						<ng-icon hlm name="lucideDownload" size="xs" />
					</button>
				</hlm-attachment-actions>
			</hlm-attachment>

			<hlm-attachment orientation="vertical" role="listitem">
				<hlm-attachment-media variant="image">
					<img src="assets/backgrounds/bg-05.jpg" alt="Abstract landscape preview" width="120" height="120" />
				</hlm-attachment-media>
				<hlm-attachment-content>
					<span hlmAttachmentTitle>cover-art.jpg</span>
					<span hlmAttachmentDescription>3.7 MB</span>
				</hlm-attachment-content>
				<hlm-attachment-actions>
					<button hlmAttachmentAction aria-label="Remove cover-art.jpg">
						<ng-icon hlm name="lucideX" size="xs" />
					</button>
				</hlm-attachment-actions>
			</hlm-attachment>
		</hlm-attachment-group>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Vertical image attachment group</p>
	`,
})
export class Attachment05Component {}
