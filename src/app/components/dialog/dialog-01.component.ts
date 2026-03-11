import { Component, viewChild } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogDescription, HlmDialogImports } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-01',
	imports: [HlmButton, HlmDialogDescription, HlmDialogImports],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Confirm dialog</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
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
	public dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
