import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmAspectRatioImports } from '@spartan-ng/helm/aspect-ratio';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-29',
	imports: [
		NgIcon,
		NgClass,
		NgOptimizedImage,
		HlmIconImports,
		HlmButtonImports,
		HlmAspectRatioImports,
		HlmDialogImports,
	],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	template: `
		<hlm-dialog>
			<button hlmDialogTrigger hlmBtn variant="outline">Publish post</button>
			<hlm-dialog-content class="w-[calc(100vw-2rem)] gap-0 p-0 sm:max-w-[500px]" *hlmDialogPortal="let ctx">
				<div class="flex flex-col gap-6">
					<div class="px-2 pt-2">
						<div [hlmAspectRatio]="4 / 3">
							<img ngSrc="assets/backgrounds/bg-01.jpg" fill alt="Logo" class="w-full rounded-md" />
						</div>
					</div>
					<div class="flex flex-col gap-1 px-6 text-center">
						<span class="text-lg font-semibold">Blog post published</span>
						<span class="text-muted-foreground text-sm">
							This blog post has been published. Team members will be able to edit this post and republish changes.
						</span>
					</div>
					<div class="flex gap-2 px-6 pb-6">
						<button hlmBtn variant="outline" size="sm" class="flex-1" [disabled]="copied()" (click)="onSelect()">
							<div class="relative flex items-center justify-center">
								<ng-icon
									hlm
									name="lucideCopy"
									size="sm"
									class="transition-all motion-reduce:transition-none"
									[ngClass]="{
										'scale-95 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all motion-reduce:transition-none"
									[ngClass]="{
										'scale-95 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</div>
							<span>Copy link</span>
						</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Finished</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog29Component {
	private readonly clipboard = inject(Clipboard);
	protected readonly copied = signal<boolean>(false);

	protected onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}
