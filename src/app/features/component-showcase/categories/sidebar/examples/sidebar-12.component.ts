import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArchive,
	lucideBadgeDollarSign,
	lucideBanknoteArrowDown,
	lucideChartNoAxesColumnIncreasing,
	lucideChartSpline,
	lucideChevronDown,
	lucideChevronsUpDown,
	lucideContact,
	lucideCreditCard,
	lucideExternalLink,
	lucideHouse,
	lucideLayers,
	lucideMessageCircleQuestionMark,
	lucideSearch,
	lucideSettings,
} from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';
import { NgScrollbar } from 'ngx-scrollbar';

const WORKSPACES = [
	{
		id: 'olivia-martin',
		name: 'Olivia Martin',
		initials: 'OM',
		email: 'olivia.martin@example.com',
		avatar: 'assets/avatars/olivia-rhye.jpg',
	},
	{
		id: 'jackson-lee',
		name: 'Jackson Lee',
		initials: 'JL',
		email: 'jackson.lee@example.com',
		avatar: 'assets/avatars/james-gouse.jpg',
	},
	{
		id: 'isabella-nguyen',
		name: 'Isabella Nguyen',
		initials: 'IN',
		email: 'isabella.nguyen@example.com',
		avatar: 'assets/avatars/candice-wu.jpg',
	},
] as const;

type WorkspaceId = (typeof WORKSPACES)[number]['id'];

const DEFAULT_WORKSPACE = WORKSPACES[0];

const SIDEBAR_ITEMS = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		icon: 'lucideHouse',
	},
	{
		id: 'accounts',
		title: 'Accounts',
		icon: 'lucideChartNoAxesColumnIncreasing',
	},
	{
		id: 'cards',
		title: 'Cards',
		icon: 'lucideCreditCard',
	},
	{
		id: 'transaction',
		title: 'Transaction',
		icon: 'lucideBadgeDollarSign',
	},
	{
		id: 'spend-groups',
		title: 'Spend Groups',
		icon: 'lucideLayers',
	},
	{
		id: 'integrations',
		title: 'Integrations',
		icon: 'lucideChartSpline',
	},
	{
		id: 'payees',
		title: 'Payees',
		icon: 'lucideContact',
	},
	{
		id: 'invoices',
		title: 'Invoices',
		icon: 'lucideArchive',
	},
] as const;

type SidebarItemId = (typeof SIDEBAR_ITEMS)[number]['id'];

