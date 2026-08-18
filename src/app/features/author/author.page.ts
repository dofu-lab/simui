import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AnalyticsService, AuthorSocialPlatform } from '@core/services/analytics.service';
import { FooterComponent } from '@core/shell';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { remixTwitterXFill } from '@ng-icons/remixicon';

@Component({
	selector: 'sim-author',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FooterComponent, NgIcon],
	providers: [provideIcons({ lucideGithub, lucideLinkedin, lucideMail, remixTwitterXFill })],
	host: {
		class: 'flex flex-1',
	},
	styles: `
		.author-page-reveal {
			animation: author-page-reveal 240ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
		}

		.author-profile-link {
			transition:
				transform 120ms ease,
				opacity 120ms ease;
		}

		@keyframes author-page-reveal {
			from {
				opacity: 0;
				transform: translateY(6px);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@media (hover: hover) and (pointer: fine) {
			.author-profile-link:hover {
				opacity: 0.78;
				transform: translateY(-1px);
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.author-page-reveal {
				animation: none;
			}

			.author-profile-link {
				transition: none;
			}
		}
	`,
	template: `
		<div class="flex min-w-0 flex-1 flex-col">
			<main
				class="author-page-reveal mx-auto w-full max-w-5xl flex-1 px-4 pt-20 pb-8 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
				<div class="grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-y-12">
					<header class="border-border border-b pb-10 lg:col-span-2 lg:pb-12">
						<p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">The person behind SimUI</p>
						<h1 class="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
							Hi, I’m Phuong Tran.
						</h1>
						<p class="text-muted-foreground mt-5 max-w-2xl text-lg leading-8 sm:text-xl">
							I build thoughtful products across frontend, backend, mobile and add practical AI capabilities where they
							create real value.
						</p>
					</header>

					<section aria-labelledby="leadership-heading" class="lg:col-span-2 lg:row-start-2">
						<h2 id="leadership-heading" class="text-2xl font-semibold tracking-tight">
							Engineering with product ownership
						</h2>
						<div
							class="text-muted-foreground mt-5 flex max-w-2xl flex-col gap-4 text-base leading-7 sm:text-lg sm:leading-8">
							<p>
								Alongside hands-on engineering, I currently work as a Scrum Master and Squad Lead. That perspective
								helps me connect technical decisions with delivery, shared context, and the conversations that keep a
								team moving well.
							</p>
							<p>
								I take ownership beyond implementation: clarifying the problem, shaping tradeoffs, and staying close to
								outcomes from discovery through delivery. I care about clear collaboration and enough structure for good
								work to happen without unnecessary ceremony.
							</p>
						</div>
					</section>

					<section aria-labelledby="capabilities-heading" class="lg:col-span-2 lg:row-start-3">
						<h2 id="capabilities-heading" class="text-sm font-semibold tracking-wide uppercase">What I work across</h2>
						<ul class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
							<li class="border-border bg-card rounded-xl border px-4 py-3">
								<span class="font-medium">Frontend</span>
								<span class="text-muted-foreground mt-1 block text-sm leading-6">
									Angular and React interfaces that are accessible, maintainable, and grounded in product needs.
								</span>
							</li>
							<li class="border-border bg-card rounded-xl border px-4 py-3">
								<span class="font-medium">Mobile</span>
								<span class="text-muted-foreground mt-1 block text-sm leading-6">
									Cross-platform React Native products with a consistent experience from idea to release.
								</span>
							</li>
							<li class="border-border bg-card rounded-xl border px-4 py-3">
								<span class="font-medium">Backend</span>
								<span class="text-muted-foreground mt-1 block text-sm leading-6">
									APIs, services, data flows, and integrations that support the complete product experience.
								</span>
							</li>
							<li class="border-border bg-card rounded-xl border px-4 py-3">
								<span class="font-medium">AI integration & agents</span>
								<span class="text-muted-foreground mt-1 block text-sm leading-6">
									Practical model integrations and agent workflows built on top of solid software engineering.
								</span>
							</li>
						</ul>
					</section>

					<section aria-labelledby="collaboration-heading" class="lg:col-start-2 lg:row-start-4">
						<div class="bg-muted/50 rounded-2xl p-6 sm:p-8">
							<h2 id="collaboration-heading" class="text-2xl font-semibold tracking-tight">
								Let’s make something useful
							</h2>
							<p class="text-muted-foreground mt-4 max-w-xl leading-7 sm:text-lg sm:leading-8">
								I’m open to thoughtful collaboration and suitable new opportunities. If you’re building a product that
								needs frontend craft, backend thinking, practical AI integration, or steady team leadership, I’d be glad
								to hear about it.
							</p>
						</div>
					</section>

					<nav
						aria-label="Phuong Tran profiles and contact"
						class="border-border border-t pt-8 lg:col-start-1 lg:row-start-4 lg:border-t-0 lg:pt-0">
						<h2 class="text-sm font-semibold tracking-wide uppercase">Find me online</h2>
						<ul class="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
							<li>
								<a
									class="author-profile-link border-border bg-background hover:bg-muted/50 focus-visible:ring-ring focus-visible:ring-offset-background flex min-h-11 items-center gap-3 rounded-lg border px-3 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
									href="https://github.com/dongphuong0905"
									target="_blank"
									rel="noopener noreferrer"
									(click)="trackSocialLink('github', 'https://github.com/dongphuong0905')">
									<ng-icon name="lucideGithub" class="text-[length:--spacing(5)]" aria-hidden="true" />
									GitHub
								</a>
							</li>
							<li>
								<a
									class="author-profile-link border-border bg-background hover:bg-muted/50 focus-visible:ring-ring focus-visible:ring-offset-background flex min-h-11 items-center gap-3 rounded-lg border px-3 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
									href="https://www.linkedin.com/in/dongphuongtran/"
									target="_blank"
									rel="noopener noreferrer"
									(click)="trackSocialLink('linkedin', 'https://www.linkedin.com/in/dongphuongtran/')">
									<ng-icon name="lucideLinkedin" class="text-[length:--spacing(5)]" aria-hidden="true" />
									LinkedIn
								</a>
							</li>
							<li>
								<a
									class="author-profile-link border-border bg-background hover:bg-muted/50 focus-visible:ring-ring focus-visible:ring-offset-background flex min-h-11 items-center gap-3 rounded-lg border px-3 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
									href="https://x.com/PhuongTranDong"
									target="_blank"
									rel="noopener noreferrer"
									(click)="trackSocialLink('x', 'https://x.com/PhuongTranDong')">
									<ng-icon name="remixTwitterXFill" class="text-[length:--spacing(5)]" aria-hidden="true" />
									X
								</a>
							</li>
							<li>
								<div class="border-border bg-background flex min-h-11 items-center gap-3 rounded-lg border px-3 text-sm font-medium">
									<ng-icon name="lucideMail" class="text-[length:--spacing(5)]" aria-hidden="true" />
									<span class="min-w-0 break-all">trandongphuongtdp@gmail.com</span>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</main>
			<app-footer />
		</div>
	`,
})
export class AuthorPage implements OnInit {
	private readonly analyticsService = inject(AnalyticsService);

	public ngOnInit(): void {
		this.analyticsService.trackAuthorProfileViewed();
	}

	protected trackSocialLink(platform: AuthorSocialPlatform, destination: string): void {
		this.analyticsService.trackAuthorSocialLinkClicked(platform, destination);
	}
}
