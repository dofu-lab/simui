import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBellRing, lucideCalendar, lucideClock, lucidePlus } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-dialog-25',
	imports: [
		NgIcon,
		HlmIcon,
		HlmDialog,
		HlmDialogContent,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
	providers: [provideIcons({ lucideCalendar, lucideClock, lucideBellRing, lucidePlus })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Meeting invitation</button>
			<hlm-dialog-content
				class="[&>button>ng-icon]:text-primary-foreground top-1/2 left-1/2 max-h-[calc(100vh-2rem)] !w-100 max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex items-center justify-center pt-6">
					<div class="flex h-14 w-16 flex-col rounded-lg border text-center">
						<div class="bg-muted flex h-6 items-center justify-center text-xs">JAN</div>
						<div class="text-md flex flex-1 items-center justify-center text-center text-lg font-semibold">10</div>
					</div>
				</div>
				<div class="px-6 pt-4 pb-5 text-center">
					<div class="text-lg">Invitation: Product demo</div>
					<div class="text-muted-foreground text-sm">Phuong Tran - Friday, Jan 10, 2025</div>
				</div>
				<div class="flex flex-col gap-5 px-6">
					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Details</span>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-2">
								<ng-icon name="lucideCalendar" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">Friday, Jan 10, 2025</span>
							</div>
							<div class="flex items-center gap-2">
								<ng-icon name="lucideClock" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">1:30 PM - 3:30 PM</span>
							</div>
							<div class="flex items-center gap-2">
								<ng-icon name="lucideBellRing" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">10 min before</span>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Organizer</span>
						<div class="flex gap-2">
							<hlm-avatar variant="medium" class="border-border/50 border">
								<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
								<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
							</hlm-avatar>
							<div class="flex flex-col">
								<span class="text-sm font-semibold">Mathilde Lewis</span>
								<span class="text-muted-foreground text-sm">lewis&#64;simui.dev</span>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Attendees</span>
						<div class="flex gap-2">
							<div class="flex -space-x-3.5">
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<span hlmAvatarFallback class="bg-muted text-muted-foreground text-sm">+3</span>
								</hlm-avatar>
							</div>
							<button
								hlmBtn
								variant="link"
								size="icon"
								class="bg-background text-muted-foreground hover:border-muted-foreground/60 flex size-10 items-center justify-center rounded-full border border-dashed">
								<ng-icon hlm name="lucidePlus" />
							</button>
						</div>
						<div class="flex gap-2 text-sm">
							<span class="font-semibold">7 guests</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground">5 accept</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground">2 pending</span>
						</div>
					</div>
				</div>
				<div class="flex justify-end gap-2 px-6 pt-8 pb-6">
					<button hlmBtn variant="outline" (click)="ctx.close()">Decline</button>
					<button hlmBtn (click)="acceptInvitation()">Accept</button>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog25Component {
	public dialogRef = viewChild(BrnDialog);

	public acceptInvitation(): void {
		toast.success('Accepted!', {
			description: 'Your response has been sent to the organizer.',
		});
		this.dialogRef()?.close();
	}
}

export const dialog25Code = `import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBellRing, lucideCalendar, lucideClock, lucidePlus } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-dialog-25',
	imports: [
		NgIcon,
		HlmIcon,
		HlmDialog,
		HlmDialogContent,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
	providers: [provideIcons({ lucideCalendar, lucideClock, lucideBellRing, lucidePlus })],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Meeting invitation</button>
			<hlm-dialog-content
				class="[&>button>ng-icon]:text-primary-foreground top-1/2 left-1/2 max-h-[calc(100vh-2rem)] !w-100 max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex items-center justify-center pt-6">
					<div class="flex h-14 w-16 flex-col rounded-lg border text-center">
						<div class="bg-muted flex h-6 items-center justify-center text-xs">JAN</div>
						<div class="text-md flex flex-1 items-center justify-center text-center text-lg font-semibold">10</div>
					</div>
				</div>
				<div class="px-6 pt-4 pb-5 text-center">
					<div class="text-lg">Invitation: Product demo</div>
					<div class="text-muted-foreground text-sm">Phuong Tran - Friday, Jan 10, 2025</div>
				</div>
				<div class="flex flex-col gap-5 px-6">
					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Details</span>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-2">
								<ng-icon name="lucideCalendar" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">Friday, Jan 10, 2025</span>
							</div>
							<div class="flex items-center gap-2">
								<ng-icon name="lucideClock" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">1:30 PM - 3:30 PM</span>
							</div>
							<div class="flex items-center gap-2">
								<ng-icon name="lucideBellRing" class="text-muted-foreground h-4 w-4" />
								<span class="text-muted-foreground text-sm">10 min before</span>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Organizer</span>
						<div class="flex gap-2">
							<hlm-avatar variant="medium" class="border-border/50 border">
								<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
								<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
							</hlm-avatar>
							<div class="flex flex-col">
								<span class="text-sm font-semibold">Mathilde Lewis</span>
								<span class="text-muted-foreground text-sm">lewis&#64;simui.dev</span>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<span class="text-sm font-semibold">Attendees</span>
						<div class="flex gap-2">
							<div class="flex -space-x-3.5">
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
								</hlm-avatar>
								<hlm-avatar variant="medium" class="border-background border-[2px]">
									<span hlmAvatarFallback class="bg-muted text-muted-foreground text-sm">+3</span>
								</hlm-avatar>
							</div>
							<button
								hlmBtn
								variant="link"
								size="icon"
								class="bg-background text-muted-foreground hover:border-muted-foreground/60 flex size-10 items-center justify-center rounded-full border border-dashed">
								<ng-icon hlm name="lucidePlus" />
							</button>
						</div>
						<div class="flex gap-2 text-sm">
							<span class="font-semibold">7 guests</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground">5 accept</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground">2 pending</span>
						</div>
					</div>
				</div>
				<div class="flex justify-end gap-2 px-6 pt-8 pb-6">
					<button hlmBtn variant="outline" (click)="ctx.close()">Decline</button>
					<button hlmBtn (click)="acceptInvitation()">Accept</button>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog25Component {
	public dialogRef = viewChild(BrnDialog);

	public acceptInvitation(): void {
		toast.success('Accepted!', {
			description: 'Your response has been sent to the organizer.',
		});
		this.dialogRef()?.close();
	}
}`;
