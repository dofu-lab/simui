import { Component } from '@angular/core';

@Component({
	selector: 'app-file-upload-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex w-full max-w-[190px] flex-col gap-2">
			<div
				class="border-muted-foreground/30 bg-muted/20 flex flex-col items-center gap-2 rounded-lg border-2 border-dashed px-4 py-5">
				<svg
					class="text-muted-foreground/40 h-7 w-7"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="17 8 12 3 7 8" />
					<line x1="12" y1="3" x2="12" y2="15" />
				</svg>
				<div class="bg-muted-foreground/30 h-1.5 w-24 rounded-full"></div>
				<div class="bg-muted-foreground/20 h-1 w-16 rounded-full"></div>
			</div>
			<div class="bg-card flex items-center gap-2 rounded-lg border p-2 shadow-md/5">
				<div class="bg-muted-foreground/20 h-6 w-6 shrink-0 rounded"></div>
				<div class="flex flex-1 flex-col gap-1">
					<div class="bg-muted-foreground/35 h-1.5 w-[70%] rounded-full"></div>
					<div class="bg-muted-foreground/20 h-1 w-[40%] rounded-full"></div>
				</div>
				<div class="bg-muted-foreground/20 h-3 w-3 shrink-0 rounded-sm"></div>
			</div>
		</div>
	`,
})
export class FileUploadThumbnailComponent {}
