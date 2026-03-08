import { Component, computed, input } from '@angular/core';
import { ComponentBadgesComponent } from './component-badges.component';

@Component({
	selector: 'component-header',
	imports: [ComponentBadgesComponent],
	template: `
		<div class="mt-[50px] mb-[25px] flex flex-col items-center justify-center">
			<div class="text-4xl font-bold">{{ name() }}</div>
			<div class="text-muted-foreground max-w-[800px] text-center text-lg">
				{{ description() }}
			</div>
		</div>
		@if (shouldShowComponentBadges()) {
			<app-component-badges />
		}
	`,
})
export class ComponentHeaderComponent {
	public readonly name = input.required<string>();
	public readonly description = input.required<string>();

	protected readonly shouldShowComponentBadges = computed(
		() => this.name() !== 'Introduction' && this.name() !== 'Terms and Conditions' && this.name() !== 'Privacy Policy',
	);
}
