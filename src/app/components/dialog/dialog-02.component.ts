import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-02',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmButtonImports, HlmIconImports, HlmDialogImports],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Confirm dialog with icon</button>
			<hlm-dialog-content *hlmDialogPortal="let ctx">
				<div class="flex flex-col gap-2 max-sm:items-start sm:flex-row sm:gap-4">
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
				<hlm-dialog-footer>
					<button hlmBtn size="sm" variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn size="sm" type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog02Component {
	protected readonly dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
