import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideCalendarDays } from '@ng-icons/lucide';
import type {
	RegistryChangelogEntry,
	RegistryChangelogEntryType,
	RegistryRelease,
	RegistryReleaseComparison,
} from '@shared/types/registry-manifest';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface ChangelogDateGroup {
	date: string;
	label: string;
	spartanVersions: string[];
	entries: RegistryChangelogEntry[];
	categories: Array<{
		type: RegistryChangelogEntryType;
		entries: RegistryChangelogEntry[];
	}>;
	registryChanges: Array<{
		release: RegistryRelease;
		comparison: RegistryReleaseComparison | null;
	}>;
}

@Component({
	selector: 'sim-changelog',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, NgIcon, HlmBadgeImports, HlmButtonImports, HlmCardImports, HlmIconImports],
	providers: [provideIcons({ lucideArrowLeft, lucideCalendarDays })],
	host: {
		class: 'flex flex-1',
	},
	template: `
		<main class="mx-auto flex w-full max-w-6xl flex-col px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
			<header class="flex flex-col gap-6 border-b pb-10 sm:flex-row sm:items-end sm:justify-between">
				<div class="max-w-3xl space-y-4">
					<span hlmBadge variant="outline" class="gap-1.5">
						<ng-icon hlm name="lucideCalendarDays" size="xs" aria-hidden="true" />
						Product updates
					</span>
					<div class="space-y-3">
						<h1 class="text-3xl font-bold tracking-tight sm:text-5xl">SimUI changelog</h1>
						<p class="text-muted-foreground max-w-2xl text-base sm:text-lg">
							Follow SimUI improvements by date. Every update includes the SpartanUI version it supports.
						</p>
					</div>
				</div>
				<a hlmBtn variant="outline" routerLink="/components" class="w-fit gap-2">
					<ng-icon hlm name="lucideArrowLeft" size="sm" aria-hidden="true" />
					Browse components
				</a>
			</header>

			@if (registryVersions.isLoading()) {
				<div class="py-16 text-center">
					<p class="text-muted-foreground">Loading changelog…</p>
				</div>
			} @else if (registryVersions.hasError()) {
				<div class="my-12 py-10 text-center">
					<h2 class="text-lg font-semibold">Changelog is unavailable</h2>
					<p class="text-muted-foreground mt-2 text-sm">Please refresh the page and try again.</p>
				</div>
			} @else {
				<section aria-labelledby="product-updates-title">
					<div class="py-5">
						<h2 id="product-updates-title" class="text-xl font-semibold">What changed in SimUI</h2>
						<p class="text-muted-foreground mt-1 text-sm">
							Notable features, improvements, and fixes—independent of SpartanUI release dates.
						</p>
					</div>

					<div class="divide-y">
						@for (group of changelogGroups(); track group.date) {
							<section
								class="grid gap-5 py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
								[attr.aria-labelledby]="'changelog-date-' + group.date">
								<header>
									<h3 [id]="'changelog-date-' + group.date" class="font-semibold">{{ group.label }}</h3>
									<div class="mt-3 flex flex-wrap gap-1.5">
										@for (version of group.spartanVersions; track version) {
											<span
												hlmBadge
												[variant]="version === registryVersions.selectedVersion() ? 'secondary' : 'outline'">
												SpartanUI v{{ version }}
											</span>
										}
									</div>
								</header>

								<div hlmCard class="gap-0 overflow-hidden py-0 shadow-sm">
									@for (category of group.categories; track category.type; let last = $last) {
										<section
											class="grid gap-3 p-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5 sm:p-6"
											[class.border-b]="!last || group.registryChanges.length"
											[attr.aria-label]="category.type + ' changes'">
											<div>
												<span hlmBadge variant="outline" class="capitalize">{{ category.type }}</span>
											</div>
											<ul class="space-y-3">
												@for (entry of category.entries; track entry.id) {
													<li class="space-x-1 text-sm leading-relaxed">
														<span class="font-medium">{{ entry.title }}:</span>
														<span class="text-muted-foreground">{{ entry.description }}</span>
													</li>
												}
											</ul>
										</section>
									}

									@for (change of group.registryChanges; track change.release.version; let last = $last) {
										<article class="bg-muted/20 p-5 sm:p-6" [class.border-b]="!last">
											<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
												<div>
													<h4 class="font-semibold sm:text-lg">
														{{ change.comparison ? 'Component source changes' : 'Registry compatibility baseline' }}
													</h4>
													<p class="text-muted-foreground mt-1 text-sm">
														@if (change.comparison) {
															Automatic comparison with SpartanUI v{{ change.comparison.fromVersion }}.
														} @else {
															First supported component-source snapshot.
														}
													</p>
												</div>
												<div class="flex shrink-0 flex-wrap gap-2">
													<span hlmBadge variant="outline">Registry</span>
												</div>
											</div>

											@if (change.comparison; as comparison) {
												<dl class="mt-5 grid overflow-hidden rounded-lg border text-sm sm:grid-cols-3">
													<div class="flex items-center justify-between gap-3 p-3 sm:border-r">
														<dt class="text-muted-foreground">Added</dt>
														<dd class="font-semibold">{{ comparison.added.length }}</dd>
													</div>
													<div class="flex items-center justify-between gap-3 border-t p-3 sm:border-t-0 sm:border-r">
														<dt class="text-muted-foreground">Updated</dt>
														<dd class="font-semibold">{{ comparison.updated.length }}</dd>
													</div>
													<div class="flex items-center justify-between gap-3 border-t p-3 sm:border-t-0">
														<dt class="text-muted-foreground">Removed</dt>
														<dd class="font-semibold">{{ comparison.removed.length }}</dd>
													</div>
												</dl>

												<div class="mt-5 grid gap-5 lg:grid-cols-3">
													<section aria-label="Added components">
														<h5 class="mb-2 text-sm font-medium">Added components</h5>
														@if (comparison.added.length) {
															<ul class="space-y-1.5">
																@for (componentId of comparison.added; track componentId) {
																	<li class="text-sm">
																		<code>{{ componentId }}</code>
																	</li>
																}
															</ul>
														} @else {
															<p class="text-muted-foreground text-sm">None</p>
														}
													</section>
													<section aria-label="Updated components">
														<h5 class="mb-2 text-sm font-medium">Updated components</h5>
														@if (comparison.updated.length) {
															<ul class="space-y-1.5">
																@for (componentId of comparison.updated; track componentId) {
																	<li class="text-sm">
																		<code>{{ componentId }}</code>
																	</li>
																}
															</ul>
														} @else {
															<p class="text-muted-foreground text-sm">None</p>
														}
													</section>
													<section aria-label="Removed components">
														<h5 class="mb-2 text-sm font-medium">Removed components</h5>
														@if (comparison.removed.length) {
															<ul class="space-y-1.5">
																@for (componentId of comparison.removed; track componentId) {
																	<li class="text-sm">
																		<code>{{ componentId }}</code>
																	</li>
																}
															</ul>
														} @else {
															<p class="text-muted-foreground text-sm">None</p>
														}
													</section>
												</div>
											}
										</article>
									}
								</div>
							</section>
						}
					</div>
				</section>
			}
		</main>
	`,
})
export class ChangelogComponent {
	protected readonly registryVersions = inject(RegistryVersionService);
	protected readonly changelogGroups = computed<ChangelogDateGroup[]>(() => {
		const manifest = this.registryVersions.manifest();
		const groups = new Map<string, Pick<ChangelogDateGroup, 'entries' | 'registryChanges'>>();
		const groupFor = (date: string): Pick<ChangelogDateGroup, 'entries' | 'registryChanges'> => {
			const group = groups.get(date) ?? { entries: [], registryChanges: [] };
			groups.set(date, group);
			return group;
		};
		for (const entry of manifest?.changelog ?? []) {
			groupFor(entry.date).entries.push(entry);
		}
		for (const release of manifest?.releases ?? []) {
			groupFor(release.publishedAt).registryChanges.push({
				release,
				comparison: manifest?.comparisons.find((comparison) => comparison.toVersion === release.version) ?? null,
			});
		}
		return [...groups]
			.sort(([left], [right]) => right.localeCompare(left))
			.map(([date, group]) => ({
				date,
				label: new Intl.DateTimeFormat('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
					timeZone: 'UTC',
				}).format(new Date(`${date}T00:00:00.000Z`)),
				spartanVersions: [
					...new Set([
						...group.entries.map((entry) => entry.spartanVersion),
						...group.registryChanges.map((change) => change.release.version),
					]),
				],
				categories: [...new Set(group.entries.map((entry) => entry.type))].map((type) => ({
					type,
					entries: group.entries.filter((entry) => entry.type === type),
				})),
				...group,
			}));
	});
}
