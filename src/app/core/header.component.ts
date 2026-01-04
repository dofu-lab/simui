import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMoon, lucideSquareMenu, lucideSun } from '@ng-icons/lucide';
import { remixTwitterXFill } from '@ng-icons/remixicon';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { REPO_LINK, X_LINK } from './constants';

import { ThemeService } from './services/theme.service';

@Component({
	selector: 'app-header',
	providers: [provideIcons({ lucideSun, lucideMoon, lucideGithub, lucideSquareMenu, remixTwitterXFill })],
	imports: [HlmButton, NgIcon, HlmIcon, HlmDropdownMenuImports, RouterLink, RouterLinkActive],
	template: `
		<header class="mx-auto flex justify-center pt-3">
			<div
				class="supports-backdrop-blur:bg-background/90 bg-background/40 z-40 flex h-14 w-full max-w-6xl items-center justify-between rounded-2xl border px-8 shadow-xs backdrop-blur-lg">
				<div class="mr-4 flex">
					<a class="relative mr-6 flex items-center space-x-2" href="/">
						<img src="/assets/logos/logo-base.svg" alt="Magic UI" class="h-10 w-10" />
						<span class="text-foreground hidden font-bold md:inline-block">Sim UI</span>
						<div
							class="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-ring inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
							Beta
						</div>
					</a>
				</div>
				<div class="mr-4 flex gap-1">
					<a
						class="text-foreground relative hidden cursor-pointer items-center rounded-lg px-3 py-2 text-sm sm:inline-flex"
						routerLink="/components"
						routerLinkActive="bg-muted font-medium">
						Components
					</a>
					<a
						class="text-foreground relative hidden cursor-pointer items-center rounded-lg px-3 py-2 text-sm sm:inline-flex"
						routerLink="/theme-editor"
						routerLinkActive="bg-muted font-medium">
						Theme
					</a>
				</div>
				<div class="flex items-center justify-between gap-2 md:justify-end">
					<a
						class="text-foreground relative hidden cursor-pointer items-center rounded-lg px-3 py-2 text-sm sm:inline-flex"
						routerLink="/introduction"
						routerLinkActive="bg-muted font-medium">
						About
					</a>
					<div class="bg-border h-6 w-px"></div>
					<nav>
						<button hlmBtn size="icon" variant="ghost" type="button" (click)="openX()">
							<ng-icon hlm name="remixTwitterXFill" class="text-primary" size="sm" />
						</button>
					</nav>
					<nav>
						<button hlmBtn size="icon" variant="ghost" type="button" (click)="openGithub()">
							<ng-icon hlm name="lucideGithub" class="text-primary" size="sm" />
						</button>
					</nav>
					<div class="bg-border h-6 w-px"></div>
					<nav class="flex items-center gap-1">
						<button
							hlmBtn
							size="icon"
							variant="ghost"
							type="button"
							aria-label="Toggle theme"
							(click)="onChangeTheme()">
							<ng-icon hlm [name]="themeIcon()" class="text-primary" size="sm" />
						</button>
					</nav>
					<nav class="flex items-center gap-1 sm:hidden">
						<button
							hlmBtn
							size="icon"
							variant="ghost"
							type="button"
							aria-label="Header menu"
							[hlmDropdownMenuTrigger]="menu">
							<ng-icon hlm name="lucideSquareMenu" class="text-primary" size="sm" />
						</button>
						<ng-template #menu>
							<hlm-dropdown-menu>
								<button hlmDropdownMenuItem routerLink="/introduction" routerLinkActive="font-bold">
									Introduction
								</button>
							</hlm-dropdown-menu>
						</ng-template>
					</nav>
				</div>
			</div>
		</header>
	`,
})
export class HeaderComponent {
	private readonly _themeService = inject(ThemeService);
	private readonly appearance = this._themeService.appearance;
	protected readonly themeIcon = computed(() => (this.appearance() === 'light' ? 'lucideSun' : 'lucideMoon'));

	protected onChangeTheme(): void {
		const newTheme = this.appearance() === 'light' ? 'dark' : 'light';
		this._themeService.setAppearance(newTheme);
	}

	protected openGithub(): void {
		window.open(REPO_LINK, '_blank');
	}

	protected openX(): void {
		window.open(X_LINK, '_blank');
	}
}
