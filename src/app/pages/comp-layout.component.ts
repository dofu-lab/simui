import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-comp-layout',
	imports: [RouterOutlet],
	template: `
		<div class="relative mx-auto w-full max-w-6xl">
			<div class="px-6">
				<div class="mx-auto max-w-[1200px] grow">
					<router-outlet />
				</div>
			</div>
		</div>
	`,
})
export class CompLayoutComponent {}
