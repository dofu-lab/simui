import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBell,
	lucideBookOpen,
	lucideCalendarDays,
	lucideCheckSquare2,
	lucideChevronsUpDown,
	lucideExternalLink,
	lucideFileText,
	lucideFolderKanban,
	lucideHouse,
	lucideListTodo,
	lucideLogOut,
	lucideMessageSquare,
	lucidePlus,
	lucideSearch,
	lucideSettings,
	lucideSparkles,
	lucideUser,
	lucideUsers,
} from '@ng-icons/lucide';
import { BrnRadioGroupImports } from '@spartan-ng/brain/radio-group';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

const WORKSPACES = [
	{ id: 'simui', name: 'SimUI Inc', initials: 'SI', plan: 'Enterprise' },
	{ id: 'northstar', name: 'Northstar Labs', initials: 'NL', plan: 'Pro' },
	{ id: 'kinetic', name: 'Kinetic Studio', initials: 'KS', plan: 'Starter' },
] as const;

const FAVORITES = [
	{ id: 'home', label: 'Home', icon: 'lucideHouse', badge: null },
	{ id: 'inbox', label: 'Inbox', icon: 'lucideMessageSquare', badge: 8 },
	{ id: 'tasks', label: 'My tasks', icon: 'lucideCheckSquare2', badge: null },
] as const;

const WORKSPACE_ITEMS = [
	{ id: 'projects', label: 'Projects', icon: 'lucideFolderKanban', badge: null },
	{ id: 'team', label: 'Team', icon: 'lucideUsers', badge: null },
	{ id: 'calendar', label: 'Calendar', icon: 'lucideCalendarDays', badge: null },
	{ id: 'updates', label: 'Updates', icon: 'lucideBell', badge: 3 },
] as const;

const RECENT_ITEMS = [
	{
		id: 'design-system',
		label: 'Design system',
		icon: 'lucideSparkles',
		status: 'On track',
		dotClass: 'bg-emerald-500',
	},
	{ id: 'mobile-app', label: 'Mobile app', icon: 'lucideListTodo', status: 'At risk', dotClass: 'bg-amber-500' },
	{ id: 'research', label: 'Research library', icon: 'lucideFileText', status: 'Paused', dotClass: 'bg-red-500' },
] as const;

