import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
	lucideChrome,
	lucideCommand,
	lucideFigma,
	lucideGithub,
	lucideGitlab,
	lucidePlus,
	lucideSlack,
	lucideTrello,
} from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-06',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports],
	providers: [
		provideIcons({
			lucideChrome,
			lucideCommand,
			lucideFigma,
			lucideGithub,
			lucideGitlab,
			lucidePlus,
			lucideSlack,
			lucideTrello,
		}),
	],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media
					class="w-full flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] py-1"
					aria-hidden="true">
					@for (row of iconRows; track $index) {
						<div class="flex items-center justify-center gap-3">
							@for (icon of row; track icon) {
								<span
									class="bg-background text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-xl border shadow-xs">
									<ng-icon hlm [name]="icon" size="base" />
								</span>
							}
						</div>
					}
				</hlm-empty-media>
				<h3 hlmEmptyTitle class="text-base">Sorry, no results!</h3>
				<p hlmEmptyDescription class="max-w-88">
					We couldn’t find any apps or commands. Please try again or browse all apps.
				</p>
			</hlm-empty-header>
			<hlm-empty-content class="flex-row flex-wrap justify-center gap-3">
				<button hlmBtn type="button" variant="outline" size="sm" (click)="clearSearch.emit()">Clear search</button>
				<button hlmBtn type="button" size="sm" (click)="addIntegration.emit()">
					<ng-icon hlm name="lucidePlus" size="sm" aria-hidden="true" />
					Integration
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState06Component {
	public readonly clearSearch = output<void>();
	public readonly addIntegration = output<void>();

	protected readonly iconRows = [
		['lucideFigma', 'lucideGithub', 'lucideSlack', 'lucideCommand', 'lucideChrome', 'lucideTrello', 'lucideGitlab'],
		['lucideCommand', 'lucideChrome', 'lucideTrello', 'lucideGitlab', 'lucideFigma', 'lucideGithub', 'lucideSlack'],
	] as const;
}
