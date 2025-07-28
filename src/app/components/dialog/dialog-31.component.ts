import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-31',
	imports: [
		HlmInputDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmLabelDirective,
	],
	providers: [provideIcons({ lucideCircleCheck })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Create project</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-100! max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-100"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-1">
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1_7585_9247" fill="white">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8 3C3.58172 3 0 6.58172 0 11V19.8V19.954V32.2C0 36.6804 0 38.9206 0.871948 40.6319C1.63893 42.1372 2.86278 43.3611 4.36808 44.1281C6.07937 45 8.31958 45 12.8 45H35.2C39.6804 45 41.9206 45 43.6319 44.1281C45.1372 43.3611 46.3611 42.1372 47.1281 40.6319C48 38.9206 48 36.6804 48 32.2V19.8C48 15.3196 48 13.0794 47.1281 11.3681C46.3611 9.86278 45.1372 8.63893 43.6319 7.87195C41.9206 7 39.6804 7 35.2 7H26.5719C22.7981 7 19.2047 3 15.431 3H8Z" />
							</mask>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 3C3.58172 3 0 6.58172 0 11V19.8V19.954V32.2C0 36.6804 0 38.9206 0.871948 40.6319C1.63893 42.1372 2.86278 43.3611 4.36808 44.1281C6.07937 45 8.31958 45 12.8 45H35.2C39.6804 45 41.9206 45 43.6319 44.1281C45.1372 43.3611 46.3611 42.1372 47.1281 40.6319C48 38.9206 48 36.6804 48 32.2V19.8C48 15.3196 48 13.0794 47.1281 11.3681C46.3611 9.86278 45.1372 8.63893 43.6319 7.87195C41.9206 7 39.6804 7 35.2 7H26.5719C22.7981 7 19.2047 3 15.431 3H8Z"
								fill="#414651" />
							<path
								d="M0.871948 40.6319L1.76295 40.1779H1.76295L0.871948 40.6319ZM4.36808 44.1281L4.82207 43.237L4.36808 44.1281ZM43.6319 44.1281L43.1779 43.237L43.6319 44.1281ZM47.1281 40.6319L46.237 40.1779L47.1281 40.6319ZM47.1281 11.3681L46.237 11.8221V11.8221L47.1281 11.3681ZM43.6319 7.87195L43.1779 8.76295V8.76295L43.6319 7.87195ZM1 11C1 7.13401 4.13401 4 8 4V2C3.02944 2 -1 6.02944 -1 11H1ZM1 19.8V11H-1V19.8H1ZM1 19.954V19.8H-1V19.954H1ZM1 32.2V19.954H-1V32.2H1ZM1.76295 40.1779C1.41078 39.4868 1.20961 38.6451 1.10567 37.373C1.00078 36.0891 1 34.4567 1 32.2H-1C-1 34.4237 -1.00078 36.1516 -0.887685 37.5358C-0.773639 38.9317 -0.538833 40.0658 -0.0190584 41.0859L1.76295 40.1779ZM4.82207 43.237C3.50493 42.5659 2.43407 41.4951 1.76295 40.1779L-0.0190589 41.0859C0.843802 42.7794 2.22063 44.1562 3.91409 45.0191L4.82207 43.237ZM12.8 44C10.5433 44 8.9109 43.9992 7.62705 43.8943C6.35487 43.7904 5.51325 43.5892 4.82207 43.237L3.91409 45.0191C4.9342 45.5388 6.06833 45.7736 7.46418 45.8877C8.84837 46.0008 10.5763 46 12.8 46V44ZM35.2 44H12.8V46H35.2V44ZM43.1779 43.237C42.4868 43.5892 41.6451 43.7904 40.373 43.8943C39.0891 43.9992 37.4567 44 35.2 44V46C37.4237 46 39.1516 46.0008 40.5358 45.8877C41.9317 45.7736 43.0658 45.5388 44.0859 45.0191L43.1779 43.237ZM46.237 40.1779C45.5659 41.4951 44.4951 42.5659 43.1779 43.237L44.0859 45.0191C45.7794 44.1562 47.1562 42.7794 48.0191 41.0859L46.237 40.1779ZM47 32.2C47 34.4567 46.9992 36.0891 46.8943 37.373C46.7904 38.6451 46.5892 39.4868 46.237 40.1779L48.0191 41.0859C48.5388 40.0658 48.7736 38.9317 48.8877 37.5358C49.0008 36.1516 49 34.4237 49 32.2H47ZM47 19.8V32.2H49V19.8H47ZM46.237 11.8221C46.5892 12.5132 46.7904 13.3549 46.8943 14.627C46.9992 15.9109 47 17.5433 47 19.8H49C49 17.5763 49.0008 15.8484 48.8877 14.4642C48.7736 13.0683 48.5388 11.9342 48.0191 10.9141L46.237 11.8221ZM43.1779 8.76295C44.4951 9.43407 45.5659 10.5049 46.237 11.8221L48.0191 10.9141C47.1562 9.22063 45.7794 7.8438 44.0859 6.98094L43.1779 8.76295ZM35.2 8C37.4567 8 39.0891 8.00078 40.373 8.10567C41.6451 8.20961 42.4868 8.41078 43.1779 8.76295L44.0859 6.98094C43.0658 6.46117 41.9317 6.22636 40.5358 6.11231C39.1516 5.99922 37.4237 6 35.2 6V8ZM26.5719 8H35.2V6H26.5719V8ZM8 4H15.431V2H8V4ZM26.5719 6C24.9881 6 23.3815 5.15439 21.4786 4.12118C19.698 3.15439 17.6209 2 15.431 2V4C17.0148 4 18.6213 4.84561 20.5243 5.87882C22.3049 6.84561 24.3819 8 26.5719 8V6Z"
								fill="url(#paint0_linear_7585_9247)"
								mask="url(#path-1-inside-1_7585_9247)" />
							<path
								d="M3 14C3 11.7909 4.79086 10 7 10H41C43.2091 10 45 11.7909 45 14V38C45 40.2091 43.2091 42 41 42H7C4.79086 42 3 40.2091 3 38V14Z"
								class="fill-background" />
							<rect
								x="0.5"
								y="13.5"
								width="47"
								height="31"
								rx="7.5"
								fill="#535862"
								stroke="url(#paint1_linear_7585_9247)" />
							<rect opacity="0.2" y="13" width="48" height="32" rx="8" fill="url(#paint2_linear_7585_9247)" />
							<defs>
								<linearGradient
									id="paint0_linear_7585_9247"
									x1="24"
									y1="3"
									x2="24"
									y2="45"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" stop-opacity="0.12" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_7585_9247"
									x1="24"
									y1="13"
									x2="24"
									y2="45"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" stop-opacity="0.12" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
								<linearGradient
									id="paint2_linear_7585_9247"
									x1="0"
									y1="13"
									x2="33.0094"
									y2="43.9225"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
						<span class="mt-3 text-lg font-semibold">Project created</span>
						<span class="text-muted-foreground text-sm">Please enter a name for this project.</span>
					</div>
					<div class="flex flex-col gap-3">
						<label hlmLabel class="flex flex-col gap-2">
							Project name
							<input
								hlmInput
								size="sm"
								formControlName="fullName"
								class="w-full text-sm"
								type="text"
								placeholder="e.g. Demo AI project" />
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog31Component {}

export const dialog31Code = `import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-31',
	imports: [
		HlmInputDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmLabelDirective,
	],
	providers: [provideIcons({ lucideCircleCheck })],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Create project</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-100! max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-100"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-1">
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1_7585_9247" fill="white">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8 3C3.58172 3 0 6.58172 0 11V19.8V19.954V32.2C0 36.6804 0 38.9206 0.871948 40.6319C1.63893 42.1372 2.86278 43.3611 4.36808 44.1281C6.07937 45 8.31958 45 12.8 45H35.2C39.6804 45 41.9206 45 43.6319 44.1281C45.1372 43.3611 46.3611 42.1372 47.1281 40.6319C48 38.9206 48 36.6804 48 32.2V19.8C48 15.3196 48 13.0794 47.1281 11.3681C46.3611 9.86278 45.1372 8.63893 43.6319 7.87195C41.9206 7 39.6804 7 35.2 7H26.5719C22.7981 7 19.2047 3 15.431 3H8Z" />
							</mask>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 3C3.58172 3 0 6.58172 0 11V19.8V19.954V32.2C0 36.6804 0 38.9206 0.871948 40.6319C1.63893 42.1372 2.86278 43.3611 4.36808 44.1281C6.07937 45 8.31958 45 12.8 45H35.2C39.6804 45 41.9206 45 43.6319 44.1281C45.1372 43.3611 46.3611 42.1372 47.1281 40.6319C48 38.9206 48 36.6804 48 32.2V19.8C48 15.3196 48 13.0794 47.1281 11.3681C46.3611 9.86278 45.1372 8.63893 43.6319 7.87195C41.9206 7 39.6804 7 35.2 7H26.5719C22.7981 7 19.2047 3 15.431 3H8Z"
								fill="#414651" />
							<path
								d="M0.871948 40.6319L1.76295 40.1779H1.76295L0.871948 40.6319ZM4.36808 44.1281L4.82207 43.237L4.36808 44.1281ZM43.6319 44.1281L43.1779 43.237L43.6319 44.1281ZM47.1281 40.6319L46.237 40.1779L47.1281 40.6319ZM47.1281 11.3681L46.237 11.8221V11.8221L47.1281 11.3681ZM43.6319 7.87195L43.1779 8.76295V8.76295L43.6319 7.87195ZM1 11C1 7.13401 4.13401 4 8 4V2C3.02944 2 -1 6.02944 -1 11H1ZM1 19.8V11H-1V19.8H1ZM1 19.954V19.8H-1V19.954H1ZM1 32.2V19.954H-1V32.2H1ZM1.76295 40.1779C1.41078 39.4868 1.20961 38.6451 1.10567 37.373C1.00078 36.0891 1 34.4567 1 32.2H-1C-1 34.4237 -1.00078 36.1516 -0.887685 37.5358C-0.773639 38.9317 -0.538833 40.0658 -0.0190584 41.0859L1.76295 40.1779ZM4.82207 43.237C3.50493 42.5659 2.43407 41.4951 1.76295 40.1779L-0.0190589 41.0859C0.843802 42.7794 2.22063 44.1562 3.91409 45.0191L4.82207 43.237ZM12.8 44C10.5433 44 8.9109 43.9992 7.62705 43.8943C6.35487 43.7904 5.51325 43.5892 4.82207 43.237L3.91409 45.0191C4.9342 45.5388 6.06833 45.7736 7.46418 45.8877C8.84837 46.0008 10.5763 46 12.8 46V44ZM35.2 44H12.8V46H35.2V44ZM43.1779 43.237C42.4868 43.5892 41.6451 43.7904 40.373 43.8943C39.0891 43.9992 37.4567 44 35.2 44V46C37.4237 46 39.1516 46.0008 40.5358 45.8877C41.9317 45.7736 43.0658 45.5388 44.0859 45.0191L43.1779 43.237ZM46.237 40.1779C45.5659 41.4951 44.4951 42.5659 43.1779 43.237L44.0859 45.0191C45.7794 44.1562 47.1562 42.7794 48.0191 41.0859L46.237 40.1779ZM47 32.2C47 34.4567 46.9992 36.0891 46.8943 37.373C46.7904 38.6451 46.5892 39.4868 46.237 40.1779L48.0191 41.0859C48.5388 40.0658 48.7736 38.9317 48.8877 37.5358C49.0008 36.1516 49 34.4237 49 32.2H47ZM47 19.8V32.2H49V19.8H47ZM46.237 11.8221C46.5892 12.5132 46.7904 13.3549 46.8943 14.627C46.9992 15.9109 47 17.5433 47 19.8H49C49 17.5763 49.0008 15.8484 48.8877 14.4642C48.7736 13.0683 48.5388 11.9342 48.0191 10.9141L46.237 11.8221ZM43.1779 8.76295C44.4951 9.43407 45.5659 10.5049 46.237 11.8221L48.0191 10.9141C47.1562 9.22063 45.7794 7.8438 44.0859 6.98094L43.1779 8.76295ZM35.2 8C37.4567 8 39.0891 8.00078 40.373 8.10567C41.6451 8.20961 42.4868 8.41078 43.1779 8.76295L44.0859 6.98094C43.0658 6.46117 41.9317 6.22636 40.5358 6.11231C39.1516 5.99922 37.4237 6 35.2 6V8ZM26.5719 8H35.2V6H26.5719V8ZM8 4H15.431V2H8V4ZM26.5719 6C24.9881 6 23.3815 5.15439 21.4786 4.12118C19.698 3.15439 17.6209 2 15.431 2V4C17.0148 4 18.6213 4.84561 20.5243 5.87882C22.3049 6.84561 24.3819 8 26.5719 8V6Z"
								fill="url(#paint0_linear_7585_9247)"
								mask="url(#path-1-inside-1_7585_9247)" />
							<path
								d="M3 14C3 11.7909 4.79086 10 7 10H41C43.2091 10 45 11.7909 45 14V38C45 40.2091 43.2091 42 41 42H7C4.79086 42 3 40.2091 3 38V14Z"
								class="fill-background" />
							<rect
								x="0.5"
								y="13.5"
								width="47"
								height="31"
								rx="7.5"
								fill="#535862"
								stroke="url(#paint1_linear_7585_9247)" />
							<rect opacity="0.2" y="13" width="48" height="32" rx="8" fill="url(#paint2_linear_7585_9247)" />
							<defs>
								<linearGradient
									id="paint0_linear_7585_9247"
									x1="24"
									y1="3"
									x2="24"
									y2="45"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" stop-opacity="0.12" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_7585_9247"
									x1="24"
									y1="13"
									x2="24"
									y2="45"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" stop-opacity="0.12" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
								<linearGradient
									id="paint2_linear_7585_9247"
									x1="0"
									y1="13"
									x2="33.0094"
									y2="43.9225"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="white" />
									<stop offset="1" stop-color="white" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
						<span class="mt-3 text-lg font-semibold">Project created</span>
						<span class="text-muted-foreground text-sm">Please enter a name for this project.</span>
					</div>
					<div class="flex flex-col gap-3">
						<label hlmLabel class="flex flex-col gap-2">
							Project name
							<input
								hlmInput
								size="sm"
								formControlName="fullName"
								class="w-full text-sm"
								type="text"
								placeholder="e.g. Demo AI project" />
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog31Component {}`;
