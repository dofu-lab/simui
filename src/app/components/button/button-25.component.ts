import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-25',
	standalone: true,
	providers: [provideIcons({ lucideBell })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, HlmBadgeDirective],
	template: `
		<button hlmBtn variant="outline" size="icon" class="relative" (click)="markAsRead()">
			<ng-icon hlm name="lucideBell" size="sm" />
			@if (unreadMessageCount() > 0) {
				<span
					hlmBadge
					variant="destructive"
					class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-[1px]">
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

export const button25Code = `
import { Component, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';

@Component({
  selector: 'sim-button-25',
  standalone: true,
  providers: [provideIcons({ lucideBell })],
  imports: [HlmButtonDirective, HlmIconDirective, NgIcon, HlmBadgeDirective],
  template: \`
    <button
      hlmBtn
      variant="outline"
      size="icon"
      class="relative"
      (click)="markAsRead()"
    >
      <ng-icon hlm name="lucideBell" size="sm" />
      @if (unreadMessageCount() > 0) {
      <span
        hlmBadge
        variant="destructive"
        class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-[1px]"
      >
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
}
`;
