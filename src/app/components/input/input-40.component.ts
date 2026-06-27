import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateRange } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { addDays, format, isValid, parse } from 'date-fns';

interface ParsedDate {
	startDate: Date | null;
	endDate: Date | null;
}

@Component({
	selector: 'sim-input-40',
	imports: [
		NgIcon,
		FormsModule,
		MaskitoDirective,
		HlmLabelImports,
		HlmCalendarImports,
		HlmPopoverImports,
		HlmInputGroupImports,
	],
	providers: [provideIcons({ lucideCalendar })],
	host: { class: 'w-full' },
	template: `
		<hlm-popover sideOffset="5" align="end">
			<label hlmLabel for="input-40" class="mb-2 text-sm">Date range picker (unavailable dates)</label>
			<hlm-input-group>
				<input
					hlmInputGroupInput
					id="input-40"
					type="text"
					placeholder="mm/dd/yyyy - mm/dd/yyyy"
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
				<hlm-calendar-range
					[min]="minDate"
					[max]="maxDate"
					[(startDate)]="selectedStartDate"
					[(endDate)]="selectedEndDate"
					(endDateChange)="onDateRangeChange(ctx)" />
			</div>
		</hlm-popover>
	`,
})
export class Input40Component {
	protected readonly selectedStartDate = model<Date | null>(null);
	protected readonly selectedEndDate = model<Date | null>(null);
	protected readonly mask: MaskitoOptions = maskitoDateRange({
		mode: 'mm/dd/yyyy',
		dateSeparator: '/',
		rangeSeparator: ' - ',
	});
	protected readonly minDate: Date = new Date();
	protected readonly maxDate: Date = addDays(new Date(), 5);

	protected inputValue: string = this.formatDateRange(this.selectedStartDate(), this.selectedEndDate());

	protected onInputChange(value: string): void {
		const { startDate, endDate } = this.parseDateRange(value);
		if (startDate && isValid(startDate)) {
			this.selectedStartDate.set(startDate);
		}
		if (endDate && isValid(endDate)) {
			this.selectedEndDate.set(endDate);
		}
	}

	protected onDateRangeChange(ctx: any): void {
		this.inputValue = this.formatDateRange(this.selectedStartDate(), this.selectedEndDate());
		// Close popover when both dates are selected
		if (this.selectedStartDate() && this.selectedEndDate()) {
			ctx.close();
		}
	}

	private formatDateRange(startDate: Date | null, endDate: Date | null): string {
		const start = startDate && isValid(startDate) ? format(startDate, 'MM/dd/yyyy') : '';
		const end = endDate && isValid(endDate) ? format(endDate, 'MM/dd/yyyy') : '';

		if (start && end) {
			return `${start} - ${end}`;
		} else if (start) {
			return `${start} - `;
		}
		return '';
	}

	private parseDateRange(value: string): ParsedDate {
		if (!value) {
			return { startDate: null, endDate: null };
		}

		const parts = value.split(' - ');
		const startDateStr = parts[0]?.trim();
		const endDateStr = parts[1]?.trim();

		let startDate: Date | null = null;
		let endDate: Date | null = null;

		if (startDateStr && startDateStr.length >= 10) {
			try {
				startDate = parse(startDateStr, 'MM/dd/yyyy', new Date());
				if (!isValid(startDate)) {
					startDate = null;
				}
			} catch {
				startDate = null;
			}
		}

		if (endDateStr && endDateStr.length >= 10) {
			try {
				endDate = parse(endDateStr, 'MM/dd/yyyy', new Date());
				if (!isValid(endDate)) {
					endDate = null;
				}
			} catch {
				endDate = null;
			}
		}

		return { startDate, endDate };
	}
}
