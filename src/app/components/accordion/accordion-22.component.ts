import { HlmCheckboxComponent } from '@/libs/ui/ui-checkbox-helm/src';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideChevronDown, lucideMinus } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-21',
	imports: [
		NgIcon,
		NgClass,
		FormsModule,
		ReactiveFormsModule,
		HlmCheckboxComponent,
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
	],
	host: { ngSkipHydration: 'true' },
	viewProviders: [provideIcons({ lucideChevronDown, lucideCheck, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Connected W/ checkbox and state</h2>
			<div hlmAccordion [formGroup]="form">
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="border-b-0">
						<button
							hlmAccordionTrigger
							class="focus-visible:border-ring focus-visible:ring-ring/50 rounded-md px-0 py-0 hover:no-underline">
							<span class="flex items-center gap-3">
								<span
									class="relative flex size-10 shrink-0 items-center justify-center rounded-full"
									aria-hidden="true"
									[ngClass]="{
										'bg-sky-500/5 text-sky-600': isGroupFullyChecked(item.id),
										'bg-red-500/5 text-red-600': !isGroupFullyChecked(item.id),
									}">
									<ng-icon
										hlm
										hlmAccIcon
										name="lucideCheck"
										class="transition-all duration-200"
										[ngClass]="{
											'scale-100 opacity-60': isGroupFullyChecked(item.id),
											'scale-0 opacity-0': !isGroupFullyChecked(item.id),
										}" />
									<ng-icon
										hlm
										hlmAccIcon
										name="lucideMinus"
										class="absolute transition-all duration-200"
										[ngClass]="{
											'scale-0 opacity-0': isGroupFullyChecked(item.id),
											'scale-100 opacity-60': !isGroupFullyChecked(item.id),
										}" />
								</span>
								<span class="text-[15px] leading-6 font-semibold">
									{{ item.title }}
								</span>
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content
							class="text-muted-foreground ml-5 border-l ps-8 [&>div>p]:pb-0"
							[ngClass]="{ 'border-sky-600/20': isGroupFullyChecked(item.id) }">
							<div [formGroupName]="item.id">
								<div class="space-y-4">
									<p class="mb-4">{{ item.content }}</p>
									<div class="grid gap-2">
										@for (option of item.options; track option.id) {
											<div class="flex items-center space-x-2">
												<label hlmLabel for="{{ option.id }}" class="text-primary flex items-center">
													<hlm-checkbox class="mr-2" id="{{ option.id }}" [formControlName]="option.id" />
													{{ option.label }}
												</label>
											</div>
										}
									</div>
								</div>
							</div>
						</hlm-accordion-content>
					</div>
					<div
						class="ml-5 h-4 border-l ps-8 last:hidden"
						[ngClass]="{ 'border-sky-600/20': isGroupFullyChecked(item.id) }"></div>
				}
			</div>
		</div>
	`,
})
export class Accordion22Component {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({});
		this.initFormGroups();
	}

	initFormGroups() {
		this.items.forEach((item) => {
			const group = this.fb.group({});
			item.options.forEach((option) => {
				group.addControl(option.id, this.fb.control(false));
			});
			this.form.addControl(item.id, group);
		});
	}

	isGroupFullyChecked(groupId: string): boolean {
		const group = this.form.get(groupId) as FormGroup;
		if (!group) return false;

		return Object.keys(group.controls).every((key) => group.get(key)?.value === true);
	}

	items = [
		{
			id: 'project-setup',
			title: 'Project Setup',
			subTitle: 'Essential configuration for your new project',
			content: 'Complete these setup steps to ensure your project is properly configured and ready for development.',
			options: [
				{ id: 'install-deps', label: 'Install dependencies' },
				{ id: 'config-env', label: 'Configure environment variables' },
				{ id: 'setup-db', label: 'Set up database connection' },
			],
		},
		{
			id: 'code-quality',
			title: 'Code Quality Checks',
			subTitle: 'Ensure your code meets quality standards',
			content: "Complete these tasks to ensure your code meets the project's quality standards before submission.",
			options: [
				{ id: 'run-linter', label: 'Run code linter' },
				{ id: 'run-tests', label: 'Execute unit tests' },
				{ id: 'type-check', label: 'Verify type safety' },
			],
		},
		{
			id: 'deployment',
			title: 'Deployment Checklist',
			subTitle: 'Pre-deployment verification steps',
			content: 'Complete these steps before deploying your application to production.',
			options: [
				{ id: 'build-prod', label: 'Build production bundle' },
				{ id: 'test-prod', label: 'Test in staging environment' },
				{ id: 'backup-data', label: 'Back up existing data' },
			],
		},
		{
			id: 'documentation',
			title: 'Documentation Requirements',
			subTitle: 'Essential documentation for your project',
			content: 'Ensure your project has complete documentation for users and future developers.',
			options: [
				{ id: 'update-readme', label: 'Update README.md' },
				{ id: 'api-docs', label: 'Document API endpoints' },
				{ id: 'component-docs', label: 'Document component usage' },
			],
		},
	];
}

export const accordion22Code = `import { HlmCheckboxComponent } from '@/libs/ui/ui-checkbox-helm/src';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideChevronDown, lucideMinus } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-21',
	imports: [
		NgIcon,
		NgClass,
		FormsModule,
		ReactiveFormsModule,
		HlmCheckboxComponent,
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
	],
	host: { ngSkipHydration: 'true' },
	viewProviders: [provideIcons({ lucideChevronDown, lucideCheck, lucideMinus })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Connected W/ checkbox and state</h2>
			<div hlmAccordion [formGroup]="form">
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="border-b-0">
						<button
							hlmAccordionTrigger
							class="focus-visible:border-ring focus-visible:ring-ring/50 rounded-md px-0 py-0 hover:no-underline">
							<span class="flex items-center gap-3">
								<span
									class="relative flex size-10 shrink-0 items-center justify-center rounded-full"
									aria-hidden="true"
									[ngClass]="{
										'bg-sky-500/5 text-sky-600': isGroupFullyChecked(item.id),
										'bg-red-500/5 text-red-600': !isGroupFullyChecked(item.id),
									}">
									<ng-icon
										hlm
										hlmAccIcon
										name="lucideCheck"
										class="transition-all duration-200"
										[ngClass]="{
											'scale-100 opacity-60': isGroupFullyChecked(item.id),
											'scale-0 opacity-0': !isGroupFullyChecked(item.id),
										}" />
									<ng-icon
										hlm
										hlmAccIcon
										name="lucideMinus"
										class="absolute transition-all duration-200"
										[ngClass]="{
											'scale-0 opacity-0': isGroupFullyChecked(item.id),
											'scale-100 opacity-60': !isGroupFullyChecked(item.id),
										}" />
								</span>
								<span class="text-[15px] leading-6 font-semibold">
									{{ item.title }}
								</span>
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content
							class="text-muted-foreground ml-5 border-l ps-8 [&>div>p]:pb-0"
							[ngClass]="{ 'border-sky-600/20': isGroupFullyChecked(item.id) }">
							<div [formGroupName]="item.id">
								<div class="space-y-4">
									<p class="mb-4">{{ item.content }}</p>
									<div class="grid gap-2">
										@for (option of item.options; track option.id) {
											<div class="flex items-center space-x-2">
												<label hlmLabel for="{{ option.id }}" class="text-primary flex items-center">
													<hlm-checkbox class="mr-2" id="{{ option.id }}" [formControlName]="option.id" />
													{{ option.label }}
												</label>
											</div>
										}
									</div>
								</div>
							</div>
						</hlm-accordion-content>
					</div>
					<div
						class="ml-5 h-4 border-l ps-8 last:hidden"
						[ngClass]="{ 'border-sky-600/20': isGroupFullyChecked(item.id) }"></div>
				}
			</div>
		</div>
	\`,
})
export class Accordion22Component {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({});
		this.initFormGroups();
	}

	initFormGroups() {
		this.items.forEach((item) => {
			const group = this.fb.group({});
			item.options.forEach((option) => {
				group.addControl(option.id, this.fb.control(false));
			});
			this.form.addControl(item.id, group);
		});
	}

	isGroupFullyChecked(groupId: string): boolean {
		const group = this.form.get(groupId) as FormGroup;
		if (!group) return false;

		return Object.keys(group.controls).every((key) => group.get(key)?.value === true);
	}

	items = [
		{
			id: 'project-setup',
			title: 'Project Setup',
			subTitle: 'Essential configuration for your new project',
			content: 'Complete these setup steps to ensure your project is properly configured and ready for development.',
			options: [
				{ id: 'install-deps', label: 'Install dependencies' },
				{ id: 'config-env', label: 'Configure environment variables' },
				{ id: 'setup-db', label: 'Set up database connection' },
			],
		},
		{
			id: 'code-quality',
			title: 'Code Quality Checks',
			subTitle: 'Ensure your code meets quality standards',
			content: "Complete these tasks to ensure your code meets the project's quality standards before submission.",
			options: [
				{ id: 'run-linter', label: 'Run code linter' },
				{ id: 'run-tests', label: 'Execute unit tests' },
				{ id: 'type-check', label: 'Verify type safety' },
			],
		},
		{
			id: 'deployment',
			title: 'Deployment Checklist',
			subTitle: 'Pre-deployment verification steps',
			content: 'Complete these steps before deploying your application to production.',
			options: [
				{ id: 'build-prod', label: 'Build production bundle' },
				{ id: 'test-prod', label: 'Test in staging environment' },
				{ id: 'backup-data', label: 'Back up existing data' },
			],
		},
		{
			id: 'documentation',
			title: 'Documentation Requirements',
			subTitle: 'Essential documentation for your project',
			content: 'Ensure your project has complete documentation for users and future developers.',
			options: [
				{ id: 'update-readme', label: 'Update README.md' },
				{ id: 'api-docs', label: 'Document API endpoints' },
				{ id: 'component-docs', label: 'Document component usage' },
			],
		},
	];
}`;
