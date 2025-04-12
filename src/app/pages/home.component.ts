import { Component, inject } from '@angular/core';
import { previewComponents } from '../constants/home.constant';
import { CardBodyDirective, CardDirective } from '../core/card';
import { NavigationService } from '../core/navigation.service';

@Component({
	selector: 'app-home',
	standalone: true,
	providers: [NavigationService],
	imports: [CardDirective, CardBodyDirective],
	template: `
		<div class="mx-auto max-w-[1700px] grow px-28">
			<div class="flex-1 items-start">
				<div class="max-w-3xl pt-15 max-sm:text-center">
					<h1 class="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
						Beautiful Angular UI components built with Tailwind CSS and Spartan.
					</h1>
					<p class="text-muted-foreground mb-10 text-lg">
						A curated collection of ready-to-use components to quickly build modern application UIs.
					</p>
				</div>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					@for (component of components; track component.path) {
						<div dfCard class="h-[256px] w-full cursor-pointer" (click)="onNavigate(component.path)">
							<img [src]="component.image" class="h-[170px] w-full object-cover" />
							<div dfCardBody>
								<div class="text-text-md font-semibold">
									{{ component.name }}
								</div>
								<div class="text-text-sm">{{ component.compNumber }} components</div>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	`,
})
export class HomeComponent {
	components = previewComponents;
	navigationService = inject(NavigationService);

	onNavigate(path: string) {
		this.navigationService.navigateTo(path);
	}
}
