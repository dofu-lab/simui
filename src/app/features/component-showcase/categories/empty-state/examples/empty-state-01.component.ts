import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideSearch } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-01',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucidePlus, lucideSearch })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media variant="icon" class="border shadow-xs" aria-hidden="true">
					<ng-icon hlm name="lucideSearch" size="base" aria-hidden="true" />
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
export class EmptyState01Component {
	public readonly clearSearch = output<void>();
	public readonly createProject = output<void>();
}
