import { ThemeService } from '@/app/core/services';
import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { ThemePreset } from '@/app/types';
import { Component, computed, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSave } from '@ng-icons/lucide';
import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';

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
	],
	providers: [provideIcons({ lucideSave })],
	template: `
		<hlm-dialog (stateChanged)="onDialogStateChange($event)">
			<button hlmDialogTrigger hlmBtn size="sm" variant="ghost" [disabled]="!isUnsaved()">
				<ng-icon hlm name="lucideSave" size="sm" />
				Save
			</button>
			<hlm-dialog-content class="w-[500px]" *brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h3 hlmDialogTitle>Save new theme</h3>
					<p hlmDialogDescription>Enter a name for your theme.</p>
				</hlm-dialog-header>
				<div class="grid gap-4">
					<div class="grid gap-3">
						<div hlmFieldGroup>
							<div hlmField class="col-span-2">
								<label hlmFieldLabel for="theme-name">Card number</label>
								<input hlmInput id="themeName" placeholder="Your theme name" [formControl]="name" />
								@if (name.errors?.['nameExisted']) {
									<hlm-field-error>Theme name already exists.</hlm-field-error>
								}
								@if (name.errors?.['required'] && name.touched) {
									<hlm-field-error>Theme name is required.</hlm-field-error>
								}
							</div>
						</div>
					</div>
				</div>
				<hlm-dialog-footer>
					<button hlmBtn variant="outline" brnDialogClose>Cancel</button>
					<button hlmBtn type="submit" (click)="onSave(ctx)" [disabled]="name.invalid">Save changes</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class SaveTheme {
	private _themeStorage = inject(ThemeStorageService);
	private _themeInjector = inject(ThemeService);

	protected isUnsaved = computed(() => this._themeInjector.currentPreset()?.source === 'UNSAVED');
	protected name = new FormControl('', { validators: [Validators.required], nonNullable: true });

	protected onDialogStateChange(state: 'open' | 'closed') {
		if (state === 'open') {
			this.name.reset();
		}
	}

	protected onSave(ctx: any): void {
		const currentTheme = this._themeInjector.currentPreset();
		if (!currentTheme) {
			return;
		}

		const isNameExisted = this._themeStorage.themes().some((t) => t.label === this.name.value);

		if (isNameExisted) {
			this.name.setErrors({ nameExisted: true });
			return;
		}

		const savedTheme: ThemePreset = {
			...currentTheme,
			label: this.name.value,
			source: 'SAVED',
		};
		this._themeStorage.updateTheme(savedTheme);
		this._themeInjector.setPreset(savedTheme);
		ctx.close();
	}
}
