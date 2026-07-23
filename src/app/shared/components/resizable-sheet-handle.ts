import { isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	inject,
	OnDestroy,
	PLATFORM_ID,
	Renderer2,
	signal,
} from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGripVertical } from '@ng-icons/lucide';
import { STORAGE_KEYS } from '@shared/constants/storage-keys';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { classes } from '@spartan-ng/helm/utils';

const DEFAULT_WIDTH_PERCENT = 50;
const MIN_WIDTH_PERCENT = 25;
const MAX_WIDTH_PERCENT = 96;
const MIN_WIDTH_PX = 320;
const VIEWPORT_GUTTER_PX = 48;
const KEYBOARD_STEP_PERCENT = 5;

@Component({
	selector: 'sim-resizable-sheet-handle',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [HlmIconImports, NgIcon],
	providers: [provideIcons({ lucideGripVertical })],
	template: `
		<span
			aria-hidden="true"
			class="border-border bg-background text-foreground group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:ring-ring group-focus-visible:ring-offset-background flex items-center justify-center rounded-sm border py-1 shadow-lg transition-[background-color,color,box-shadow] group-hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-offset-2 motion-reduce:transition-none">
			<ng-icon hlm name="lucideGripVertical" size="sm" class="text-muted-foreground" />
		</span>
		<span class="sr-only">Drag or use the left and right arrow keys to resize the code sheet</span>
	`,
	host: {
		role: 'separator',
		tabindex: '0',
		'aria-label': 'Resize code sheet',
		'aria-orientation': 'vertical',
		'[attr.aria-valuemin]': 'minimumWidthPercent()',
		'[attr.aria-valuemax]': 'maximumWidthPercent()',
		'[attr.aria-valuenow]': 'roundedWidthPercent()',
		'(pointerdown)': 'startResize($event)',
		'(pointermove)': 'resize($event)',
		'(pointerup)': 'finishResize($event)',
		'(pointercancel)': 'finishResize($event)',
		'(keydown)': 'resizeWithKeyboard($event)',
		'(window:resize)': 'handleViewportResize()',
	},
})
export class ResizableSheetHandle implements AfterViewInit, OnDestroy {
	private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly localStorageService = inject(LocalStorageService);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly renderer = inject(Renderer2);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly viewportWidth = signal(0);
	private readonly widthPercent = signal(DEFAULT_WIDTH_PERCENT);
	private sheetElement?: HTMLElement;
	private activePointerId?: number;
	private previousBodyCursor = '';
	private previousBodyUserSelect = '';
	private previousSheetTransition = '';
	private documentInteractionActive = false;

	protected readonly maximumWidthPercent = computed(() => {
		const viewportWidth = this.viewportWidth();
		if (!viewportWidth) return MAX_WIDTH_PERCENT;

		return Math.min(MAX_WIDTH_PERCENT, ((viewportWidth - VIEWPORT_GUTTER_PX) / viewportWidth) * 100);
	});

	protected readonly minimumWidthPercent = computed(() => {
		const viewportWidth = this.viewportWidth();
		if (!viewportWidth) return MIN_WIDTH_PERCENT;

		return Math.min(this.maximumWidthPercent(), Math.max(MIN_WIDTH_PERCENT, (MIN_WIDTH_PX / viewportWidth) * 100));
	});

	protected readonly roundedWidthPercent = computed(() => Math.round(this.widthPercent()));

	constructor() {
		classes(
			() =>
				'group absolute start-0 top-1/2 flex p-1 -translate-x-1/2 -translate-y-1/2 touch-none cursor-ew-resize items-center justify-center outline-none',
		);
	}

	ngAfterViewInit(): void {
		if (!this.isBrowser) return;

		this.viewportWidth.set(window.innerWidth);
		this.sheetElement = this.elementRef.nativeElement.parentElement ?? undefined;
		const savedWidth = this.localStorageService.getItem<number>(STORAGE_KEYS.CODE_SHEET_WIDTH_PERCENT);
		this.applyWidth(typeof savedWidth === 'number' && Number.isFinite(savedWidth) ? savedWidth : DEFAULT_WIDTH_PERCENT);
	}

	ngOnDestroy(): void {
		this.restoreDocumentInteraction();
	}

	protected startResize(event: PointerEvent): void {
		if (!this.isBrowser || event.button !== 0 || this.activePointerId !== undefined) return;

		event.preventDefault();
		this.activePointerId = event.pointerId;
		this.elementRef.nativeElement.setPointerCapture?.(event.pointerId);
		this.previousBodyCursor = document.body.style.cursor;
		this.previousBodyUserSelect = document.body.style.userSelect;
		this.previousSheetTransition = this.sheetElement?.style.transition ?? '';
		this.documentInteractionActive = true;
		this.renderer.setStyle(document.body, 'cursor', 'ew-resize');
		this.renderer.setStyle(document.body, 'user-select', 'none');
		if (this.sheetElement) this.renderer.setStyle(this.sheetElement, 'transition', 'none');
	}

	protected resize(event: PointerEvent): void {
		if (event.pointerId !== this.activePointerId) return;

		const nextWidth = ((this.viewportWidth() - event.clientX) / this.viewportWidth()) * 100;
		this.applyWidth(nextWidth);
	}

	protected finishResize(event: PointerEvent): void {
		if (event.pointerId !== this.activePointerId) return;

		if (this.elementRef.nativeElement.hasPointerCapture?.(event.pointerId)) {
			this.elementRef.nativeElement.releasePointerCapture(event.pointerId);
		}
		this.activePointerId = undefined;
		this.restoreDocumentInteraction();
		this.persistWidth();
	}

	protected resizeWithKeyboard(event: KeyboardEvent): void {
		let nextWidth: number | undefined;

		switch (event.key) {
			case 'ArrowLeft':
				nextWidth = this.widthPercent() + KEYBOARD_STEP_PERCENT;
				break;
			case 'ArrowRight':
				nextWidth = this.widthPercent() - KEYBOARD_STEP_PERCENT;
				break;
			case 'Home':
				nextWidth = this.minimumWidthPercent();
				break;
			case 'End':
				nextWidth = this.maximumWidthPercent();
				break;
			default:
				return;
		}

		event.preventDefault();
		this.applyWidth(nextWidth);
		this.persistWidth();
	}

	protected handleViewportResize(): void {
		if (!this.isBrowser) return;

		this.viewportWidth.set(window.innerWidth);
		this.applyWidth(this.widthPercent());
	}

	private applyWidth(widthPercent: number): void {
		const clampedWidth = Math.min(this.maximumWidthPercent(), Math.max(this.minimumWidthPercent(), widthPercent));
		this.widthPercent.set(clampedWidth);

		if (!this.sheetElement) return;

		this.renderer.setStyle(this.sheetElement, 'width', `${clampedWidth}dvw`);
		this.renderer.setStyle(this.sheetElement, 'max-width', 'none');
	}

	private persistWidth(): void {
		const persistedWidth = Math.round(this.widthPercent() * 100) / 100;
		this.localStorageService.setItem(STORAGE_KEYS.CODE_SHEET_WIDTH_PERCENT, persistedWidth);
	}

	private restoreDocumentInteraction(): void {
		if (!this.isBrowser || !this.documentInteractionActive) return;

		this.renderer.setStyle(document.body, 'cursor', this.previousBodyCursor);
		this.renderer.setStyle(document.body, 'user-select', this.previousBodyUserSelect);
		if (this.sheetElement) this.renderer.setStyle(this.sheetElement, 'transition', this.previousSheetTransition);
		this.documentInteractionActive = false;
	}
}
