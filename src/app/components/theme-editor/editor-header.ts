import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { isFreeUser } from '../../models/user-role';
import { AuthService } from '../../services/auth.service';
import { EditThemeButton } from './edit-theme-button';
import { ThemeAction } from './theme-action';
import { ThemeSelector } from './theme-selector';

@Component({
	selector: 'app-editor-header',
	imports: [ThemeSelector, ThemeAction, EditThemeButton, HlmButton, HlmIcon, NgIcon, RouterLink],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'border-b',
	},
	template: `
		<div class="bg-background flex h-full items-center justify-between gap-4 rounded-xl p-2">
			<div class="flex flex-1 items-center gap-2">
				<app-theme-selector />
				<sim-edit-theme-button />
			</div>
			@if (isFreePlan()) {
				<a hlmBtn size="sm" class="gap-1" routerLink="/pricing">
					<ng-icon hlm name="lucideZap" size="sm" class="text-yellow-500" />
					Upgrade
				</a>
			}
			<sim-theme-action />
		</div>
	`,
})
export class EditorHeader {
	private readonly authService = inject(AuthService);
	protected readonly isFreePlan = computed(() => isFreeUser(this.authService.currentUser()));
}
