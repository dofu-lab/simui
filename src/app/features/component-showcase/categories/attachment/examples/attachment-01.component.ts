import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideFileText } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-01',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideDownload, lucideFileText })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment class="w-full">
			<hlm-attachment-media>
				<ng-icon hlm name="lucideFileText" size="sm" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>Project brief.pdf</span>
				<span hlmAttachmentDescription>2.4 MB · PDF</span>
			</hlm-attachment-content>
			<hlm-attachment-actions>
				<button hlmAttachmentAction aria-label="Download Project brief.pdf">
					<ng-icon hlm name="lucideDownload" size="xs" />
				</button>
			</hlm-attachment-actions>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">File attachment with download action</p>
	`,
})
export class Attachment01Component {}
