import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component, computed, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { REPO_LINK, X_LINK } from './constants';
import { NavigationService } from './navigation.service';
import { DarkMode, ThemeService } from './theme.service';

@Component({
	selector: 'app-header',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon, lucideGithub })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<header class="supports-backdrop-blur:bg-background/90 bg-background/40 z-40 w-full backdrop-blur-lg">
			<div class="container flex h-16 items-center">
				<div class="mr-4 hidden md:flex">
					<a class="relative mr-6 flex items-center space-x-2" href="/">
						<img src="/assets/logos/logo-base.svg" alt="Magic UI" class="h-10 w-10" />
						<span class="hidden font-bold md:inline-block">Sim UI</span>
						<div
							class="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-ring inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
							Beta
						</div>
					</a>
					<a
						class="relative mr-6 inline-flex cursor-pointer items-center gap-0.5 space-x-2 text-sm hover:underline"
						(click)="goToIntroduction()">
						Introduction
					</a>
				</div>
				<div class="flex flex-1 items-center justify-between gap-2 md:justify-end">
					<nav class="flex items-center gap-1">
						<button hlmBtn size="icon" variant="ghost" type="button" (click)="openX()">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.5112 15L6.97974 9.96643L2.55881 15H0.688477L6.14995 8.78342L0.688477 1H5.49044L8.8188 5.7441L12.9891 1H14.8594L9.65137 6.92867L15.3132 15H10.5112ZM12.594 13.5809H11.3348L3.36652 2.41909H4.62587L7.81725 6.88837L8.36912 7.66391L12.594 13.5809Z"
									fill="currentColor" />
							</svg>
						</button>
					</nav>
					<nav class="flex items-center gap-1">
						<button hlmBtn size="icon" variant="ghost" type="button" (click)="openGithub()">
							<ng-icon hlm name="lucideGithub" class="text-primary" size="sm" />
						</button>
					</nav>
					<div class="bg-border h-6 w-[1px]"></div>
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
				</div>
			</div>
		</header>
	`,
})
export class HeaderComponent {
	currentTheme = signal<DarkMode>('light');

	protected themeIcon = computed(() => (this.currentTheme() === 'light' ? 'lucideSun' : 'lucideMoon'));
	private _themeService = inject(ThemeService);
	private _navigation = inject(NavigationService);

	onChangeTheme() {
		const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
		this.currentTheme.set(newTheme);
		this._themeService.setDarkMode(newTheme);
	}

	openGithub() {
		window.open(REPO_LINK, '_blank');
	}

	openX() {
		window.open(X_LINK, '_blank');
	}

	goToIntroduction() {
		this._navigation.navigateTo('introduction');
	}
}
