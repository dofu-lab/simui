import { Component, effect, signal, untracked } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';
import { format, isValid, parse } from 'date-fns';

interface DateModel {
	date: string;
}

@Component({
	selector: 'sim-calendar-12',
	imports: [HlmCalendarImports, HlmInputGroupImports, HlmLabel, NgIcon, FormField],
	providers: [provideIcons({ lucideCalendar })],
	template: `
		<div class="flex flex-col items-center rounded-md border">
			<hlm-calendar class="p-2 pb-0 **:[[brncalendar]]:border-none" [(date)]="selectedDate" />
			<div class="flex w-full items-center gap-2 border-t p-3">
				<label hlmLabel for="date-input-12" class="shrink-0 text-xs">Enter date</label>
				<hlm-input-group>
					<input
						hlmInputGroupInput
						id="date-input-12"
						type="date"
						[formField]="dateForm.date"
						(input)="onDateInput($event)"
						class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
					<hlm-input-group-addon>
						<ng-icon name="lucideCalendar" />
					</hlm-input-group-addon>
				</hlm-input-group>
			</div>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Date input</p>
	`,
})
export class Calendar12Component {
	protected readonly dateModel = signal<DateModel>({
		date: format(new Date(), 'yyyy-MM-dd'),
	});
	protected readonly selectedDate = signal(new Date());
	protected readonly dateForm = form(this.dateModel, (schema) => {
		required(schema.date, { message: 'Date is required' });
	});

	constructor() {
		effect(() => {
			const raw = this.dateForm.date().value();
			if (!raw) return;
			const parsed = parse(raw, 'yyyy-MM-dd', new Date());
			if (isValid(parsed)) {
				untracked(() => this.selectedDate.set(parsed));
			}
		});

		effect(() => {
			const calDate = this.selectedDate();
			const formatted = format(calDate, 'yyyy-MM-dd');
			untracked(() => this.dateModel.update((m) => ({ ...m, date: formatted })));
		});
	}

	protected onDateInput(event: Event): void {
		const value = (event.target as HTMLInputElement).value;
		this.dateModel.update((m) => ({ ...m, date: value }));
	}
}
