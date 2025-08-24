import { Component, signal } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-23',
	standalone: true,
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="icon" class="group" (click)="onOpen()" [ariaExpanded]="open()">
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
					class="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
				<path
					d="M4 12H20"
					class="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
				<path
					d="M4 12H20"
					class="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
			</svg>
		</button>
	`,
})
export class Button23Component {
	open = signal<boolean>(false);

	onOpen() {
		this.open.set(!this.open());
	}
}

export const button23Code = `import { Component, signal } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-23',
	standalone: true,
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="icon" class="group" (click)="onOpen()" [ariaExpanded]="open()">
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
					class="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
				<path
					d="M4 12H20"
					class="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
				<path
					d="M4 12H20"
					class="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
			</svg>
		</button>
	\`,
})
export class Button23Component {
	open = signal<boolean>(false);

	onOpen() {
		this.open.set(!this.open());
	}
}`;
