import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HlmButton } from '@spartan-ng/helm/button';
import { previewComponents } from '../constants/home.constant';
import { NavigationService } from './services/navigation.service';

@Component({
	selector: 'app-component-badges',
	imports: [HlmButton],
	template: `
		<div class="mx-auto mt-4 mb-[50px] w-full max-w-4xl">
			<div class="flex flex-wrap justify-center gap-2">
				@for (component of components; track component.name) {
					<button
						hlmBtn
						variant="outline"
						[class]="
							isActiveComponent(component.path)
								? 'bg-accent dark:bg-input/30 h-6 cursor-pointer px-2 py-1'
								: 'h-6 cursor-pointer px-2 py-1'
						"
						size="sm"
						(click)="onNavigate(component.path)">
						<div class="flex items-center justify-center gap-1.5">
							@if (component.isNew) {
								<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
							}
							<span class="text-xs">{{ component.name }}</span>
						</div>
					</button>
				}
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBadgesComponent {
	components = previewComponents;
	private readonly navigationService = inject(NavigationService);
	private readonly router = inject(Router);

	onNavigate(path: string) {
		this.navigationService.navigateTo(path);
	}

	isActiveComponent(path: string): boolean {
		return this.router.url.includes(path);
	}
}
