import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar-thumbnail',
	host: { class: 'flex size-full items-center justify-center' },
	template: `
		<div class="bg-background flex h-32 w-full max-w-56 overflow-hidden rounded-xl border shadow-md/5">
			<div class="bg-sidebar border-sidebar-border flex w-22 shrink-0 flex-col border-e p-2.5">
				<div class="flex items-center gap-2">
					<div class="bg-sidebar-primary size-5 rounded-sm"></div>
					<div class="flex flex-col gap-1.5">
						<div class="bg-sidebar-foreground/45 h-1.5 w-9 rounded-full"></div>
						<div class="bg-sidebar-foreground/20 h-1 w-6 rounded-full"></div>
					</div>
				</div>

				<div class="mt-4 flex flex-col gap-2 pl-0.5">
					<div class="flex items-center gap-2">
						<div class="bg-sidebar-foreground/30 size-2.5 rounded-sm"></div>
						<div class="bg-sidebar-foreground/40 h-1.5 w-9 rounded-full"></div>
					</div>
					<div class="border-sidebar-border ms-1 flex flex-col gap-1.5 border-s ps-4">
						<div class="bg-sidebar-foreground/20 h-1 w-7 rounded-full"></div>
						<div class="bg-sidebar-foreground/20 h-1 w-8 rounded-full"></div>
						<div class="bg-sidebar-foreground/20 h-1 w-6 rounded-full"></div>
					</div>
					<div class="flex items-center gap-2">
						<div class="bg-sidebar-foreground/20 size-2.5 rounded-sm"></div>
						<div class="bg-sidebar-foreground/30 h-1 w-8 rounded-full"></div>
					</div>
				</div>
			</div>

			<div class="flex min-w-0 flex-1 flex-col">
				<div class="border-border flex h-8 items-center border-b px-3">
					<div class="bg-muted-foreground/50 h-3.5 w-4 rounded-sm border"></div>
				</div>
				<div class="flex flex-1 flex-col gap-2 p-2.5">
					<div class="bg-muted/70 flex-[1.4] rounded-lg"></div>
					<div class="bg-muted/70 flex-1 rounded-lg"></div>
				</div>
			</div>
		</div>
	`,
})
export class SidebarThumbnailComponent {}
