import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-01',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Confirm dialog</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="text-lg font-semibold">Are you sure?</h2>
					<p hlmDialogDescription>
						Take a moment to review the details provided to ensure you understand the implications.
					</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog01Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog01Code = `import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-01',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Confirm dialog</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="text-lg font-semibold">Are you sure?</h2>
					<p hlmDialogDescription>
						Take a moment to review the details provided to ensure you understand the implications.
					</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog01Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
