import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideTrash2 } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-attachment-14',
	imports: [NgIcon, HlmIconImports, HlmAttachmentImports, HlmCardImports, HlmButtonImports],
	providers: [provideIcons({ lucideCircleCheck, lucideTrash2 })],
	host: { class: 'w-full max-w-sm' },
	template: `
		<div hlmCard class="bg-muted w-full gap-0 rounded-[16px] p-0.5 pb-0 shadow-none">
			<hlm-attachment state="done" class="bg-background w-full items-start">
				<div class="flex size-8 shrink-0 items-center self-stretch">
					<svg viewBox="0 0 48 48" class="inline-block size-full" aria-hidden="true">
						<g transform="translate(3)">
							<path
								class="fill-slate-500 stroke-slate-500"
								d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
								stroke-width="2" />
							<path class="fill-slate-400" d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" />
							<path
								class="fill-white"
								transform="translate(5 5) scale(.5833)"
								d="M22 13v7a1 1 0 0 1-1 1h-8v-8h9Zm-11 0v8H3a1 1 0 0 1-1-1v-7h9Zm0-10v8H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v7h-9V3h8Z" />
							<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">XLSX</text>
						</g>
					</svg>
				</div>
				<hlm-attachment-content>
					<span hlmAttachmentTitle>create-ui.xlsx</span>
					<span hlmAttachmentDescription>
						<span class="flex items-center gap-1">
							<ng-icon hlm name="lucideCircleCheck" size="xs" class="text-emerald-500" />
							<span class="text-muted-foreground">Completed</span>
							<span>· 2.3 MB</span>
						</span>
					</span>
				</hlm-attachment-content>
				<hlm-attachment-actions>
					<button hlmAttachmentAction aria-label="Remove create-ui.xlsx">
						<ng-icon hlm name="lucideTrash2" size="xs" />
					</button>
				</hlm-attachment-actions>
			</hlm-attachment>

			<div hlmCardFooter class="bg-muted items-start gap-1 px-1.5 pt-1.5 pb-2">
				<button hlmBtn variant="outline" size="sm" class="flex-1">Change</button>
				<button hlmBtn size="sm" class="flex-1">Download</button>
			</div>
		</div>

		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Completed attachment card with footer actions</p>
	`,
})
export class Attachment14Component {}
