import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBookOpen,
	lucideCalendarDays,
	lucideChartColumnBig,
	lucideChevronsUpDown,
	lucideExternalLink,
	lucideFileText,
	lucideFolderKanban,
	lucideHouse,
	lucideInbox,
	lucideLogOut,
	lucideMessageSquare,
	lucidePin,
	lucidePinOff,
	lucidePlus,
	lucideSettings,
	lucideSparkles,
	lucideStar,
	lucideUser,
	lucideUsers,
} from '@ng-icons/lucide';
import { BrnRadioGroupImports } from '@spartan-ng/brain/radio-group';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

const PRIMARY_NAVIGATION = [
	{ id: 'home', label: 'Home', icon: 'lucideHouse', unread: null },
	{ id: 'inbox', label: 'Inbox', icon: 'lucideInbox', unread: 12 },
	{ id: 'projects', label: 'Projects', icon: 'lucideFolderKanban', unread: null },
] as const;

const SHORTCUTS = [
	{ id: 'calendar', label: 'Calendar', icon: 'lucideCalendarDays', description: 'Events and deadlines' },
	{ id: 'reports', label: 'Reports', icon: 'lucideChartColumnBig', description: 'Saved team insights' },
	{ id: 'documents', label: 'Documents', icon: 'lucideFileText', description: 'Shared workspace files' },
	{ id: 'team', label: 'Team directory', icon: 'lucideUsers', description: 'People and availability' },
	{ id: 'feedback', label: 'Feedback', icon: 'lucideMessageSquare', description: 'Product conversations' },
] as const;

const RECENT_ITEMS = [
	{ id: 'website-refresh', label: 'Website refresh', icon: 'lucideSparkles', timestamp: '8m ago' },
	{ id: 'research-notes', label: 'Research notes', icon: 'lucideFileText', timestamp: '1h ago' },
	{ id: 'launch-plan', label: 'Launch plan', icon: 'lucideFolderKanban', timestamp: 'Yesterday' },
] as const;

const ACCOUNTS = [
	{
		name: 'Mathilde Lewis',
		initials: 'ML',
		email: 'mathilde.lewis@simui.com',
		avatar: 'assets/avatars/mathilde-lewis.png',
	},
	{
		name: 'Olivia Rhye',
		initials: 'OR',
		email: 'olivia.rhye@simui.com',
		avatar: 'assets/avatars/olivia-rhye.jpg',
	},
] as const;

type ShortcutId = (typeof SHORTCUTS)[number]['id'];
type DestinationId = (typeof PRIMARY_NAVIGATION)[number]['id'] | ShortcutId | (typeof RECENT_ITEMS)[number]['id'];

