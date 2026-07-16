import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { ColorEditService, ThemeStorageService } from '@core/services';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy, lucideSquarePen } from '@ng-icons/lucide';
import { ColorPipe } from '@shared/pipes';
import { ThemeStyleProps } from '@shared/types';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { wcagContrast } from 'culori';

@Component({
	selector: 'sim-color-pair-card',
	imports: [ColorPipe, HlmButtonImports, HlmIconImports, HlmTooltipImports, NgClass, NgIcon],
	providers: [provideIcons({ lucideCheck, lucideCopy, lucideSquarePen })],
	template: `
		<article class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm">
			<button
				type="button"
				class="focus-visible:ring-ring relative flex h-24 w-full items-center justify-center overflow-hidden p-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset"
				[style.backgroundColor]="surfaceColor()"
				[style.color]="foregroundColor()"
				[attr.aria-label]="'Edit ' + surfaceName()"
				(click)="edit(surfaceKey())">
				<span
					class="relative flex items-center gap-2 rounded-md border border-current/15 px-3 py-2 text-sm font-medium shadow-sm">
					<span class="text-lg font-semibold">Aa</span>
					{{ previewLabel() }}
				</span>
			</button>

			<div class="border-border flex items-center justify-between gap-3 border-t px-3 py-2.5">
				<div>
					<p class="text-sm font-medium">{{ label() }}</p>
					<p class="text-muted-foreground text-xs">Text and surface pair</p>
				</div>
				<span
					class="rounded-full border px-2 py-0.5 text-xs font-medium"
					[ngClass]="
						contrastPasses()
							? 'border-border bg-muted text-foreground'
							: 'border-destructive/30 bg-destructive/10 text-destructive'
					">
					{{ contrastRatio() }}:1 {{ contrastGrade() }}
				</span>
			</div>

			<div class="border-border grid grid-cols-2 border-t">
				@for (token of tokens(); track token.key; let first = $first) {
					<div class="min-w-0 p-3" [class.border-l]="!first" [class.border-border]="!first">
						<div class="flex items-start gap-2">
							<div class="min-w-0 flex-1">
								<p class="truncate text-xs font-medium">{{ token.name }}</p>
								<p class="text-muted-foreground mt-0.5 truncate text-xs">
									{{ token.color | colorFormatter: colorType() }}
								</p>
							</div>
							<div class="flex shrink-0 items-center">
								<button
									hlmBtn
									variant="ghost"
									size="icon-xs"
									[hlmTooltip]="copyTooltip"
									[attr.aria-label]="'Copy ' + token.name"
									(click)="copy(token.key, token.color)">
									<ng-icon hlm [name]="copiedKey() === token.key ? 'lucideCheck' : 'lucideCopy'" size="xs" />
								</button>
								<ng-template #copyTooltip>Copy color</ng-template>
								<button
									hlmBtn
									variant="ghost"
									size="icon-xs"
									[attr.aria-label]="'Edit ' + token.name"
									(click)="edit(token.key)">
									<ng-icon hlm name="lucideSquarePen" size="xs" />
								</button>
							</div>
						</div>
					</div>
				}
			</div>
		</article>
	`,
})
export class ColorPairCard {
	private readonly clipboard = inject(Clipboard);
	private readonly colorEditService = inject(ColorEditService);
	private readonly themeStorage = inject(ThemeStorageService);

	public readonly label = input.required<string>();
	public readonly previewLabel = input<string>('Preview');
	public readonly surfaceName = input.required<string>();
	public readonly surfaceColor = input.required<string>();
	public readonly surfaceKey = input.required<keyof ThemeStyleProps>();
	public readonly foregroundName = input.required<string>();
	public readonly foregroundColor = input.required<string>();
	public readonly foregroundKey = input.required<keyof ThemeStyleProps>();

	protected readonly copiedKey = signal<keyof ThemeStyleProps | null>(null);
	protected readonly colorType = computed(() => this.themeStorage.colorType());
	protected readonly contrastRatio = computed(() =>
		wcagContrast(this.surfaceColor(), this.foregroundColor()).toFixed(1),
	);
	protected readonly contrastPasses = computed(() => Number(this.contrastRatio()) >= 4.5);
	protected readonly contrastGrade = computed(() => {
		const ratio = Number(this.contrastRatio());
		return ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'Fail';
	});
	protected readonly tokens = computed(() => [
		{ name: this.surfaceName(), color: this.surfaceColor(), key: this.surfaceKey() },
		{ name: this.foregroundName(), color: this.foregroundColor(), key: this.foregroundKey() },
	]);

	protected copy(key: keyof ThemeStyleProps, color: string): void {
		this.clipboard.copy(color);
		this.copiedKey.set(key);
		setTimeout(() => this.copiedKey.set(null), 1500);
	}

	protected edit(key: keyof ThemeStyleProps): void {
		this.colorEditService.requestEditColor(key);
	}
}
