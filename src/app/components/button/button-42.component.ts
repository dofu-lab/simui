import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideGitFork } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-42',
	providers: [provideIcons({ lucideGitFork, lucideChevronDown })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="sm">
				<ng-icon name="lucideGitFork" class="opacity-60" />
				Fork
				<span
					class="border-primary-foreground/30 text-primary-foreground/60 ms-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
					18
				</span>
			</button>
			<hlm-button-group-separator class="bg-primary/70" />
			<button hlmBtn size="sm">
				<ng-icon name="lucideChevronDown" />
			</button>
		</div>
	`,
})
export class Button42Component {}
