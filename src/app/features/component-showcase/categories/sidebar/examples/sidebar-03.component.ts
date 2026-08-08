import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideActivity,
	lucideArchive,
	lucideBell,
	lucideBookOpen,
	lucideChartColumnBig,
	lucideChartLine,
	lucideCircleCheckBig,
	lucideCircleUserRound,
	lucideClock3,
	lucideEllipsisVertical,
	lucideExternalLink,
	lucideFolderClock,
	lucideFolderKanban,
	lucideFolderOpenDot,
	lucideHouse,
	lucideLayoutList,
	lucideListChecks,
	lucideLogOut,
	lucideMessageCircleQuestionMark,
	lucidePanelTop,
	lucidePlus,
	lucideScan,
	lucideSettings,
	lucideShare2,
	lucideStar,
	lucideUser,
	lucideUserRoundCheck,
	lucideX,
} from '@ng-icons/lucide';
import { BrnRadioGroupImports } from '@spartan-ng/brain/radio-group';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

@Component({
	selector: 'sim-sidebar-03',
	imports: [
		NgIcon,
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
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_03_state', sidebarWidthIcon: '64' }),
		provideIcons({
			lucideActivity,
			lucideArchive,
			lucideBell,
			lucideHouse,
			lucideChartColumnBig,
			lucideChartLine,
			lucideCircleCheckBig,
			lucideCircleUserRound,
			lucideClock3,
			lucideFolderClock,
			lucideFolderKanban,
			lucideFolderOpenDot,
			lucideLayoutList,
			lucideListChecks,
			lucideScan,
			lucideShare2,
			lucideStar,
			lucideUserRoundCheck,
			lucideSettings,
			lucideMessageCircleQuestionMark,
			lucidePanelTop,
			lucideExternalLink,
			lucideUser,
			lucideBookOpen,
			lucideLogOut,
			lucideX,
			lucideEllipsisVertical,
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
			<hlm-sidebar collapsible="icon" variant="floating">
				<div
					class="relative flex size-full flex-col"
					(mouseleave)="activeSidebarItem.set(null)"
					(focusout)="onSidebarFocusOut($event)">
					<hlm-sidebar-header class="p-3">
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
					</hlm-sidebar-header>
					<hlm-sidebar-content>
						<hlm-sidebar-group>
							<ul hlmSidebarMenu>
								@for (item of sidebarItems; track item.title) {
									<li hlmSidebarMenuItem class="flex justify-center">
										<button
											hlmSidebarMenuButton
											type="button"
											[attr.aria-label]="item.title"
											aria-controls="sidebar-03-subpanel"
											[attr.aria-expanded]="activeSidebarItem() === item"
											[isActive]="activeSidebarItem() === item"
											(mouseenter)="activeSidebarItem.set(item)"
											(focus)="activeSidebarItem.set(item)">
											<ng-icon [name]="item.icon" class="text-muted-foreground!" />
										</button>
									</li>
								}
							</ul>
						</hlm-sidebar-group>
					</hlm-sidebar-content>

					<hlm-sidebar-footer>
						<ul hlmSidebarMenu>
							<li hlmSidebarMenuItem class="flex justify-center">
								<button hlmSidebarMenuButton type="button" tooltip="Settings" aria-label="Settings">
									<ng-icon name="lucideSettings" class="text-muted-foreground!" />
								</button>
							</li>
							<li hlmSidebarMenuItem class="flex justify-center">
								<button hlmSidebarMenuButton type="button" tooltip="Support" aria-label="Support">
									<ng-icon name="lucideMessageCircleQuestionMark" class="text-muted-foreground!" />
								</button>
							</li>
							<li hlmSidebarMenuItem class="flex justify-center">
								<button hlmSidebarMenuButton type="button" tooltip="Open in browser" aria-label="Open in browser">
									<ng-icon name="lucidePanelTop" class="text-muted-foreground!" />
								</button>
							</li>
							<li hlmSidebarMenuItem class="flex justify-center">
								<button
									type="button"
									align="end"
									[attr.aria-label]="'Open account menu for ' + selectedAccount().name"
									[hlmDropdownMenuTrigger]="avatarMenu"
									[side]="menuSide()">
									<div class="relative">
										<hlm-avatar size="lg">
											<img hlmAvatarImage [src]="selectedAccount().avatar" [alt]="selectedAccount().name" />
											<span hlmAvatarFallback class="bg-primary text-primary-foreground">
												{{ selectedAccount().initials }}
											</span>
										</hlm-avatar>
										<div
											aria-hidden="true"
											class="border-background absolute top-7.5 right-0 size-3 rounded-full border-2 bg-emerald-500"></div>
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
					@if (activeSidebarItem(); as activeItem) {
						<aside
							id="sidebar-03-subpanel"
							class="text-sidebar-foreground absolute inset-y-0 left-full -z-10 -ml-2 hidden w-[calc(16rem+1rem)] md:block"
							aria-label="Secondary navigation"
							animate.enter="animate-in fade-in-0 slide-in-from-left-2 duration-150 ease-out motion-reduce:animate-none"
							animate.leave="animate-out fade-out-0 slide-out-to-left-2 duration-100 ease-out motion-reduce:animate-none">
							<div
								class="border-sidebar-border bg-sidebar flex size-full flex-col justify-between rounded-r-xl border border-l-0 pt-3 pr-3 pl-5">
								<div class="flex flex-col gap-2">
									<h3 class="text-lg font-semibold">
										{{ activeItem.title }}
									</h3>
									<nav [attr.aria-label]="activeItem.title + ' navigation'">
										<ul class="flex flex-col gap-1">
											@for (subItem of activeItem.items; track subItem.title) {
												<li>
													<a
														class="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-sidebar-ring flex h-9 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors duration-150 ease-in-out outline-none focus-visible:ring-2 motion-reduce:transition-none"
														[href]="subItem.url">
														<ng-icon [name]="subItem.icon" class="text-muted-foreground text-base" />
														<span class="truncate">{{ subItem.title }}</span>
														@if (subItem.badge) {
															<span hlmBadge variant="outline" class="ml-auto rounded-full">
																{{ subItem.badge }}
															</span>
														}
													</a>
												</li>
											}
										</ul>
									</nav>
								</div>
								<div class="flex flex-col gap-3 pb-2">
									@if (activeItem.title === 'Home' && showStorageCta()) {
										<div
											class="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-200 ease-in-out motion-reduce:transition-none"
											animate.leave="grid-rows-[0fr]! opacity-0!">
											<div class="min-h-0 overflow-hidden">
												<div class="bg-sidebar-accent flex flex-col gap-2 rounded-xl p-3">
													<div class="flex justify-between">
														<span class="text-sm font-semibold">Used space</span>
														<button
															hlmBtn
															type="button"
															size="icon-xs"
															variant="ghost"
															aria-label="Dismiss storage usage notice"
															(click)="dismissStorageCta()">
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
														<button hlmBtn type="button" size="xs" variant="ghost" (click)="dismissStorageCta()">
															Dismiss
														</button>
														<button hlmBtn type="button" size="xs" variant="outline">Upgrade plan</button>
													</div>
												</div>
											</div>
										</div>
									}
									<div class="flex justify-between">
										<div class="grid flex-1 text-left text-sm leading-tight">
											<span class="truncate font-medium">{{ selectedAccount().name }}</span>
											<span class="text-muted-foreground truncate text-xs">{{ selectedAccount().email }}</span>
										</div>
										<button hlmBtn size="icon-sm" variant="ghost">
											<ng-icon name="lucideEllipsisVertical" class="text-muted-foreground" />
										</button>
									</div>
								</div>
							</div>
						</aside>
					}
				</div>
			</hlm-sidebar>
			<main hlmSidebarInset>
				<header class="flex h-12 items-center justify-end px-4">
					@if (showFullscreenButton()) {
						<a
							hlmBtn
							variant="outline"
							size="sm"
							class="gap-2"
							[routerLink]="['/components/sidebar/view/sidebar-03']"
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
export class Sidebar03Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
	protected readonly sidebarItems = [
		{
			title: 'Home',
			icon: 'lucideHouse',
			items: [
				{ title: 'Overview', url: '.', icon: 'lucideHouse', badge: null },
				{ title: 'Recent activity', url: '.', icon: 'lucideActivity', badge: null },
				{ title: 'Favorites', url: '.', icon: 'lucideStar', badge: null },
			],
		},
		{
			title: 'Dashboard',
			icon: 'lucideChartColumnBig',
			items: [
				{ title: 'Overview', url: '.', icon: 'lucideScan', badge: null },
				{ title: 'Notifications', url: '.', icon: 'lucideBell', badge: 10 },
				{ title: 'Analytics', url: '.', icon: 'lucideChartLine', badge: null },
				{ title: 'Saved reports', url: '.', icon: 'lucideStar', badge: null },
				{ title: 'Scheduled reports', url: '.', icon: 'lucideClock3', badge: null },
				{ title: 'User reports', url: '.', icon: 'lucideCircleUserRound', badge: null },
			],
		},
		{
			title: 'Projects',
			icon: 'lucideFolderOpenDot',
			items: [
				{ title: 'All projects', url: '.', icon: 'lucideFolderKanban', badge: null },
				{ title: 'Recent projects', url: '.', icon: 'lucideFolderClock', badge: null },
				{ title: 'Shared with me', url: '.', icon: 'lucideShare2', badge: null },
				{ title: 'Archive', url: '.', icon: 'lucideArchive', badge: null },
			],
		},
		{
			title: 'Tasks',
			icon: 'lucideLayoutList',
			items: [
				{ title: 'My tasks', url: '.', icon: 'lucideListChecks', badge: null },
				{ title: 'Assigned to me', url: '.', icon: 'lucideUserRoundCheck', badge: null },
				{ title: 'Completed', url: '.', icon: 'lucideCircleCheckBig', badge: null },
				{ title: 'Archived', url: '.', icon: 'lucideArchive', badge: null },
			],
		},
	] as const;
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
	] as const;
	protected readonly activeSidebarItem = signal<(typeof this.sidebarItems)[number] | null>(null);
	protected readonly selectedAccountEmail = signal<string>(this.accounts[0].email);
	protected readonly selectedAccount = computed(
		() => this.accounts.find((account) => account.email === this.selectedAccountEmail()) ?? this.accounts[0],
	);
	protected readonly showStorageCta = signal(true);

	protected dismissStorageCta(): void {
		this.showStorageCta.set(false);
	}

	protected onSidebarFocusOut(event: FocusEvent): void {
		const nextTarget = event.relatedTarget as HTMLElement | null;
		if (!nextTarget || !(event.currentTarget as HTMLElement).contains(nextTarget)) {
			this.activeSidebarItem.set(null);
		}
	}
}
