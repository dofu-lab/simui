import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-02',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideX })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment class="w-full">
			<hlm-attachment-media variant="image">
				<img src="assets/backgrounds/bg-01.jpg" alt="Mountain landscape preview" width="40" height="40" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>mountain-view.jpg</span>
				<span hlmAttachmentDescription>1.8 MB · JPEG</span>
			</hlm-attachment-content>
			<hlm-attachment-actions>
				<button hlmAttachmentAction aria-label="Remove mountain-view.jpg">
					<ng-icon hlm name="lucideX" size="xs" />
				</button>
			</hlm-attachment-actions>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Image attachment with remove action</p>
	`,
})
export class Attachment02Component {}
