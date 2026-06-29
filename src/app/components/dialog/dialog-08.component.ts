import { Component, computed, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-08',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [FormsModule, NgIcon, HlmButtonImports, HlmIconImports, HlmInputImports, HlmLabelImports, HlmDialogImports],
	template: `
		<hlm-dialog>
			<button id="dialog-08-button" hlmDialogTrigger hlmBtn variant="outline">Delete project</button>
			<hlm-dialog-content *hlmDialogPortal="let ctx" class="w-[calc(100vw-2rem)] sm:max-w-[400px]">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-center text-lg font-semibold">Final confirmation</h2>
						<p hlmDialogDescription class="text-center">
							This action cannot be undone. To confirm, please enter the project name
							<span class="text-primary font-semibold">{{ projectName() }}.</span>
						</p>
					</hlm-dialog-header>
				</div>
				<div class="flex flex-col gap-2">
					<label hlmLabel class="w-full" for="dialog08Input">Project name</label>
					<input
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type Sim UI to confirm"
						id="dialog08Input"
						[ngModel]="inputValue()"
						(ngModelChange)="inputValue.set($event)" />
				</div>
				<hlm-dialog-footer class="flex-row">
					<button hlmBtn variant="outline" class="flex-1" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" class="flex-1" [disabled]="isDisabled()" (click)="closeDialog()">Delete</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog08Component {
	protected readonly projectName = signal<string>('Sim UI');
	protected readonly inputValue = model<string>('');
	protected readonly isDisabled = computed(() => this.inputValue() !== this.projectName());
	protected readonly dialogRef = viewChild(HlmDialog);

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
