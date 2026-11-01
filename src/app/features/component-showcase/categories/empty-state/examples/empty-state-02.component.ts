import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideSearch } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-02',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucidePlus, lucideSearch })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="relative h-28 w-36" aria-hidden="true">
					<svg
						class="text-muted-foreground size-full"
						viewBox="0 0 180 140"
						fill="none"
						aria-hidden="true"
						focusable="false">
						<circle cx="90" cy="65" r="58" class="fill-muted/70" />
						<circle cx="17" cy="36" r="4" class="fill-muted" />
						<circle cx="160" cy="91" r="5" class="fill-muted" />
						<path d="M28 52a6 6 0 0 1 6-6h41l12 12h57a6 6 0 0 1 6 6v51H28V52Z" class="fill-muted stroke-border" />
						<rect
							x="46"
							y="32"
							width="76"
							height="72"
							rx="5"
							transform="rotate(-12 46 32)"
							class="fill-background stroke-border" />
						<rect
							x="64"
							y="26"
							width="68"
							height="82"
							rx="5"
							transform="rotate(8 64 26)"
							class="fill-background stroke-border" />
						<path d="m77 47 34 5m-36 7 34 5m-36 7 25 4" class="stroke-border" stroke-width="3" stroke-linecap="round" />
						<path
							d="M23 76a6 6 0 0 1 6-6h49l10-10h66a6 6 0 0 1 6 7l-9 53a6 6 0 0 1-6 5H37a6 6 0 0 1-6-5l-8-44Z"
							class="fill-muted stroke-border" />
					</svg>
					<span
						class="bg-background absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-xl border shadow-sm">
						<ng-icon hlm name="lucideSearch" size="base" aria-hidden="true" />
					</span>
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
export class EmptyState02Component {
	public readonly clearSearch = output<void>();
	public readonly createProject = output<void>();
}
