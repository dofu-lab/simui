import { Component, input } from '@angular/core';
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
		@if (name() != 'Introduction') {
			<app-component-badges />
		}
	`,
})
export class ComponentHeaderComponent {
	name = input.required<string>();
	description = input.required<string>();
	constructor() {}
}
