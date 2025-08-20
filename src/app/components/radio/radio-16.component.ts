import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixStarFill } from '@ng-icons/remixicon';
import { hlm } from '@spartan-ng/brain/core';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-16',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel, FormsModule],
	providers: [provideIcons({ remixStarFill })],
	template: `
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">Rate your experience</label>
			<div class="flex-1">
				<hlm-radio-group
					class="group mt-2 flex gap-0 rounded-md"
					[ngModel]="rating()"
					(ngModelChange)="rating.set($event)">
					@for (item of items; track item) {
						<label
							class="group has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer rounded p-1 transition-all outline-none hover:scale-110 has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel
							(mouseenter)="hoverRating.set(item.value)"
							(mouseleave)="hoverRating.set(null)">
							<span [class]="computedStarClass(item.value)">
								<ng-icon hlm name="remixStarFill" />
							</span>
							<hlm-radio class="space-x-0" [value]="item.value" />
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	`,
})
export class Radio16Component {
	rating = signal(3);
	hoverRating = signal<number | null>(null);
	items: { id: number; value: number }[] = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },
	];

	computedStarClass(value: number) {
		const colorStyle = (this.hoverRating() || this.rating()) >= value ? 'text-amber-500' : 'text-input';
		return hlm(colorStyle);
	}
}

export const radio16Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixStarFill } from '@ng-icons/remixicon';
import { hlm } from '@spartan-ng/brain/core';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-16',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel, FormsModule],
	providers: [provideIcons({ remixStarFill })],
	template: \`
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">Rate your experience</label>
			<div class="flex-1">
				<hlm-radio-group
					class="group mt-2 flex gap-0 rounded-md"
					[ngModel]="rating()"
					(ngModelChange)="rating.set($event)">
					@for (item of items; track item) {
						<label
							class="group has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer rounded p-1 transition-all outline-none hover:scale-110 has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel
							(mouseenter)="hoverRating.set(item.value)"
							(mouseleave)="hoverRating.set(null)">
							<span [class]="computedStarClass(item.value)">
								<ng-icon hlm name="remixStarFill" />
							</span>
							<hlm-radio class="space-x-0" [value]="item.value" />
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	\`,
})
export class Radio16Component {
	rating = signal(3);
	hoverRating = signal<number | null>(null);
	items: { id: number; value: number }[] = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },
	];

	computedStarClass(value: number) {
		const colorStyle = (this.hoverRating() || this.rating()) >= value ? 'text-amber-500' : 'text-input';
		return hlm(colorStyle);
	}
}`;
