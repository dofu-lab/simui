import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-02',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		NgIcon,
		HlmIcon,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Confirm dialog with icon</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-lg font-semibold">Are you sure?</h2>
						<p hlmDialogDescription>
							Take a moment to review the details provided to ensure you understand the implications.
						</p>
					</hlm-dialog-header>
				</div>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog02Component {
	public dialogRef = viewChild(BrnDialog);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}