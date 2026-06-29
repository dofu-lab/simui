import { Component, viewChild } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports } from '@spartan-ng/helm/field';

@Component({
	selector: 'sim-dialog-36',
	imports: [HlmButtonImports, HlmDialogImports, HlmFieldImports],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Confirm dialog</button>
			<hlm-dialog-content *hlmDialogPortal="let ctx" class="gap-3 p-0">
				<hlm-dialog-header class="px-4 pt-4">
					<h2 class="text-lg font-semibold">Are you sure?</h2>
					<p hlmDialogDescription>
						Take a moment to review the details provided to ensure you understand the implications.
					</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="bg-muted/50 gap-2 rounded-b-xl border-t p-4">
					<button hlmBtn size="sm" variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn size="sm" type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog36Component {
	public dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
