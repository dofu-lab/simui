import { isFreeUser } from '@/app/models/user-role';
import { AuthService } from '@/app/services/auth.service';
import { ThemeHttpService } from '@/app/services/theme-http.service';
import { ThemeChange, ThemePreset, ThemeVersionHistoryEntry } from '@/app/types';
import { Component, computed, inject, input, resource } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideHistory, lucideLoaderCircle, lucideUndo2, lucideZap } from '@ng-icons/lucide';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { firstValueFrom } from 'rxjs';
import { HistoryDatePipe } from '../../pipes/history-date.pipe';

@Component({
	selector: 'sim-theme-version-history',
	imports: [
		NgIcon,
		HlmIcon,
		HlmBadge,
		HlmButton,
		HistoryDatePipe,
		HlmSpinner,
		RouterLink,
		HlmSheetImports,
		BrnSheetImports,
		HlmEmptyImports,
		HlmTooltipImports,
	],
	providers: [provideIcons({ lucideHistory, lucideChevronRight, lucideLoaderCircle, lucideUndo2, lucideZap })],
	template: `
		@if (isFreePlan()) {
			<div class="border-border bg-muted/30 mb-4 flex items-start gap-2 rounded-md border p-3 text-sm">
				<ng-icon hlm name="lucideZap" size="sm" class="mt-0.5 shrink-0 text-yellow-500" />
				<p class="text-muted-foreground">
					Free plan: showing history from the last 3 days.
					<a routerLink="/pricing" class="text-foreground underline">Upgrade to Pro</a>
					for full history.
				</p>
			</div>
		}
		@if (loading()) {
			<div class="flex items-center justify-center py-8">
				<hlm-spinner />
			</div>
		} @else if (historyEntries().length === 0) {
			<div hlmEmpty>
				<section hlmEmptyIcon>
					<ng-icon hlm name="lucideHistory" size="xl" />
				</section>
				<h3 hlmEmptyTitle>No History Available</h3>
				<p hlmEmptyDescription>This theme doesn't have any saved versions yet.</p>
			</div>
		} @else {
			@for (entry of historyEntries(); track entry.id) {
				<div class="grid grid-cols-[auto_1fr_auto] gap-1">
					<div class="flex w-[42px] flex-col items-center">
						<span hlmBadge class="rounded-full">v{{ entry.version }}</span>
						<div class="bg-border mx-auto h-full w-px"></div>
					</div>
					<div
						class="relative flex flex-1 space-y-2 overflow-hidden rounded-md px-2 pt-1 pb-6"
						[class.cursor-pointer]="!entry.isBlurred">
						<div class="flex flex-1 flex-col">
							<div class="flex flex-col items-start">
								<p class="text-muted-foreground text-xs">
									{{ entry.createdAt | historyDate }}
								</p>
								<p class="text-md font-normal">
									{{ entry.changeNote }}
								</p>
							</div>

							<!-- Change Details -->
							@if (entry.changeDetail && entry.changeDetail.length > 0) {
								<div class="mt-2 space-y-2">
									@for (modeGroup of groupChangesByMode(entry.changeDetail); track modeGroup.mode) {
										<div class="space-y-1">
											<p class="text-muted-foreground text-xs font-medium">
												{{ modeGroup.label }} ({{ modeGroup.changes.length }} changes)
											</p>
											<div class="space-y-1">
												@for (change of modeGroup.changes; track change.property) {
													<div class="flex items-center gap-2 text-xs">
														<span class="text-muted-foreground">{{ change.label }}:</span>
														@if (modeGroup.isColorGroup) {
															<!-- Color changes with swatches -->
															<div class="flex items-center gap-1">
																<div
																	class="border-border h-3 w-3 rounded border"
																	[style.background-color]="change.oldValue"></div>
																<span class="text-muted-foreground font-mono text-[10px]">{{ change.oldValue }}</span>
																<span class="text-muted-foreground">→</span>
																<div
																	class="border-border h-3 w-3 rounded border"
																	[style.background-color]="change.newValue"></div>
																<span class="text-muted-foreground font-mono text-[10px]">{{ change.newValue }}</span>
															</div>
														} @else {
															<!-- Non-color changes -->
															<div class="text-muted-foreground flex items-center gap-1">
																<span class="max-w-[100px] truncate">{{ change.oldValue }}</span>
																<span>→</span>
																<span class="max-w-[100px] truncate">{{ change.newValue }}</span>
															</div>
														}
													</div>
												}
											</div>
										</div>
									}
								</div>
							}
						</div>
						<button
							hlmBtn
							hlmTooltipTrigger="Revert to this version"
							size="icon"
							variant="outline"
							class="hidden"
							(click)="selectHistoryEntry(entry)">
							<ng-icon hlm name="lucideUndo2" size="sm" />
						</button>

						@if (entry.isBlurred) {
							<div
								class="bg-background/60 absolute inset-0 z-10 flex items-center justify-center rounded-md backdrop-blur-xs"></div>
						}
					</div>
				</div>
			}
		}
	`,
})
export class ThemeVersionHistoryComponent {
	public readonly currentTheme = input.required<ThemePreset>();

