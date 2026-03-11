import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-02',
	imports: [NgIcon, HlmButton],
	providers: [provideIcons({ lucideTrash })],
	template: `
		<button hlmBtn variant="destructive" size="sm">
			<ng-icon name="lucideTrash" />
			Delete
		</button>
	`,
})
export class Button02Component {}
