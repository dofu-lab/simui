import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCloudUpload } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-03',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucideCloudUpload })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment state="uploading" class="w-full">
			<hlm-attachment-media>
				<ng-icon hlm name="lucideCloudUpload" size="sm" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>product-demo.mov</span>
				<span hlmAttachmentDescription>Uploading · 68%</span>
			</hlm-attachment-content>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Attachment in uploading state</p>
	`,
})
export class Attachment03Component {}