	private readonly themeHttpService = inject(ThemeHttpService);
	private readonly authService = inject(AuthService);
	private readonly themeHistoryResources = resource({
		params: () => ({
			themeId: this.currentTheme()?.id,
		}),
		loader: async ({ params }) => {
			if (params.themeId) {
				return firstValueFrom(this.themeHttpService.getThemeHistory(params.themeId));
			}
			return [];
		},
		defaultValue: [],
	});

	protected readonly isFreePlan = computed(() => isFreeUser(this.authService.currentUser()));
	protected readonly loading = computed(() => this.themeHistoryResources.status() === 'loading');
	protected readonly historyEntries = computed(() => {
		if (this.themeHistoryResources.hasValue()) {
			return this.themeHistoryResources.value();
		}
		return [];
	});

	protected selectHistoryEntry(entry: ThemeVersionHistoryEntry): void {
		// TODO: Implement preview or restore functionality
		console.log('Selected history entry:', entry);
		// You might want to emit an event or call a service method here
		// For example: this.themeService.previewThemeVersion(entry);
	}

	/**
	 * Groups changes into 3 categories: light colors, dark colors, and non-color changes
	 */
	protected groupChangesByMode(
		changes: ThemeChange[],
	): Array<{ mode: string; label: string; isColorGroup: boolean; changes: ThemeChange[] }> {
		const lightColors: ThemeChange[] = [];
		const darkColors: ThemeChange[] = [];
		const nonColors: ThemeChange[] = [];

		for (const change of changes) {
			const isColor = this.isColorValue(change.oldValue) || this.isColorValue(change.newValue);
			if (isColor) {
				if (change.colorScheme === 'light') {
					lightColors.push(change);
				} else {
					darkColors.push(change);
				}
			} else {
				nonColors.push(change);
			}
		}

		const groups: Array<{ mode: string; label: string; isColorGroup: boolean; changes: ThemeChange[] }> = [];

		if (lightColors.length > 0) {
			groups.push({ mode: 'light', label: 'Light Mode', isColorGroup: true, changes: lightColors });
		}
		if (darkColors.length > 0) {
			groups.push({ mode: 'dark', label: 'Dark Mode', isColorGroup: true, changes: darkColors });
		}
		if (nonColors.length > 0) {
			groups.push({ mode: 'other', label: 'Other Settings', isColorGroup: false, changes: nonColors });
		}

		return groups;
	}

	/**
	 * Checks if a value looks like a color (hex, rgb, hsl, oklch)
	 */
	protected isColorValue(value?: string): boolean {
		if (!value) return false;
		return value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl') || value.startsWith('oklch');
	}
}
