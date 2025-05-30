import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';

@Component({
	selector: 'sim-dialog-30',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmLabelDirective,
		HlmSwitchComponent,
	],
	providers: [provideIcons({ lucideCircleCheck })],
	template: `
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Post setting</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-1">
						<div class="flex size-12 items-center justify-center rounded-full bg-emerald-100">
							<ng-icon hlm name="lucideCircleCheck" class="text-emerald-600" />
						</div>
						<span class="text-lg font-semibold">Blog post published</span>
						<span class="text-muted-foreground text-sm">
							This blog post has been published. Team members will be able to edit this post and republish changes.
						</span>
					</div>
					<div class="flex flex-col gap-3">
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" [checked]="true" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on X</span>
								<span class="text-muted-foreground font-normal">&#64;trandongphuong</span>
							</div>
						</label>
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" [checked]="true" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on Instagram</span>
								<span class="text-muted-foreground font-normal">&#64;phuonginsta</span>
							</div>
						</label>
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on Facebook</span>
								<span class="text-muted-foreground font-normal">&#64;dongphuong</span>
							</div>
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog30Component {}

export const dialog30Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';

@Component({
	selector: 'sim-dialog-30',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmLabelDirective,
		HlmSwitchComponent,
	],
	providers: [provideIcons({ lucideCircleCheck })],
	template: \`
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Post setting</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-1">
						<div class="flex size-12 items-center justify-center rounded-full bg-emerald-100">
							<ng-icon hlm name="lucideCircleCheck" class="text-emerald-600" />
						</div>
						<span class="text-lg font-semibold">Blog post published</span>
						<span class="text-muted-foreground text-sm">
							This blog post has been published. Team members will be able to edit this post and republish changes.
						</span>
					</div>
					<div class="flex flex-col gap-3">
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" [checked]="true" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on X</span>
								<span class="text-muted-foreground font-normal">&#64;trandongphuong</span>
							</div>
						</label>
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" [checked]="true" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on Instagram</span>
								<span class="text-muted-foreground font-normal">&#64;phuonginsta</span>
							</div>
						</label>
						<label class="flex items-start" hlmLabel>
							<hlm-switch class="mr-2" />
							<div class="flex flex-col text-sm">
								<span class="font-medium">Share on Facebook</span>
								<span class="text-muted-foreground font-normal">&#64;dongphuong</span>
							</div>
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog30Component {}
`;
