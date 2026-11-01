import { Component, output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideLink, lucidePlus, lucideUsersRound } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-empty-state-05',
	imports: [HlmEmptyImports, HlmButtonImports, HlmIconImports, HlmAvatarImports],
	providers: [provideIcons({ lucideLink, lucidePlus, lucideUsersRound })],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media
					class="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] py-2"
					aria-hidden="true">
					<div class="flex items-center justify-center gap-3">
						<div class="flex items-center gap-3">
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/olivia-rhye.jpg" alt="" />
								<span hlmAvatarFallback>OR</span>
							</hlm-avatar>
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/phoenix-baker.jpg" alt="" />
								<span hlmAvatarFallback>PB</span>
							</hlm-avatar>
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/candice-wu.jpg" alt="" />
								<span hlmAvatarFallback>CW</span>
							</hlm-avatar>
						</div>
						<span class="bg-background flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-xs">
							<ng-icon hlm name="lucideUsersRound" size="base" aria-hidden="true" />
						</span>
						<div class="flex items-center gap-3">
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/julia-philips.png" alt="" />
								<span hlmAvatarFallback>JP</span>
							</hlm-avatar>
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/james-gouse.jpg" alt="" />
								<span hlmAvatarFallback>JG</span>
							</hlm-avatar>
							<hlm-avatar class="ring-background ring-4" aria-hidden="true">
								<img hlmAvatarImage src="assets/avatars/jessica-lambert.png" alt="" />
								<span hlmAvatarFallback>JL</span>
							</hlm-avatar>
						</div>
					</div>
				</hlm-empty-media>
				<h3 hlmEmptyTitle class="text-base">Invite your first user</h3>
				<p hlmEmptyDescription class="max-w-88">Add your team members and external users.</p>
			</hlm-empty-header>
			<hlm-empty-content class="flex-row flex-wrap justify-center gap-3">
				<button hlmBtn type="button" variant="outline" size="sm" (click)="createLink.emit()">
					<ng-icon hlm name="lucideLink" size="sm" aria-hidden="true" />
					Create link
				</button>
				<button hlmBtn type="button" size="sm" (click)="addUser.emit()">
					<ng-icon hlm name="lucidePlus" size="sm" aria-hidden="true" />
					Add user
				</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState05Component {
	public readonly createLink = output<void>();
	public readonly addUser = output<void>();
}
