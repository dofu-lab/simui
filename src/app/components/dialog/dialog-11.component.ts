import { Component, model, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-dialog-11',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmInputDirective,
		HlmLabelDirective,
		HlmRadioGroupComponent,
		HlmRadioComponent,
		FormsModule,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Rating</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header class="contents space-y-0 border-b text-left">
					<h2 class="mb-0 border-b px-6 py-4 text-lg font-semibold">Help us improve</h2>
				</hlm-dialog-header>
				<div class="flex flex-1 flex-col px-6 py-4">
					<label hlmLabel class="flex-1">How hard was it to set up your account?</label>
					<div class="flex-1">
						<hlm-radio-group
							class="mt-2 flex gap-0 -space-x-px rounded-md shadow-xs"
							[ngModel]="ratingNumber()"
							(ngModelChange)="ratingNumber.set($event)">
							@for (item of [0, 1, 2, 3, 4, 5, 6, 7, 8]; track item) {
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center border text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									{{ item }}
									<hlm-radio [value]="item"></hlm-radio>
								</label>
							}
						</hlm-radio-group>
					</div>

					<div class="text-muted-foreground mt-2 mb-4 flex justify-between text-xs">
						<span>Very easy</span>
						<span>Very difficult</span>
					</div>

					<label hlmLabel>Why did you give this rating?</label>
					<textarea
						hlmInput
						type="text"
						placeholder="How can we improve Sim UI?"
						class="mt-2 min-h-[80px] w-full"></textarea>
				</div>
				<hlm-dialog-footer class="mt-2 flex-row space-x-0 px-6 pb-4">
					<button hlmBtn type="submit" (click)="closeDialog()" class="h-9 flex-1">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog11Component {
	public dialogRef = viewChild(BrnDialogComponent);
	public ratingNumber = model<number>();

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog11Code = `import { Component, model, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-dialog-11',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmInputDirective,
		HlmLabelDirective,
		HlmRadioGroupComponent,
		HlmRadioComponent,
		FormsModule,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Rating</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header class="contents space-y-0 border-b text-left">
					<h2 class="mb-0 border-b px-6 py-4 text-lg font-semibold">Help us improve</h2>
				</hlm-dialog-header>
				<div class="flex flex-1 flex-col px-6 py-4">
					<label hlmLabel class="flex-1">How hard was it to set up your account?</label>
					<div class="flex-1">
						<hlm-radio-group
							class="mt-2 flex gap-0 -space-x-px rounded-md shadow-xs"
							[ngModel]="ratingNumber()"
							(ngModelChange)="ratingNumber.set($event)">
							@for (item of [0, 1, 2, 3, 4, 5, 6, 7, 8]; track item) {
								<label
									hlmLabel
									class="border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center border text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50">
									{{ item }}
									<hlm-radio [value]="item"></hlm-radio>
								</label>
							}
						</hlm-radio-group>
					</div>

					<div class="text-muted-foreground mt-2 mb-4 flex justify-between text-xs">
						<span>Very easy</span>
						<span>Very difficult</span>
					</div>

					<label hlmLabel>Why did you give this rating?</label>
					<textarea
						hlmInput
						type="text"
						placeholder="How can we improve Sim UI?"
						class="mt-2 min-h-[80px] w-full"></textarea>
				</div>
				<hlm-dialog-footer class="mt-2 flex-row space-x-0 px-6 pb-4">
					<button hlmBtn type="submit" (click)="closeDialog()" class="h-9 flex-1">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog11Component {
	public dialogRef = viewChild(BrnDialogComponent);
	public ratingNumber = model<number>();

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
