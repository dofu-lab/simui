import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { SignInDialogComponent } from '@/app/core/sign-in-dialog';
import { ThemeHttpService } from '@/app/services';
import { AuthService } from '@/app/services/auth.service';
import { ThemeHistoryPayload, ThemePreset } from '@/app/types';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSave } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogImports } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmSpinner } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-save-theme',
	imports: [
		HlmDialogImports,
		BrnDialogImports,
		HlmFieldImports,
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmInput,
		ReactiveFormsModule,
		SignInDialogComponent,
		HlmSpinner,
	],
	providers: [provideIcons({ lucideSave })],
	template: `
		<sim-sign-in-dialog #signInDialog [hideButton]="true" />
		<hlm-dialog #saveThemeDialog (stateChanged)="onDialogStateChange($event)">
			<button
				hlmBtn
				size="sm"
				[variant]="hasChanges() ? 'default' : 'ghost'"
				[disabled]="!canSave()"
				(click)="onSaveClick($event)">
				<ng-icon hlm name="lucideSave" size="sm" />
				{{ saveButtonText() }}
			</button>
			<hlm-dialog-content class="w-[500px]" *brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h3 hlmDialogTitle>{{ isEditMode() ? 'Update theme' : 'Save new theme' }}</h3>
					<p hlmDialogDescription>
						{{ isEditMode() ? 'Save changes to your theme.' : 'Enter a name for your theme.' }}
					</p>
				</hlm-dialog-header>
				<div class="grid gap-4">
					<div class="grid gap-3">
						<div hlmFieldGroup>
							<div hlmField class="col-span-2">
								<label hlmFieldLabel for="theme-name">Theme name</label>
								<input
									hlmInput
									id="themeName"
									placeholder="Your theme name"
									[formControl]="name"
									(input)="capitalizeFirstChar(name)" />
								@if (name.errors?.['nameExisted']) {
									<hlm-field-error>Theme name already exists.</hlm-field-error>
								}
								@if (name.errors?.['required'] && name.touched) {
									<hlm-field-error>Theme name is required.</hlm-field-error>
								}
							</div>
						</div>
						@if (isEditMode()) {
							<div hlmFieldGroup>
								<div hlmField class="col-span-2">
									<label hlmFieldLabel for="change-note">Change note</label>
									<input
										hlmInput
										id="changeNote"
										placeholder="Describe what changed..."
										[formControl]="changeNote"
										(input)="capitalizeFirstChar(changeNote)" />
									@if (changeNote.errors?.['required'] && changeNote.touched) {
										<hlm-field-error>Change note is required.</hlm-field-error>
									}
								</div>
							</div>
						}
					</div>
				</div>
				<hlm-dialog-footer>
					<button hlmBtn variant="outline" brnDialogClose [disabled]="isSaving()">Cancel</button>
					<button hlmBtn type="submit" (click)="onSave(ctx)" [disabled]="name.invalid || isSaving()">
						@if (isSaving()) {
							<hlm-spinner class="mr-2 size-4" />
							{{ isEditMode() ? 'Updating...' : 'Saving...' }}
						} @else {
							{{ isEditMode() ? 'Update' : 'Save changes' }}
						}
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class SaveTheme {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeHttpService = inject(ThemeHttpService);
	private readonly authService = inject(AuthService);

	private readonly saveThemeDialog = viewChild<BrnDialog>('saveThemeDialog');
	private readonly signInDialog = viewChild<SignInDialogComponent>('signInDialog');

	protected isUnsaved = computed(() => this.themeStorageService.currentTheme()?.source === 'UNSAVED');
	protected isEditMode = computed(() => this.themeStorageService.isInEditMode());
	protected canSave = computed(
		() => this.isUnsaved() || (this.isEditMode() && this.themeStorageService.hasUnsavedChanges()),
	);
	protected hasChanges = computed(() => this.themeStorageService.hasUnsavedChanges());
	protected saveButtonText = computed(() => {
		if (this.isEditMode()) {
			return this.hasChanges() ? 'Save Changes' : 'Save';
		}
		return 'Save';
	});

	protected isSaving = signal(false);

	protected name = new FormControl('', { validators: [Validators.required], nonNullable: true });
	protected changeNote = new FormControl('', { validators: [Validators.required], nonNullable: true });

	protected capitalizeFirstChar(control: FormControl): void {
		const value = control.value;
		if (value && value.length > 0) {
			const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
			if (capitalized !== value) {
				control.setValue(capitalized, { emitEvent: false });
			}
		}
	}

	protected onSaveClick(event: Event) {
		// Check if user is authenticated
		console.log('Checking authentication status before saving theme...', this.authService.isAuthenticated());
		if (!this.authService.isAuthenticated()) {
			console.log('User not authenticated. Opening sign-in dialog.', this.signInDialog());
			this.signInDialog()?.open();
			return;
		}

		this.saveThemeDialog()?.open();
	}

	protected onDialogStateChange(state: 'open' | 'closed') {
		if (state === 'open') {
			const currentTheme = this.themeStorageService.currentTheme();
			// Pre-fill name for edit mode
			if (this.isEditMode() && currentTheme) {
				this.name.setValue(currentTheme.label || '');
			} else {
				this.name.reset();
			}
			this.changeNote.reset();
		}
	}

	protected onSave(ctx: any): void {
		const currentTheme = this.themeStorageService.currentTheme();
		if (!currentTheme) {
			return;
		}

		if (!this.isEditMode()) {
			this.saveNewTheme(ctx);
			return;
		}

		if (this.changeNote.invalid) {
			this.changeNote.markAsTouched();
			return;
		}

		this.updateTheme(ctx);
	}

	private updateTheme(ctx: any): void {
		const currentTheme = this.themeStorageService.currentTheme();
		const editModeData = this.themeStorageService.editMode();

		if (editModeData) {
			// Update existing theme
			const updatedTheme: ThemeHistoryPayload = {
				...currentTheme,
				id: editModeData.themeId,
				label: this.name.value,
				source: 'SAVED',
				changeNote: this.changeNote.value || undefined,
			};

			this.isSaving.set(true);
			this.themeHttpService.updateTheme(editModeData.themeId, updatedTheme).subscribe({
				next: (updated) => {
					this.themeStorageService.updateTheme(updated, 'UPDATE_THEME');
					this.themeStorageService.exitEditMode();
					this.isSaving.set(false);
					ctx.close();
				},
				error: (error) => {
					console.error('Failed to update theme:', error);
					this.isSaving.set(false);
				},
			});
		}
	}

	private saveNewTheme(ctx: any): void {
		const currentTheme = this.themeStorageService.currentTheme();
		const editModeData = this.themeStorageService.editMode();

		// Check if name exists (but allow same name in edit mode)
		const isNameExisted = this.themeStorageService
			.themePresets()
			.some((t) => t.label === this.name.value && t.id !== editModeData?.themeId);

		if (isNameExisted) {
			this.name.setErrors({ nameExisted: true });
			return;
		}
		// Create new theme
		const savedTheme: ThemePreset = {
			...currentTheme,
			label: this.name.value,
			source: 'SAVED',
		};

		this.isSaving.set(true);
		this.themeHttpService.createTheme(savedTheme).subscribe({
			next: (createdTheme) => {
				this.themeStorageService.updateTheme(createdTheme, 'SAVE_THEME');
				this.isSaving.set(false);
				ctx.close();
			},
			error: (error) => {
				console.error('Failed to save theme:', error);
				this.isSaving.set(false);
			},
		});
	}
}
