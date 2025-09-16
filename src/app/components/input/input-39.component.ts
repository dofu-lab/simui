import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmCalendarRange } from '@spartan-ng/helm/calendar';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { addDays, format, isValid, parse } from 'date-fns';

type ParsedDate = { startDate: Date | null; endDate: Date | null };

@Component({
	selector: 'sim-input-39',
	imports: [
		HlmLabel,
		FormsModule,
		MaskitoDirective,
		HlmInput,
		NgIcon,
		HlmIcon,
		HlmCalendarRange,
		BrnPopover,
		BrnPopoverTrigger,
		BrnPopoverContent,
	],
	providers: [provideIcons({ lucideCalendar })],
	host: { class: 'w-full' },
	template: `
		<brn-popover sideOffset="5" align="end">
			<label hlmLabel for="input-39" class="mb-2 text-sm">Date range picker</label>
			<div class="relative">
				<input
					hlmInput
					class="pe-8"
					id="input-39"
					type="text"
					placeholder="mm/dd/yyyy - mm/dd/yyyy"
					[maskito]="mask"
					[(ngModel)]="inputValue"
					(ngModelChange)="onInputChange($event)" />
				<button
					brnPopoverTrigger
					class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
					<ng-icon hlm size="sm" name="lucideCalendar" />
				</button>
			</div>
			<div class="bg-background flex size-fit" *brnPopoverContent="let ctx">
				<hlm-calendar-range
					[(startDate)]="selectedStartDate"
					[(endDate)]="selectedEndDate"
					(endDateChange)="onDateRangeChange(ctx)" />
			</div>
		</brn-popover>
	`,
})
export class Input39Component {
	readonly selectedStartDate = model<Date | null>(new Date());
	readonly selectedEndDate = model<Date | null>(addDays(new Date(), 5));
	readonly mask: MaskitoOptions = maskitoDateRangeOptionsGenerator({
		mode: 'mm/dd/yyyy',
		dateSeparator: '/',
		rangeSeparator: ' - ',
	});

	inputValue = this.formatDateRange(this.selectedStartDate(), this.selectedEndDate());

	onInputChange(value: string): void {
		const { startDate, endDate } = this.parseDateRange(value);
		if (startDate && isValid(startDate)) {
			this.selectedStartDate.set(startDate);
		}
		if (endDate && isValid(endDate)) {
			this.selectedEndDate.set(endDate);
		}
	}

	onDateRangeChange(ctx: any): void {
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

export const input39Code = `import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmCalendarRange } from '@spartan-ng/helm/calendar';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { addDays, format, isValid, parse } from 'date-fns';

type ParsedDate = { startDate: Date | null; endDate: Date | null };

@Component({
	selector: 'sim-input-39',
	imports: [
		HlmLabel,
		FormsModule,
		MaskitoDirective,
		HlmInput,
		NgIcon,
		HlmIcon,
		HlmCalendarRange,
		BrnPopover,
		BrnPopoverTrigger,
		BrnPopoverContent,
	],
	providers: [provideIcons({ lucideCalendar })],
	host: { class: 'w-full' },
	template: \`
		<brn-popover sideOffset="5" align="end">
			<label hlmLabel for="input-39" class="mb-2 text-sm">Date range picker</label>
			<div class="relative">
				<input
					hlmInput
					class="pe-8"
					id="input-39"
					type="text"
					placeholder="mm/dd/yyyy - mm/dd/yyyy"
					[maskito]="mask"
					[(ngModel)]="inputValue"
					(ngModelChange)="onInputChange($event)" />
				<button
					brnPopoverTrigger
					class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
					<ng-icon hlm size="sm" name="lucideCalendar" />
				</button>
			</div>
			<div class="bg-background flex size-fit" *brnPopoverContent="let ctx">
				<hlm-calendar-range
					[(startDate)]="selectedStartDate"
					[(endDate)]="selectedEndDate"
					(endDateChange)="onDateRangeChange(ctx)" />
			</div>
		</brn-popover>
	\`,
})
export class Input39Component {
	readonly selectedStartDate = model<Date | null>(new Date());
	readonly selectedEndDate = model<Date | null>(addDays(new Date(), 5));
	readonly mask: MaskitoOptions = maskitoDateRangeOptionsGenerator({
		mode: 'mm/dd/yyyy',
		dateSeparator: '/',
		rangeSeparator: ' - ',
	});

	inputValue = this.formatDateRange(this.selectedStartDate(), this.selectedEndDate());

	onInputChange(value: string): void {
		const { startDate, endDate } = this.parseDateRange(value);
		if (startDate && isValid(startDate)) {
			this.selectedStartDate.set(startDate);
		}
		if (endDate && isValid(endDate)) {
			this.selectedEndDate.set(endDate);
		}
	}

	onDateRangeChange(ctx: any): void {
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
			return \`${start} - ${end}\`;
		} else if (start) {
			return \`${start} - \`;
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
}`;
