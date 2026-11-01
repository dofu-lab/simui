import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-03',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucidePlus })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="bg-muted/60 size-20 rounded-full" aria-hidden="true">
					<svg
						class="text-muted-foreground h-14 w-16"
						viewBox="0 0 64 56"
						fill="none"
						aria-hidden="true"
						focusable="false">
						<path d="M5 12a4 4 0 0 1 4-4h17l7 7h22a4 4 0 0 1 4 4v27H5V12Z" class="fill-muted stroke-border" />
						<path d="M15 5h31a3 3 0 0 1 3 3v27H15V5Z" class="fill-background stroke-border" />
						<path d="M22 13h20m-20 6h14" class="stroke-border" stroke-width="2" stroke-linecap="round" />
						<path
							d="M3 25a4 4 0 0 1 4-4h22l6-5h23a4 4 0 0 1 4 5l-6 27a4 4 0 0 1-4 3H12a4 4 0 0 1-4-3L3 25Z"
							class="fill-muted stroke-border" />
					</svg>
				</hlm-empty-media>
				<h3 hlmEmptyTitle class="text-base">No projects found</h3>
				<p hlmEmptyDescription class="max-w-88">
					Your search “Landing page design” did not match any projects. Please try again.
				</p>
			</hlm-empty-header>
			<hlm-empty-content class="flex-row flex-wrap justify-center gap-3">
				<button hlmBtn type="button" variant="outline" size="sm" (click)="clearSearch.emit()">Clear search</button>
				<button hlmBtn type="button" size="sm" (click)="createProject.emit()">
					<ng-icon hlm name="lucidePlus" size="sm" aria-hidden="true" />
					New project
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState03Component {
	public readonly clearSearch = output<void>();
	public readonly createProject = output<void>();
}
