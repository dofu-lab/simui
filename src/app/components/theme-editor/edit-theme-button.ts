import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardX, lucidePencil } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-edit-theme-button',
	imports: [HlmIcon, NgIcon, HlmButton, HlmTooltipImports],
	providers: [provideIcons({ lucidePencil, lucideClipboardX })],
	host: { class: 'inline-flex' },
	template: `
		@if (canEdit()) {
			@if (isEditMode()) {
				<button hlmBtn size="icon-sm" variant="outline" hlmTooltip="Discard changes" (click)="onDiscardChanges()">
					<ng-icon hlm name="lucideClipboardX" size="sm" />
				</button>
			} @else {
				<button hlmBtn size="icon-sm" variant="outline" hlmTooltip="Edit theme" (click)="onEditTheme()">
					<ng-icon hlm name="lucidePencil" size="sm" />
				</button>
			}
		}
	`,
})
export class EditThemeButton {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly currentPreset = this.themeStorageService.currentTheme;
	protected readonly isEditMode = computed(() => this.themeStorageService.isInEditMode());
	protected readonly canEdit = computed(() => {
		const preset = this.currentPreset();
		return preset?.source === 'SAVED';
	});

	protected onEditTheme(): void {
		this.themeStorageService.enterEditMode(this.currentPreset());
	}

	protected onDiscardChanges(): void {
		this.themeStorageService.discardChanges();
	}
}
