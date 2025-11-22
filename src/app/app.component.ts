import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { FooterComponent, HeaderComponent } from './core';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NgxSonnerToaster, FooterComponent, HeaderComponent],
	template: `
		<div class="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
			<ngx-sonner-toaster />
			<app-header class="sticky top-0 z-50" />
			<div class="relative mx-auto w-full max-w-6xl">
				<router-outlet />
			</div>
			<app-footer />
		</div>
	`,
})
export class AppComponent {
	isNavbarOpen = signal<boolean>(true);

	onNavbarChange(isOpen: boolean) {
		this.isNavbarOpen.set(isOpen);
	}
}
