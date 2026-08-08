import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBookOpen,
	lucideChartColumnBig,
	lucideChevronRight,
	lucideChevronsUpDown,
	lucideExternalLink,
	lucideFolderOpenDot,
	lucideHouse,
	lucideLayoutList,
	lucideLogOut,
	lucideMessageCircleQuestionMark,
	lucidePanelTop,
	lucidePlus,
	lucideSearch,
	lucideSettings,
	lucideUser,
} from '@ng-icons/lucide';
import { BrnRadioGroupImports } from '@spartan-ng/brain/radio-group';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

@Component({
	selector: 'sim-sidebar-02',
	imports: [
		NgIcon,
		RouterLink,
		FormsModule,
		HlmKbdImports,
		HlmBadgeImports,
		HlmButtonImports,
		HlmAvatarImports,
		HlmSidebarImports,
		HlmRadioGroupImports,
		BrnRadioGroupImports,
		HlmInputGroupImports,
		HlmCollapsibleImports,
		HlmDropdownMenuImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_02_state' }),
		provideIcons({
			lucideSearch,
			lucideHouse,
			lucideChevronRight,
			lucideChartColumnBig,
			lucideFolderOpenDot,
			lucideLayoutList,
			lucideSettings,
			lucideMessageCircleQuestionMark,
			lucidePanelTop,
			lucideExternalLink,
			lucideChevronsUpDown,
			lucideUser,
			lucideBookOpen,
			lucideLogOut,
			lucidePlus,
		}),
	],
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
							<button hlmSidebarMenuButton size="lg" type="button">
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
					<div class="px-2 group-data-[collapsible=icon]:hidden">
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
				</hlm-sidebar-header>
				<hlm-sidebar-content>
					<hlm-sidebar-group>
						<ul hlmSidebarMenu>
							@for (item of sidebarItems; track item.title) {
								<li hlmSidebarMenuItem hlmCollapsible class="group/collapsible" [expanded]="item.isActive">
									<button hlmSidebarMenuButton hlmCollapsibleTrigger type="button">
										<ng-icon [name]="item.icon" class="text-muted-foreground!" />
										<span>{{ item.title }}</span>
										<ng-icon
											name="lucideChevronRight"
											class="ml-auto transition-transform duration-200 group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-90 motion-reduce:transition-none" />
									</button>
									<ul hlmSidebarMenuSub hlmCollapsibleContent>
										@for (subItem of item.items; track subItem.title) {
											<li hlmSidebarMenuSubItem>
												<a hlmSidebarMenuSubButton [href]="subItem.url">
													<span>{{ subItem.title }}</span>
												</a>
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
						<li hlmSidebarMenuItem>
							<button hlmSidebarMenuButton type="button">
								<ng-icon name="lucideSettings" class="text-muted-foreground!" />
								Settings
							</button>
						</li>
						<li hlmSidebarMenuItem>
							<button hlmSidebarMenuButton type="button">
								<ng-icon name="lucideMessageCircleQuestionMark" class="text-muted-foreground!" />
								Support
								<span hlmBadge variant="outline" class="ml-auto gap-1.5 rounded-sm">
									<span class="size-1.5 rounded-full bg-emerald-500"></span>
									<span>Online</span>
								</span>
							</button>
						</li>
						<li hlmSidebarMenuItem>
							<button hlmSidebarMenuButton type="button">
								<ng-icon name="lucidePanelTop" class="text-muted-foreground!" />
								Open in browser
								<ng-icon name="lucideExternalLink" class="text-muted-foreground! ml-auto" />
							</button>
						</li>

						<li hlmSidebarMenuItem>
							<button
								hlmSidebarMenuButton
								size="lg"
								type="button"
								align="end"
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
			<main hlmSidebarInset>
				<header class="flex h-12 items-center justify-between px-4">
					<button hlmSidebarTrigger>
						<span class="sr-only">Toggle sidebar</span>
					</button>
					@if (showFullscreenButton()) {
						<a
							hlmBtn
							variant="outline"
							size="sm"
							class="gap-2"
							[routerLink]="['/components/sidebar/view/sidebar-02']"
							target="_blank"
							rel="noopener noreferrer">
							View fullscreen
							<ng-icon name="lucideExternalLink" class="size-4" />
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
export class Sidebar02Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly isOpen = computed(() => this.sidebarService.open());
	protected readonly sidebarItems = [
		{
			title: 'Home',
			icon: 'lucideHouse',
			isActive: true,
			items: [
				{ title: 'Overview', url: '.' },
				{ title: 'Activity', url: '.' },
			],
		},
		{
			title: 'Dashboard',
			icon: 'lucideChartColumnBig',
			isActive: false,
			items: [
				{ title: 'Analytics', url: '.' },
				{ title: 'Reports', url: '.' },
			],
		},
		{
			title: 'Projects',
			icon: 'lucideFolderOpenDot',
			isActive: false,
			items: [
				{ title: 'All projects', url: '.' },
				{ title: 'Archived', url: '.' },
			],
		},
		{
			title: 'Tasks',
			icon: 'lucideLayoutList',
			isActive: false,
			items: [
				{ title: 'My tasks', url: '.' },
				{ title: 'Assigned to me', url: '.' },
			],
		},
	];

	protected readonly value = signal('mathilde.lewis@simui.com');
	protected readonly selectedAccount = computed(
		() => this.accounts.find((account) => account.email === this.value()) ?? this.accounts[0],
	);

	protected readonly accounts = [
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
	];
}
