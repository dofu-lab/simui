import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBookOpen,
	lucideCalendarDays,
	lucideChartColumnBig,
	lucideChartLine,
	lucideChevronsUpDown,
	lucideClock3,
	lucideExternalLink,
	lucideFileText,
	lucideFolderKanban,
	lucideHouse,
	lucideListChecks,
	lucideLogOut,
	lucidePlus,
	lucideSettings,
	lucideUser,
	lucideUsers,
} from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

const PROJECTS = [
	{
		id: 'website-refresh',
		name: 'Website refresh',
		mark: 'WR',
		status: 'On track',
		statusClass: 'bg-emerald-500',
		progress: 72,
		completedTasks: 18,
		totalTasks: 25,
		dueDate: 'Due Aug 18',
		members: [
			{ name: 'Mathilde Lewis', initials: 'ML', avatar: 'assets/avatars/mathilde-lewis.png' },
			{ name: 'Olivia Rhye', initials: 'OR', avatar: 'assets/avatars/olivia-rhye.jpg' },
			{ name: 'Phoenix Baker', initials: 'PB', avatar: 'assets/avatars/phoenix-baker.jpg' },
		],
		milestones: [
			{ id: 'content', label: 'Content handoff', date: 'Aug 8', state: 'Ready', dotClass: 'bg-emerald-500' },
			{ id: 'qa', label: 'QA review', date: 'Aug 13', state: 'Upcoming', dotClass: 'bg-amber-500' },
		],
	},
	{
		id: 'mobile-launch',
		name: 'Mobile launch',
		mark: 'ML',
		status: 'Attention',
		statusClass: 'bg-amber-500',
		progress: 0,
		completedTasks: 0,
		totalTasks: 16,
		dueDate: 'Due Sep 4',
		members: [],
		milestones: [],
	},
	{
		id: 'design-audit',
		name: 'Design audit',
		mark: 'DA',
		status: 'Complete',
		statusClass: 'bg-emerald-500',
		progress: 100,
		completedTasks: 12,
		totalTasks: 12,
		dueDate: 'Completed Jul 29',
		members: [{ name: 'Alex Stanton', initials: 'AS', avatar: 'assets/avatars/alex-stanton.png' }],
		milestones: [
			{ id: 'archive', label: 'Archive delivered', date: 'Jul 29', state: 'Complete', dotClass: 'bg-emerald-500' },
		],
	},
] as const;

