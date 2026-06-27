import { Component, model, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-dialog-11',
	imports: [
		FormsModule,
		HlmButtonImports,
		HlmInputImports,
		HlmLabelImports,
		HlmRadioGroupImports,
		HlmRadioGroupImports,
		HlmDialogImports,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button hlmDialogTrigger hlmBtn variant="outline">Rating</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
				<hlm-dialog-header class="contents space-y-0 border-b text-left">
					<h2 class="mb-0 border-b px-6 py-4 text-lg font-semibold">Help us improve</h2>
				</hlm-dialog-header>
				<div class="flex flex-1 flex-col px-6 py-4">
					<label for="rating-group-11" hlmLabel class="flex-1">How hard was it to set up your account?</label>
					<div class="flex-1">
						<hlm-radio-group
							id="rating-group-11"
							class="mt-2 flex gap-0 -space-x-px rounded-md shadow-xs"
							[ngModel]="ratingNumber()"
							(ngModelChange)="ratingNumber.set($event)">
							@for (item of [0, 1, 2, 3, 4, 5, 6, 7, 8]; track item) {
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 ease relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center border text-center text-sm transition-[color,box-shadow] duration-150 outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50 motion-reduce:transition-none"
									[for]="item + 'radio'">
									<div>
										{{ item }}
										<hlm-radio [value]="item" [inputId]="item + 'radio'" />
									</div>
								</label>
							}
						</hlm-radio-group>
					</div>

					<div class="text-muted-foreground mt-2 mb-4 flex justify-between text-xs">
						<span>Very easy</span>
						<span>Very difficult</span>
					</div>

					<label for="reason-textarea" hlmLabel>Why did you give this rating?</label>
					<textarea
						hlmInput
						id="reason-textarea"
						type="text"
						placeholder="How can we improve Sim UI?"
						class="mt-2 min-h-20 w-full"></textarea>
				</div>
				<hlm-dialog-footer class="flex-row space-x-0 px-6 pb-4">
					<button hlmBtn type="submit" (click)="closeDialog()" class="h-9 flex-1">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog11Component {
	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly ratingNumber = model<number>();

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
