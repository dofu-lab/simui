import { Component, input } from '@angular/core';

@Component({
	selector: 'component-header',
	standalone: true,
	template: `
		<div class="mt-[50px] mb-[50px] flex flex-col items-center justify-center">
			<div class="text-4xl font-bold">{{ name() }}</div>
			<div class="text-muted-foreground max-w-[800px] text-center text-lg">
				{{ description() }}
			</div>
		</div>
	`,
})
export class ComponentHeaderComponent {
	name = input.required<string>();
	description = input.required<string>();
	constructor() {}
}
