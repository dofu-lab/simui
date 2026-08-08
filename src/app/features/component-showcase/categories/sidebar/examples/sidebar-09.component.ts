import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	lucideBell,
	lucideBookOpen,
	lucideBuilding2,
	lucideCalendarSync,
	lucideChartColumnBig,
	lucideChevronsUpDown,
	lucideEllipsisVertical,
	lucideExternalLink,
	lucideFolderSearch,
	lucideHouse,
	lucideListTodo,
	lucideLogOut,
	lucideMail,
	lucideMessageCircle,
	lucidePlus,
	lucideSearch,
	lucideSettings,
	lucideUser,
	lucideUsers,
	lucideWorkflow,
	lucideX,
	lucideZap,
} from '@ng-icons/lucide';
import { BrnRadioGroupImports } from '@spartan-ng/brain/radio-group';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

const ITEM_GROUPS = [
	[
		{ title: 'Home', icon: 'lucideHouse' },
		{ title: 'Dashboard', icon: 'lucideChartColumnBig' },
		{ title: 'Mail', icon: 'lucideMail' },
	],
	[
		{ title: 'Company', icon: 'lucideBuilding2' },
		{ title: 'Team members', icon: 'lucideUsers' },
		{ title: 'Workflows', icon: 'lucideWorkflow' },
		{ title: 'Messages', icon: 'lucideMessageCircle' },
		{ title: 'Tasks', icon: 'lucideListTodo' },
	],
	[
		{ title: 'Folder search', icon: 'lucideFolderSearch' },
		{ title: 'Automations', icon: 'lucideZap' },
		{ title: 'Calendar sync', icon: 'lucideCalendarSync' },
		{ title: 'Settings', icon: 'lucideSettings' },
	],
] as const;
type ItemTitle = (typeof ITEM_GROUPS)[number][number]['title'];

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

