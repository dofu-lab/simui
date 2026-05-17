import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendar } from '@spartan-ng/helm/calendar';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { format, isValid, parse } from 'date-fns';

@Component({
	selector: 'sim-input-38',
	imports: [
		HlmLabel,
		FormsModule,
		MaskitoDirective,
		NgIcon,
		HlmCalendar,
		HlmButtonImports,
		HlmPopoverImports,
		HlmInputGroupImports,
	],
	providers: [provideIcons({ lucideCalendar })],
	host: { class: 'w-full' },
	template: `
		<hlm-popover sideOffset="5" align="end">
			<label hlmLabel for="input-38" class="mb-2 text-sm">Date picker</label>
			<hlm-input-group>
				<input
					hlmInputGroupInput
					id="input-38"
					type="text"
					placeholder="mm / dd / yyyy"
					[maskito]="mask"
					[(ngModel)]="inputValue"
					(ngModelChange)="onInputChange($event)" />
				<hlm-input-group-addon align="inline-end">
					<button hlmPopoverTrigger hlmInputGroupButton variant="ghost" size="icon-xs">
						<ng-icon name="lucideCalendar" />
					</button>
				</hlm-input-group-addon>
			</hlm-input-group>
			<div class="bg-background flex size-fit" *hlmPopoverPortal="let ctx">
				<hlm-calendar [(date)]="selectedDate" (dateChange)="onDateChange($event, ctx)" />
			</div>
		</hlm-popover>
	`,
})
export class Input38Component {
	protected readonly selectedDate = model<Date | null>(new Date());
	protected readonly mask: MaskitoOptions = maskitoDateOptionsGenerator({ mode: 'mm/dd/yyyy', separator: '/' });

	protected inputValue = this.formatDate(this.selectedDate());

	protected onInputChange(value: string): void {
		const date = this.parseDate(value);
		if (date && isValid(date)) {
			this.selectedDate.set(date);
		}
	}

	protected onDateChange(date: Date | null, ctx: any): void {
		this.selectedDate.set(date);
		this.inputValue = this.formatDate(date);
		ctx.close();
	}

	private formatDate(date: Date | null): string {
		if (!date || !isValid(date)) {
			return '';
		}
		return format(date, 'MM/dd/yyyy');
	}

	private parseDate(value: string): Date | null {
		if (!value || value.length < 10) {
			return null;
		}
		try {
			return parse(value, 'MM/dd/yyyy', new Date());
		} catch {
			return null;
		}
	}
}
