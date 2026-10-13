import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-04',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideCircleX })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment state="error" class="w-full">
			<hlm-attachment-media>
				<ng-icon hlm name="lucideCircleX" size="sm" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>brand-assets.zip</span>
				<span hlmAttachmentDescription>Upload failed · File is too large</span>
			</hlm-attachment-content>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Attachment in failed upload state</p>
	`,
})
export class Attachment04Component {}
