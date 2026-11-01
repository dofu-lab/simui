import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideBell, lucideEllipsisVertical, lucideRefreshCw } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-09',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideBell, lucideEllipsisVertical, lucideRefreshCw })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="relative isolate h-64 w-full max-w-96 overflow-hidden" aria-hidden="true">
					@for (avatar of avatars; track avatar.src) {
						<img
							[src]="avatar.src"
							alt=""
							width="24"
							height="24"
							class="absolute size-6 rounded-md object-cover opacity-40 grayscale"
							[style.top.%]="avatar.top"
							[style.left.%]="avatar.left" />
					}
					<div class="relative flex w-64 max-w-[70%] flex-col gap-3">
						@for (card of [0, 1, 2]; track card) {
							<div
								class="rounded-[12px] p-0.5"
								[class.bg-primary]="card === 1"
								[class.shadow-sm]="card === 1"
								[class.opacity-50]="card !== 1">
								<div class="bg-background flex items-center gap-3 rounded-lg border p-2.5">
									<span class="bg-muted-foreground/15 size-8 shrink-0 rounded-full"></span>
									<div class="flex min-w-0 flex-1 flex-col gap-1.5">
										<span class="bg-muted-foreground/20 h-2 w-5/6 rounded-sm"></span>
										<span class="bg-muted-foreground/10 h-2 w-2/3 rounded-sm"></span>
									</div>
									<ng-icon hlm name="lucideEllipsisVertical" size="xs" class="text-muted-foreground/25 self-start" />
								</div>
							</div>
						}
					</div>
				</hlm-empty-media>
				<h3 hlmEmptyTitle>Syncing customers</h3>
				<p hlmEmptyDescription class="max-w-88">
					Hang tight! We’re still hooking up your userbase. Please check back in a few minutes.
				</p>
			</hlm-empty-header>
			<hlm-empty-content class="flex-row flex-wrap justify-center gap-3">
				<button hlmBtn type="button" size="sm" variant="outline" (click)="notifyMe.emit()">
					<ng-icon hlm name="lucideBell" size="sm" aria-hidden="true" />
					Notify me
				</button>
				<button hlmBtn type="button" size="sm" variant="outline" (click)="refresh.emit()">
					<ng-icon hlm name="lucideRefreshCw" size="sm" aria-hidden="true" />
					Refresh page
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState09Component {
	public readonly notifyMe = output<void>();
	public readonly refresh = output<void>();

	protected readonly avatars = [
		{ src: 'assets/avatars/olivia-rhye.jpg', top: 10, left: 10 },
		{ src: 'assets/avatars/phoenix-baker.jpg', top: 18, left: 85 },
		{ src: 'assets/avatars/candice-wu.jpg', top: 47, left: 3 },
		{ src: 'assets/avatars/julia-philips.png', top: 43, left: 90 },
		{ src: 'assets/avatars/james-gouse.jpg', top: 76, left: 9 },
		{ src: 'assets/avatars/jessica-lambert.png', top: 79, left: 83 },
	] as const;
}
