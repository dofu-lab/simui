import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'app-spinner-badge',
	imports: [HlmSpinnerImports, HlmBadgeImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'flex items-center gap-2',
	},
	template: `
		<span hlmBadge class="rounded-full">
			<hlm-spinner class="text-xs" />
			Loading
		</span>
		<span hlmBadge variant="secondary" class="rounded-full">
			<hlm-spinner class="text-xs" />
			Syncing
		</span>
		<span hlmBadge variant="outline" class="rounded-full">
			<hlm-spinner class="text-xs" />
			Updating
		</span>
	`,
})
export class SpinnerBadge {}
