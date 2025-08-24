import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-29',
	imports: [
		NgIcon,
		NgClass,
		HlmIcon,
		HlmDialog,
		HlmDialogContent,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmAspectRatio,
	],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	template: `
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Publish post</button>
			<hlm-dialog-content
				class="[&>button>ng-icon]:text-primary-foreground top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="px-2 pt-2">
						<div [hlmAspectRatio]="4 / 3">
							<img src="assets/backgrounds/bg-01.jpg" alt="Logo" class="w-full rounded-md" />
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
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
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
	clipboard = inject(Clipboard);
	copied = signal<boolean>(false);

	public onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const dialog29Code = `import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-29',
	imports: [
		NgIcon,
		NgClass,
		HlmIcon,
		HlmDialog,
		HlmDialogContent,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmAspectRatio,
	],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	template: \`
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Publish post</button>
			<hlm-dialog-content
				class="[&>button>ng-icon]:text-primary-foreground top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="px-2 pt-2">
						<div [hlmAspectRatio]="4 / 3">
							<img src="assets/backgrounds/bg-01.jpg" alt="Logo" class="w-full rounded-md" />
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
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
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
	\`,
})
export class Dialog29Component {
	clipboard = inject(Clipboard);
	copied = signal<boolean>(false);

	public onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy('I love Angular!');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}`;