const NAVIGATION = [
	{ id: 'overview', label: 'Overview', icon: 'lucideHouse' },
	{ id: 'board', label: 'Board', icon: 'lucideFolderKanban' },
	{ id: 'timeline', label: 'Timeline', icon: 'lucideChartLine' },
	{ id: 'files', label: 'Files', icon: 'lucideFileText' },
	{ id: 'reports', label: 'Reports', icon: 'lucideChartColumnBig' },
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
	selector: 'sim-sidebar-05',
	imports: [
		NgIcon,
		RouterLink,
		FormsModule,
		HlmAvatarImports,
		HlmBadgeImports,
		HlmButtonImports,
		HlmDropdownMenuImports,
		HlmProgressImports,
		HlmRadioGroupImports,
		HlmLabelImports,
		HlmSidebarImports,
		HlmKbdImports,
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_05_state' }),
		provideIcons({
			lucideBookOpen,
			lucideCalendarDays,
			lucideChartColumnBig,
			lucideChartLine,
			lucideChevronsUpDown,
			lucideClock3,
			lucideExternalLink,
			lucideFileText,
			lucideFolderKanban,
			lucideHouse,
			lucideListChecks,
			lucideLogOut,
			lucidePlus,
			lucideSettings,
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
								tooltip="Switch project"
								[attr.aria-label]="'Switch project, current project ' + selectedProject().name"
								[hlmDropdownMenuTrigger]="projectMenu"
								[side]="menuSide()">
								<span
									class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold">
									{{ selectedProject().mark }}
								</span>
								@if (isOpen()) {
									<span class="grid min-w-0 flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">{{ selectedProject().name }}</span>
										<span class="text-muted-foreground flex items-center gap-1.5 truncate text-xs">
											<span
												aria-hidden="true"
												class="size-1.5 rounded-full"
												[class]="selectedProject().statusClass"></span>
											{{ selectedProject().status }}
										</span>
									</span>
									<ng-icon name="lucideChevronsUpDown" class="ml-auto" />
								}
							</button>
							<ng-template #projectMenu>
								<hlm-dropdown-menu class="min-w-60">
									<hlm-dropdown-menu-label>Projects</hlm-dropdown-menu-label>
									@for (project of projects; track project.id) {
										<button hlmDropdownMenuItem type="button" (click)="selectedProjectId.set(project.id)">
											<span class="bg-muted flex size-7 items-center justify-center rounded-md text-xs font-semibold">
												{{ project.mark }}
											</span>
											<span class="min-w-0 flex-1 truncate">{{ project.name }}</span>
											<span class="text-muted-foreground text-xs">{{ project.progress }}%</span>
										</button>
									}
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>

					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<button
								hlmBtn
								type="button"
								aria-label="Create new"
								class="w-full"
								[size]="isOpen() ? 'sm' : 'icon-sm'"
								[hlmDropdownMenuTrigger]="addMenu"
								[side]="menuSide()">
								<ng-icon name="lucidePlus" />
								@if (isOpen()) {
									<span>Add new</span>
								}
							</button>
							<ng-template #addMenu>
								<hlm-dropdown-menu class="min-w-48">
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideListChecks" />
										Task
									</button>
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideCalendarDays" />
										Milestone
									</button>
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideFileText" />
										File
									</button>
									<button hlmDropdownMenuItem type="button">
										<ng-icon name="lucideUsers" />
										Teammate
									</button>
								</hlm-dropdown-menu>
							</ng-template>
						</li>
					</ul>
				</hlm-sidebar-header>

				<hlm-sidebar-content>
					<section class="group-data-[collapsible=icon]:hidden" aria-label="Project health">
						<div class="border-sidebar-border bg-sidebar-accent/60 mx-3 flex flex-col gap-3 rounded-xl border p-3">
							<div class="flex items-center justify-between gap-2">
								<span class="text-sm font-semibold">Project health</span>
								<span hlmBadge variant="outline" class="gap-1.5">
									<span aria-hidden="true" class="size-1.5 rounded-full" [class]="selectedProject().statusClass"></span>
									{{ selectedProject().status }}
								</span>
							</div>
							<div class="flex items-end justify-between gap-2">
								<span class="text-2xl font-semibold">{{ selectedProject().progress }}%</span>
								<span class="text-muted-foreground text-xs">
									{{ selectedProject().completedTasks }}/{{ selectedProject().totalTasks }} tasks
								</span>
							</div>
							<hlm-progress
								class="bg-muted-foreground/20 w-full"
								[value]="selectedProject().progress"
								[attr.aria-label]="selectedProject().name + ' progress'">
								<hlm-progress-indicator
									class="transition-transform duration-150 ease-out motion-reduce:transition-none" />
							</hlm-progress>
							<div class="text-muted-foreground flex items-center justify-between gap-2 text-xs">
								<span class="flex items-center gap-1">
									<ng-icon name="lucideClock3" />
									{{ selectedProject().dueDate }}
								</span>
								<span>{{ selectedProject().members.length }} members</span>
							</div>
							@if (selectedProject().members.length) {
								<div class="flex -space-x-2" aria-label="Project members">
									@for (member of selectedProject().members; track member.name) {
										<hlm-avatar class="border-sidebar size-7 border-2">
											<img hlmAvatarImage [src]="member.avatar" [alt]="member.name" />
											<span hlmAvatarFallback>{{ member.initials }}</span>
										</hlm-avatar>
									}
								</div>
							} @else {
								<p class="text-muted-foreground text-xs">No teammates assigned yet.</p>
							}
						</div>
					</section>

					<hlm-sidebar-group>
						<div hlmSidebarGroupLabel>Project</div>
						<ul hlmSidebarMenu>
							@for (item of navigation; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
										[tooltip]="item.label"
										[attr.aria-label]="item.label"
										[isActive]="activeDestination() === item.id"
										(click)="activeDestination.set(item.id)">
										<ng-icon [name]="item.icon" />
										<span class="group-data-[collapsible=icon]:hidden">{{ item.label }}</span>
									</button>
								</li>
							}
						</ul>
					</hlm-sidebar-group>

					<hlm-sidebar-group class="group-data-[collapsible=icon]:hidden">
						<div hlmSidebarGroupLabel>Upcoming milestones</div>
						@if (selectedProject().milestones.length) {
							<ul hlmSidebarMenu>
								@for (milestone of selectedProject().milestones; track milestone.id) {
									<li hlmSidebarMenuItem>
										<button
											hlmSidebarMenuButton
											type="button"
											[attr.aria-label]="milestone.label + ', ' + milestone.state + ', ' + milestone.date">
											<span aria-hidden="true" class="size-2 rounded-full" [class]="milestone.dotClass"></span>
											<span class="min-w-0 flex-1 truncate text-left">{{ milestone.label }}</span>
											<span class="text-muted-foreground text-xs">{{ milestone.date }}</span>
										</button>
									</li>
								}
							</ul>
						} @else {
							<p class="text-muted-foreground px-2 text-xs" role="status">No upcoming milestones.</p>
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
													[for]="'sidebar-05-' + account.email"
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

													<hlm-radio [inputId]="'sidebar-05-' + account.email" [value]="account.email" class="gap-x-0">
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
					<button hlmSidebarTrigger type="button">
						<span class="sr-only">Toggle sidebar</span>
					</button>
					@if (showFullscreenButton()) {
						<a
							hlmBtn
							variant="outline"
							size="sm"
							class="gap-2"
							[routerLink]="['/components/sidebar/view/sidebar-05']"
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
export class Sidebar05Component {
	private readonly sidebarService = inject(HlmSidebarService);
	public readonly showFullscreenButton = input(true);

	protected readonly projects = PROJECTS;
	protected readonly navigation = NAVIGATION;
	protected readonly accounts = ACCOUNTS;
	protected readonly selectedProjectId = signal<(typeof PROJECTS)[number]['id']>(PROJECTS[0].id);
	protected readonly selectedProject = computed(
		() => PROJECTS.find((project) => project.id === this.selectedProjectId()) ?? PROJECTS[0],
	);
	protected readonly activeDestination = signal<(typeof NAVIGATION)[number]['id']>('overview');
	protected readonly selectedAccountEmail = signal<string>(ACCOUNTS[0].email);
	protected readonly selectedAccount = computed(
		() => ACCOUNTS.find((account) => account.email === this.selectedAccountEmail()) ?? ACCOUNTS[0],
	);
	protected readonly isOpen = computed(() =>
		this.sidebarService.isMobile() ? this.sidebarService.openMobile() : this.sidebarService.open(),
	);
	protected readonly menuSide = computed(() => (this.sidebarService.isMobile() ? 'top' : 'right'));
}
