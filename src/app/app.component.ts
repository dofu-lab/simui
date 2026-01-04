import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HeaderComponent, ThemeService } from './core';
import { CodeLoaderService } from './core/services/code-loader.service';
import { SeoService } from './core/services/seo.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NgxSonnerToaster, HeaderComponent],
	providers: [CodeLoaderService],
	template: `
		<div class="relative flex min-h-svh flex-col overflow-clip [--header-height:4rem]">
			<ngx-sonner-toaster />
			<app-header class="sticky top-0 z-50" />
			<router-outlet />
		</div>
	`,
})
export class AppComponent implements OnInit {
	isNavbarOpen = signal<boolean>(true);
	private codeLoaderService = inject(CodeLoaderService);
	private seoService = inject(SeoService);
	private themeInjectorService = inject(ThemeService);

	ngOnInit() {
		this.seoService.init();
		// Initialize the service to preload component data
		this.codeLoaderService.loadComponentCode('').subscribe();
	}

	onNavbarChange(isOpen: boolean) {
		this.isNavbarOpen.set(isOpen);
	}
}
