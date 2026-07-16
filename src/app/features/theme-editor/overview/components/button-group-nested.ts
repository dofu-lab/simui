import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideArrowRight } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'app-button-group-nested',
	imports: [HlmButtonGroupImports, HlmButtonImports, NgIcon, HlmIconImports],
	providers: [provideIcons({ lucideArrowLeft, lucideArrowRight })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div hlmButtonGroup>
			<div hlmButtonGroup>
				<button hlmBtn variant="outline" size="sm">1</button>
				<button hlmBtn variant="outline" size="sm">2</button>
				<button hlmBtn variant="outline" size="sm">3</button>
			</div>
			<div hlmButtonGroup>
				<button hlmBtn variant="outline" size="icon-sm">
					<ng-icon hlm name="lucideArrowLeft" size="sm" />
				</button>
				<button hlmBtn variant="outline" size="icon-sm">
					<ng-icon hlm name="lucideArrowRight" size="sm" />
				</button>
			</div>
		</div>
	`,
})
export class ButtonGroupNested {}
