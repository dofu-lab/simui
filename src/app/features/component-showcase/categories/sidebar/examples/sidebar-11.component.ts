import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArchive,
	lucideBadgeDollarSign,
	lucideBanknoteArrowDown,
	lucideBrushCleaning,
	lucideChartNoAxesColumnIncreasing,
	lucideChartSpline,
	lucideChevronDown,
	lucideChevronsUpDown,
	lucideContact,
	lucideCreditCard,
	lucideEllipsis,
	lucideEllipsisVertical,
	lucideExternalLink,
	lucideHouse,
	lucideLayers,
	lucideMessageCircle,
	lucideMoon,
	lucidePlus,
	lucideSearch,
	lucideSun,
	lucideX,
} from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';
import { NgScrollbar } from 'ngx-scrollbar';

const WORKSPACES = [
	{ id: 'olivia-martin', name: 'Olivia Martin', initials: 'OM', email: 'olivia.martin@example.com' },
	{ id: 'jackson-lee', name: 'Jackson Lee', initials: 'JL', email: 'jackson.lee@example.com' },
	{ id: 'isabella-nguyen', name: 'Isabella Nguyen', initials: 'IN', email: 'isabella.nguyen@example.com' },
] as const;

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

@Component({
	selector: 'sim-sidebar-11',
	imports: [
		NgIcon,
		FormsModule,
		NgScrollbar,
		RouterLink,
		HlmScrollAreaImports,
		HlmIconImports,
		HlmButtonImports,
		HlmAvatarImports,
		HlmSidebarImports,
		HlmRadioGroupImports,
		HlmBadgeImports,
		HlmSeparatorImports,
		HlmDropdownMenuImports,
		HlmInputGroupImports,
		HlmKbdImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_11_state' }),
		provideIcons({
			lucideSearch,
			lucideArchive,
			lucideBadgeDollarSign,
			lucideChartNoAxesColumnIncreasing,
			lucideChartSpline,
			lucideContact,
			lucideCreditCard,
			lucideHouse,
			lucideLayers,
			lucideExternalLink,
			lucidePlus,
			lucideMoon,
			lucideSun,
			lucideMessageCircle,
			lucideBrushCleaning,
			lucideEllipsisVertical,
			lucideX,
			lucideEllipsis,
			lucideChevronsUpDown,
			lucideChevronDown,
			lucideBanknoteArrowDown,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
			:host {
				--sidebar: #f5f7f9;
				--sidebar-foreground: oklch(0.145 0 0);
				--sidebar-primary: oklch(0.205 0 0);
				--sidebar-primary-foreground: oklch(0.985 0 0);
				--sidebar-accent: oklch(0.97 0 0);
				--sidebar-accent-foreground: oklch(0.205 0 0);
				--sidebar-border: oklch(0.922 0 0);
				--sidebar-ring: oklch(0.708 0 0);
			}

			:host-context(.dark) {
				--sidebar: oklch(0.205 0.0025 345.21);
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
				<hlm-sidebar-header class="pt-4">
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
								<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-8 rounded-md" />
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">{{ selectedWorkspace().name }}</span>
										<span class="text-muted-foreground truncate text-xs">{{ selectedWorkspace().email }}</span>
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
						<ul hlmSidebarMenu class="border-t pt-6">
							<div class="mb-2 group-data-[collapsible=icon]:hidden">
								<hlm-input-group>
									<input hlmInputGroupInput type="search" aria-label="Search navigation" placeholder="Search..." />
									<hlm-input-group-addon>
										<ng-icon name="lucideSearch" />
									</hlm-input-group-addon>

									<hlm-input-group-addon align="inline-end">
										<kbd hlmKbd>⌘K</kbd>
									</hlm-input-group-addon>
								</hlm-input-group>
							</div>
							@for (item of sidebarItems; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										class="hover:bg-background active:bg-background data-active:bg-background opacity-60 data-active:opacity-100 data-active:shadow-xs"
										[isActive]="activeItem() === item.id"
										[attr.aria-pressed]="activeItem() === item.id"
										(click)="activeItem.set(item.id)">
										<ng-icon [name]="item.icon" class="text-muted-foreground!" />
										<span>{{ item.title }}</span>
									</button>
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
						<li hlmSidebarMenuItem class="flex justify-start pb-2 pl-2">
							<div class="bg-background inline-flex h-18 w-10 rounded-full p-1 shadow-sm">
								<hlm-radio-group
									aria-label="Theme"
									class="group after:bg-muted relative grid h-full w-full grid-rows-2 gap-0 after:absolute after:inset-x-0 after:h-1/2 after:rounded-full after:shadow-sm after:transition-[translate,box-shadow] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=dark]:after:translate-y-0 data-[state=light]:after:translate-y-full after:motion-reduce:transition-none"
									[attr.data-state]="theme()"
									[ngModel]="theme()"
									(ngModelChange)="theme.set($event)">
									<label
										for="sidebar-11-dark-theme"
										class="has-data-[checked=false]:text-muted-foreground has-focus-visible:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-focus-visible:ring-2">
										<ng-icon name="lucideMoon" class="text-xl" />
										<hlm-radio
											value="dark"
											inputId="sidebar-11-dark-theme"
											aria-label="Use dark theme"
											class="sr-only" />
									</label>
									<label
										for="sidebar-11-light-theme"
										class="has-data-[checked=false]:text-muted-foreground has-focus-visible:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-focus-visible:ring-2">
										<ng-icon name="lucideSun" class="text-xl" />
										<hlm-radio
											value="light"
											inputId="sidebar-11-light-theme"
											aria-label="Use light theme"
											class="sr-only" />
									</label>
								</hlm-radio-group>
							</div>
						</li>
					</ul>
				</hlm-sidebar-footer>
			</hlm-sidebar>
			<main hlmSidebarInset>
				<div class="bg-sidebar flex min-h-0 flex-1 overflow-hidden py-2 pr-2 pl-2">
					<div class="bg-background flex min-h-0 w-full flex-col overflow-hidden rounded-4xl shadow-sm">
						<div class="flex items-center justify-between border-b px-6 py-3.5">
							<div class="flex flex-col">
								<span>Hey, {{ selectedWorkspace().name.split(' ')[0] }}!</span>
								<span class="text-muted-foreground text-sm">Monday, 10 August, 2026</span>
							</div>
							<div class="flex gap-2">
								@if (showFullscreenButton()) {
									<a
										hlmBtn
										variant="outline"
										class="ml-auto gap-2"
										[routerLink]="['/components/sidebar/view/sidebar-11']"
										target="_blank"
										rel="noopener noreferrer">
										View fullscreen
										<ng-icon name="lucideExternalLink" class="size-4" />
									</a>
								}
								<button hlmBtn variant="outline">
									This month
									<ng-icon name="lucideChevronDown" />
								</button>
								<button hlmBtn>
									Move money
									<ng-icon name="lucideBanknoteArrowDown" />
								</button>
							</div>
						</div>
						<!-- Scroll section -->
						<ng-scrollbar hlm class="flex min-h-0 flex-1 flex-col rounded-none">
							<div class="flex flex-col gap-4 p-4">
								<div class="flex gap-4">
									<div class="h-60 flex-1 rounded-3xl border"></div>
									<div class="h-60 flex-1 rounded-3xl border"></div>
								</div>
								<div class="h-50 rounded-3xl border"></div>
								<div class="h-100 rounded-3xl border"></div>
							</div>
						</ng-scrollbar>
						<!-- Scroll section -->
					</div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar11Component {
	private readonly sidebarService = inject(HlmSidebarService);

	public readonly showFullscreenButton = input(true);
	protected readonly theme = signal<'light' | 'dark'>('light');
	protected readonly activeItem = signal<(typeof SIDEBAR_ITEMS)[number]['id']>('dashboard');
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
}
