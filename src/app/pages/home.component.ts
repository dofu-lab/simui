import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { previewComponents } from '../constants/home.constant';
import { ThemeService } from '../core';
import { CardBodyDirective, CardDirective } from '../core/card';
import { NavigationService } from '../core/navigation.service';

@Component({
	selector: 'app-home',
	providers: [NavigationService],
	imports: [CardDirective, CardBodyDirective, HlmBadge],
	template: `
		<div class="flex-1 items-start">
			<div class="max-w-3xl pt-15 max-sm:text-center">
				<h1 class="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
					Beautiful Angular UI components built with Tailwind CSS and Spartan.
				</h1>
				<p class="text-muted-foreground mb-10 text-lg">
					A curated collection of ready-to-use components to quickly build modern application UIs.
				</p>
			</div>
			<div
				class="grid grid-cols-1 items-center justify-center gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				@for (component of components; track component.path) {
					<div
						dfCard
						class="border-input hover:bg-input/20 hover:border-muted-foreground/30 group mx-auto h-fit w-full max-w-[300px] cursor-pointer rounded-[18px] border px-1 pt-1 transition duration-100 ease-linear"
						(click)="onNavigate(component.path)">
						<div class="bg-muted relative h-[170px] overflow-hidden rounded-xl border group-hover:shadow-xs">
							<img
								[src]="'assets/thumbnails/dark-' + component.image"
								class="absolute size-full object-cover"
								[hidden]="this.appearance() !== 'dark'" />
							<img
								[src]="'assets/thumbnails/' + component.image"
								class="absolute size-full object-cover"
								[hidden]="this.appearance() !== 'light'" />
						</div>
						<div dfCardBody>
							<div class="text-foreground flex items-center gap-2 text-sm font-medium">
								{{ component.name }}
								@if (component.isNew) {
									<span hlmBadge variant="outline" class="h-5">New</span>
								}
							</div>
							<div class="text-muted-foreground text-sm">{{ component.compNumber }} components</div>
						</div>
					</div>
				}
			</div>
		</div>
	`,
})
export class HomeComponent {
	components = previewComponents;
	_themeService = inject(ThemeService);
	appearance = toSignal(this._themeService.darkMode$);
	navigationService = inject(NavigationService);

	onNavigate(path: string) {
		this.navigationService.navigateTo(path);
	}
}
