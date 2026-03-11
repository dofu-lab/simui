import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideQrCode } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-36',
	providers: [provideIcons({ lucideQrCode })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="icon-sm">
				<ng-icon name="lucideQrCode" />
			</button>
			<hlm-button-group-separator />
			<button hlmBtn size="sm">Sign in</button>
		</div>
	`,
})
export class Button36Component {}
