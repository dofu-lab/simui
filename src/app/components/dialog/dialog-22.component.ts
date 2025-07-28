import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideRefreshCw } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent, HlmRadioIndicatorComponent } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'app-dialog-22',
	providers: [provideIcons({ lucideCheck, lucideRefreshCw })],
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmButtonDirective,
		HlmLabelDirective,
		HlmSpinnerComponent,
		HlmRadioComponent,
		HlmRadioGroupComponent,
		HlmRadioIndicatorComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Change plan</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col overflow-hidden rounded-lg p-0 sm:max-h-[min(800px,80vh)] sm:max-w-100 sm:min-w-100"
				*brnDialogContent="let ctx">
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
										class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-4 py-3 text-center text-sm transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
										<div class="flex w-full flex-row justify-center gap-1 text-left font-normal select-none">
											<div class="flex flex-1 flex-col">
												<span class="text-sm">{{ option.title }}</span>
												<span class="text-muted-foreground text-xs">{{ option.subtitle }}</span>
											</div>
											<hlm-radio [value]="option.value" class="flex items-center justify-center">
												<hlm-radio-indicator />
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
								<hlm-spinner size="xs" class="mr-2" />
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
	private _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group({
		plan: ['standard'],
	});
	public isProcessing = signal(false);

	public options = [
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

	public onSubmit() {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}

export const dialog22Code = `
import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideRefreshCw } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent, HlmRadioIndicatorComponent } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'app-dialog-22',
	providers: [provideIcons({ lucideCheck, lucideRefreshCw })],
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmButtonDirective,
		HlmLabelDirective,
		HlmSpinnerComponent,
		HlmRadioComponent,
		HlmRadioGroupComponent,
		HlmRadioIndicatorComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Change plan</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col overflow-hidden rounded-lg p-0 sm:max-h-[min(800px,80vh)] sm:max-w-100 sm:min-w-100"
				*brnDialogContent="let ctx">
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
										class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-4 py-3 text-center text-sm transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
										<div class="flex w-full flex-row justify-center gap-1 text-left font-normal select-none">
											<div class="flex flex-1 flex-col">
												<span class="text-sm">{{ option.title }}</span>
												<span class="text-muted-foreground text-xs">{{ option.subtitle }}</span>
											</div>
											<hlm-radio [value]="option.value" class="flex items-center justify-center">
												<hlm-radio-indicator />
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
								<hlm-spinner size="xs" class="mr-2" />
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
	\`,
})
export class Dialog22Component {
	private _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group({
		plan: ['standard'],
	});
	public isProcessing = signal(false);

	public options = [
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

	public onSubmit() {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}
`;
