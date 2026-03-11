import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-25',
	providers: [provideIcons({ lucideBell })],
	imports: [HlmButton, NgIcon, HlmBadge],
	template: `
		<button hlmBtn variant="outline" size="icon" class="relative" (click)="markAsRead()">
			<ng-icon name="lucideBell" />
			@if (unreadMessageCount() > 0) {
				<span
					hlmBadge
					variant="destructive"
					class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-px">
					{{ unreadMessageCount() }}
				</span>
			}
		</button>
	`,
})
export class Button25Component {
	protected readonly unreadMessageCount = signal<number>(8);

	protected markAsRead(): void {
		this.unreadMessageCount.set(0);
	}
}
