import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-comp-layout',
	standalone: true,
	imports: [RouterOutlet],
	providers: [],
	template: `
		<div class="px-6">
			<div class="mx-auto max-w-[1200px] grow">
				<router-outlet />
			</div>
		</div>
	`,
})
export class CompLayoutComponent {}
