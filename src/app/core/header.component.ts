import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMoon, lucideSquareMenu, lucideSun } from '@ng-icons/lucide';
import { remixTwitterXFill } from '@ng-icons/remixicon';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuItem } from '@spartan-ng/helm/menu';
import { REPO_LINK, X_LINK } from './constants';
import { NavigationService } from './navigation.service';
import { ThemeService } from './theme.service';

@Component({
	selector: 'app-header',
	providers: [provideIcons({ lucideSun, lucideMoon, lucideGithub, lucideSquareMenu, remixTwitterXFill })],
	imports: [HlmButton, NgIcon, HlmIcon, HlmMenu, HlmMenuItem, BrnMenuTrigger],
	template: `
		<header
			class="supports-backdrop-blur:bg-background/90 bg-background/40 z-40 flex w-full items-center justify-center backdrop-blur-lg">
			<div class="flex h-16 w-full max-w-6xl items-center justify-between">
				<div class="mr-4 flex">
					<a class="relative mr-6 flex items-center space-x-2" href="/">
						<img src="/assets/logos/logo-base.svg" alt="Magic UI" class="h-10 w-10" />
						<span class="text-foreground hidden font-bold md:inline-block">Sim UI</span>
						<div
							class="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-ring inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
							Beta
						</div>
					</a>
					<a
						class="text-foreground relative mr-6 hidden cursor-pointer items-center gap-0.5 space-x-2 text-sm hover:underline sm:inline-flex"
						(click)="goToIntroduction()">
						Introduction
					</a>
				</div>
				<div class="flex items-center justify-between gap-2 md:justify-end">
					<nav class="flex items-center gap-1">
						<button hlmBtn size="icon" variant="ghost" type="button" (click)="openX()">
							<ng-icon hlm name="remixTwitterXFill" class="text-primary" size="sm" />
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
					<nav class="flex items-center gap-1 sm:hidden">
						<button
							hlmBtn
							size="icon"
							variant="ghost"
							type="button"
							aria-label="Header menu"
							[brnMenuTriggerFor]="menu">
							<ng-icon hlm name="lucideSquareMenu" class="text-primary" size="sm" />
						</button>
						<ng-template #menu>
							<hlm-menu>
								<button hlmMenuItem (click)="goToIntroduction()">Introduction</button>
							</hlm-menu>
						</ng-template>
					</nav>
				</div>
			</div>
		</header>
	`,
})
export class HeaderComponent {
	private _themeService = inject(ThemeService);
	private _navigation = inject(NavigationService);
	private _darkMode = toSignal(this._themeService.darkMode$);
	protected themeIcon = computed(() => (this._darkMode() === 'light' ? 'lucideSun' : 'lucideMoon'));

	onChangeTheme() {
		const newTheme = this._darkMode() === 'light' ? 'dark' : 'light';
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
