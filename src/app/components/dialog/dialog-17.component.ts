import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy, lucidePlus, lucideTrash2, lucideUserPlus } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnTooltipContentDirective, BrnTooltipTriggerDirective } from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';

@Component({
	selector: 'app-dialog-17',
	providers: [provideIcons({ lucideUserPlus, lucidePlus, lucideTrash2, lucideCheck, lucideCopy })],
	imports: [
		NgIcon,
		NgClass,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmInputDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmTooltipTriggerDirective,
		HlmTooltipComponent,
		BrnTooltipContentDirective,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Invite members</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2">
					<div class="flex size-11 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideUserPlus" size="sm" />
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="text-lg leading-none font-semibold">Invite contributors</h2>
						<p class="text-muted-foreground text-sm">
							Your new project has been created. Invite new member to contribute on this project.
						</p>
					</div>
				</div>
				<form [formGroup]="form" (submit)="closeDialog()">
					<form [formGroup]="form" (ngSubmit)="onSubmit()">
						<div formArrayName="members" class="flex flex-col gap-3">
							<span class="text-foreground text-sm">Invite via email</span>
							@for (memberControl of members.controls; track memberControl) {
								<div class="flex gap-2">
									<input hlmInput class="flex-1 text-sm" size="sm" placeholder="Email" [formControlName]="$index" />
									@if (members.length > 1) {
										<button hlmBtn variant="ghost" size="icon" class="size-9 shrink-0" (click)="removeMember($index)">
											<ng-icon hlm name="lucideTrash2" size="sm" />
										</button>
									}
								</div>
							}
							<span
								class="text-muted-foreground hover:text-primary w-fit cursor-pointer text-sm underline hover:no-underline"
								(click)="addMember()">
								+ Add another
							</span>
							<button hlmBtn type="submit" size="sm">Send invites</button>
						</div>
					</form>
				</form>
				<hr className="my-1 border-t" />
				<div class="w-full">
					<div class="text-foreground mb-2 text-sm">Invite via link</div>
					<div class="relative">
						<hlm-tooltip>
							<input
								hlmInput
								class="peer w-full pe-9 text-sm"
								type="email"
								size="sm"
								readonly
								value="https://simui.dev/reference/12374" />
							<button
								hlmBtn
								variant="link"
								size="icon"
								hlmTooltipTrigger
								hideDelay="200"
								showDelay="200"
								exitAnimationDuration="100"
								class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
								[disabled]="copied()"
								(click)="onSelect()">
								<ng-icon
									hlm
									name="lucideCopy"
									size="sm"
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</button>
							<span *brnTooltipContent class="flex items-center text-xs">
								{{ tooltipLabel() }}
							</span>
						</hlm-tooltip>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog17Component {
	public dialogRef = viewChild(BrnDialogComponent);
	public tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
	public copied = signal<boolean>(false);
	public clipboard = inject(Clipboard);
	public form: FormGroup;
	public tooltipLabel = computed(() => (this.copied() ? '' : 'Copy to clipboard'));
	private _formBuilder = inject(FormBuilder);

	constructor() {
		this.form = this._formBuilder.group({
			members: this._formBuilder.array(['alancooper@simui.com', 'christina@siumui.com']),
		});
	}

	get members(): FormArray {
		return this.form.get('members') as FormArray;
	}

	addMember(): void {
		this.members.push(this._formBuilder.control('', Validators.email));
	}

	removeMember(index: number): void {
		console.log('removeMember', index);
		this.members.removeAt(index, { emitEvent: true });
	}

	onSubmit(): void {
		this.dialogRef()?.close({});
	}

	closeDialog(): void {
		this.dialogRef()?.close({});
	}

	onSelect(): void {
		this.tooltip()?.hide();
		this.copied.set(true);
		this.clipboard.copy('https://simui.dev/reference/12374');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const dialog17Code = `
import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy, lucidePlus, lucideTrash2, lucideUserPlus } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnTooltipContentDirective, BrnTooltipTriggerDirective } from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';

@Component({
	selector: 'app-dialog-17',
	providers: [provideIcons({ lucideUserPlus, lucidePlus, lucideTrash2, lucideCheck, lucideCopy })],
	imports: [
		NgIcon,
		NgClass,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmInputDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmTooltipTriggerDirective,
		HlmTooltipComponent,
		BrnTooltipContentDirective,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Invite members</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2">
					<div class="flex size-11 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideUserPlus" size="sm" />
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="text-lg leading-none font-semibold">Invite contributors</h2>
						<p class="text-muted-foreground text-sm">
							Your new project has been created. Invite new member to contribute on this project.
						</p>
					</div>
				</div>
				<form [formGroup]="form" (submit)="closeDialog()">
					<form [formGroup]="form" (ngSubmit)="onSubmit()">
						<div formArrayName="members" class="flex flex-col gap-3">
							<span class="text-foreground text-sm">Invite via email</span>
							@for (memberControl of members.controls; track memberControl) {
								<div class="flex gap-2">
									<input hlmInput class="flex-1 text-sm" size="sm" placeholder="Email" [formControlName]="$index" />
									@if (members.length > 1) {
										<button hlmBtn variant="ghost" size="icon" class="size-9 shrink-0" (click)="removeMember($index)">
											<ng-icon hlm name="lucideTrash2" size="sm" />
										</button>
									}
								</div>
							}
							<span
								class="text-muted-foreground hover:text-primary w-fit cursor-pointer text-sm underline hover:no-underline"
								(click)="addMember()">
								+ Add another
							</span>
							<button hlmBtn type="submit" size="sm">Send invites</button>
						</div>
					</form>
				</form>
				<hr className="my-1 border-t" />
				<div class="w-full">
					<div class="text-foreground mb-2 text-sm">Invite via link</div>
					<div class="relative">
						<hlm-tooltip>
							<input
								hlmInput
								class="peer w-full pe-9 text-sm"
								type="email"
								size="sm"
								readonly
								value="https://simui.dev/reference/12374" />
							<button
								hlmBtn
								variant="link"
								size="icon"
								hlmTooltipTrigger
								hideDelay="200"
								showDelay="200"
								exitAnimationDuration="100"
								class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
								[disabled]="copied()"
								(click)="onSelect()">
								<ng-icon
									hlm
									name="lucideCopy"
									size="sm"
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</button>
							<span *brnTooltipContent class="flex items-center text-xs">
								{{ tooltipLabel() }}
							</span>
						</hlm-tooltip>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog17Component {
	public dialogRef = viewChild(BrnDialogComponent);
	public tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
	public copied = signal<boolean>(false);
	public clipboard = inject(Clipboard);
	public form: FormGroup;
	public tooltipLabel = computed(() => (this.copied() ? '' : 'Copy to clipboard'));
	private _formBuilder = inject(FormBuilder);

	constructor() {
		this.form = this._formBuilder.group({
			members: this._formBuilder.array(['alancooper@simui.com', 'christina@siumui.com']),
		});
	}

	get members(): FormArray {
		return this.form.get('members') as FormArray;
	}

	addMember(): void {
		this.members.push(this._formBuilder.control('', Validators.email));
	}

	removeMember(index: number): void {
		console.log('removeMember', index);
		this.members.removeAt(index, { emitEvent: true });
	}

	onSubmit(): void {
		this.dialogRef()?.close({});
	}

	closeDialog(): void {
		this.dialogRef()?.close({});
	}

	onSelect(): void {
		this.tooltip()?.hide();
		this.copied.set(true);
		this.clipboard.copy('https://simui.dev/reference/12374');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}
`;
