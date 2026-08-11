import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	lucideActivity,
	lucideCable,
	lucideChartNoAxesColumnIncreasing,
	lucideChevronsUpDown,
	lucideExternalLink,
	lucideHouse,
	lucideKeyRound,
	lucideLayoutTemplate,
	lucideMessageCircleQuestionMark,
	lucideMousePointerClick,
	lucidePlusCircle,
	lucideSettings,
	lucideUserStar,
} from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';
import { NgScrollbar } from 'ngx-scrollbar';

const WORKSPACES = [
	{ id: 1, name: 'Design', color: 'bg-indigo-500' },
	{ id: 2, name: 'Marketing', color: 'bg-amber-500' },
	{ id: 3, name: 'Development', color: 'bg-sky-500' },
] as const;

const SIDEBAR_ITEMS = [
	{
		id: 'automation',
		title: 'Automation',
		icon: 'lucideMousePointerClick',
	},
	{
		id: 'connections',
		title: 'Connections',
		icon: 'lucideCable',
	},
	{
		id: 'activity',
		title: 'Activity',
		icon: 'lucideActivity',
	},
	{
		id: 'templates',
		title: 'Templates',
		icon: 'lucideLayoutTemplate',
	},
	{
		id: 'credentials',
		title: 'Credentials',
		icon: 'lucideKeyRound',
	},
	{
		id: 'usage',
		title: 'Usage',
		icon: 'lucideChartNoAxesColumnIncreasing',
	},
] as const;

type WorkspaceId = (typeof WORKSPACES)[number]['id'];

