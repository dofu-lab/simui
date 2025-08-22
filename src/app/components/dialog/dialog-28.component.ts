import { Component } from '@angular/core';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-28',
	imports: [
		HlmDialog,
		HlmDialogContent,
		HlmButton,
		HlmAvatar,
		HlmAvatarFallback,
		HlmAvatarImage,
		BrnDialogTrigger,
		BrnDialogContent,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Member accepted</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-120"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="flex items-end justify-center -space-x-3.5 px-6 pt-6">
						<hlm-avatar class="border-background size-[50px] border">
							<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<hlm-avatar class="border-background z-10 size-[58px] border">
							<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<hlm-avatar class="border-background size-[50px] border">
							<img hlmAvatarImage src="assets/avatars/jessica-lambert.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
					</div>
					<div class="flex flex-col gap-0.5 border-b px-6 pt-6 pb-8 text-center">
						<p class="text-md font-semibold">You've been added to the team</p>
						<p class="text-muted-foreground text-sm">
							Thanks for accepting the invitation to join the team. You can now access all the features and
							functionality of the app.
						</p>
					</div>
					<div class="mt-6 flex gap-2 px-6 pb-6">
						<button hlmBtn variant="outline" class="flex-1" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" (click)="ctx.close()">Get started</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog28Component {}

export const dialog28Code = `import { Component } from '@angular/core';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-28',
	imports: [
		HlmDialog,
		HlmDialogContent,
		HlmButton,
		HlmAvatar,
		HlmAvatarFallback,
		HlmAvatarImage,
		BrnDialogTrigger,
		BrnDialogContent,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Member accepted</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-120"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="flex items-end justify-center -space-x-3.5 px-6 pt-6">
						<hlm-avatar class="border-background size-[50px] border">
							<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<hlm-avatar class="border-background z-10 size-[58px] border">
							<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<hlm-avatar class="border-background size-[50px] border">
							<img hlmAvatarImage src="assets/avatars/jessica-lambert.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
					</div>
					<div class="flex flex-col gap-0.5 border-b px-6 pt-6 pb-8 text-center">
						<p class="text-md font-semibold">You've been added to the team</p>
						<p class="text-muted-foreground text-sm">
							Thanks for accepting the invitation to join the team. You can now access all the features and
							functionality of the app.
						</p>
					</div>
					<div class="mt-6 flex gap-2 px-6 pb-6">
						<button hlmBtn variant="outline" class="flex-1" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" (click)="ctx.close()">Get started</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog28Component {}`;
