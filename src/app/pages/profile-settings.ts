import { Component, computed, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBadgeCheck,
	lucideCalendarDays,
	lucideCreditCard,
	lucideExternalLink,
	lucidePencil,
	lucideSearch,
	lucideSwatchBook,
	lucideTrash,
	lucideTriangleAlert,
	lucideUser,
	lucideZap,
} from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { toast } from 'ngx-sonner';
import { PresetColorPreview } from '../components/theme-editor/preset-color-preview';
import { ThemeStorageService } from '../core/services/theme-storage.service';
import { HistoryDatePipe } from '../pipes/history-date.pipe';
import { PaymentHttpService, SubscriptionStatus } from '../services/payment-http.service';
import { ThemePreset } from '../types';

@Component({
	selector: 'sim-profile-settings',
	imports: [
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmBadge,
		HlmSpinner,
		PresetColorPreview,
		FormsModule,
		HistoryDatePipe,
		HlmInput,
		HlmLabel,
		RouterLink,
		HlmCardImports,
		HlmInputGroupImports,
		HlmEmptyImports,
		HlmDialogImports,
	],
	providers: [
		provideIcons({
			lucideSwatchBook,
			lucidePencil,
			lucideSearch,
			lucideTrash,
			lucideTriangleAlert,
			lucideUser,
			lucideCreditCard,
			lucideBadgeCheck,
			lucideZap,
			lucideExternalLink,
			lucideCalendarDays,
		}),
	],
	host: {
		class: 'flex flex-1 size-full py-2 max-w-7xl mx-auto',
	},
	template: `
		<div class="min-h-0 grow grid-cols-[250px_auto] overflow-hidden md:grid">
			<div class="flex h-full flex-col gap-1 rounded-xl px-2 py-4">
				<button
					hlmBtn
					variant="ghost"
					class="data-[state=active]:bg-accent justify-start"
					[attr.data-state]="activeTab() === 'themes' ? 'active' : 'inactive'"
					(click)="activeTab.set('themes')">
					<ng-icon hlmIcon name="lucideSwatchBook" size="sm" />
					Themes
				</button>
				<button
					hlmBtn
					variant="ghost"
					class="data-[state=active]:bg-accent justify-start"
					[attr.data-state]="activeTab() === 'account' ? 'active' : 'inactive'"
					(click)="activeTab.set('account')">
					<ng-icon hlmIcon name="lucideUser" size="sm" />
					Account
				</button>
			</div>
			<div class="flex flex-col gap-1 pt-4">
				@if (activeTab() === 'themes') {
					<div class="flex">
						<div hlmInputGroup class="max-w-[300px]">
							<input hlmInputGroupInput placeholder="Search your theme..." [(ngModel)]="searchTerm" />
							<div hlmInputGroupAddon>
								<ng-icon name="lucideSearch" />
							</div>
						</div>
					</div>
					<div class="relative size-full overflow-y-auto rounded-md border">
						<div class="absolute grid w-full grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
							@for (theme of customThemes(); track theme.id) {
								<div
									hlmCard
									class="border-input hover:border-muted-foreground/30 flex flex-row justify-between gap-3 p-3 shadow-none">
									<div class="flex flex-col items-start justify-between">
										<p class="text-muted-foreground px-[3px] text-xs">
											{{ theme.createdAt ?? '' | historyDate }}
										</p>
										<sim-theme-color-preview [preset]="theme" />
									</div>
									<div class="flex flex-col items-end gap-1">
										<button hlmBtn variant="ghost" size="icon-sm" (click)="onEditTheme(theme)">
											<ng-icon hlm name="lucidePencil" size="sm" class="text-muted-foreground" />
										</button>
										<button
											hlmBtn
											variant="ghost"
											size="icon-sm"
											class="group hover:bg-destructive/5"
											(click)="onDeleteTheme(theme)">
											<ng-icon
												hlm
												name="lucideTrash"
												size="sm"
												class="text-muted-foreground group-hover:text-destructive" />
										</button>
									</div>
								</div>
							}
						</div>
						@if (themes().length === 0) {
							<div hlmEmpty class="size-full">
								<div hlmEmptyHeader>
									<div hlmEmptyMedia variant="icon">
										<ng-icon name="lucideSwatchBook" />
									</div>
									<div hlmEmptyTitle>No Themes Yet</div>
									<div hlmEmptyDescription>Create your first custom theme to personalize your experience.</div>
								</div>
								<div hlmEmptyContent>
									<button hlmBtn variant="outline" (click)="onCreateTheme()">Create Theme</button>
								</div>
							</div>
						}
					</div>
				} @else if (activeTab() === 'account') {
					<!-- Account / Subscription tab -->
					<div class="flex max-w-xl flex-col gap-4 pr-4">
						<div hlmCard class="flex flex-col gap-4 rounded-md border p-4 shadow-none">
							<div class="flex items-center justify-between">
								<h2 class="text-base font-semibold">Current plan</h2>
								@if (subscriptionLoading()) {
									<hlm-spinner class="size-4" />
								}
							</div>

							@if (subscriptionLoading()) {
								<p class="text-muted-foreground text-sm">Loading subscription info…</p>
							} @else if (subscription()?.isPaid) {
								<div class="flex items-center gap-2">
									<span hlmBadge class="bg-primary text-primary-foreground gap-1">
										<ng-icon hlm name="lucideZap" size="sm" />
										Pro
									</span>
									<span class="text-muted-foreground text-sm">{{ subscription()?.status }}</span>
								</div>
								<p class="text-muted-foreground text-sm">
									You have access to unlimited themes and full version history.
								</p>
								@if (subscription()?.customerPortalUrl) {
									<a
										hlmBtn
										variant="outline"
										class="w-fit gap-2"
										[href]="subscription()!.customerPortalUrl!"
										target="_blank"
										rel="noopener noreferrer">
										<ng-icon hlm name="lucideExternalLink" size="sm" />
										Manage subscription
									</a>
								}
							} @else {
								<div class="flex items-center gap-2">
									<span hlmBadge variant="outline">Free</span>
									<span class="text-muted-foreground text-sm">Limited features</span>
								</div>
								<ul class="text-muted-foreground flex flex-col gap-1 text-sm">
									<li>• Up to 5 saved themes</li>
									<li>• Last 3 days of version history</li>
								</ul>
								<button hlmBtn class="w-fit gap-2" routerLink="/pricing">
									<ng-icon hlm name="lucideZap" size="sm" />
									Upgrade to Pro
								</button>
							}
						</div>
					</div>
				}
			</div>
		</div>

		<hlm-dialog #deleteDialog>
			<button id="delete-dialog-button" #deleteDialogButton hlmDialogTrigger hlmBtn variant="outline" class="hidden">
				Delete Theme
			</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideTriangleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-center text-lg font-semibold">Delete Theme</h2>
						<p hlmDialogDescription class="text-center">
							This action cannot be undone. To confirm, please enter the theme name
							<span class="text-primary font-semibold">{{ themeToDelete()?.label }}</span>
							.
						</p>
					</hlm-dialog-header>

					<label hlmLabel class="mt-2 w-full">Theme name</label>
					<input
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type theme name to confirm"
						[(ngModel)]="deleteConfirmInput"
						[disabled]="isDeleting()" />
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" class="h-9 flex-1" (click)="cancelDelete()" [disabled]="isDeleting()">
						Cancel
					</button>
					<button
						hlmBtn
						type="submit"
						variant="destructive"
						class="flex-1"
						[disabled]="!isDeleteConfirmed() || isDeleting()"
						(click)="confirmDelete()">
						{{ isDeleting() ? 'Deleting...' : 'Delete' }}
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class ProfileSettingsComponent implements OnInit {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly router = inject(Router);
	private readonly paymentService = inject(PaymentHttpService);

	protected readonly searchTerm = signal<string>('');
	protected readonly activeTab = signal<'themes' | 'account'>('themes');
	protected readonly themeToDelete = signal<ThemePreset | null>(null);
	protected readonly deleteConfirmInput = signal<string>('');
	protected readonly isDeleting = signal<boolean>(false);
	protected readonly subscription = signal<SubscriptionStatus | null>(null);
	protected readonly subscriptionLoading = signal(false);

	protected readonly deleteDialogButton = viewChild<ElementRef<HTMLButtonElement>>('deleteDialogButton');
	protected readonly dialogRef = viewChild<HlmDialog>('deleteDialog');

	protected readonly themes = computed(() => this.themeStorageService.themePresets());
	protected readonly isDeleteConfirmed = computed(() => this.deleteConfirmInput() === this.themeToDelete()?.label);
	protected readonly customThemes = computed(() => {
		const searchTerm = this.searchTerm().toLowerCase().trim();
		const savedThemes = this.themes().filter((theme) => theme.source === 'SAVED');

		if (!searchTerm) {
			return savedThemes;
		}

		return savedThemes.filter((theme) => theme.label?.toLowerCase().includes(searchTerm));
	});

	ngOnInit(): void {
		this.subscriptionLoading.set(true);
		this.paymentService.getSubscription().subscribe({
			next: (status) => {
				this.subscription.set(status);
				this.subscriptionLoading.set(false);
			},
			error: () => {
				this.subscriptionLoading.set(false);
			},
		});
	}

	protected onEditTheme(theme: ThemePreset): void {
		this.themeStorageService.selectTheme(theme);
		this.themeStorageService.enterEditMode(theme);
		this.router.navigate(['/theme-editor']);
	}

	protected onCreateTheme(): void {
		this.router.navigate(['/theme-editor']);
	}

	protected onDeleteTheme(theme: ThemePreset): void {
		this.themeToDelete.set(theme);
		this.deleteConfirmInput.set('');
		this.deleteDialogButton()?.nativeElement.click();
	}

	protected async confirmDelete(): Promise<void> {
		const theme = this.themeToDelete();
		if (!theme) return;

		this.isDeleting.set(true);
		try {
			await this.themeStorageService.deleteTheme(theme);
			this.dialogRef()?.close({});
			toast('Theme deleted', { description: `"${theme.label}" has been permanently deleted.` });
			this.themeToDelete.set(null);
			this.deleteConfirmInput.set('');
		} catch {
			toast('Failed to delete theme', { description: 'Something went wrong. Please try again.' });
		} finally {
			this.isDeleting.set(false);
		}
	}

	protected cancelDelete(): void {
		this.dialogRef()?.close({});
		this.themeToDelete.set(null);
		this.deleteConfirmInput.set('');
	}
}
