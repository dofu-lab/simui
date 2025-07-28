import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideCreditCard, lucideMessagesSquare, lucideWalletCards } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent, HlmRadioIndicatorComponent } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'app-dialog-21',
	providers: [provideIcons({ lucideWalletCards, lucideCreditCard, lucideBadgeCheck, lucideMessagesSquare })],
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
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Select plan</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-150 sm:min-w-150"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="flex flex-row gap-2 border-b px-6 py-5">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideWalletCards" />
						</div>
						<div class="flex flex-col justify-center gap-1">
							<h2 class="leading-none font-semibold">Select plan</h2>
							<p class="text-muted-foreground text-sm leading-none">Simple and flexible per-user pricing.</p>
						</div>
					</div>
					<div class="px-6 py-5">
						<form [formGroup]="form" (submit)="onSubmit()">
							<hlm-radio-group class="flex flex-col gap-3 rounded-md sm:flex-row" formControlName="plan">
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-[17px] py-[13px] text-center text-sm shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[checked=true]:border-[2px] has-data-[checked=true]:p-0 has-data-[checked=true]:px-4 has-data-[checked=true]:py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									<div class="flex w-full flex-col text-left font-normal select-none">
										<div class="mb-1 flex flex-row justify-between">
											<span class="text-lg font-semibold">10$ per month</span>
											<hlm-radio value="basic"><hlm-radio-indicator /></hlm-radio>
										</div>
										<span class="text-base">Basic plan</span>
										<span class="text-muted-foreground">Billed annually</span>
										<div class="mt-3 flex flex-col gap-3">
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Basic features</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Basic reporting</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Up to 10 individual users</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>20 GB data per user</span>
											</div>
										</div>
									</div>
								</label>
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-[17px] py-[13px] text-center text-sm shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[checked=true]:border-[2px] has-data-[checked=true]:px-4 has-data-[checked=true]:py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									<div class="flex w-full flex-col text-left font-normal select-none">
										<div class="mb-1 flex flex-row justify-between">
											<span class="text-lg font-semibold">25$ per month</span>
											<hlm-radio value="business"><hlm-radio-indicator /></hlm-radio>
										</div>
										<span class="text-base">Business plan</span>
										<span class="text-muted-foreground">Billed annually</span>
										<div class="mt-3 flex flex-col gap-3">
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Advanced features</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Advanced reporting</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Up to 20 individual users</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>40 GB data per user</span>
											</div>
										</div>
									</div>
								</label>
							</hlm-radio-group>
						</form>
					</div>
					<div class="flex flex-row justify-between border-t px-6 py-5">
						<button hlmBtn variant="outline" size="sm" class="hidden sm:inline-flex">
							<ng-icon hlm name="lucideMessagesSquare" class="mr-2" size="sm" />
							Chat to us
						</button>
						<div class="flex flex-row gap-2 max-sm:flex-1">
							<button hlmBtn variant="outline" size="sm" class="max-sm:flex-1">Cancel</button>
							<button
								hlmBtn
								type="submit"
								class="w-full"
								size="sm"
								class="max-sm:flex-1"
								[disabled]="isProcessing()"
								(click)="onSubmit()">
								@if (isProcessing()) {
									<hlm-spinner size="xs" class="mr-2" />
									Processing...
								} @else {
									Select plan
								}
							</button>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog21Component {
	private readonly _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group({
		plan: ['basic'],
	});
	public isProcessing = signal(false);

	public onSubmit(): void {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 1000);
		}
	}
}

export const dialog21Code = `import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideCreditCard, lucideMessagesSquare, lucideWalletCards } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent, HlmRadioIndicatorComponent } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'app-dialog-21',
	providers: [provideIcons({ lucideWalletCards, lucideCreditCard, lucideBadgeCheck, lucideMessagesSquare })],
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
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Select plan</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-150 sm:min-w-150"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="flex flex-row gap-2 border-b px-6 py-5">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideWalletCards" />
						</div>
						<div class="flex flex-col justify-center gap-1">
							<h2 class="leading-none font-semibold">Select plan</h2>
							<p class="text-muted-foreground text-sm leading-none">Simple and flexible per-user pricing.</p>
						</div>
					</div>
					<div class="px-6 py-5">
						<form [formGroup]="form" (submit)="onSubmit()">
							<hlm-radio-group class="flex flex-col gap-3 rounded-md sm:flex-row" formControlName="plan">
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-[17px] py-[13px] text-center text-sm shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[checked=true]:border-[2px] has-data-[checked=true]:p-0 has-data-[checked=true]:px-4 has-data-[checked=true]:py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									<div class="flex w-full flex-col text-left font-normal select-none">
										<div class="mb-1 flex flex-row justify-between">
											<span class="text-lg font-semibold">10$ per month</span>
											<hlm-radio value="basic"><hlm-radio-indicator /></hlm-radio>
										</div>
										<span class="text-base">Basic plan</span>
										<span class="text-muted-foreground">Billed annually</span>
										<div class="mt-3 flex flex-col gap-3">
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Basic features</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Basic reporting</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Up to 10 individual users</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>20 GB data per user</span>
											</div>
										</div>
									</div>
								</label>
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-1 cursor-pointer flex-col items-start justify-center rounded-md border px-[17px] py-[13px] text-center text-sm shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[checked=true]:border-[2px] has-data-[checked=true]:px-4 has-data-[checked=true]:py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									<div class="flex w-full flex-col text-left font-normal select-none">
										<div class="mb-1 flex flex-row justify-between">
											<span class="text-lg font-semibold">25$ per month</span>
											<hlm-radio value="business"><hlm-radio-indicator /></hlm-radio>
										</div>
										<span class="text-base">Business plan</span>
										<span class="text-muted-foreground">Billed annually</span>
										<div class="mt-3 flex flex-col gap-3">
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Advanced features</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Advanced reporting</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>Up to 20 individual users</span>
											</div>
											<div class="flex items-center justify-start gap-2 text-sm">
												<ng-icon hlm name="lucideBadgeCheck" />
												<span>40 GB data per user</span>
											</div>
										</div>
									</div>
								</label>
							</hlm-radio-group>
						</form>
					</div>
					<div class="flex flex-row justify-between border-t px-6 py-5">
						<button hlmBtn variant="outline" size="sm" class="hidden sm:inline-flex">
							<ng-icon hlm name="lucideMessagesSquare" class="mr-2" size="sm" />
							Chat to us
						</button>
						<div class="flex flex-row gap-2 max-sm:flex-1">
							<button hlmBtn variant="outline" size="sm" class="max-sm:flex-1">Cancel</button>
							<button
								hlmBtn
								type="submit"
								class="w-full"
								size="sm"
								class="max-sm:flex-1"
								[disabled]="isProcessing()"
								(click)="onSubmit()">
								@if (isProcessing()) {
									<hlm-spinner size="xs" class="mr-2" />
									Processing...
								} @else {
									Select plan
								}
							</button>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog21Component {
	private readonly _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group({
		plan: ['basic'],
	});
	public isProcessing = signal(false);

	public onSubmit(): void {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 1000);
		}
	}
}`;