@Component({
	selector: 'sim-sidebar-06',
	imports: [
		NgIcon,
		RouterLink,
		FormsModule,
		HlmAvatarImports,
		HlmButtonImports,
		HlmDropdownMenuImports,
		HlmEmptyImports,
		HlmRadioGroupImports,
		BrnRadioGroupImports,
		HlmSidebarImports,
		HlmKbdImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_06_state' }),
		provideIcons({
			lucideBookOpen,
			lucideCalendarDays,
			lucideChartColumnBig,
			lucideChevronsUpDown,
			lucideExternalLink,
			lucideFileText,
			lucideFolderKanban,
			lucideHouse,
			lucideInbox,
			lucideLogOut,
			lucideMessageSquare,
			lucidePin,
			lucidePinOff,
			lucidePlus,
			lucideSettings,
			lucideSparkles,
			lucideStar,
			lucideUser,
			lucideUsers,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host {
				--sidebar: #ffffff;
				--sidebar-foreground: oklch(0.145 0 0);
				--sidebar-primary: oklch(0.205 0 0);
				--sidebar-primary-foreground: oklch(0.985 0 0);
				--sidebar-accent: oklch(0.97 0 0);
				--sidebar-accent-foreground: oklch(0.205 0 0);
				--sidebar-border: oklch(0.922 0 0);
				--sidebar-ring: oklch(0.708 0 0);
			}

			:host-context(.dark) {
				--sidebar: oklch(0.205 0 0);
				--sidebar-foreground: oklch(0.985 0 0);
				--sidebar-primary: oklch(0.985 0 0);
				--sidebar-primary-foreground: oklch(0.205 0 0);
				--sidebar-accent: oklch(0.269 0 0);
				--sidebar-accent-foreground: oklch(0.985 0 0);
				--sidebar-border: oklch(1 0 0 / 10%);
				--sidebar-ring: oklch(0.439 0 0);
			}
		`,
	],
	template: `
		<div hlmSidebarWrapper>
			<hlm-sidebar collapsible="icon">
				<hlm-sidebar-header>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								tooltip="Smart Favorites"
								aria-label="Smart Favorites">
								<span
									class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-md">
									<ng-icon name="lucideStar" />
								</span>
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">Smart Favorites</span>
										<span class="text-muted-foreground truncate text-xs">Your workspace, your way</span>
									</span>
								}
							</button>
						</li>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								type="button"
								tooltip="Customize shortcuts"
								[attr.aria-label]="isCustomizing() ? 'Finish customizing shortcuts' : 'Customize shortcuts'"
								[isActive]="isCustomizing()"
								(click)="isCustomizing.update((value) => !value)">
								<ng-icon name="lucideSettings" />
								@if (isOpen()) {
									<span>{{ isCustomizing() ? 'Done customizing' : 'Customize shortcuts' }}</span>
								}
							</button>
						</li>
					</ul>
				</hlm-sidebar-header>

				<hlm-sidebar-content>
					<hlm-sidebar-group>
						<div hlmSidebarGroupLabel>Navigation</div>
						<ul hlmSidebarMenu>
							@for (item of primaryNavigation; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										[tooltip]="item.label"
										[attr.aria-label]="item.label + (item.unread ? ', ' + item.unread + ' unread' : '')"
										[isActive]="activeDestination() === item.id"
										(click)="activeDestination.set(item.id)">
										<ng-icon [name]="item.icon" />
										<span class="group-data-[collapsible=icon]:hidden">{{ item.label }}</span>
										@if (item.unread) {
											<span
												hlmSidebarMenuBadge
												class="rounded-full bg-red-600 text-white group-data-[collapsible=icon]:hidden">
												{{ item.unread }}
											</span>
										}
									</button>
								</li>
							}
						</ul>
					</hlm-sidebar-group>

					<hlm-sidebar-group>
						<div hlmSidebarGroupLabel>Favorites</div>
						@if (favorites().length) {
							<ul hlmSidebarMenu>
								@for (shortcut of favorites(); track shortcut.id) {
									<li hlmSidebarMenuItem>
										<button
											hlmSidebarMenuButton
											type="button"
											[tooltip]="shortcut.label"
											[attr.aria-label]="shortcut.label"
											[isActive]="activeDestination() === shortcut.id"
											(click)="activeDestination.set(shortcut.id)">
											<ng-icon [name]="shortcut.icon" />
											<span class="min-w-0 flex-1 truncate text-left group-data-[collapsible=icon]:hidden">
												{{ shortcut.label }}
											</span>
										</button>
										@if (isCustomizing()) {
											<button
												hlmSidebarMenuAction
												type="button"
												class="transition-opacity duration-150 ease-out group-data-[collapsible=icon]:hidden motion-reduce:transition-none"
												[attr.aria-label]="'Remove ' + shortcut.label + ' from Favorites'"
												(click)="unpin(shortcut.id)">
												<ng-icon name="lucidePinOff" />
											</button>
										}
									</li>
								}
							</ul>
						} @else if (isOpen()) {
							<hlm-empty class="min-h-auto gap-3 rounded-lg border border-dashed p-4" role="status">
								<hlm-empty-header class="gap-1">
									<hlm-empty-media variant="icon"><ng-icon name="lucideStar" /></hlm-empty-media>
									<div hlmEmptyTitle>No favorites yet</div>
									<div hlmEmptyDescription>Pin shortcuts you use most.</div>
								</hlm-empty-header>
								<button hlmBtn type="button" size="xs" variant="outline" (click)="isCustomizing.set(true)">
									<ng-icon name="lucidePlus" />
									Add favorites
								</button>
							</hlm-empty>
						}
					</hlm-sidebar-group>

					<hlm-sidebar-group class="group-data-[collapsible=icon]:hidden">
						<div hlmSidebarGroupLabel>Recent</div>
						<ul hlmSidebarMenu>
							@for (item of recentItems; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										[attr.aria-label]="item.label + ', ' + item.timestamp"
										(click)="activeDestination.set(item.id)">
										<ng-icon [name]="item.icon" />
										<span class="min-w-0 flex-1 truncate text-left">{{ item.label }}</span>
										<span class="text-muted-foreground text-xs">{{ item.timestamp }}</span>
									</button>
								</li>
							}
						</ul>
					</hlm-sidebar-group>

					<hlm-sidebar-group class="group-data-[collapsible=icon]:hidden">
						<div hlmSidebarGroupLabel>Suggested</div>
						@if (suggested().length) {
							<ul hlmSidebarMenu>
								@for (shortcut of suggested(); track shortcut.id) {
									<li hlmSidebarMenuItem>
										<button
											hlmSidebarMenuButton
											type="button"
											class="h-fit px-2 py-1.5"
											[attr.aria-label]="shortcut.label"
											(click)="activeDestination.set(shortcut.id)">
											<ng-icon class="mb-auto" [name]="shortcut.icon" />
											<span class="grid min-w-0 flex-1 text-left leading-tight">
												<span class="truncate">{{ shortcut.label }}</span>
												<span class="text-muted-foreground truncate text-xs">{{ shortcut.description }}</span>
											</span>
										</button>
										@if (isCustomizing()) {
											<button
												hlmSidebarMenuAction
												type="button"
												class="transition-opacity duration-150 ease-out motion-reduce:transition-none"
												[attr.aria-label]="'Pin ' + shortcut.label + ' to Favorites'"
												(click)="pin(shortcut.id)">
												<ng-icon name="lucidePin" />
											</button>
										}
									</li>
								}
							</ul>
						} @else {
							<p class="text-muted-foreground px-2 text-xs" role="status">All shortcuts are in Favorites.</p>
						}
					</hlm-sidebar-group>
				</hlm-sidebar-content>

				<hlm-sidebar-footer>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								align="end"
								class="h-14 rounded-xl border p-2 group-data-[collapsible=icon]:rounded-none! group-data-[collapsible=icon]:border-0!"
								[attr.aria-label]="'Open account menu for ' + selectedAccount().name"
								[hlmDropdownMenuTrigger]="accountMenu"
								[side]="menuSide()">
								<div class="relative shrink-0">
									<hlm-avatar>
										<img hlmAvatarImage [src]="selectedAccount().avatar" [alt]="selectedAccount().name" />
										<span hlmAvatarFallback>{{ selectedAccount().initials }}</span>
									</hlm-avatar>
									<span
										aria-hidden="true"
										class="border-background absolute right-0 bottom-0 size-3 rounded-full border-2 bg-emerald-500"></span>
								</div>
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">{{ selectedAccount().name }}</span>
										<span class="text-muted-foreground truncate text-xs">{{ selectedAccount().email }}</span>
									</span>
									<ng-icon name="lucideChevronsUpDown" class="ml-auto" />
								}
							</button>
							<ng-template #accountMenu>
								<hlm-dropdown-menu class="bg-muted min-w-60 rounded-lg p-0">
									<hlm-dropdown-menu-group class="bg-background border-b p-2">
										<button hlmDropdownMenuItem type="button">
											<ng-icon name="lucideUser" />
											View profile
											<kbd hlmKbd class="ml-auto border">⌘K→P</kbd>
										</button>
										<button hlmDropdownMenuItem type="button">
											<ng-icon name="lucideSettings" />
											Account settings
											<kbd hlmKbd class="ml-auto border">⌘S</kbd>
										</button>
										<button hlmDropdownMenuItem type="button">
											<ng-icon name="lucideBookOpen" />
											Documentation
											<kbd hlmKbd class="ml-auto border">⌘K→D</kbd>
										</button>
									</hlm-dropdown-menu-group>
									<hlm-dropdown-menu-group>
										<hlm-dropdown-menu-label class="bg-background px-3">Switch account</hlm-dropdown-menu-label>
										<hlm-radio-group
											class="bg-background -mx-px -mb-px flex flex-col gap-0 rounded-b-xl border border-t-0 p-2 pt-0 text-sm font-medium"
											[(ngModel)]="selectedAccountEmail">
											@for (account of accounts; track account.email) {
												<label
													hlmLabel
													class="hover:bg-muted/70 flex items-start gap-2 rounded-lg p-2"
													[for]="account.email"
													(click)="$event.stopPropagation()">
													<div class="flex flex-1 gap-2">
														<div class="relative">
															<hlm-avatar class="size-10 rounded-full">
																<img hlmAvatarImage [alt]="account.name" [src]="account.avatar" />
																<span hlmAvatarFallback class="bg-primary text-primary-foreground">
																	{{ account.initials }}
																</span>
															</hlm-avatar>
															<div
																aria-hidden="true"
																class="border-background absolute top-7.5 right-0 size-3 rounded-full border-2 bg-emerald-500"></div>
														</div>
														<div class="grid flex-1 text-left text-sm leading-tight">
															<span class="truncate font-medium">{{ account.name }}</span>
															<span class="text-muted-foreground truncate text-xs">{{ account.email }}</span>
														</div>
													</div>

													<hlm-radio [inputId]="account.email" [value]="account.email" class="gap-x-0">
														<div
															class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
															<div
																class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375] motion-reduce:transition-none"></div>

															<div
																class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2 motion-reduce:transition-none"></div>
														</div>
													</hlm-radio>
												</label>
											}
											<button hlmBtn type="button" variant="outline" size="sm" class="mt-2">
												<ng-icon name="lucidePlus" class="text-muted-foreground" />
												Add account
											</button>
										</hlm-radio-group>
									</hlm-dropdown-menu-group>
									<hlm-dropdown-menu-group class="p-2">
										<button
											hlmDropdownMenuItem
											type="button"
											variant="destructive"
											class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
											<ng-icon name="lucideLogOut" />
											Log out
											<kbd hlmKbd class="ml-auto border bg-transparent">⌥⇧Q</kbd>
										</button>
									</hlm-dropdown-menu-group>
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>
				</hlm-sidebar-footer>
			</hlm-sidebar>

			<main hlmSidebarInset>
				<header class="flex h-12 items-center justify-between px-4">
					<button hlmSidebarTrigger><span class="sr-only">Toggle sidebar</span></button>
					@if (showFullscreenButton()) {
						<a
							hlmBtn
							variant="outline"
							size="sm"
							class="gap-2"
							[routerLink]="['/components/sidebar/view/sidebar-06']"
							target="_blank"
							rel="noopener noreferrer">
							View fullscreen
							<ng-icon name="lucideExternalLink" />
						</a>
					}
				</header>
				<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div class="grid h-20 grid-cols-3 gap-4">
						<div class="bg-muted/50 size-full rounded-xl"></div>
						<div class="bg-muted/50 size-full rounded-xl"></div>
						<div class="bg-muted/50 size-full rounded-xl"></div>
					</div>
					<div class="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar06Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);

	protected readonly primaryNavigation = PRIMARY_NAVIGATION;
	protected readonly recentItems = RECENT_ITEMS;
	protected readonly accounts = ACCOUNTS;
	protected readonly activeDestination = signal<DestinationId>('home');
	protected readonly isCustomizing = signal(false);
	protected readonly pinnedIds = signal<ReadonlySet<ShortcutId>>(new Set<ShortcutId>(['calendar', 'reports']));
	protected readonly favorites = computed(() => SHORTCUTS.filter((shortcut) => this.pinnedIds().has(shortcut.id)));
	protected readonly suggested = computed(() => SHORTCUTS.filter((shortcut) => !this.pinnedIds().has(shortcut.id)));
	protected readonly selectedAccountEmail = signal<string>(ACCOUNTS[0].email);
	protected readonly selectedAccount = computed(
		() => ACCOUNTS.find((account) => account.email === this.selectedAccountEmail()) ?? ACCOUNTS[0],
	);
	protected readonly isOpen = computed(() =>
		this.sidebarService.isMobile() ? this.sidebarService.openMobile() : this.sidebarService.open(),
	);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));

	protected pin(id: ShortcutId): void {
		if (this.pinnedIds().has(id)) return;
		this.pinnedIds.update((ids) => new Set([...ids, id]));
	}

	protected unpin(id: ShortcutId): void {
		if (!this.pinnedIds().has(id)) return;
		this.pinnedIds.update((ids) => {
			const next = new Set(ids);
			next.delete(id);
			return next;
		});
	}
}
