import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideWalletCards } from '@ng-icons/lucide';
import { remixAppleFill, remixPaypalFill } from '@ng-icons/remixicon';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-12',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel],
	providers: [
		provideIcons({
			lucideWalletCards,
			remixPaypalFill,
			remixAppleFill,
		}),
	],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-radio-group class="grid grid-cols-3 justify-between gap-3 text-sm font-medium" value="card">
			@for (item of items; track item.id) {
				<div
					class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
					<label
						class="flex w-full cursor-pointer flex-col items-start justify-between px-2 py-3 has-data-[disabled=true]:cursor-not-allowed! has-data-[disabled=true]:opacity-70"
						hlmLabel>
						<div class="flex w-full flex-1 flex-col items-center justify-center gap-2">
							<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
							<div class="text-foreground text-xs leading-none font-medium after:absolute after:inset-0">
								{{ item.label }}
							</div>
						</div>
						<hlm-radio [value]="item.value" />
					</label>
				</div>
			}
		</hlm-radio-group>
	`,
})
export class Radio12Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'card', label: 'Card', icon: 'lucideWalletCards' },
		{ id: 2, value: 'paypal', label: 'PayPal', icon: 'remixPaypalFill' },
		{ id: 3, value: 'applePay', label: 'Apple Pay', icon: 'remixAppleFill' },
	];
}

export const radio12Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideWalletCards } from '@ng-icons/lucide';
import { remixAppleFill, remixPaypalFill } from '@ng-icons/remixicon';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-12',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel],
	providers: [
		provideIcons({
			lucideWalletCards,
			remixPaypalFill,
			remixAppleFill,
		}),
	],
	host: {
		class: 'w-full',
	},
	template: \`
		<hlm-radio-group class="grid grid-cols-3 justify-between gap-3 text-sm font-medium" value="card">
			@for (item of items; track item.id) {
				<div
					class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
					<label
						class="flex w-full cursor-pointer flex-col items-start justify-between px-2 py-3 has-data-[disabled=true]:cursor-not-allowed! has-data-[disabled=true]:opacity-70"
						hlmLabel>
						<div class="flex w-full flex-1 flex-col items-center justify-center gap-2">
							<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
							<div class="text-foreground text-xs leading-none font-medium after:absolute after:inset-0">
								{{ item.label }}
							</div>
						</div>
						<hlm-radio [value]="item.value" />
					</label>
				</div>
			}
		</hlm-radio-group>
	\`,
})
export class Radio12Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'card', label: 'Card', icon: 'lucideWalletCards' },
		{ id: 2, value: 'paypal', label: 'PayPal', icon: 'remixPaypalFill' },
		{ id: 3, value: 'applePay', label: 'Apple Pay', icon: 'remixAppleFill' },
	];
}`;
