import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideUsersRound } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-04',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports, HlmAvatarImports],
	providers: [provideIcons({ lucidePlus, lucideUsersRound })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="relative isolate h-36 w-full max-w-88 overflow-hidden" aria-hidden="true">
					<div
						class="pointer-events-none absolute inset-x-0 top-0 flex h-48 items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]"
						aria-hidden="true">
						<span class="border-border/60 absolute size-24 rounded-full border"></span>
						<span class="border-border/60 absolute size-40 rounded-full border"></span>
						<span class="border-border/60 absolute size-56 rounded-full border"></span>
						<span class="border-border/60 absolute size-72 rounded-full border"></span>
						<span class="border-border/60 absolute size-88 rounded-full border"></span>
					</div>
					<hlm-avatar class="ring-background absolute top-6 left-[18%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/olivia-rhye.jpg" alt="" />
						<span hlmAvatarFallback>OR</span>
					</hlm-avatar>
					<hlm-avatar class="ring-background absolute top-10 right-[19%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/phoenix-baker.jpg" alt="" />
						<span hlmAvatarFallback>PB</span>
					</hlm-avatar>
					<hlm-avatar class="ring-background absolute top-20 left-[8%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/candice-wu.jpg" alt="" />
						<span hlmAvatarFallback>CW</span>
					</hlm-avatar>
					<hlm-avatar class="ring-background absolute top-24 right-[7%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/julia-philips.png" alt="" />
						<span hlmAvatarFallback>JP</span>
					</hlm-avatar>
					<hlm-avatar class="ring-background absolute top-24 left-[27%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/james-gouse.jpg" alt="" />
						<span hlmAvatarFallback>JG</span>
					</hlm-avatar>
					<hlm-avatar class="ring-background absolute top-20 right-[30%] ring-4" aria-hidden="true">
						<img hlmAvatarImage src="assets/avatars/jessica-lambert.png" alt="" />
						<span hlmAvatarFallback>JL</span>
					</hlm-avatar>
					<span
						class="bg-background absolute top-12 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-xl border shadow-xs">
						<ng-icon hlm name="lucideUsersRound" size="base" aria-hidden="true" />
					</span>
				</hlm-empty-media>
				<h3 hlmEmptyTitle class="text-base">No users found</h3>
				<p hlmEmptyDescription class="max-w-88">Your search did not match any users.</p>
			</hlm-empty-header>
			<hlm-empty-content class="flex-row flex-wrap justify-center gap-3">
				<button hlmBtn type="button" variant="outline" size="sm" (click)="clearSearch.emit()">Clear search</button>
				<button hlmBtn type="button" size="sm" (click)="addUser.emit()">
					<ng-icon hlm name="lucidePlus" size="sm" aria-hidden="true" />
					Add user
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState04Component {
	public readonly clearSearch = output<void>();
	public readonly addUser = output<void>();
}
