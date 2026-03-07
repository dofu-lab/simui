import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../core';

@Component({
	selector: 'app-comp-layout',
	imports: [RouterOutlet, FooterComponent],
	template: `
		<div class="relative mx-auto w-full max-w-6xl">
			<div class="mx-auto max-w-[1200px] grow">
				<router-outlet />
			</div>
		</div>
		<app-footer />
	`,
})
export class CompLayoutComponent {}
