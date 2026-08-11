import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBell,
	lucideBookOpen,
	lucideChartColumnBig,
	lucideChevronRight,
	lucideCircleDollarSign,
	lucideExternalLink,
	lucideLogOut,
	lucideMegaphone,
	lucideMessageCircle,
	lucideMoon,
	lucidePackage,
	lucidePlus,
	lucideSearch,
	lucideSettings,
	lucideStore,
	lucideSun,
	lucideUser,
	lucideUsers,
} from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

const SIDEBAR_ITEMS = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		icon: 'lucideChartColumnBig',
		items: [
			{ id: 'dashboard-overview', title: 'Overview' },
			{ id: 'dashboard-analytics', title: 'Analytics' },
			{ id: 'dashboard-reports', title: 'Reports' },
		],
	},
	{
		id: 'product',
		title: 'Product',
		icon: 'lucidePackage',
		items: [
			{ id: 'product-all', title: 'All products' },
			{ id: 'product-categories', title: 'Categories' },
			{ id: 'product-inventory', title: 'Inventory' },
		],
	},
	{
		id: 'customer',
		title: 'Customer',
		icon: 'lucideUsers',
		items: [
			{ id: 'customer-all', title: 'All customers' },
			{ id: 'customer-segments', title: 'Segments' },
			{ id: 'customer-reviews', title: 'Reviews' },
		],
	},
	{
		id: 'shop',
		title: 'Shop',
		icon: 'lucideStore',
		items: [
			{ id: 'shop-orders', title: 'Orders' },
			{ id: 'shop-storefront', title: 'Storefront' },
			{ id: 'shop-locations', title: 'Locations' },
		],
	},
	{
		id: 'income',
		title: 'Income',
		icon: 'lucideCircleDollarSign',
		items: [
			{ id: 'income-revenue', title: 'Revenue' },
			{ id: 'income-transactions', title: 'Transactions' },
			{ id: 'income-payouts', title: 'Payouts' },
		],
	},
	{
		id: 'promote',
		title: 'Promote',
		icon: 'lucideMegaphone',
		items: [
			{ id: 'promote-campaigns', title: 'Campaigns' },
			{ id: 'promote-discounts', title: 'Discounts' },
			{ id: 'promote-audience', title: 'Audience' },
		],
	},
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

