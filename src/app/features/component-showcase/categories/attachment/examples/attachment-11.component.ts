import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFileText, lucideTrash2 } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmProgressImports } from '@spartan-ng/helm/progress';

@Component({
	selector: 'sim-attachment-11',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports, HlmProgressImports],
	providers: [provideIcons({ lucideFileText, lucideTrash2 })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment state="done" class="w-full items-start">
			<hlm-attachment-media>
				<ng-icon hlm name="lucideFileText" size="sm" />
			</hlm-attachment-media>
			<hlm-attachment-content>
				<span hlmAttachmentTitle>Project brief.pdf</span>
				<span hlmAttachmentDescription>Upload complete · 2.4 MB</span>
				<hlm-progress class="w-full" [value]="progressValue">
					<hlm-progress-indicator />
				</hlm-progress>
			</hlm-attachment-content>
			<hlm-attachment-actions class="flex-col justify-between self-stretch">
				<button hlmAttachmentAction aria-label="Remove Project brief.pdf">
					<ng-icon hlm name="lucideTrash2" size="xs" />
				</button>
				<span>{{ progressValue }}%</span>
			</hlm-attachment-actions>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Attachment with completed progress</p>
	`,
})
export class Attachment11Component {
	protected readonly progressValue = 100;
}
