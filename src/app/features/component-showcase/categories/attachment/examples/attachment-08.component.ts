import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

interface SquareAttachment {
	readonly id: number;
	readonly name: string;
	readonly preview?: string;
}

type FileGlyph = 'code' | 'document' | 'html' | 'image' | 'presentation' | 'sheet' | 'video';

interface FileIconConfig {
	readonly foldClass: string;
	readonly glyph: FileGlyph;
	readonly label: string;
	readonly pageClass: string;
}

@Component({
	selector: 'sim-file-icon',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'contents' },
	template: `
		<svg viewBox="0 0 48 48" class="inline-block size-full shrink-0" aria-hidden="true">
			<g transform="translate(3)">
				<path
					d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
					stroke-width="2"
					[attr.class]="config().pageClass" />
				<path d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" [attr.class]="config().foldClass" />

				@switch (config().glyph) {
					@case ('image') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="m16 21-4.762-8.73L15 6l8 15h-7ZM8 10l6 11H2l6-11ZM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
					}
					@case ('presentation') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="M8.17 3A3 3 0 0 1 11 1h2a3 3 0 0 1 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.17ZM10 9v6l5-3-5-3Zm1-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
					}
					@case ('code') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12ZM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12Z" />
					}
					@case ('sheet') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="M22 13v7a1 1 0 0 1-1 1h-8v-8h9Zm-11 0v8H3a1 1 0 0 1-1-1v-7h9Zm0-10v8H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v7h-9V3h8Z" />
					}
					@case ('video') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="M6 20.196V3.804a1 1 0 0 1 1.53-.848l13.113 8.196a1 1 0 0 1 0 1.696L7.53 21.044A1 1 0 0 1 6 20.196Z" />
					}
					@case ('html') {
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="m12 18.178 4.619-1.256.624-6.778H9.026l-.204-2.255h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178ZM3 2h18l-1.623 18L12 22l-7.377-2L3 2Z" />
					}
					@case ('document') {
						<path class="fill-white" d="M6 15h10.5a1.5 1.5 0 0 1 0 3H6v-3Zm0 6h21.5a1.5 1.5 0 0 1 0 3H6v-3Z" />
					}
				}

				<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">
					{{ config().label }}
				</text>
			</g>
		</svg>
	`,
})
export class FileIconComponent {
	readonly fileName = input.required<string>();

	protected readonly config = computed<FileIconConfig>(() => {
		const extension = this.fileName().split('.').pop()?.toLowerCase() ?? '';
		const label = extension.slice(0, 4).toUpperCase() || 'FILE';

		if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
			return {
				pageClass: 'fill-cyan-500 stroke-cyan-500',
				foldClass: 'fill-cyan-400',
				glyph: 'image',
				label,
			};
		}

		if (['ppt', 'pptx'].includes(extension)) {
			return {
				pageClass: 'fill-orange-600 stroke-orange-600',
				foldClass: 'fill-orange-500',
				glyph: 'presentation',
				label,
			};
		}

		if (['js', 'jsx', 'ts', 'tsx', 'css', 'json'].includes(extension)) {
			return {
				pageClass: 'fill-yellow-600 stroke-yellow-600',
				foldClass: 'fill-yellow-500',
				glyph: 'code',
				label,
			};
		}

		if (extension === 'xlsx') {
			return {
				pageClass: 'fill-emerald-500 stroke-emerald-500',
				foldClass: 'fill-emerald-400',
				glyph: 'sheet',
				label,
			};
		}

		if (extension === 'pdf') {
			return {
				pageClass: 'fill-red-600 stroke-red-600',
				foldClass: 'fill-red-500',
				glyph: 'document',
				label,
			};
		}

		if (extension === 'webm') {
			return {
				pageClass: 'fill-teal-500 stroke-teal-500',
				foldClass: 'fill-teal-400',
				glyph: 'video',
				label,
			};
		}

		if (['mp4', 'mov', 'avi'].includes(extension)) {
			return {
				pageClass: 'fill-purple-600 stroke-purple-600',
				foldClass: 'fill-purple-500',
				glyph: 'video',
				label,
			};
		}

		if (extension === 'html') {
			return {
				pageClass: 'fill-orange-600 stroke-orange-600',
				foldClass: 'fill-orange-500',
				glyph: 'html',
				label,
			};
		}

		if (['doc', 'docx', 'txt', 'md'].includes(extension)) {
			return {
				pageClass: 'fill-slate-500 stroke-slate-500',
				foldClass: 'fill-slate-400',
				glyph: 'document',
				label,
			};
		}

		return {
			pageClass: 'fill-slate-600 stroke-slate-600',
			foldClass: 'fill-slate-500',
			glyph: 'document',
			label,
		};
	});
}

@Component({
	selector: 'sim-attachment-08',
	imports: [NgIcon, FileIconComponent, HlmAttachmentImports, HlmIconImports, HlmTooltipImports],
	providers: [provideIcons({ lucideX })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full min-w-0' },
	template: `
		<hlm-attachment-group class="mx-auto max-w-fit gap-2" role="list" aria-label="Compact attachments">
			@for (attachment of attachments(); track attachment.id) {
				<hlm-attachment
					size="xs"
					class="size-14 min-w-0! flex-col flex-nowrap items-stretch justify-between gap-0 overflow-hidden rounded-[12px] px-1 pt-1.5 pb-1"
					role="listitem"
					[hlmTooltip]="attachment.name">
					@if (attachment.preview) {
						<img
							class="absolute inset-0 size-full object-cover"
							[src]="attachment.preview"
							[alt]="attachment.name + ' preview'" />
					} @else {
						<div class="flex size-6 shrink-0 items-center justify-center">
							<sim-file-icon [fileName]="attachment.name" />
						</div>
						<span class="text-muted-foreground w-full truncate text-center text-[10px] leading-3">
							{{ attachment.name }}
						</span>
					}
					<hlm-attachment-actions class="absolute end-0.5 top-0.5">
						<button
							hlmAttachmentAction
							class="bg-background/90 text-muted-foreground hover:bg-accent hover:text-accent-foreground size-4 rounded-full opacity-90 shadow-xs"
							[attr.aria-label]="'Remove ' + attachment.name"
							(click)="remove(attachment.id)">
							<ng-icon hlm name="lucideX" size="xs" />
						</button>
					</hlm-attachment-actions>
				</hlm-attachment>
			} @empty {
				<p class="text-muted-foreground px-4 py-5 text-sm" role="status">All attachments removed</p>
			}
		</hlm-attachment-group>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Compact square attachment group</p>
	`,
})
export class Attachment08Component {
	protected readonly attachments = signal<SquareAttachment[]>([
		{ id: 1, name: 'coast.jpg', preview: 'assets/backgrounds/bg-03.jpg' },
		{ id: 2, name: 'timetable.docx' },
		{ id: 3, name: 'presentation.pptx' },
		{ id: 4, name: 'reactype.ts' },
		{ id: 5, name: 'birthday.mp4' },
		{ id: 6, name: 'doc.pdf' },
	]);

	protected remove(id: number): void {
		this.attachments.update((attachments) => attachments.filter((attachment) => attachment.id !== id));
	}
}
