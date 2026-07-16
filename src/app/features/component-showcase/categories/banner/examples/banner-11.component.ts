import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideMail } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-banner-11',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmSpinnerImports],
	providers: [provideIcons({ lucideMail, lucideDownload })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="bg-muted relative px-4 py-3 md:px-3 md:py-2">
			<div class="flex flex-col items-center justify-center gap-x-4 gap-y-2 md:flex-row">
				<div class="flex items-center justify-center text-sm">
					<span class="font-medium">v1.2.0</span>
					<span class="text-muted-foreground mx-2">•</span>
					<span class="text-primary text-center">New feature was launched!</span>
				</div>
				<button
					hlmBtn
					variant="outline"
					size="sm"
					class="bg-background h-8 text-xs"
					[disabled]="isUpdating()"
					(click)="update()">
					@if (isUpdating()) {
						<hlm-spinner class="mr-2 size-4" />
						Updating ...
					} @else {
						<ng-icon hlm name="lucideDownload" size="sm" class="mr-2" />
						Update now
					}
				</button>
			</div>
		</div>
	`,
})
export class Banner11Component {
	protected readonly isUpdating = signal<boolean>(false);

	protected update(): void {
		this.isUpdating.set(true);
		setTimeout(() => {
			this.isUpdating.set(false);
		}, 2000);
	}
}