@Component({
	selector: 'sim-sidebar-07',
	imports: [
		NgIcon,
		RouterLink,
		FormsModule,
		HlmKbdImports,
		HlmButtonImports,
		HlmCollapsibleImports,
		HlmAvatarImports,
		HlmSidebarImports,
		HlmInputGroupImports,
		HlmLabelImports,
		HlmRadioGroupImports,
		HlmDropdownMenuImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_07_state', sidebarWidth: '12rem' }),
		provideIcons({
			lucideSearch,
			lucideChartColumnBig,
			lucideChevronRight,
			lucideCircleDollarSign,
			lucideMegaphone,
			lucidePackage,
			lucideStore,
			lucideUsers,
			lucideSettings,
			lucideExternalLink,
			lucideUser,
			lucideBookOpen,
			lucideLogOut,
			lucidePlus,
			lucideBell,
			lucideMoon,
			lucideSun,
			lucideMessageCircle,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host {
				--sidebar: #f1f1f1;
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
			<hlm-sidebar collapsible="icon" class="*:data-[slot='sidebar-container']:border-none">
				<hlm-sidebar-header>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<div class="flex gap-2 p-2">
								<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-10 rounded-md" />
							</div>
						</li>
					</ul>
				</hlm-sidebar-header>
				<hlm-sidebar-content>
					<hlm-sidebar-group class="pl-5">
						<ul hlmSidebarMenu>
							@for (item of sidebarItems; track item.id) {
								<li
									hlmSidebarMenuItem
									hlmCollapsible
									class="group/collapsible"
									[expanded]="expandedItem() === item.id"
									(expandedChange)="setExpandedItem(item.id, $event)">
									<button
										hlmSidebarMenuButton
										hlmCollapsibleTrigger
										type="button"
										[isActive]="activeItem() === item.id"
										(click)="activeItem.set(item.id)">
										<ng-icon [name]="item.icon" class="text-muted-foreground!" />
										<span>{{ item.title }}</span>
										<ng-icon
											name="lucideChevronRight"
											class="ml-auto transition-transform duration-200 group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-90 motion-reduce:transition-none" />
									</button>
									<ul hlmSidebarMenuSub hlmCollapsibleContent>
										@for (subItem of item.items; track subItem.id) {
											<li hlmSidebarMenuSubItem class="relative">
												<button
													hlmSidebarMenuSubButton
													type="button"
													class="data-active:bg-background! w-full"
													[isActive]="activeItem() === subItem.id"
													(click)="activeItem.set(subItem.id)">
													<span>{{ subItem.title }}</span>
												</button>
												<div
													aria-hidden="true"
													class="border-sidebar-border absolute top-0 -left-[11px] h-3.5 w-2.5 rounded-bl-lg border border-t-0 border-r-0"></div>
											</li>
										}
									</ul>
								</li>
							}
						</ul>
					</hlm-sidebar-group>
				</hlm-sidebar-content>

				<hlm-sidebar-footer>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem class="flex justify-start pl-2">
							<button
								hlmBtn
								type="button"
								size="icon-lg"
								variant="secondary"
								class="bg-background rounded-full"
								aria-label="Open support chat">
								<ng-icon name="lucideMessageCircle" />
							</button>
						</li>
						<li hlmSidebarMenuItem class="flex justify-start pl-2">
							<div class="bg-background inline-flex h-18 w-10 rounded-full p-1 shadow-sm">
								<hlm-radio-group
									aria-label="Theme"
									class="group after:bg-muted relative grid h-full w-full grid-rows-2 gap-0 after:absolute after:inset-x-0 after:h-1/2 after:rounded-full after:shadow-sm after:transition-[translate,box-shadow] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=dark]:after:translate-y-0 data-[state=light]:after:translate-y-full after:motion-reduce:transition-none"
									[attr.data-state]="theme()"
									[ngModel]="theme()"
									(ngModelChange)="theme.set($event)">
									<label
										for="sidebar-07-dark-theme"
										class="has-data-[checked=false]:text-muted-foreground has-[.cdk-keyboard-focused]:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-[.cdk-keyboard-focused]:ring-2">
										<ng-icon name="lucideMoon" class="text-xl" />
										<hlm-radio
											value="dark"
											inputId="sidebar-07-dark-theme"
											aria-label="Use dark theme"
											class="sr-only" />
									</label>
									<label
										for="sidebar-07-light-theme"
										class="has-data-[checked=false]:text-muted-foreground has-[.cdk-keyboard-focused]:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-[.cdk-keyboard-focused]:ring-2">
										<ng-icon name="lucideSun" class="text-xl" />
										<hlm-radio
											value="light"
											inputId="sidebar-07-light-theme"
											aria-label="Use light theme"
											class="sr-only" />
									</label>
								</hlm-radio-group>
							</div>
						</li>
					</ul>
				</hlm-sidebar-footer>
			</hlm-sidebar>
			<main hlmSidebarInset class="bg-sidebar pl-2">
				<header class="flex h-18 items-center justify-between pr-3">
					<button hlmSidebarTrigger type="button" class="md:hidden">
						<span class="sr-only">Toggle sidebar</span>
					</button>
					<h1 class="text-xl font-semibold">Dashboard</h1>
					<div class="flex gap-2">
						@if (showFullscreenButton()) {
							<a
								hlmBtn
								variant="outline"
								class="gap-2"
								[routerLink]="['/components/sidebar/view/sidebar-07']"
								target="_blank"
								rel="noopener noreferrer">
								View fullscreen
								<ng-icon name="lucideExternalLink" class="size-4" />
							</a>
						}
						<button
							hlmBtn
							type="button"
							variant="outline"
							size="icon"
							class="flex rounded-full md:hidden"
							aria-label="Search">
							<ng-icon name="lucideSearch" />
						</button>
						<hlm-input-group class="bg-background hidden rounded-full sm:flex">
							<input hlmInputGroupInput type="search" aria-label="Search navigation" placeholder="Search..." />
							<hlm-input-group-addon>
								<ng-icon name="lucideSearch" />
							</hlm-input-group-addon>
							<hlm-input-group-addon align="inline-end">
								<kbd hlmKbd>⌘K</kbd>
							</hlm-input-group-addon>
						</hlm-input-group>
						<button hlmBtn type="button" class="rounded-full">Create</button>
						<button
							hlmBtn
							type="button"
							variant="outline"
							size="icon"
							class="rounded-full"
							aria-label="View notifications">
							<ng-icon name="lucideBell" />
						</button>
						<button
							type="button"
							align="end"
							side="bottom"
							[attr.aria-label]="'Open account menu for ' + selectedAccount().name"
							[hlmDropdownMenuTrigger]="avatarMenu">
							<div class="relative">
								<hlm-avatar class="size-9">
									<img hlmAvatarImage [src]="selectedAccount().avatar" [alt]="selectedAccount().name" />
									<span hlmAvatarFallback class="bg-primary text-primary-foreground">
										{{ selectedAccount().initials }}
									</span>
								</hlm-avatar>
								<div
									aria-hidden="true"
									class="border-background absolute top-6.5 right-0 size-3 rounded-full border-2 bg-emerald-500"></div>
							</div>
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
										[(ngModel)]="selectedAccountEmail">
										@for (account of accounts; track account.email) {
											<label
												hlmLabel
												class="hover:bg-muted/70 flex items-start gap-2 rounded-lg p-2"
												[for]="'sidebar-07-' + account.email"
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

												<hlm-radio [inputId]="'sidebar-07-' + account.email" [value]="account.email" class="gap-x-0">
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
					</div>
				</header>
				<div class="grid h-full grid-cols-1 gap-3 pr-3 pb-3 md:grid-cols-[7fr_3fr]">
					<div class="grid h-full grid-rows-[6fr_4fr] gap-3">
						<div class="bg-background size-full rounded-4xl shadow-sm"></div>
						<div class="bg-background size-full rounded-4xl shadow-sm"></div>
					</div>
					<div class="grid h-full grid-rows-[7fr_3fr] gap-3 max-md:hidden">
						<div class="bg-background size-full rounded-4xl shadow-sm"></div>
						<div class="bg-background size-full rounded-4xl shadow-sm"></div>
					</div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar07Component {
	public readonly showFullscreenButton = input(true);
	protected readonly theme = signal<'light' | 'dark'>('light');
	protected readonly activeItem = signal('dashboard-overview');
	protected readonly expandedItem = signal<(typeof SIDEBAR_ITEMS)[number]['id'] | null>('dashboard');
	protected readonly sidebarItems = SIDEBAR_ITEMS;
	protected readonly accounts = ACCOUNTS;
	protected readonly selectedAccountEmail = signal<string>(ACCOUNTS[0].email);
	protected readonly selectedAccount = computed(
		() => ACCOUNTS.find((account) => account.email === this.selectedAccountEmail()) ?? ACCOUNTS[0],
	);

	protected setExpandedItem(itemId: (typeof SIDEBAR_ITEMS)[number]['id'], expanded: boolean): void {
		this.expandedItem.set(expanded ? itemId : null);
	}
}
