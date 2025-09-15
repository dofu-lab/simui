import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmCalendar } from '@spartan-ng/helm/calendar';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { format, isValid, parse } from 'date-fns';

@Component({
	selector: 'app-input-38',
	imports: [
		HlmLabel,
		FormsModule,
		MaskitoDirective,
		HlmInput,
		NgIcon,
		HlmIcon,
		HlmCalendar,
		BrnPopover,
		BrnPopoverTrigger,
		BrnPopoverContent,
	],
	providers: [provideIcons({ lucideCalendar })],
	host: { class: 'w-full' },
	template: `
		<brn-popover sideOffset="5" align="end">
			<label hlmLabel for="input-38" class="mb-2 text-sm">Date picker</label>
			<div class="relative">
				<input
					hlmInput
					class="pe-8"
					id="input-38"
					type="text"
					placeholder="mm / dd / yyyy"
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
				<hlm-calendar [(date)]="selectedDate" (dateChange)="onDateChange($event, ctx)" />
			</div>
		</brn-popover>
	`,
})
export class Input38Component {
	readonly selectedDate = model<Date | null>(new Date());
	readonly mask: MaskitoOptions = maskitoDateOptionsGenerator({ mode: 'mm/dd/yyyy', separator: '/' });

	inputValue = this.formatDate(this.selectedDate());

	onInputChange(value: string): void {
		const date = this.parseDate(value);
		if (date && isValid(date)) {
			this.selectedDate.set(date);
		}
	}

	onDateChange(date: Date | null, ctx: any): void {
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

export const input38Code = ``;
