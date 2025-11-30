import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-20',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, FormsModule],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="bg-input/50 inline-flex h-9 w-full rounded-md p-0.5">
			<hlm-radio-group
				class="group after:bg-background relative grid w-full grid-cols-[1fr_1fr] gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-sm after:transition-[translate,box-shadow] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=month]:after:translate-x-0 data-[state=year]:after:translate-x-full"
				[attr.data-state]="value()"
				[ngModel]="value()"
				(ngModelChange)="value.set($event)">
				<label
					class="has-data-[checked=false]:text-muted-foreground/70 z-10 flex items-center justify-center px-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
					hlmLabel>
					Bill Monthly
					<hlm-radio value="month" class="hidden"></hlm-radio>
				</label>
				<label
					class="has-data-[checked=false]:text-muted-foreground/70 z-10 flex items-center justify-center px-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
					hlmLabel>
					<span>
						Bill Yearly
						<span class="group-has-data-[state=year]:text-emerald-600">-20%</span>
					</span>
					<hlm-radio value="year" class="hidden" />
				</label>
			</hlm-radio-group>
		</div>
	`,
})
export class Radio20Component {
	value = signal<'month' | 'year'>('month');
}