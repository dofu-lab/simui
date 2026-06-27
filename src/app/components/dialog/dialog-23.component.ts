import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideImagePlus, lucideX } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-profile-background',
	imports: [NgIcon, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideImagePlus, lucideX })],
	template: `
		<div class="h-32">
			<div class="bg-muted relative flex size-full items-center justify-center overflow-hidden">
				@if (backgroundUrl()) {
					<img class="h-full w-full object-cover object-center" alt="Background image" [src]="backgroundUrl()" />
				}
				<div class="absolute inset-0 flex items-center justify-center gap-2">
					<button
						hlmBtn
						class="focus-visible:border-ring focus-visible:ring-ring/50 ease z-5 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] duration-150 outline-none hover:bg-black/80 focus-visible:ring-[3px] motion-reduce:transition-none"
						size="icon"
						(click)="fileInput.click()">
						<ng-icon hlm name="lucideImagePlus" size="sm" />
					</button>
					<button
						hlmBtn
						class="focus-visible:border-ring focus-visible:ring-ring/50 ease z-5 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] duration-150 outline-none hover:bg-black/80 focus-visible:ring-[3px] motion-reduce:transition-none"
						size="icon"
						(click)="removeBackground()">
						<ng-icon hlm name="lucideX" size="sm" />
					</button>
				</div>
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
		</div>
	`,
})
export class ProfileBackgroundComponent {
	protected readonly backgroundUrl = signal<string | null>('assets/backgrounds/bg-01.jpg');

	protected removeBackground(): void {
		this.backgroundUrl.set(null);
	}

	protected onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const url = URL.createObjectURL(file);
			this.backgroundUrl.set(url);
		}
	}
}

@Component({
	selector: 'sim-profile-avatar',
	imports: [NgIcon, HlmAvatarImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideImagePlus })],
	template: `
		<div class="relative -mt-10 ml-6 w-fit">
			<hlm-avatar class="border-background peer size-20 border-4">
				<img hlmAvatarImage [src]="avatarUrl()" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<button
				hlmBtn
				class="focus-visible:border-ring focus-visible:ring-ring/50 ease absolute top-6 left-6 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] duration-150 outline-none hover:bg-black/80 focus-visible:ring-[3px] motion-reduce:transition-none"
				size="icon"
				(click)="fileInput.click()">
				<ng-icon hlm name="lucideImagePlus" size="sm" />
			</button>
			<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
		</div>
	`,
})
export class ProfileAvatarComponent {
	protected readonly avatarUrl = signal<string>('assets/avatars/mathilde-lewis.png');

	protected onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const url = URL.createObjectURL(file);
			this.avatarUrl.set(url);
		}
	}
}

@Component({
	selector: 'sim-dialog-23',
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		ProfileAvatarComponent,
		ProfileBackgroundComponent,
		HlmIconImports,
		HlmDialogImports,
		HlmInputImports,
		HlmLabelImports,
		HlmButtonImports,
	],
	providers: [provideIcons({ lucideCheck })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Edit profile (2)</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-150! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(1000px,90vh)]"
				*hlmDialogPortal="let ctx">
				<hlm-dialog-header class="contents space-y-0 text-left">
					<h2 class="mb-0 px-6 py-4 text-lg font-semibold">Edit profile</h2>
					<div class="overflow-y-auto border-t">
						<div hlmDialogDescription class="sr-only">
							Make changes to your profile here. You can change your photo and set a username.
						</div>
						<sim-profile-background />
						<sim-profile-avatar />
						<div class="flex flex-col gap-4 px-6 pt-4 pb-6" [formGroup]="form">
							<div class="flex flex-row gap-4">
								<label hlmLabel for="firstName" class="flex flex-col items-start gap-1">
									First name
									<input
										hlmInput
										size="sm"
										class="w-full text-sm"
										id="firstName"
										type="text"
										formControlName="firstName"
										placeholder="First name" />
								</label>
								<label hlmLabel for="lastName" class="flex flex-col items-start gap-1">
									Last name
									<input
										hlmInput
										size="sm"
										class="w-full text-sm"
										id="lastName"
										type="text"
										formControlName="lastName"
										placeholder="Last name" />
								</label>
							</div>
							<div class="w-full text-sm">
								<div class="relative">
									<label hlmLabel for="userName" class="flex flex-col items-start gap-1">
										Username
										<input
											id="userName"
											hlmInput
											formControlName="userName"
											class="peer h-9 w-full pe-9 text-sm"
											type="text"
											placeholder="Your user name" />
										<div
											class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-end justify-center pe-3 pb-2.5 peer-disabled:opacity-50">
											@if (isValidUserName()) {
												<ng-icon hlm name="lucideCheck" size="sm" class="text-emerald-500" />
											} @else {
												<ng-icon hlm name="lucideX" size="sm" class="text-red-500" />
											}
										</div>
									</label>
								</div>
							</div>

							<label hlmLabel for="website" class="flex flex-col items-start gap-1">
								Website
								<div class="flex flex-row -space-x-px">
									<span
										class="text-muted-foreground border-input bg-background -z-10 inline-flex w-fit items-center rounded-s-md border px-3 text-sm font-normal">
										https://
									</span>
									<input
										hlmInput
										size="sm"
										class="flex-1 rounded-s-none text-sm"
										id="website"
										type="text"
										formControlName="website"
										placeholder="Website" />
								</div>
							</label>
							<label hlmLabel for="biography" class="flex flex-col items-start gap-1">
								Biography
								<textarea
									hlmInput
									class="min-h-20 w-full"
									id="biography"
									formControlName="biography"
									placeholder="Tell us about yourself"
									[maxlength]="maxLength"></textarea>
								<div class="flex w-full flex-col items-end">
									<p class="text-muted-foreground mt-1 text-right text-xs font-normal">
										{{ leftCharacters() }} characters left.
									</p>
								</div>
							</label>
						</div>
					</div>
					<hlm-dialog-footer class="gap-3 border-t px-6 py-4 sm:space-x-0">
						<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
						<button hlmBtn (click)="closeDialog()">Save changes</button>
					</hlm-dialog-footer>
				</hlm-dialog-header>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog23Component {
	private readonly formBuilder = inject(FormBuilder);

	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly maxLength = 180;
	protected readonly lengthCount = signal<number>(0);
	protected readonly isValidUserName = signal<boolean>(true);
	protected readonly form: FormGroup = this.formBuilder.group({
		firstName: ['Alan'],
		lastName: ['Cooper'],
		userName: ['alan-cooper-dev-12'],
		website: ['www.simui.dev'],
		biography: [
			'Hi, I am Alan Cooper. I am a software engineer and designer. I love to create beautiful and functional user interfaces.',
		],
	});
	protected readonly leftCharacters = computed(() => this.maxLength - this.lengthCount());

	constructor() {
		this.lengthCount.set(this.form.get('biography')?.value.length);

		this.form.get('biography')?.valueChanges.subscribe((value) => {
			this.lengthCount.set(value.length);
		});

		this.form.get('userName')?.valueChanges.subscribe((value) => {
			this.isValidUserName.set(value.length > 17);
		});
	}

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
