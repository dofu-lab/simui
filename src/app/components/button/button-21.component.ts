import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-21',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButtonImports, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="icon" class="group rounded-full" (click)="onOpen()" [ariaExpanded]="open()">
			<ng-icon
				name="lucidePlus"
				class="transition-transform motion-reduce:transition-none duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-135" />
		</button>
	`,
})
export class Button21Component {
	open = signal<boolean>(false);

	onOpen() {
		this.open.set(!this.open());
	}
}
