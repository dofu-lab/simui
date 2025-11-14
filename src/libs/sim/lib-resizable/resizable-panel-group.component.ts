import { isPlatformBrowser } from '@angular/common';
import {
	AfterContentInit,
	Component,
	contentChildren,
	ElementRef,
	inject,
	input,
	OnDestroy,
	output,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { ClassValue } from 'clsx';
import { ResizableHandleComponent } from './resizable-handle.component';
import { ResizablePanelComponent } from './resizable-panel.component';
import { PanelGroupDirection } from './type';
import { convertToPercentage, getContainerSize, getEventPosition } from './utils';

@Component({
	selector: 'resizable-panel-group',
	template: `
		<ng-content></ng-content>
	`,
	host: {
		'[class]': 'userClass()',
		'[attr.data-panel-group-direction]': 'layout()',
	},
	styles: [
		`
			:host {
				display: flex;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}
		`,
	],
})
export class ResizablePanelGroupComponent implements AfterContentInit, OnDestroy {
	private readonly elementRef = inject(ElementRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly panels = contentChildren(ResizablePanelComponent);
	private readonly handlers = contentChildren(ResizableHandleComponent);

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly layout = input<PanelGroupDirection>('horizontal');
	public readonly lazy = input(false);

	public readonly onLayout = output<number[]>();
	public readonly onResizing = output<boolean>();

	private readonly panelSizes = signal<number[]>([]);
	private readonly listeners: (() => void)[] = [];

	ngAfterContentInit(): void {
		this.intialPanelsSize();
	}

	intialPanelsSize(): void {
		const panels = this.panels();
		const numberOfPanels = panels.length;

		if (numberOfPanels === 0) {
			return;
		}

		const containerSize = getContainerSize(this.elementRef, this.layout());
		const sizes = panels.map((panel) => {
			const defaultSize = panel.defaultSize();
			if (defaultSize !== undefined) {
				return convertToPercentage(defaultSize, containerSize);
			}
			return 100 / numberOfPanels;
		});

		this.panelSizes.set(sizes);
		this.updatePanelStyles();
	}

	updatePanelStyles(): void {
		const panels = this.panels();
		const sizes = this.panelSizes();
		const layout = this.layout();

		panels.forEach((panel, index) => {
			const size = sizes[index];
			if (size !== undefined) {
				const element = panel.elementRef.nativeElement as HTMLElement;
				if (layout === 'vertical') {
					element.style.height = `${size}%`;
					element.style.width = '100%';
				} else {
					element.style.width = `${size}%`;
					element.style.height = '100%';
				}
			}
		});
	}

	startResize(handleId: string, event: MouseEvent | TouchEvent): void {
		event.preventDefault();

		const sizes = [...this.panelSizes()];

		this.onLayout.emit(sizes);
		this.onResizing.emit(true);

		const startPosition = getEventPosition(event, this.layout());
		const startSizes = [...sizes];

		const handleIndex = this.handlers().findIndex((h) => h.id === handleId);

		const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
			this.handleResize(moveEvent, handleIndex, startPosition, startSizes);
		};

		const handleEnd = () => {
			this.endResize();
			if (isPlatformBrowser(this.platformId)) {
				document.removeEventListener('mousemove', handleMove);
				document.removeEventListener('touchmove', handleMove);
				document.removeEventListener('mouseup', handleEnd);
				document.removeEventListener('touchend', handleEnd);
			}
		};

		if (isPlatformBrowser(this.platformId)) {
			document.addEventListener('mousemove', handleMove);
			document.addEventListener('touchmove', handleMove);
			document.addEventListener('mouseup', handleEnd);
			document.addEventListener('touchend', handleEnd);

			this.listeners.push(() => {
				document.removeEventListener('mousemove', handleMove);
				document.removeEventListener('touchmove', handleMove);
				document.removeEventListener('mouseup', handleEnd);
				document.removeEventListener('touchend', handleEnd);
			});
		}
	}

	private handleResize(
		event: MouseEvent | TouchEvent,
		handleIndex: number,
		startPosition: number,
		startSizes: number[],
	): void {
		const currentPosition = getEventPosition(event, this.layout());
		const delta = currentPosition - startPosition;
		const containerSize = getContainerSize(this.elementRef, this.layout());

		const deltaPercentage = (delta / containerSize) * 100;

		const newSizes = [...startSizes];
		const panels = this.panels();

		const leftPanel = panels[handleIndex];
		const rightPanel = panels[handleIndex + 1];

		if (!leftPanel || !rightPanel) return;

		const leftMin = convertToPercentage(leftPanel.minSize() || 0, containerSize);
		const leftMax = convertToPercentage(leftPanel.maxSize() || 100, containerSize);
		const rightMin = convertToPercentage(rightPanel.minSize() || 0, containerSize);
		const rightMax = convertToPercentage(rightPanel.maxSize() || 100, containerSize);

		let newLeftSize = startSizes[handleIndex] + deltaPercentage;
		let newRightSize = startSizes[handleIndex + 1] - deltaPercentage;

		newLeftSize = Math.max(leftMin, Math.min(leftMax, newLeftSize));
		newRightSize = Math.max(rightMin, Math.min(rightMax, newRightSize));

		const totalSize = newLeftSize + newRightSize;
		const originalTotal = startSizes[handleIndex] + startSizes[handleIndex + 1];

		if (Math.abs(totalSize - originalTotal) < 0.01) {
			newSizes[handleIndex] = newLeftSize;
			newSizes[handleIndex + 1] = newRightSize;

			this.panelSizes.set(newSizes);

			if (!this.lazy()) {
				this.updatePanelStyles();

				leftPanel.onResize.emit(newLeftSize);
				rightPanel.onResize.emit(newRightSize);
			}

			this.onLayout.emit(newSizes);
		}
	}

	private endResize(): void {
		this.onResizing.emit(false);

		if (this.lazy()) {
			this.updatePanelStyles();
		}

		const sizes = [...this.panelSizes()];
		this.onLayout.emit(sizes);
	}

	ngOnDestroy(): void {
		this.listeners.forEach((cleanup) => cleanup());
	}
}
