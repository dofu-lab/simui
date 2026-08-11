import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	lucideBriefcaseBusiness,
	lucideBrushCleaning,
	lucideEllipsis,
	lucideEllipsisVertical,
	lucideExternalLink,
	lucideHandshake,
	lucideMessageCircle,
	lucideMoon,
	lucidePlus,
	lucideReceiptText,
	lucideSearch,
	lucideSun,
	lucideUsers,
	lucideX,
} from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports, HlmSidebarService, provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';
import { NgScrollbar } from 'ngx-scrollbar';

const SIDEBAR_ITEMS = [
	{
		id: 'job-post',
		title: 'Job post',
		icon: 'lucideBriefcaseBusiness',
	},
	{
		id: 'applicants',
		title: 'Applicants',
		icon: 'lucideUsers',
	},
	{
		id: 'engagements',
		title: 'Engagements',
		icon: 'lucideHandshake',
	},
	{
		id: 'invoices',
		title: 'Invoices',
		icon: 'lucideReceiptText',
	},
] as const;

const TEAMMATES = [
	{ name: 'Mathilde Lewis', initials: 'ML', avatar: 'assets/avatars/mathilde-lewis.png' },
	{ name: 'Olivia Rhye', initials: 'OR', avatar: 'assets/avatars/olivia-rhye.jpg' },
	{ name: 'Phoenix Baker', initials: 'PB', avatar: 'assets/avatars/phoenix-baker.jpg' },
] as const;

const APPLICANT_COLUMNS = [
	{
		id: 'applicants',
		title: 'Applicants',
		statusClass: 'bg-amber-500',
		people: [
			{
				id: 'alex-stanton',
				name: 'Alex Stanton',
				initials: 'AS',
				avatar: 'assets/avatars/alex-stanton.png',
				match: 84,
				role: 'Product Designer',
				location: 'New York, NY',
			},
			{
				id: 'anna-white',
				name: 'Anna White',
				initials: 'AW',
				avatar: 'assets/avatars/anna-white.png',
				match: 81,
				role: 'Product Designer',
				location: 'Austin, TX',
			},
			{
				id: 'marcus-levin',
				name: 'Marcus Levin',
				initials: 'ML',
				avatar: 'assets/avatars/marcus-levin.png',
				match: 76,
				role: 'Product Designer',
				location: 'Portland, OR',
			},
		],
	},
	{
		id: 'shortlist',
		title: 'Shortlist',
		statusClass: 'bg-yellow-500',
		people: [
			{
				id: 'candice-wu',
				name: 'Candice Wu',
				initials: 'CW',
				avatar: 'assets/avatars/candice-wu.jpg',
				match: 92,
				role: 'Product Designer',
				location: 'San Francisco, CA',
			},
			{
				id: 'james-gouse',
				name: 'James Gouse',
				initials: 'JG',
				avatar: 'assets/avatars/james-gouse.jpg',
				match: 89,
				role: 'Product Designer',
				location: 'Seattle, WA',
			},
		],
	},
	{
		id: 'interview',
		title: 'Interview',
		statusClass: 'bg-emerald-500',
		people: [
			{
				id: 'jessica-lambert',
				name: 'Jessica Lambert',
				initials: 'JL',
				avatar: 'assets/avatars/jessica-lambert.png',
				match: 96,
				role: 'Product Designer',
				location: 'Boston, MA',
			},
			{
				id: 'julia-philips',
				name: 'Julia Philips',
				initials: 'JP',
				avatar: 'assets/avatars/julia-philips.png',
				match: 94,
				role: 'Product Designer',
				location: 'Chicago, IL',
			},
		],
	},
] as const;

