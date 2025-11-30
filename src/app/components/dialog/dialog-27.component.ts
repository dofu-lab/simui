import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUserPlus } from '@ng-icons/lucide';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dialog-27',
	imports: [
		NgIcon,
		HlmIcon,
		HlmDialog,
		HlmDialogContent,
		HlmButton,
		HlmAvatar,
		HlmAvatarFallback,
		HlmAvatarImage,
		BrnDialogTrigger,
		BrnDialogContent,
	],
	providers: [provideIcons({ lucideUserPlus })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Request access</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-100! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-6 sm:max-h-[min(640px,80vh)]"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="flex flex-col gap-5">
						<div class="flex size-11 items-center justify-center rounded-lg border shadow-xs">
							<ng-icon hlm name="lucideUserPlus" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Candice has requested edit access</h2>
							<p class="text-muted-foreground text-sm">
								One of your team has requested edit access to your project
								<strong>Marketing Website Design</strong>
								.
							</p>
						</div>
						<div class="flex gap-2">
							<hlm-avatar class="border-border/50 size-[42px] border">
								<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
								<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
							</hlm-avatar>
							<div class="flex flex-col text-sm">
								<span class="font-semibold">Mathilde Lewis</span>
								<span class="text-muted-foreground">mathilde&#64;simui.dev</span>
							</div>
						</div>
						<div class="flex justify-end gap-2 pt-3">
							<button hlmBtn variant="outline" (click)="ctx.close()">Cancel</button>
							<button hlmBtn (click)="ctx.close()">Approve</button>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog27Component {}