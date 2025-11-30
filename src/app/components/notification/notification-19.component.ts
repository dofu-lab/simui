import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-19',
	providers: [
		provideIcons({
			lucideX,
		}),
	],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAvatar, HlmAvatarImage],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex grow flex-col gap-3">
					<div class="relative w-fit items-start">
						<hlm-avatar class="border-border/50 size-10 border">
							<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">AC</span>
						</hlm-avatar>
						<div
							class="border-background absolute top-7.5 right-0 size-3 rounded-full border-[2px] bg-emerald-500"></div>
					</div>
					<div class="space-y-1">
						<div class="flex gap-1 text-sm font-medium">
							<span>Alan Cooper</span>
							<span class="text-muted-foreground font-normal">• 2 mins ago</span>
						</div>
						<p class="text-muted-foreground text-sm">
							I’ve finished adding my notes. Happy for us to review whenever you’re ready!
						</p>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Reply</button>
					</div>
				</div>
				<button
					hlmBtn
					variant="ghost"
					class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
					aria-label="Close notification">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification19Component {}