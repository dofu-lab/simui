import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-dialog-29',
	imports: [
		NgIcon,
		NgClass,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	template: `
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Publish post</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<img src="assets/backgrounds/bg-01.jpg" alt="Logo" class="w-full rounded-md" height="264" width="352" />
					<div class="flex flex-col gap-1 text-center">
						<span class="text-lg font-semibold">Blog post published</span>
						<span class="text-muted-foreground text-sm">
							This blog post has been published. Team members will be able to edit this post and republish changes.
						</span>
					</div>
					<div class="flex gap-2">
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
							<span class="ml-2">Copy link</span>
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

export const dialog29Code = `
import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-dialog-29',
	imports: [
		NgIcon,
		NgClass,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	template: \`
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Publish post</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<img src="assets/backgrounds/bg-01.jpg" alt="Logo" class="w-full rounded-md" height="264" width="352" />
					<div class="flex flex-col gap-1 text-center">
						<span class="text-lg font-semibold">Blog post published</span>
						<span class="text-muted-foreground text-sm">
							This blog post has been published. Team members will be able to edit this post and republish changes.
						</span>
					</div>
					<div class="flex gap-2">
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
							<span class="ml-2">Copy link</span>
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
}
`;
