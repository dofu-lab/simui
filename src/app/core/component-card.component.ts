import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT, NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input, signal, Type, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCode, lucideLink } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheet, HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';
import { AnalyticsService } from '../services/analytics.service';
import { CodePreviewComponent } from './code-preview.component';
import { CodeLoaderService } from './services/code-loader.service';

@Component({
	selector: 'component-card',
	providers: [provideIcons({ lucideCode, lucideLink, lucideCheck })],
	imports: [NgComponentOutlet, HlmButton, NgIcon, HlmIcon, CodePreviewComponent, HlmSheetImports, HlmTooltipImports],
	template: `
		<ng-container *ngComponentOutlet="component()"></ng-container>
		<hlm-sheet #sheet side="right">
			<div
				class="absolute -top-2 -right-2 flex items-center gap-0 p-4 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
				<button
					hlmBtn
					size="icon"
					variant="link"
					class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
					[hlmTooltip]="shareTooltip"
					(click)="shareComponent()">
					<ng-icon hlm [name]="linkCopied() ? 'lucideCheck' : 'lucideLink'" size="sm" />
				</button>
				<ng-template #shareTooltip><span class="flex items-center">Copy link</span></ng-template>
				<button
					hlmBtn
					size="icon"
					variant="link"
					class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
					[hlmTooltip]="viewCodeTooltip"
					(click)="trackCodeClick()">
					<ng-icon hlm name="lucideCode" size="sm" />
				</button>
				<ng-template #viewCodeTooltip><span class="flex items-center">View code</span></ng-template>
			</div>
			<hlm-sheet-content *hlmSheetPortal="let ctx" class="w-[calc(100%-(--spacing(12)))] max-w-sm sm:max-w-3xl">
				<hlm-sheet-header>
					<h3 hlmSheetTitle>Code</h3>
				</hlm-sheet-header>
				<div class="mb-4 flex min-h-0 flex-col px-4 pb-4">
					<!-- Installation -->
					<div class="mb-4">
						<h4 class="mb-2 text-lg font-semibold">Installation</h4>
						<div class="mt-3">
							<code-preview language="sh" [code]="installCommand()" [fileName]="componentName() + '-install'" />
						</div>
						<ng-template #installTooltip><span class="flex items-center">Copy install command</span></ng-template>
					</div>

					<!-- Code -->
					<div class="mb-4 min-h-0 flex-1">
						<h4 class="mb-2 text-lg font-semibold">Code</h4>
						@if (codeLoading()) {
							<div class="text-muted-foreground flex h-full items-center justify-center text-sm">Loading...</div>
						} @else {
							<code-preview [code]="displayCode()" [fileName]="componentName()" />
						}
					</div>
					<ng-template #codeTooltip><span class="flex items-center">Copy code to clipboard</span></ng-template>
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
	host: {
		'[class]': '_computedClass()',
		'[id]': 'componentName()',
	},
})
export class ComponentCardComponent {
	private readonly codeLoaderService = inject(CodeLoaderService);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly clipboard = inject(Clipboard);
	private readonly document = inject(DOCUMENT);
	private readonly sheetRef = viewChild<HlmSheet>('sheet');

	public readonly component = input.required<Type<any> | null>();
	public readonly componentName = input.required<string>();
	public readonly highlighted = input<boolean>(false);
	public readonly code = input<string | undefined>('');
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly colNumber = input<number>(3);
	public readonly itemStyle = input<number>();
	// CLI scope/package to display for copying. Configurable via input binding.
	public readonly cliScope = input<string>('@dofu-lab/simui-cli');

	protected readonly displayCode = signal<string>('');
	protected readonly codeLoading = signal<boolean>(false);
	protected readonly linkCopied = signal<boolean>(false);
	protected readonly cliCopied = signal<boolean>(false);
	protected readonly installCopied = signal<boolean>(false);
	protected readonly selectedManager = signal<string>('pnpm');
	protected readonly codeCopied = signal<boolean>(false);
	protected readonly installCommand = computed(() => `npx ${this.cliScope()} add ${this.componentName()}`);
	protected readonly cliCommand = computed(() => `npx ${this.cliScope()} add ${this.componentName()}`);

	protected styleClasses = computed(() => {
		return this.itemStyle() === 1
			? 'flex justify-center items-center'
			: this.itemStyle() === 2
				? 'text-center'
				: this.itemStyle() === 3
					? 'flex flex-col items-center'
					: this.itemStyle() === 4
						? 'flex justify-start items-center'
						: '';
	});

	protected readonly colSpanClasses = computed(() => {
		const includeStart = false;
		const baseClasses =
			this.colNumber() === 2
				? 'col-span-12 sm:col-span-6 lg:col-span-6'
				: this.colNumber() === 3
					? 'col-span-12 sm:col-span-12 lg:col-span-12'
					: 'col-span-12 sm:col-span-6 lg:col-span-4';

		const startClasses =
			includeStart && this.colNumber() !== 3
				? this.colNumber() === 2
					? 'sm:col-start-4 lg:col-start-4'
					: 'sm:col-start-4 lg:col-start-5'
				: '';

		return `${baseClasses} ${startClasses}`;
	});

	protected readonly _computedClass = computed(() =>
		hlm(
			'group/item flex border has-[[data-comp-loading=true]]:border-none relative group transition-[box-shadow] duration-500',
			this.highlighted() ? 'ring-2 ring-inset ring-primary/50' : '',
			this.colSpanClasses(),
			this.styleClasses(),
			this.userClass(),
		),
	);

	protected shareComponent(): void {
		const loc = this.document.location;
		const url = `${loc.origin}${loc.pathname}#${this.componentName()}`;
		this.clipboard.copy(url);
		this.linkCopied.set(true);
		setTimeout(() => this.linkCopied.set(false), 3000);
		this.analyticsService.trackEvent('component_shared', { component: this.componentName() });
	}

	protected copyCliCommand(): void {
		const cmd = this.cliCommand();
		this.clipboard.copy(cmd);
		this.cliCopied.set(true);
		setTimeout(() => this.cliCopied.set(false), 3000);
		this.analyticsService.trackEvent('cli_copied', { component: this.componentName(), command: cmd });
	}

	protected copyInstallCommand(): void {
		const cmd = this.installCommand();
		this.clipboard.copy(cmd);
		this.installCopied.set(true);
		setTimeout(() => this.installCopied.set(false), 3000);
		this.analyticsService.trackEvent('install_cmd_copied', {
			component: this.componentName(),
			manager: this.selectedManager(),
			command: cmd,
		});
	}

	protected copyCode(): void {
		const txt = this.displayCode();
		if (!txt) return;
		this.clipboard.copy(txt);
		this.codeCopied.set(true);
		setTimeout(() => this.codeCopied.set(false), 3000);
		this.analyticsService.trackEvent('code_copied', { component: this.componentName() });
	}

	protected trackCodeClick(): void {
		this.sheetRef()?.open();
		this.analyticsService.trackEvent('code_view', { component: this.componentName() });
		if (!this.displayCode()) {
			this.codeLoading.set(true);
			this.codeLoaderService.loadComponentCode(this.componentName()).subscribe({
				next: (code) => {
					this.displayCode.set(code);
					this.codeLoading.set(false);
				},
				error: () => this.codeLoading.set(false),
			});
		}
	}
}
