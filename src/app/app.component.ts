import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { FooterComponent, HeaderComponent } from './core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgxSonnerToaster, FooterComponent, HeaderComponent],
	template: `
		<div class="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
			<ngx-sonner-toaster />
			<div class="relative mx-auto w-full max-w-6xl">
				<app-header class="sticky top-0 z-50" />
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
