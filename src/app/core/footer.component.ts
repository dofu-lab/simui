import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer
			class="supports-backdrop-blur:bg-background/90 bg-background/40 z-40 mx-auto mt-16 flex w-full max-w-[1200px] items-center justify-between py-8 backdrop-blur-lg">
			<div class="text-muted-foreground text-sm">© 2025 Sim UI</div>
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
export class FooterComponent {}
