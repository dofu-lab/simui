import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideRefreshCw } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

interface PlanOption {
	title: string;
	subtitle: string;
	value: string;
}

@Component({
	selector: 'sim-dialog-22',
	providers: [provideIcons({ lucideCheck, lucideRefreshCw })],
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIconImports,
		HlmButtonImports,
		HlmLabelImports,
		HlmSpinnerImports,
		HlmRadioGroupImports,
		HlmDialogImports,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-22-button" hlmDialogTrigger hlmBtn variant="outline">Change plan</button>
			<hlm-dialog-content
				class="max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] overflow-y-auto p-0 sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
				<div class="flex-1 overflow-y-auto p-6">
					<div class="flex flex-col gap-2">
						<div class="flex size-11 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideRefreshCw" size="sm" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Change your plan</h2>
							<p class="text-muted-foreground text-sm">Pick one of the following plans.</p>
						</div>
					</div>
					<form [formGroup]="form" (submit)="onSubmit()">
						<div class="mt-4 flex flex-col gap-4">
							<hlm-radio-group class="flex flex-col gap-2 rounded-md shadow-xs" formControlName="plan">
								@for (option of options; track option.value) {
									<label
										hlmLabel
										class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 ease relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-4 py-3 text-center text-sm transition-[color,box-shadow] duration-150 outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50 motion-reduce:transition-none"
										[for]="option.value">
										<div class="flex w-full flex-row justify-center gap-1 text-left font-normal select-none">
											<div class="flex flex-1 flex-col">
												<span class="text-sm">{{ option.title }}</span>
												<span class="text-muted-foreground text-xs">{{ option.subtitle }}</span>
											</div>
											<hlm-radio
												class="flex items-center justify-center"
												[inputId]="option.value"
												[value]="option.value">
												<div
													class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
													<div
														class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375] motion-reduce:transition-none"></div>
													<div
														class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2 motion-reduce:transition-none"></div>
												</div>
											</hlm-radio>
										</div>
									</label>
								}
							</hlm-radio-group>
							<div class="flex flex-col gap-3">
								<span class="text-sm">Features include:</span>
								<div class="text-muted-foreground flex flex-col gap-1">
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">Create unlimited projects.</span>
									</div>
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">Remove watermarks.</span>
									</div>
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">Add unlimited users and free viewers.</span>
									</div>
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">Upload unlimited files.</span>
									</div>
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">7-day money back guarantee.</span>
									</div>
									<div class="flex items-center gap-2">
										<ng-icon hlm name="lucideCheck" size="sm" />
										<span class="text-sm">Advanced permissions.</span>
									</div>
								</div>
							</div>
						</div>
						<button hlmBtn type="submit" class="mt-4 w-full" size="sm" [disabled]="isProcessing()">
							@if (isProcessing()) {
								<hlm-spinner class="mr-2 size-4" />
								Processing...
							} @else {
								Change plan
							}
						</button>
						<button hlmBtn type="button" class="mt-2 w-full" size="sm" variant="outline" (click)="ctx.close()">
							Cancel
						</button>
					</form>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog22Component {
	private readonly formBuilder = inject(FormBuilder);

	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly form: FormGroup = this.formBuilder.group({
		plan: ['standard'],
	});
	protected readonly isProcessing = signal(false);
	protected readonly options: PlanOption[] = [
		{
			title: 'Essential',
			subtitle: '$4 per member/month',
			value: 'essential',
		},
		{
			title: 'Standard',
			subtitle: '$19 per member/month',
			value: 'standard',
		},
		{
			title: 'Enterprise',
			subtitle: '$32 per member/month',
			value: 'enterprise',
		},
	];

	protected onSubmit(): void {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}
