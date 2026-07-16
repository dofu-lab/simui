import { Component, viewChild } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-01',
	imports: [HlmButtonImports, HlmDialogImports],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Confirm dialog</button>
			<hlm-dialog-content *hlmDialogPortal="let ctx">
				<hlm-dialog-header>
					<h2 class="text-lg font-semibold">Are you sure?</h2>
					<p hlmDialogDescription>
						Take a moment to review the details provided to ensure you understand the implications.
					</p>
				</hlm-dialog-header>
				<hlm-dialog-footer>
					<button hlmBtn size="sm" variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn size="sm" type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog01Component {
	protected readonly dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