const TEAMMATES = [
	{ name: 'Mathilde Lewis', initials: 'ML', avatar: 'assets/avatars/mathilde-lewis.png' },
	{ name: 'Olivia Rhye', initials: 'OR', avatar: 'assets/avatars/olivia-rhye.jpg' },
	{ name: 'Phoenix Baker', initials: 'PB', avatar: 'assets/avatars/phoenix-baker.jpg' },
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

type DestinationId =
	| (typeof FAVORITES)[number]['id']
	| (typeof WORKSPACE_ITEMS)[number]['id']
	| (typeof RECENT_ITEMS)[number]['id'];

@Component({
	selector: 'sim-sidebar-04',
	imports: [
		NgIcon,
		RouterLink,
		FormsModule,
		HlmAvatarImports,
		HlmButtonImports,
		HlmDropdownMenuImports,
		HlmInputGroupImports,
		HlmKbdImports,
		HlmRadioGroupImports,
		BrnRadioGroupImports,
		HlmSidebarImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_04_state' }),
		provideIcons({
			lucideBell,
			lucideBookOpen,
			lucideCalendarDays,
			lucideCheckSquare2,
			lucideChevronsUpDown,
			lucideExternalLink,
			lucideFileText,
			lucideFolderKanban,
			lucideHouse,
			lucideListTodo,
			lucideLogOut,
			lucideMessageSquare,
			lucidePlus,
			lucideSearch,
			lucideSettings,
			lucideSparkles,
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
								tooltip="Switch workspace"
								[attr.aria-label]="'Switch workspace, current workspace ' + selectedWorkspace().name"
								[hlmDropdownMenuTrigger]="workspaceMenu"
								[side]="menuSide()">
								<span
									class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold">
									{{ selectedWorkspace().initials }}
								</span>
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">{{ selectedWorkspace().name }}</span>
										<span class="text-muted-foreground truncate text-xs">{{ selectedWorkspace().plan }}</span>
									</span>
									<ng-icon name="lucideChevronsUpDown" class="ml-auto" />
								}
							</button>
							<ng-template #workspaceMenu>
								<hlm-dropdown-menu class="min-w-56">
									<hlm-dropdown-menu-label>Workspaces</hlm-dropdown-menu-label>
									@for (workspace of workspaces; track workspace.id) {
										<button hlmDropdownMenuItem type="button" (click)="selectedWorkspaceId.set(workspace.id)">
											<span class="bg-muted flex size-7 items-center justify-center rounded-md text-xs font-semibold">
												{{ workspace.initials }}
											</span>
											<span class="grid min-w-0 flex-1 text-left">
												<span class="truncate">{{ workspace.name }}</span>
												<span class="text-muted-foreground text-xs">{{ workspace.plan }}</span>
											</span>
										</button>
									}
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>

					@if (isOpen()) {
						<div class="px-2">
							<hlm-input-group>
								<input
									hlmInputGroupInput
									type="search"
									aria-label="Search workspace navigation"
									placeholder="Search..."
									[ngModel]="searchQuery()"
									(ngModelChange)="searchQuery.set($event)" />
								<hlm-input-group-addon><ng-icon name="lucideSearch" /></hlm-input-group-addon>
								<hlm-input-group-addon align="inline-end"><kbd hlmKbd>⌘K</kbd></hlm-input-group-addon>
							</hlm-input-group>
						</div>
					} @else {
						<ul hlmSidebarMenu>
							<li hlmSidebarMenuItem>
								<button
									hlmSidebarMenuButton
									type="button"
									tooltip="Search"
									aria-label="Open sidebar search"
									(click)="openSidebar()">
									<ng-icon name="lucideSearch" />
								</button>
							</li>
						</ul>
					}

					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem class="px-2 group-data-[collapsible=icon]:px-0">
							<button
								hlmBtn
								type="button"
								aria-label="Create new"
								class="w-full"
								[size]="isOpen() ? 'sm' : 'icon-sm'"
								[hlmDropdownMenuTrigger]="createMenu"
								[side]="menuSide()">
								<ng-icon name="lucidePlus" />
								@if (isOpen()) {
									<span>Create new</span>
								}
							</button>
							<ng-template #createMenu>
								<hlm-dropdown-menu class="min-w-48">
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideFolderKanban" />
										Project
									</button>
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideListTodo" />
										Task
									</button>
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideUsers" />
										Team
									</button>
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>
				</hlm-sidebar-header>

				<hlm-sidebar-content>
					@if (hasResults()) {
						@if (filteredFavorites().length) {
							<hlm-sidebar-group>
								<div hlmSidebarGroupLabel>Favorites</div>
								<ul hlmSidebarMenu>
									@for (item of filteredFavorites(); track item.id) {
										<li hlmSidebarMenuItem>
											<button
												hlmSidebarMenuButton
												type="button"
												[tooltip]="item.label"
												[attr.aria-label]="item.label + (item.badge ? ', ' + item.badge + ' unread' : '')"
												[isActive]="activeDestination() === item.id"
												(click)="activeDestination.set(item.id)">
												<ng-icon [name]="item.icon" />
												<span class="group-data-[collapsible=icon]:hidden">{{ item.label }}</span>
												@if (item.badge) {
													<span
														hlmSidebarMenuBadge
														class="rounded-full bg-red-600 text-white group-data-[collapsible=icon]:hidden">
														{{ item.badge }}
													</span>
												}
											</button>
										</li>
									}
								</ul>
							</hlm-sidebar-group>
						}

						@if (filteredWorkspaceItems().length) {
							<hlm-sidebar-group>
								<div hlmSidebarGroupLabel>Workspace</div>
								<ul hlmSidebarMenu>
									@for (item of filteredWorkspaceItems(); track item.id) {
										<li hlmSidebarMenuItem>
											<button
												hlmSidebarMenuButton
												type="button"
												[tooltip]="item.label"
												[attr.aria-label]="item.label + (item.badge ? ', ' + item.badge + ' updates' : '')"
												[isActive]="activeDestination() === item.id"
												(click)="activeDestination.set(item.id)">
												<ng-icon [name]="item.icon" />
												<span class="group-data-[collapsible=icon]:hidden">{{ item.label }}</span>
												@if (item.badge) {
													<span hlmSidebarMenuBadge class="group-data-[collapsible=icon]:hidden">{{ item.badge }}</span>
												}
											</button>
										</li>
									}
								</ul>
							</hlm-sidebar-group>
						}

						@if (filteredRecentItems().length) {
							<hlm-sidebar-group class="group-data-[collapsible=icon]:hidden">
								<div hlmSidebarGroupLabel>Recent projects</div>
								<ul hlmSidebarMenu>
									@for (item of filteredRecentItems(); track item.id) {
										<li hlmSidebarMenuItem>
											<button
												hlmSidebarMenuButton
												type="button"
												[attr.aria-label]="item.label + ', ' + item.status"
												[isActive]="activeDestination() === item.id"
												(click)="activeDestination.set(item.id)">
												<ng-icon [name]="item.icon" />
												<span class="min-w-0 flex-1 truncate text-left">{{ item.label }}</span>
												<span class="flex items-center gap-1.5 text-xs">
													<span aria-hidden="true" class="size-1.5 rounded-full" [class]="item.dotClass"></span>
													<span class="sr-only">{{ item.status }}</span>
												</span>
											</button>
										</li>
									}
								</ul>
							</hlm-sidebar-group>
						}
					} @else if (isOpen()) {
						<div class="mx-3 flex flex-col items-start gap-2 rounded-lg border border-dashed p-3" role="status">
							<div class="flex items-center gap-2 text-sm font-medium">
								<ng-icon name="lucideSearch" />
								No matching navigation
							</div>
							<p class="text-muted-foreground text-xs">Try another term or clear your search.</p>
							<button hlmBtn type="button" size="xs" variant="outline" (click)="searchQuery.set('')">
								Clear search
							</button>
						</div>
					}
				</hlm-sidebar-content>

				<hlm-sidebar-footer>
					<div class="group-data-[collapsible=icon]:hidden">
						<div class="flex items-center justify-between px-2 pb-2">
							<div class="flex -space-x-2">
								@for (teammate of teammates; track teammate.name) {
									<hlm-avatar class="border-sidebar size-7 border-2">
										<img hlmAvatarImage [src]="teammate.avatar" [alt]="teammate.name" />
										<span hlmAvatarFallback>{{ teammate.initials }}</span>
									</hlm-avatar>
								}
							</div>
							<span class="text-muted-foreground text-xs">3 online</span>
						</div>
					</div>
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
							[routerLink]="['/components/sidebar/view/sidebar-04']"
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
export class Sidebar04Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);

	protected readonly workspaces = WORKSPACES;
	protected readonly teammates = TEAMMATES;
	protected readonly accounts = ACCOUNTS;
	protected readonly selectedWorkspaceId = signal<(typeof WORKSPACES)[number]['id']>(WORKSPACES[0].id);
	protected readonly selectedWorkspace = computed(
		() => WORKSPACES.find((workspace) => workspace.id === this.selectedWorkspaceId()) ?? WORKSPACES[0],
	);
	protected readonly searchQuery = signal('');
	protected readonly normalizedSearch = computed(() => this.searchQuery().trim().toLocaleLowerCase());
	protected readonly activeDestination = signal<DestinationId>('home');
	protected readonly selectedAccountEmail = signal<string>(ACCOUNTS[0].email);
	protected readonly selectedAccount = computed(
		() => ACCOUNTS.find((account) => account.email === this.selectedAccountEmail()) ?? ACCOUNTS[0],
	);
	protected readonly isOpen = computed(() =>
		this.sidebarService.isMobile() ? this.sidebarService.openMobile() : this.sidebarService.open(),
	);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly filteredFavorites = computed(() => this.filterItems(FAVORITES));
	protected readonly filteredWorkspaceItems = computed(() => this.filterItems(WORKSPACE_ITEMS));
	protected readonly filteredRecentItems = computed(() => this.filterItems(RECENT_ITEMS));
	protected readonly hasResults = computed(
		() =>
			this.filteredFavorites().length > 0 ||
			this.filteredWorkspaceItems().length > 0 ||
			this.filteredRecentItems().length > 0,
	);

	protected openSidebar(): void {
		if (!this.isOpen()) this.sidebarService.toggleSidebar();
	}

	private filterItems<T extends { label: string }>(items: readonly T[]): T[] {
		const query = this.normalizedSearch();
		return query ? items.filter((item) => item.label.toLocaleLowerCase().includes(query)) : [...items];
	}
}
