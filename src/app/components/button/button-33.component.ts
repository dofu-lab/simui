import { HlmButton } from '@/libs/ui/button/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis, lucideFiles, lucideFilm } from '@ng-icons/lucide';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-33',
	providers: [provideIcons({ lucideFiles, lucideFilm, lucideEllipsis })],
	imports: [HlmButtonGroupImports, HlmButton, NgIcon],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn variant="outline" size="sm">
				<ng-icon name="lucideFiles" />
				Files
			</button>
			<button hlmBtn variant="outline" size="sm">
				<ng-icon name="lucideFilm" />
				Media
			</button>
			<button hlmBtn variant="outline" size="icon-sm">
				<ng-icon name="lucideEllipsis" />
			</button>
		</div>
	`,
})
export class Button33Component {}
