import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideGitFork } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-42',
	providers: [provideIcons({ lucideGitFork, lucideChevronDown })],
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideGitFork" size="sm" class="mr-2 opacity-60" />
				Fork
				<span
					class="border-primary-foreground/30 text-primary-foreground/60 ms-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
					18
				</span>
			</button>
			<button hlmBtn size="sm" class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
	`,
})
export class Button42Component {}