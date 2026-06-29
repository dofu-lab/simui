import { Component, viewChild } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-10',
	imports: [HlmButtonImports, HlmInputImports, HlmDialogImports],
	template: `
		<hlm-dialog>
			<button hlmDialogTrigger hlmBtn variant="outline">Feedback</button>
			<hlm-dialog-content *hlmDialogPortal="let ctx" class="w-[calc(100vw-2rem)] sm:max-w-[400px]">
				<hlm-dialog-header>
					<h2 class="mb-0 text-lg font-semibold">Send us feedback</h2>
					<span hlmDialogDescription>
						Watch
						<a class="text-primary hover:underline" href="#">tutorials</a>
						, read Sim UI's
						<a class="text-primary hover:underline" href="#">documentation</a>
						, or join our
						<a class="text-primary hover:underline" href="#">Discord</a>
						for community help.
					</span>
				</hlm-dialog-header>
				<textarea hlmInput type="text" placeholder="How can we improve Sim UI?" class="min-h-20"></textarea>
				<hlm-dialog-footer>
					<button hlmBtn size="sm" type="submit" (click)="closeDialog()">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog10Component {
	protected readonly dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