@Component({
	selector: 'sim-sidebar-12',
	imports: [
		NgIcon,
		NgScrollbar,
		RouterLink,
		HlmScrollAreaImports,
		HlmButtonImports,
		HlmSidebarImports,
		HlmDropdownMenuImports,
		HlmInputGroupImports,
		HlmKbdImports,
		HlmAvatarImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_12_state' }),
		provideIcons({
			lucideArchive,
			lucideBadgeDollarSign,
			lucideBanknoteArrowDown,
			lucideChartNoAxesColumnIncreasing,
			lucideChartSpline,
			lucideChevronDown,
			lucideChevronsUpDown,
			lucideContact,
			lucideCreditCard,
			lucideExternalLink,
			lucideHouse,
			lucideLayers,
			lucideMessageCircleQuestionMark,
			lucideSearch,
			lucideSettings,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host {
				--sidebar: oklch(0.97 0 0);
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
		@let currentWorkspace = selectedWorkspace();
		<div hlmSidebarWrapper>
			<hlm-sidebar collapsible="icon" class="*:data-[slot='sidebar-container']:border-none">
				<hlm-sidebar-header class="pt-4">
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								tooltip="Switch workspace"
								[attr.aria-label]="'Switch workspace, current workspace ' + currentWorkspace.name"
								[hlmDropdownMenuTrigger]="workspaceMenu"
								[side]="menuSide()">
								<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-8 rounded-md" />
								@if (isOpen()) {
									<span class="flex flex-1 items-center justify-between">
										<span class="font-medium">SimUI Inc.</span>
										<hlm-avatar class="border-sidebar border-2">
											<img hlmAvatarImage [src]="currentWorkspace.avatar" [alt]="currentWorkspace.name" />
											<span hlmAvatarFallback>{{ currentWorkspace.initials }}</span>
										</hlm-avatar>
									</span>
									<ng-icon name="lucideChevronsUpDown" class="ms-auto" />
								}
							</button>
							<ng-template #workspaceMenu>
								<hlm-dropdown-menu class="min-w-56">
									<hlm-dropdown-menu-label>Workspaces</hlm-dropdown-menu-label>
									@for (workspace of workspaces; track workspace.id) {
										<button hlmDropdownMenuItem type="button" (click)="selectWorkspace(workspace.id)">
											<hlm-avatar class="border-sidebar border-2">
												<img hlmAvatarImage [src]="workspace.avatar" [alt]="workspace.name" />
												<span hlmAvatarFallback>{{ workspace.initials }}</span>
											</hlm-avatar>
											<span class="grid min-w-0 flex-1 text-left">
												<span class="truncate">{{ workspace.name }}</span>
												<span class="text-muted-foreground truncate text-xs">{{ workspace.email }}</span>
											</span>
										</button>
									}
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>
				</hlm-sidebar-header>
				<hlm-sidebar-content>
					<hlm-sidebar-group class="pl-4">
						<ul hlmSidebarMenu>
							<li class="mb-2 group-data-[collapsible=icon]:hidden">
								<hlm-input-group>
									<input hlmInputGroupInput type="search" aria-label="Search navigation" placeholder="Search..." />
									<hlm-input-group-addon>
										<ng-icon name="lucideSearch" />
									</hlm-input-group-addon>

									<hlm-input-group-addon align="inline-end">
										<kbd hlmKbd>⌘K</kbd>
									</hlm-input-group-addon>
								</hlm-input-group>
							</li>
							@for (item of sidebarItems; track item.id) {
								@let isActive = activeItemId() === item.id;
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										class="hover:bg-background active:bg-background data-active:bg-background opacity-60 data-active:opacity-100 data-active:shadow-xs"
										[isActive]="isActive"
										[attr.aria-pressed]="isActive"
										(click)="selectSidebarItem(item.id)">
										<ng-icon [name]="item.icon" />
										<span>{{ item.title }}</span>
									</button>
								</li>
							}
						</ul>
					</hlm-sidebar-group>
				</hlm-sidebar-content>

				<hlm-sidebar-footer>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								type="button"
								class="hover:bg-background active:bg-background data-active:bg-background opacity-60 data-active:opacity-100 data-active:shadow-xs">
								<ng-icon name="lucideMessageCircleQuestionMark" />
								Help & support
							</button>
						</li>
						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								type="button"
								class="hover:bg-background active:bg-background data-active:bg-background opacity-60 data-active:opacity-100 data-active:shadow-xs">
								<ng-icon name="lucideSettings" />
								Settings
							</button>
						</li>
					</ul>
				</hlm-sidebar-footer>
			</hlm-sidebar>
			<main hlmSidebarInset>
				<div class="bg-sidebar flex max-h-svh flex-1 pt-2">
					<div class="flex w-full flex-col overflow-hidden">
						<ng-scrollbar hlm class="flex min-h-0 flex-1 flex-col rounded-none">
							<div class="bg-sidebar sticky top-0 flex items-center justify-between px-6 py-2">
								<div class="flex items-center gap-2">
									<button hlmSidebarTrigger type="button" variant="outline" size="icon" class="bg-sidebar md:hidden">
										<span class="sr-only">Toggle sidebar</span>
									</button>
									<div class="flex flex-col">
										<span>Hey, {{ currentWorkspace.name.split(' ')[0] }}!</span>
										<span class="text-muted-foreground text-sm">Monday, 10 August, 2026</span>
									</div>
								</div>
								<div class="flex gap-2">
									@if (showFullscreenButton()) {
										<a
											hlmBtn
											variant="outline"
											[routerLink]="['/components/sidebar/view/sidebar-12']"
											target="_blank"
											rel="noopener noreferrer">
											View fullscreen
											<ng-icon name="lucideExternalLink" />
										</a>
									}
									<button hlmBtn type="button" variant="outline" aria-label="Select reporting period">
										<span class="max-md:hidden">This month</span>
										<ng-icon name="lucideChevronDown" />
									</button>
									<button hlmBtn type="button" aria-label="Move money">
										<span class="max-md:hidden">Move money</span>
										<ng-icon name="lucideBanknoteArrowDown" />
									</button>
								</div>
							</div>
							<div class="flex flex-col gap-4 px-4 pt-2 pb-4">
								<div class="grid grid-cols-[6fr_4fr] gap-4">
									<div class="bg-background h-60 rounded-3xl shadow-sm"></div>
									<div class="bg-background h-60 rounded-3xl shadow-sm"></div>
								</div>
								<div class="bg-background h-50 rounded-3xl shadow-sm"></div>
								<div class="bg-background h-100 rounded-3xl shadow-sm"></div>
							</div>
						</ng-scrollbar>
					</div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar12Component {
	private readonly sidebarService = inject(HlmSidebarService);
	private readonly selectedWorkspaceId = signal<WorkspaceId>(DEFAULT_WORKSPACE.id);

	public readonly showFullscreenButton = input(true);
	protected readonly activeItemId = signal<SidebarItemId>('dashboard');
	protected readonly selectedWorkspace = computed(
		() => WORKSPACES.find((workspace) => workspace.id === this.selectedWorkspaceId()) ?? DEFAULT_WORKSPACE,
	);
	protected readonly isOpen = computed(() =>
		this.sidebarService.isMobile() ? this.sidebarService.openMobile() : this.sidebarService.open(),
	);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly sidebarItems = SIDEBAR_ITEMS;
	protected readonly workspaces = WORKSPACES;

	protected selectSidebarItem(itemId: SidebarItemId): void {
		this.activeItemId.set(itemId);
	}

	protected selectWorkspace(workspaceId: WorkspaceId): void {
		this.selectedWorkspaceId.set(workspaceId);
	}
}