@Component({
	selector: 'sim-sidebar-09',
	imports: [
		NgClass,
		RouterLink,
		FormsModule,
		HlmIconImports,
		HlmKbdImports,
		HlmBadgeImports,
		HlmButtonImports,
		HlmAvatarImports,
		HlmSidebarImports,
		HlmProgressImports,
		HlmRadioGroupImports,
		BrnRadioGroupImports,
		HlmDropdownMenuImports,
		HlmBreadcrumbImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ defaultOpen: false, sidebarCookieName: 'sidebar_09_state' }),
		provideIcons({
			lucideSearch,
			lucideHouse,
			lucideChartColumnBig,
			lucideSettings,
			lucideExternalLink,
			lucideChevronsUpDown,
			lucideUser,
			lucideBookOpen,
			lucideLogOut,
			lucideX,
			lucidePlus,
			lucideMail,
			lucideBuilding2,
			lucideUsers,
			lucideWorkflow,
			lucideMessageCircle,
			lucideListTodo,
			lucideFolderSearch,
			lucideZap,
			lucideCalendarSync,
			lucideBell,
			lucideEllipsisVertical,
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
							<button hlmSidebarMenuButton size="lg" type="button" tooltip="SimUI Inc">
								<div class="flex gap-2">
									<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-8 rounded-md" />
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">SimUI Inc</span>
										<span class="truncate text-xs">Enterprise</span>
									</div>
								</div>
							</button>
						</li>
					</ul>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button hlmSidebarMenuButton type="button" tooltip="Search" aria-label="Open sidebar search">
								<ng-icon name="lucideSearch" />
							</button>
						</li>
					</ul>
				</hlm-sidebar-header>
				<hlm-sidebar-content class="gap-0">
					@for (group of itemGroups; track group) {
						<hlm-sidebar-group>
							<div class="mb-4 px-1">
								<div class="bg-border h-px"></div>
							</div>
							<ul hlmSidebarMenu>
								@for (item of group; track item.title) {
									<li hlmSidebarMenuItem class="relative">
										@if (selectedItem() === item.title) {
											<div class="absolute -left-px h-full py-2">
												<div class="bg-primary h-full w-0.5 rounded-full"></div>
											</div>
										}
										<button
											hlmSidebarMenuButton
											type="button"
											[tooltip]="item.title"
											[isActive]="selectedItem() === item.title"
											[attr.aria-pressed]="selectedItem() === item.title"
											[ngClass]="{ 'ring-muted-foreground/30 ring-1': selectedItem() === item.title }"
											(click)="selectedItem.set(item.title)">
											<ng-icon [name]="item.icon" class="text-muted-foreground!" />
											{{ item.title }}
										</button>
									</li>
								}
							</ul>
						</hlm-sidebar-group>
					}
				</hlm-sidebar-content>
				<hlm-sidebar-footer>
					<ul hlmSidebarMenu>
						@if (showCta()) {
							<li
								hlmSidebarMenuItem
								class="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-200 ease-in-out group-data-[collapsible=icon]:hidden motion-reduce:transition-none"
								animate.leave="grid-rows-[0fr]! opacity-0!">
								<div class="min-h-0 overflow-hidden">
									<div class="bg-muted/70 flex flex-col gap-2 rounded-xl p-3">
										<div class="flex justify-between">
											<span class="text-sm font-semibold">Used space</span>
											<button
												hlmBtn
												type="button"
												size="icon-xs"
												variant="ghost"
												aria-label="Dismiss storage usage notice"
												(click)="closeCta()">
												<ng-icon name="lucideX" />
											</button>
										</div>
										<p class="text-muted-foreground text-xs">
											Your team has used 80% of your available space. Need more?
										</p>
										<hlm-progress class="bg-muted-foreground/30 w-full" value="80">
											<hlm-progress-indicator />
										</hlm-progress>
										<div class="flex justify-end">
											<button hlmBtn type="button" size="xs" variant="ghost" (click)="closeCta()">Dismiss</button>
											<button hlmBtn type="button" size="xs" variant="outline">Upgrade plan</button>
										</div>
									</div>
								</div>
							</li>
						}
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								align="end"
								[tooltip]="selectedAccount().name"
								class="h-14 rounded-xl border p-2 group-data-[collapsible=icon]:rounded-none! group-data-[collapsible=icon]:border-0! group-data-[collapsible=icon]:bg-transparent! group-data-[collapsible=icon]:hover:bg-transparent!"
								[attr.aria-label]="'Open account menu for ' + selectedAccount().name"
								[hlmDropdownMenuTrigger]="avatarMenu"
								[side]="menuSide()">
								<div class="relative">
									<hlm-avatar>
										<img hlmAvatarImage [src]="selectedAccount().avatar" [alt]="selectedAccount().name" />
										<span hlmAvatarFallback class="bg-primary text-primary-foreground">
											{{ selectedAccount().initials }}
										</span>
									</hlm-avatar>
									<div
										aria-hidden="true"
										class="border-background absolute top-5.5 right-0 size-3 rounded-full border-2 bg-emerald-500"></div>
								</div>
								@if (isOpen()) {
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">{{ selectedAccount().name }}</span>
										<span class="text-muted-foreground truncate text-xs">{{ selectedAccount().email }}</span>
									</div>
									<ng-icon name="lucideChevronsUpDown" class="ml-auto text-base" />
								}
							</button>
							<ng-template #avatarMenu>
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
											[(ngModel)]="value">
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
											<button hlmBtn variant="outline" size="sm" class="mt-2">
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
			<main hlmSidebarInset class="gap-4">
				<header class="flex h-12 items-center justify-between border-b px-4">
					<nav hlmBreadcrumb>
						<ol hlmBreadcrumbList>
							<li hlmBreadcrumbItem>
								<a hlmBreadcrumbLink link="/home" class="flex items-center gap-2">
									<ng-icon hlm name="lucideSettings" size="sm" />
									Settings
								</a>
							</li>
							<li hlmBreadcrumbSeparator class="flex items-center"></li>
							<li hlmBreadcrumbItem>
								<a hlmBreadcrumbLink link="/components">Notification Center</a>
							</li>
							<li hlmBreadcrumbSeparator class="flex items-center"></li>
							<li hlmBreadcrumbItem>
								<span hlmBreadcrumbPage>Notification Preferences</span>
							</li>
						</ol>
					</nav>
					<div class="flex gap-1">
						@if (showFullscreenButton()) {
							<a
								hlmBtn
								variant="outline"
								size="sm"
								class="gap-2"
								[routerLink]="['/components/sidebar/view/sidebar-09']"
								target="_blank"
								rel="noopener noreferrer">
								View fullscreen
								<ng-icon name="lucideExternalLink" class="size-4" />
							</a>
						}
						<button hlmBtn type="button" size="icon-sm" variant="ghost" aria-label="Open messages">
							<div class="relative flex items-center">
								<ng-icon name="lucideMail" />
								<span
									aria-hidden="true"
									class="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-600 dark:bg-red-500"></span>
							</div>
						</button>
						<button hlmBtn type="button" size="icon-sm" variant="ghost" aria-label="Open notifications">
							<div class="relative flex items-center">
								<ng-icon name="lucideBell" />
								<span
									aria-hidden="true"
									class="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-600 dark:bg-red-500"></span>
							</div>
						</button>
						<button hlmBtn type="button" size="icon-sm" variant="ghost" aria-label="Open more options">
							<ng-icon name="lucideEllipsisVertical" />
						</button>
					</div>
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
export class Sidebar09Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly isOpen = computed(() => this.sidebarService.open());
	protected readonly itemGroups = ITEM_GROUPS;
	protected readonly selectedItem = signal<ItemTitle>('Home');
	protected readonly value = signal('mathilde.lewis@simui.com');
	protected readonly selectedAccount = computed(
		() => this.accounts.find((account) => account.email === this.value()) ?? this.accounts[0],
	);
	protected readonly showCta = signal(true);
	protected readonly accounts = ACCOUNTS;

	protected closeCta(): void {
		this.showCta.set(false);
	}
}