@Component({
	selector: 'sim-sidebar-13',
	imports: [
		NgScrollbar,
		RouterLink,
		HlmScrollAreaImports,
		HlmButtonImports,
		HlmSidebarImports,
		HlmDropdownMenuImports,
		HlmKbdImports,
		HlmCardImports,
		HlmBreadcrumbImports,
		HlmIconImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_13_state' }),
		provideIcons({
			lucideActivity,
			lucideCable,
			lucideChartNoAxesColumnIncreasing,
			lucideHouse,
			lucideKeyRound,
			lucideLayoutTemplate,
			lucideMousePointerClick,
			lucideExternalLink,
			lucideChevronsUpDown,
			lucideMessageCircleQuestionMark,
			lucideSettings,
			lucidePlusCircle,
			lucideUserStar,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host {
				--sidebar: oklch(0.975 0.0034 247.86);
				--sidebar-foreground: oklch(0.145 0 0);
				--sidebar-primary: oklch(0.205 0 0);
				--sidebar-primary-foreground: oklch(0.985 0 0);
				--sidebar-accent: oklch(0.97 0 0);
				--sidebar-accent-foreground: oklch(0.205 0 0);
				--sidebar-border: oklch(0.922 0 0);
				--sidebar-ring: oklch(0.708 0 0);
			}

			:host-context(.dark) {
				--sidebar: oklch(0.205 0.006 247.86);
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
				<hlm-sidebar-header>
					<section class="bg-muted w-full gap-0 rounded-2xl py-0" hlmCard>
						<div hlmCardHeader class="bg-muted flex items-center justify-between gap-3 px-1 py-1 shadow-none ring-0">
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								tooltip="Switch workspace"
								class="hover:bg-muted-foreground/10 active:bg-muted-foreground/10 rounded-xl"
								[attr.aria-label]="'Switch workspace, current workspace ' + currentWorkspace.name"
								[hlmDropdownMenuTrigger]="workspaceMenu"
								[side]="menuSide()">
								<span class="size-8 overflow-hidden rounded-md {{ currentWorkspace.color }}">
									<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-full mix-blend-screen" />
								</span>
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="text-muted-foreground truncate text-xs">Team</span>
										<span class="truncate font-medium">{{ currentWorkspace.name }}</span>
									</span>
									<ng-icon name="lucideChevronsUpDown" class="ml-auto" />
								}
								<ng-template #workspaceMenu>
									<hlm-dropdown-menu class="min-w-56">
										<hlm-dropdown-menu-label>Workspaces</hlm-dropdown-menu-label>
										@for (workspace of workspaces; track workspace.id) {
											<button hlmDropdownMenuItem type="button" (click)="selectWorkspace(workspace.id)">
												<span class="size-6 overflow-hidden rounded-md {{ workspace.color }}">
													<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-full mix-blend-screen" />
												</span>
												<span class="grid min-w-0 flex-1 text-left">
													<span class="truncate">{{ workspace.name }} Team</span>
												</span>
											</button>
										}
									</hlm-dropdown-menu>
								</ng-template>
							</button>
						</div>
						<section hlmCard class="w-full gap-2 rounded-2xl p-2 shadow-none">
							<div hlmCardContent class="flex flex-col gap-3 border-b px-2 pt-2 pb-5">
								@for (workspace of workspaces; track workspace.id) {
									<div
										class="data-active:text-primary text-muted-foreground flex items-center justify-between data-active:font-medium"
										[attr.data-active]="currentWorkspace.id === workspace.id">
										<div class="flex items-center gap-2">
											<div class="size-4 rounded-full {{ workspace.color }}"></div>
											<div>{{ workspace.name }} Team</div>
										</div>
										<kbd hlmKbd>⌘+{{ workspace.id }}</kbd>
									</div>
								}
							</div>
							<div hlmCardFooter class="px-0">
								<button hlmBtn type="button" variant="ghost" class="w-full justify-start">
									<ng-icon name="lucidePlusCircle" />
									Create a team
								</button>
							</div>
						</section>
					</section>

					<ul hlmSidebarMenu class="px-2">
						<li hlmSidebarMenuItem>
							<button hlmSidebarMenuButton type="button" class="hover:bg-background active:bg-background">
								<ng-icon name="lucideUserStar" />
								Customers
							</button>
						</li>
					</ul>
				</hlm-sidebar-header>
				<hlm-sidebar-content>
					<hlm-sidebar-group class="pt-0 pl-4">
						<ul hlmSidebarMenu class="border-t pt-4">
							@for (item of sidebarItems; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										class="hover:bg-background active:bg-background data-active:bg-background opacity-80 data-active:opacity-100 data-active:shadow-xs"
										[isActive]="activeItem() === item.id"
										[attr.aria-pressed]="activeItem() === item.id"
										(click)="activeItem.set(item.id)">
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
				<div class="bg-sidebar flex max-h-svh flex-1 p-2">
					<div class="bg-background flex w-full flex-col overflow-hidden rounded-4xl shadow-sm">
						<ng-scrollbar hlm class="flex min-h-0 flex-1 flex-col rounded-none">
							<div class="bg-background sticky top-0 flex items-center justify-between border-b px-6 py-3.5">
								<div class="flex flex-col gap-4">
									<nav hlmBreadcrumb class="max-md:hidden">
										<ol hlmBreadcrumbList>
											<li hlmBreadcrumbItem>
												<a hlmBreadcrumbLink link="/home" class="flex items-center">
													<ng-icon hlm name="lucideHouse" size="sm" />
												</a>
											</li>
											<li hlmBreadcrumbSeparator class="flex items-center">/</li>

											<li hlmBreadcrumbItem>
												<a hlmBreadcrumbLink link="/components">Payments</a>
											</li>
											<li hlmBreadcrumbSeparator class="flex items-center">/</li>

											<li hlmBreadcrumbItem>
												<span hlmBreadcrumbPage>Overview</span>
											</li>
										</ol>
									</nav>

									<div class="flex items-center gap-2">
										<button hlmSidebarTrigger type="button" variant="outline" size="icon" class="md:hidden">
											<span class="sr-only">Toggle sidebar</span>
										</button>
										<h1 class="text-2xl font-medium">Payments</h1>
									</div>
								</div>

								@if (showFullscreenButton()) {
									<a
										hlmBtn
										variant="outline"
										class="ml-auto gap-2"
										[routerLink]="['/components/sidebar/view/sidebar-13']"
										target="_blank"
										rel="noopener noreferrer">
										View fullscreen
										<ng-icon name="lucideExternalLink" class="size-4" />
									</a>
								}
							</div>
							<div class="flex flex-col gap-4 p-4"></div>
						</ng-scrollbar>
					</div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar13Component {
	private readonly sidebarService = inject(HlmSidebarService);

	public readonly showFullscreenButton = input(true);
	protected readonly activeItem = signal<(typeof SIDEBAR_ITEMS)[number]['id']>('automation');
	protected readonly selectedWorkspaceId = signal<(typeof WORKSPACES)[number]['id']>(WORKSPACES[0].id);
	protected readonly selectedWorkspace = computed(
		() => WORKSPACES.find((workspace) => workspace.id === this.selectedWorkspaceId()) ?? WORKSPACES[0],
	);
	protected readonly isOpen = computed(() =>
		this.sidebarService.isMobile() ? this.sidebarService.openMobile() : this.sidebarService.open(),
	);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly sidebarItems = SIDEBAR_ITEMS;
	protected readonly workspaces = WORKSPACES;

	protected selectWorkspace(workspaceId: WorkspaceId): void {
		this.selectedWorkspaceId.set(workspaceId);
	}
}
