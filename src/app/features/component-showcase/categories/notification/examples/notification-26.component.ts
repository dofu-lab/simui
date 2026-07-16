import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCloudUpload, lucideX } from '@ng-icons/lucide';
import { BrnProgressImports } from '@spartan-ng/brain/progress';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmProgressImports } from '@spartan-ng/helm/progress';

@Component({
	selector: 'sim-notification-26',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, BrnProgressImports, HlmProgressImports],
	providers: [provideIcons({ lucideX, lucideCloudUpload })],
	template: `
		<div class="bg-background flex max-w-[400px] gap-3 rounded-md border p-4 shadow-lg">
			<div class="flex flex-col gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideCloudUpload" size="sm" class="shadow-xs" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Uploading ‘my-avatar.png’</p>
						<p class="text-muted-foreground text-sm">Please wait while we upload your file.</p>
					</div>
					<div class="flex-1">
						<hlm-progress class="w-full" aria-labelledby="loading">
							<hlm-progress-indicator />
						</hlm-progress>
					</div>
					<div class="flex gap-1">
						<button hlmBtn size="xs" variant="outline">Cancel</button>
						<button hlmBtn size="xs">Upload another</button>
					</div>
				</div>
			</div>
			<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
				<ng-icon
					hlm
					name="lucideX"
					size="sm"
					class="opacity-60 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
			</button>
		</div>
	`,
})
export class Notification26Component {}
