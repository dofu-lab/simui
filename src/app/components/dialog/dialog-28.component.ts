import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-28',
	imports: [HlmButtonImports, HlmAvatarImports, HlmDialogImports],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button hlmDialogTrigger hlmBtn variant="outline">Member accepted</button>
			<hlm-dialog-content class="w-[calc(100vw-2rem)] gap-0 p-0 sm:max-w-[400px]" *hlmDialogPortal="let ctx">
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
					<hlm-dialog-footer class="bg-muted/50 mt-6 flex gap-2 px-6 pb-6">
						<button hlmBtn variant="outline" class="sm:flex-1" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="sm:flex-1" (click)="ctx.close()">Get started</button>
					</hlm-dialog-footer>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog28Component {}
