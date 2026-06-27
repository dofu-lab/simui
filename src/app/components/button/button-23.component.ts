import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-23',
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn variant="outline" size="icon" class="group" [ariaExpanded]="open()" (click)="onOpen()">
			<svg
				class="pointer-events-none"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4 12L20 12"
					class="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315 motion-reduce:transition-none" />
				<path
					d="M4 12H20"
					class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45 motion-reduce:transition-none" />
				<path
					d="M4 12H20"
					class="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135 motion-reduce:transition-none" />
			</svg>
		</button>
	`,
})
export class Button23Component {
	protected readonly open = signal<boolean>(false);

	protected onOpen(): void {
		this.open.set(!this.open());
	}
}
