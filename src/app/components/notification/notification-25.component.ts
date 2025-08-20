import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCloudUpload, lucideX } from '@ng-icons/lucide';
import { BrnProgress, BrnProgressIndicator } from '@spartan-ng/brain/progress';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmProgress, HlmProgressIndicator } from '@spartan-ng/helm/progress';

@Component({
	selector: 'sim-notification-25',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideCloudUpload,
		}),
	],
	imports: [NgIcon, HlmIcon, HlmButton, BrnProgress, BrnProgressIndicator, HlmProgressIndicator, HlmProgress],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideCloudUpload" size="sm" class="shadow-xs" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Uploading ‘my-avatar.png’</p>
						<p class="text-muted-foreground text-sm">Please wait while we upload your file.</p>
					</div>
					<div class="flex-1">
						<brn-progress hlm class="h-3 w-full" [value]="65">
							<brn-progress-indicator hlm />
						</brn-progress>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Cancel</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Upload another</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification25Component {}

export const notification25Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCloudUpload, lucideX } from '@ng-icons/lucide';
import { BrnProgress, BrnProgressIndicator } from '@spartan-ng/brain/progress';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmProgress, HlmProgressIndicator } from '@spartan-ng/helm/progress';

@Component({
	selector: 'sim-notification-25',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideCloudUpload,
		}),
	],
	imports: [NgIcon, HlmIcon, HlmButton, BrnProgress, BrnProgressIndicator, HlmProgressIndicator, HlmProgress],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideCloudUpload" size="sm" class="shadow-xs" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Uploading ‘my-avatar.png’</p>
						<p class="text-muted-foreground text-sm">Please wait while we upload your file.</p>
					</div>
					<div class="flex-1">
						<brn-progress hlm class="h-3 w-full" [value]="65">
							<brn-progress-indicator hlm />
						</brn-progress>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Cancel</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Upload another</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification25Component {}`;
