import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	imports: [RouterLink],
	template: `
		<footer
			class="supports-backdrop-blur:bg-background/90 bg-background/40 z-40 mx-auto mt-16 flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 py-8 backdrop-blur-lg sm:flex-row">
			<div class="text-muted-foreground text-sm">© {{ currentYear }} Sim UI</div>
			<div class="flex gap-4 text-sm">
				<a
					routerLink="/introduction"
					class="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
					About
				</a>
				<span class="text-muted-foreground">·</span>
				<a
					routerLink="/terms-and-conditions"
					class="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
					Terms & Conditions
				</a>
				<span class="text-muted-foreground">·</span>
				<a
					routerLink="/privacy-policy"
					class="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
					Privacy Policy
				</a>
			</div>
			<div class="text-muted-foreground text-sm">
				A project by
				<a
					class="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
					href="https://x.com/PhuongTranDong"
					target="_blank"
					rel="noopener noreferrer">
					Phuong Tran
				</a>
			</div>
		</footer>
	`,
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
}
