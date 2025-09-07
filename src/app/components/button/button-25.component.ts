import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-25',
	standalone: true,
	providers: [provideIcons({ lucideBell })],
	imports: [HlmButton, HlmIcon, NgIcon, HlmBadge],
	template: `
		<button hlmBtn variant="outline" size="icon" class="relative" (click)="markAsRead()">
			<ng-icon hlm name="lucideBell" size="sm" />
			@if (unreadMessageCount() > 0) {
				<span
					hlmBadge
					variant="destructive"
					class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center rounded-full px-1 py-[1px]">
					{{ unreadMessageCount() }}
				</span>
			}
		</button>
	`,
})
export class Button25Component {
	unreadMessageCount = signal<number>(8);

	markAsRead() {
		this.unreadMessageCount.set(0);
	}
}

export const button25Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-25',
	standalone: true,
	providers: [provideIcons({ lucideBell })],
	imports: [HlmButton, HlmIcon, NgIcon, HlmBadge],
	template: \`
		<button hlmBtn variant="outline" size="icon" class="relative" (click)="markAsRead()">
			<ng-icon hlm name="lucideBell" size="sm" />
			@if (unreadMessageCount() > 0) {
				<span
					hlmBadge
					variant="destructive"
					class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center rounded-full px-1 py-[1px]">
					{{ unreadMessageCount() }}
				</span>
			}
		</button>
	\`,
})
export class Button25Component {
	unreadMessageCount = signal<number>(8);

	markAsRead() {
		this.unreadMessageCount.set(0);
	}
}`;
