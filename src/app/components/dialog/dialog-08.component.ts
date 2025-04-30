import { Component, computed, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-dialog-08',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
		NgIcon,
		HlmIconDirective,
		HlmInputDirective,
		FormsModule,
		HlmLabelDirective,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Delete project</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
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

					<label hlmLabel class="mt-2 w-full">Project name</label>
					<input
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type Sim UI to confirm"
						[ngModel]="inputValue()"
						(ngModelChange)="inputValue.set($event)" />
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" class="h-9 flex-1" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" class="h-9 flex-1" [disabled]="isDisabled()" (click)="closeDialog()">
						Delete
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog08Component {
	projectName = signal<string>('Sim UI');
	inputValue = model<string>('');
	isDisabled = computed(() => this.inputValue() !== this.projectName());

	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog08Code = `
import { Component, computed, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-dialog-08',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
		NgIcon,
		HlmIconDirective,
		HlmInputDirective,
		FormsModule,
		HlmLabelDirective,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Delete project</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
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

					<label hlmLabel class="mt-2 w-full">Project name</label>
					<input
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type Sim UI to confirm"
						[ngModel]="inputValue()"
						(ngModelChange)="inputValue.set($event)" />
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" class="h-9 flex-1" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" class="h-9 flex-1" [disabled]="isDisabled()" (click)="closeDialog()">
						Delete
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog08Component {
	projectName = signal<string>('Sim UI');
	inputValue = model<string>('');
	isDisabled = computed(() => this.inputValue() !== this.projectName());

	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}
`;
