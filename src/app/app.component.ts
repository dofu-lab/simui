import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { FooterComponent, HeaderComponent } from './core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgxSonnerToaster, FooterComponent, HeaderComponent],
	template: `
		<ngx-sonner-toaster />
		<app-header class="sticky top-0 z-50" />
		<div class="bg-background relative flex min-h-screen w-full flex-col scroll-smooth font-sans antialiased">
			<router-outlet />
		</div>
		<app-footer />
	`,
})
export class AppComponent {
	isNavbarOpen = signal<boolean>(true);

	onNavbarChange(isOpen: boolean) {
		this.isNavbarOpen.set(isOpen);
	}
}
