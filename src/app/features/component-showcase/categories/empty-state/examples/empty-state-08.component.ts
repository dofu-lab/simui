import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-08',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucidePlus })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media
					class="mb-3 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] py-2"
					aria-hidden="true">
					<div class="flex shrink-0 items-center gap-4">
						@for (card of [0, 1, 2]; track card) {
							<div
								class="bg-card flex w-60 shrink-0 flex-col gap-3 rounded-xl border p-3 shadow-sm"
								[class.opacity-60]="card === 1"
								[class.opacity-30]="card !== 1">
								<div class="flex items-center gap-2">
									<span class="bg-muted-foreground/15 size-8 shrink-0 rounded-full"></span>
									<div class="flex flex-col gap-1.5">
										<span class="bg-muted-foreground/15 h-2 w-12 rounded-sm"></span>
										<span class="bg-muted-foreground/10 h-1.5 w-20 rounded-sm"></span>
									</div>
								</div>
								<div class="flex flex-col gap-1.5">
									<span class="bg-muted-foreground/15 h-2 w-full rounded-full"></span>
									<span class="bg-muted-foreground/10 h-2 w-5/6 rounded-full"></span>
								</div>
								<div class="flex items-center justify-between border-t pt-2">
									<span class="bg-muted-foreground/10 h-1.5 w-24 rounded-full"></span>
									<div class="flex gap-1">
										<span class="bg-muted-foreground/15 size-4 rounded-sm"></span>
										<span class="bg-muted-foreground/15 size-4 rounded-sm"></span>
									</div>
								</div>
							</div>
						}
					</div>
				</hlm-empty-media>
				<h3 hlmEmptyTitle>Build your AI Workforce</h3>
				<p hlmEmptyDescription class="max-w-88">
					Deploy specialized agents that work around the clock — from recruiting to compliance, each one built for a
					specific role.
				</p>
			</hlm-empty-header>
			<hlm-empty-content>
				<button hlmBtn type="button" size="sm" (click)="addAgent.emit()">
					<ng-icon hlm name="lucidePlus" size="sm" aria-hidden="true" />
					Add Agent
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState08Component {
	public readonly addAgent = output<void>();
}
