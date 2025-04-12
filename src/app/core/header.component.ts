import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component, computed, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { DarkMode, ThemeService } from './theme.service';

@Component({
	selector: 'app-header',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
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
				</div>
				<div class="flex flex-1 items-center justify-between gap-2 md:justify-end">
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

	onChangeTheme() {
		const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
		this.currentTheme.set(newTheme);
		this._themeService.setDarkMode(newTheme);
	}
}
