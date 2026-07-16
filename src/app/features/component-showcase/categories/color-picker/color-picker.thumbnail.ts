import { Component } from '@angular/core';

@Component({
	selector: 'app-color-picker-thumbnail',
	host: { class: 'flex size-full items-center justify-center' },
	template: `
		<div class="bg-card flex w-full max-w-48 flex-col gap-2.5 rounded-lg border p-3 shadow-sm">
			<div
				class="h-20 rounded-md bg-[linear-gradient(to_top,#000,transparent),linear-gradient(to_right,#fff,transparent),#7f56d9]">
				<div class="ms-[62%] mt-[30%] size-3 rounded-full border-2 border-white shadow-sm"></div>
			</div>
			<div class="flex items-center gap-2">
				<div class="size-7 rounded-md bg-[#7f56d9]"></div>
				<div class="flex flex-1 flex-col gap-2">
					<div class="h-1.5 rounded-full bg-[linear-gradient(to_right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)]"></div>
					<div class="h-1.5 rounded-full bg-[linear-gradient(to_right,transparent,#7f56d9)]"></div>
				</div>
			</div>
			<div class="flex gap-1">
				@for (color of colors; track color) {
					<span class="size-3.5 rounded-sm border" [style.background]="color"></span>
				}
			</div>
		</div>
	`,
})
export class ColorPickerThumbnailComponent {
	protected readonly colors = ['#f43f5e', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#7f56d9', '#d946ef'];
}
