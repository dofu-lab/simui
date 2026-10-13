import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePaperclip, lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-12',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucidePaperclip, lucideX })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment size="sm" class="bg-muted w-full">
			<hlm-attachment-content class="flex items-center gap-2">
				<ng-icon hlm name="lucidePaperclip" size="sm" />
				<span hlmAttachmentTitle>Project brief.pdf</span>
			</hlm-attachment-content>
			<hlm-attachment-actions>
				<button hlmAttachmentAction aria-label="Remove Project brief.pdf">
					<ng-icon hlm name="lucideX" size="xs" />
				</button>
			</hlm-attachment-actions>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Compact inline attachment</p>
	`,
})
export class Attachment12Component {}