@Component({
	selector: 'sim-sidebar-10',
	imports: [
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
	],
	providers: [
		HlmSidebarService,
		provideHlmSidebarConfig({ sidebarCookieName: 'sidebar_10_state' }),
		provideIcons({
			lucideSearch,
			lucideBriefcaseBusiness,
			lucideHandshake,
			lucideReceiptText,
			lucideUsers,
			lucideExternalLink,
			lucidePlus,
			lucideMoon,
			lucideSun,
			lucideMessageCircle,
			lucideBrushCleaning,
			lucideEllipsisVertical,
			lucideX,
			lucideEllipsis,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'relative',
	},
	styles: [
		`
			:host {
				--custom-background: oklch(0.972 0.0025 345.21);

				--sidebar: oklch(0.9509 0.0025 345.21);
				--sidebar-foreground: oklch(0.145 0 0);
				--sidebar-primary: oklch(0.205 0 0);
				--sidebar-primary-foreground: oklch(0.985 0 0);
				--sidebar-accent: oklch(0.97 0 0);
				--sidebar-accent-foreground: oklch(0.205 0 0);
				--sidebar-border: oklch(0.922 0 0);
				--sidebar-ring: oklch(0.708 0 0);
			}

			:host-context(.dark) {
				--custom-background: oklch(0.145 0.0025 345.21);

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
		<header class="absolute z-11 flex w-full items-center gap-2 px-6 py-4">
			<img src="assets/logos/logo-square.svg" alt="SimUI" class="size-10 rounded-md" />
			<button hlmSidebarTrigger type="button" variant="secondary" size="icon" class="bg-sidebar md:hidden">
				<span class="sr-only">Toggle sidebar</span>
			</button>
			<button hlmBtn type="button" variant="secondary" size="lg" class="bg-sidebar" aria-label="Search">
				<ng-icon name="lucideSearch" />
				<span class="max-md:hidden">Search</span>
			</button>
			<button hlmBtn type="button" variant="secondary" size="lg" class="bg-sidebar" aria-label="Create job">
				<ng-icon name="lucidePlus" />
				<span class="max-md:hidden">Create Job</span>
			</button>
			<div class="flex h-10 w-4 items-center justify-center py-2">
				<hlm-separator orientation="vertical" />
			</div>
			<button hlmBtn type="button" variant="secondary" size="lg" class="bg-sidebar max-md:hidden">
				<ng-icon name="lucideBrushCleaning" />
				Job Postings
				<ng-icon name="lucideX" class="ml-2" />
			</button>
			<button hlmBtn type="button" variant="secondary" size="lg" class="bg-sidebar max-md:hidden">
				<ng-icon name="lucideBrushCleaning" />
				Product Designer
				<ng-icon name="lucideX" class="ml-2" />
			</button>
			<button hlmBtn type="button" variant="secondary" size="lg" class="bg-sidebar" aria-label="Open more filters">
				<ng-icon name="lucideEllipsis" />
			</button>

			@if (showFullscreenButton()) {
				<a
					hlmBtn
					variant="outline"
					size="sm"
					class="ml-auto gap-2"
					[routerLink]="['/components/sidebar/view/sidebar-10']"
					target="_blank"
					rel="noopener noreferrer">
					View fullscreen
					<ng-icon name="lucideExternalLink" class="size-4" />
				</a>
			}
		</header>
		<div hlmSidebarWrapper class="bg-(--custom-background)">
			<hlm-sidebar
				collapsible="icon"
				class="*:data-[slot='sidebar-container']:border-none *:data-[slot='sidebar-container']:pt-18 *:data-[slot='sidebar-container']:pb-4 *:data-[slot='sidebar-container']:pl-4 **:data-[slot='sidebar-inner']:rounded-s-4xl">
				<hlm-sidebar-header>
					<div class="flex flex-col gap-3 border-b py-4 pl-4">
						<div class="flex items-center justify-between">
							<ng-icon hlm name="lucideBrushCleaning" />
							<button hlmBtn type="button" size="icon" variant="ghost" aria-label="Open job options">
								<ng-icon name="lucideEllipsisVertical" />
							</button>
						</div>
						<h2 class="text-lg">Product Designer</h2>
						<div class="flex -space-x-2">
							@for (teammate of teammates; track teammate.name) {
								<hlm-avatar class="border-sidebar size-7 border-2">
									<img hlmAvatarImage [src]="teammate.avatar" [alt]="teammate.name" />
									<span hlmAvatarFallback>{{ teammate.initials }}</span>
								</hlm-avatar>
							}
						</div>
						<div class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
							<span class="text-muted-foreground text-sm">Open</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-indigo-500" aria-hidden="true"></span>
							<span class="text-muted-foreground text-sm">Ongoing Engagement</span>
						</div>
					</div>
				</hlm-sidebar-header>
				<hlm-sidebar-content>
					<hlm-sidebar-group class="pl-5">
						<ul hlmSidebarMenu>
							@for (item of sidebarItems; track item.id) {
								<li hlmSidebarMenuItem>
									<button
										hlmSidebarMenuButton
										type="button"
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
										for="sidebar-10-dark-theme"
										class="has-data-[checked=false]:text-muted-foreground has-focus-visible:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-focus-visible:ring-2">
										<ng-icon name="lucideMoon" class="text-xl" />
										<hlm-radio
											value="dark"
											inputId="sidebar-10-dark-theme"
											aria-label="Use dark theme"
											class="sr-only" />
									</label>
									<label
										for="sidebar-10-light-theme"
										class="has-data-[checked=false]:text-muted-foreground has-focus-visible:ring-ring z-10 flex cursor-pointer items-center justify-center rounded-full has-focus-visible:ring-2">
										<ng-icon name="lucideSun" class="text-xl" />
										<hlm-radio
											value="light"
											inputId="sidebar-10-light-theme"
											aria-label="Use light theme"
											class="sr-only" />
									</label>
								</hlm-radio-group>
							</div>
						</li>
					</ul>
				</hlm-sidebar-footer>
			</hlm-sidebar>
			<main hlmSidebarInset class="max-h-svh bg-(--custom-background) pt-18 pr-4 pb-4 max-md:pl-4">
				<div class="bg-sidebar flex min-h-0 flex-1 overflow-hidden rounded-e-4xl py-2 pr-2 pl-2 max-md:rounded-s-4xl">
					<div class="bg-background flex min-h-0 w-full flex-col overflow-hidden rounded-4xl shadow-sm">
						<span class="px-6 py-4 text-lg">Applicants</span>
						<div class="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-hidden px-4 pb-4 lg:grid-cols-2 xl:grid-cols-3">
							@for (column of applicantColumns; track column.id) {
								<section class="bg-sidebar flex min-h-0 flex-col gap-4 overflow-hidden rounded-2xl border shadow-xs">
									<div class="flex items-center gap-2 px-6 pt-4">
										<span class="size-2 rounded-full" [class]="column.statusClass" aria-hidden="true"></span>
										<h2 class="text-muted-foreground text-sm">{{ column.title }}</h2>
										<span hlmBadge variant="ghost">{{ column.people.length }}</span>
									</div>
									<ng-scrollbar hlm class="min-h-0 flex-1 rounded-none">
										<div class="flex flex-col gap-3 px-4 pb-4">
											@for (person of column.people; track person.id) {
												<article
													class="bg-background flex w-full flex-col gap-3 rounded-4xl p-4"
													[attr.aria-labelledby]="'sidebar-10-person-' + person.id">
													<div class="flex justify-between gap-3">
														<div class="flex min-w-0 flex-col items-start gap-1">
															<h3 class="truncate text-sm" [id]="'sidebar-10-person-' + person.id">
																{{ person.name }}
															</h3>
															<span
																hlmBadge
																variant="outline"
																class="h-fit gap-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:bg-emerald-900">
																<span class="truncate text-emerald-600 select-none">{{ person.match }}% Match</span>
															</span>
														</div>
														<hlm-avatar size="lg" class="border-sidebar border-2">
															<img hlmAvatarImage [src]="person.avatar" [alt]="person.name" />
															<span hlmAvatarFallback>{{ person.initials }}</span>
														</hlm-avatar>
													</div>
													<dl class="flex flex-col gap-1 text-sm">
														<div class="flex justify-between gap-3">
															<dt class="text-muted-foreground/60">Role</dt>
															<dd class="text-muted-foreground truncate text-right">{{ person.role }}</dd>
														</div>
														<div class="flex justify-between gap-3">
															<dt class="text-muted-foreground/60">Location</dt>
															<dd class="text-muted-foreground truncate text-right">{{ person.location }}</dd>
														</div>
													</dl>
												</article>
											}
										</div>
									</ng-scrollbar>
								</section>
							}
						</div>
					</div>
				</div>
			</main>
		</div>
	`,
})
export class Sidebar10Component {
	public readonly showFullscreenButton = input(true);
	protected readonly theme = signal<'light' | 'dark'>('light');
	protected readonly activeItem = signal<(typeof SIDEBAR_ITEMS)[number]['id']>('job-post');
	protected readonly sidebarItems = SIDEBAR_ITEMS;
	protected readonly applicantColumns = APPLICANT_COLUMNS;
	protected readonly teammates = TEAMMATES;
}
