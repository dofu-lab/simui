import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideChevronDown } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { filter } from 'rxjs';

@Component({
	selector: 'sim-registry-version-menu',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, NgIcon, HlmBadgeImports, HlmButtonImports, HlmIconImports, HlmPopoverImports, HlmSelectImports],
	providers: [provideIcons({ lucideArrowRight, lucideChevronDown })],
	template: `
		<hlm-popover align="start" [state]="popoverState()" (stateChanged)="popoverState.set($event)">
			<button
				hlmBadge
				hlmPopoverTrigger
				variant="outline"
				type="button"
				class="hover:bg-muted cursor-pointer"
				[attr.aria-label]="badgeAriaLabel()">
				<span>{{ badgeValue() }}</span>
				<ng-icon hlm name="lucideChevronDown" size="xs" aria-hidden="true" />
			</button>

			<hlm-popover-content *hlmPopoverPortal class="w-[min(22rem,calc(100vw-2rem))]">
				<hlm-popover-header>
					<h2 hlmPopoverTitle>Source compatibility</h2>
					<p hlmPopoverDescription>
						The selected SpartanUI release controls distributed source and installation commands. Live previews use the
						current SimUI implementation.
					</p>
				</hlm-popover-header>

				<div class="flex min-w-0 flex-col gap-1.5">
					<label for="spartan-registry-version" class="text-foreground text-sm font-medium">SpartanUI version</label>
					@if (registryVersions.isLoading()) {
						<p class="text-muted-foreground text-sm">Loading published versions…</p>
					} @else if (registryVersions.hasError()) {
						<p class="text-muted-foreground text-sm">Published versions are temporarily unavailable.</p>
					} @else {
						<hlm-select
							[value]="registryVersions.selectedVersion()"
							(valueChange)="selectVersion($event)"
							aria-label="SpartanUI version">
							<hlm-select-trigger
								buttonId="spartan-registry-version"
								class="[&>button]:focus-visible:ring-ring [&>button]:w-full [&>button]:focus-visible:ring-2">
								<hlm-select-value placeholder="Select a version" />
							</hlm-select-trigger>
							<hlm-select-content *hlmSelectPortal>
								<hlm-select-group>
									@for (release of registryVersions.releases(); track release.version) {
										<hlm-select-item [value]="release.version">
											{{ release.version }}
											@if (release.version === registryVersions.manifest()?.latest) {
												<span class="text-muted-foreground text-xs">Latest</span>
											}
										</hlm-select-item>
									}
								</hlm-select-group>
							</hlm-select-content>
						</hlm-select>
					}
				</div>

				@if (registryVersions.isReady()) {
					<section class="border-border border-t" aria-labelledby="registry-changelog-title">
						<a
							hlmBtn
							size="sm"
							variant="outline"
							class="mt-4 w-full justify-between"
							routerLink="/changelog"
							(click)="popoverState.set('closed')">
							View full changelog
							<ng-icon hlm name="lucideArrowRight" size="sm" aria-hidden="true" />
						</a>
					</section>
				}
			</hlm-popover-content>
		</hlm-popover>
	`,
})
export class RegistryVersionMenuComponent {
	private readonly router = inject(Router);
	private readonly destroyRef = inject(DestroyRef);
	protected readonly registryVersions = inject(RegistryVersionService);
	protected readonly popoverState = signal<'open' | 'closed'>('closed');
	protected readonly badgeValue = computed(() => {
		if (this.registryVersions.isLoading()) return '…';
		if (this.registryVersions.hasError()) return 'Unavailable';
		return `v${this.registryVersions.selectedVersion() ?? '—'}`;
	});
	protected readonly badgeAriaLabel = computed(() => {
		const version = this.registryVersions.selectedVersion();
		return version ? `SpartanUI ${version}. Change version` : 'Choose a SpartanUI version';
	});

	constructor() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationStart),
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe(() => this.popoverState.set('closed'));
	}

	protected selectVersion(value: unknown): void {
		if (typeof value === 'string') {
			void this.registryVersions.selectVersion(value);
			this.popoverState.set('closed');
		}
	}
}
