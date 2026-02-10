import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { ThemePreset } from '@/app/types';
import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideChevronDown, lucideSearch } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { SelectorColorPreview } from './selector-color-preview';

@Component({
	selector: 'app-theme-selector',
	imports: [
    HlmButton,
    NgIcon,
    HlmIcon,
    HlmSeparator,
    BrnDialogContent,
    BrnDialogTrigger,
    HlmBadge,
    HlmInputGroupImports,
    HlmPopoverImports,
    BrnPopoverImports,
    HlmDialogImports,
    SelectorColorPreview
],
	providers: [provideIcons({ lucideChevronDown, lucideSearch, lucideCheck })],
	host: {
		class: 'w-full max-w-100',
	},
	template: `
		<hlm-popover sideOffset="5" align="start" class="w-fit" autoFocus="dialog">
			<button hlmPopoverTrigger hlmBtn variant="outline" size="sm" class="w-full flex-1 justify-between border">
				<span class="flex flex-1 items-center gap-2 truncate">
					<span class="flex-1 truncate text-left">{{ currentPreset().label ?? 'Select a theme' }}</span>
					@if (isEditMode()) {
						<span hlmBadge variant="secondary" class="text-xs">Editing</span>
					}
				</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-80 overflow-hidden rounded-xl p-0" *brnPopoverContent="let ctx">
				<div class="p-1">
					<div hlmInputGroup>
						<input
							hlmInputGroupInput
							placeholder="Search..."
							class="h-8"
							[value]="searchQuery()"
							(input)="onSearch($event)"
							(click)="$event.stopPropagation()" />
						<div hlmInputGroupAddon>
							<ng-icon name="lucideSearch" />
						</div>
					</div>
				</div>
				<hlm-separator />

				<div class="grid h-fit max-h-100 gap-1 overflow-y-auto p-1">
					@if (filteredSavedPresets().length > 0) {
						<span class="text-muted-foreground px-2 pt-2 text-xs">My Themes</span>
						@for (preset of filteredSavedPresets(); track $index) {
							<button
								class="hover:bg-accent h-8 w-full rounded-md px-2 text-left text-base"
								(click)="onPresetSelect(preset)"
								(keydown)="$event.stopPropagation()">
								<span class="flex items-center justify-between gap-2 text-sm">
									<sim-selector-color-preview [preset]="preset" />
									<span class="flex-1 truncate text-left">{{ preset.label }}</span>
									@if (preset.id === currentPreset().id) {
										<ng-icon hlm name="lucideCheck" size="sm" />
									}
								</span>
							</button>
						}
						<hlm-separator />
					}

					@if (filteredBuildInPresets().length > 0) {
						<span class="text-muted-foreground px-2 pt-2 text-xs">Built-in Themes</span>
					}
					@for (preset of filteredBuildInPresets(); track $index) {
						<button
							class="hover:bg-accent h-8 w-full rounded-md px-2 text-left text-base"
							(click)="onPresetSelect(preset)"
							(keydown)="$event.stopPropagation()">
							<span class="flex items-center justify-between gap-2 text-sm">
								<sim-selector-color-preview [preset]="preset" />
								<span class="flex-1 truncate text-left">
									{{ preset.label }}
								</span>
								@if (preset.id === currentPreset().id) {
									<ng-icon hlm name="lucideCheck" size="sm" />
								}
							</span>
						</button>
					} @empty {
						<div class="text-muted-foreground h-20 items-center px-2 py-1.5 text-center text-sm">No themes found.</div>
					}
				</div>
			</div>
		</hlm-popover>

		<hlm-dialog #changeThemeDialog>
			<button
				id="change-theme-dialog-button"
				#changeThemeDialogButton
				brnDialogTrigger
				hlmBtn
				variant="outline"
				class="hidden">
				Confirm dialog
			</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="text-lg font-semibold">Unsaved Changes</h2>
					<p hlmDialogDescription>
						{{ getConfirmMessage() }}
					</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="cancelChangeTheme()">Cancel</button>
					<button hlmBtn type="submit" (click)="confirmChangeTheme()">{{ getConfirmButtonText() }}</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class ThemeSelector {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly themes = this.themeStorageService.themePresets;
	protected readonly currentPreset = this.themeStorageService.currentTheme;
	protected readonly isEditMode = computed(() => this.themeStorageService.isInEditMode());

	protected searchQuery = signal('');
	protected temporarySelectedPreset = signal<ThemePreset | null>(null);

	protected changeThemeDialogButton = viewChild<ElementRef<HTMLButtonElement>>('changeThemeDialogButton');
	public dialogRef = viewChild<BrnDialog>('changeThemeDialog');

	protected filteredPresets = computed(() => {
		const query = this.searchQuery().toLowerCase();
		const result = this.themes().filter((preset) => preset?.label?.toLowerCase().includes(query));
		return result;
	});

	protected filteredSavedPresets = computed(() => this.filteredPresets().filter((preset) => preset.source === 'SAVED'));
	protected filteredBuildInPresets = computed(() =>
		this.filteredPresets().filter((preset) => preset.source === 'BUILT_IN'),
	);

	protected onSearch(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.searchQuery.set(input.value);
	}

	protected onPresetSelect(preset: ThemePreset) {
		if (preset.id === this.currentPreset()?.id) {
			return;
		}

		// Check for unsaved changes in edit mode
		if (this.themeStorageService.hasUnsavedChanges() && this.themeStorageService.isInEditMode()) {
			this.temporarySelectedPreset.set(preset);
			this.changeThemeDialogButton()?.nativeElement.click();
			return;
		}

		if (this.currentPreset().source === 'UNSAVED') {
			this.temporarySelectedPreset.set(preset);
			this.changeThemeDialogButton()?.nativeElement.click();
			return;
		}

		this.themeStorageService.selectTheme(preset);
	}

	protected onEditTheme() {
		// Enter edit mode
		this.themeStorageService.enterEditMode(this.currentPreset());
	}

	protected onDiscardChanges() {
		this.themeStorageService.discardChanges();
	}

	protected cancelChangeTheme() {
		this.dialogRef()?.close({});
		this.temporarySelectedPreset.set(null);
	}

	protected confirmChangeTheme() {
		const temporaryTheme = this.temporarySelectedPreset();
		if (!temporaryTheme) {
			return;
		}

		this.dialogRef()?.close({});

		// Exit edit mode if in edit mode
		if (this.themeStorageService.isInEditMode()) {
			this.themeStorageService.exitEditMode();
		}

		this.themeStorageService.selectTheme(temporaryTheme);
		this.temporarySelectedPreset.set(null);
	}

	protected getConfirmMessage(): string {
		if (this.themeStorageService.isInEditMode() && this.themeStorageService.hasUnsavedChanges()) {
			return 'You have unsaved changes to this theme. Changing themes will discard your edits. Do you want to continue?';
		}
		return 'You have unsaved changes in your current theme. Changing the theme will discard these changes. Do you want to continue?';
	}

	protected getConfirmButtonText(): string {
		return this.themeStorageService.isInEditMode() ? 'Discard Changes' : 'Okay';
	}
}
