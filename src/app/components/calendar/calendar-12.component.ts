import { Component, effect, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';
import { format, isValid, parse } from 'date-fns';

interface DateModel {
	date: string; // yyyy-MM-dd string for the input
}

@Component({
	selector: 'sim-calendar-12',
	imports: [HlmCalendarImports, HlmInputGroupImports, HlmLabel, NgIcon],
	providers: [provideIcons({ lucideCalendar })],
	template: `
		<div class="flex flex-col items-center rounded-md border">
			<!-- Calendar reads selectedDate signal directly -->
			<hlm-calendar class="p-2 pb-0 **:[[brncalendar]]:border-none" [(date)]="selectedDate" />

			<div class="flex w-full items-center gap-2 border-t p-3">
				<label hlmLabel for="date-input-12" class="shrink-0 text-xs">Enter date</label>

				<hlm-input-group>
					<input
						hlmInputGroupInput
						id="date-input-12"
						type="date"
						[formField]="dateForm.date"
						class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
					<hlm-input-group-addon>
						<ng-icon name="lucideCalendar" />
					</hlm-input-group-addon>
				</hlm-input-group>
			</div>

			<!-- Validation error derived from Signal Form state -->
			@if (dateForm.date().errors()) {
				<p class="text-destructive px-3 pb-2 text-xs">Please enter a valid date.</p>
			}
		</div>

		<!-- Live read of the signal form value — no subscription needed -->
		<p class="text-muted-foreground mt-4 text-center text-xs">Selected: {{ dateForm.date().value() }}</p>
	`,
})
export class Calendar12Component {
	// ── 1. Single source of truth: a signal model ──────────────────────
	protected readonly dateModel = signal<DateModel>({
		date: format(new Date(), 'yyyy-MM-dd'),
	});

	// ── 2. Calendar Date signal derived from the model ─────────────────
	//    computed() keeps selectedDate in sync whenever dateModel changes
	protected readonly selectedDate = signal(new Date());

	// ── 3. Signal Form — state-first, no FormControl needed ────────────
	protected readonly dateForm = form(this.dateModel, (schema) => {
		required(schema.date, { message: 'Date is required' });
	});

	constructor() {
		// ── 4. When the form field changes → update the calendar signal ──
		//    Signal Forms expose field value as a signal, so computed() works
		//    natively — no RxJS bridge required.
		effect(() => {
			const raw = this.dateForm.date().value();
			if (!raw) return;

			const parsed = parse(raw, 'yyyy-MM-dd', new Date());
			if (isValid(parsed)) {
				this.selectedDate.set(parsed);
			}
		});

		// ── 5. When calendar changes → write back to the signal model ────
		effect(() => {
			const calDate = this.selectedDate();
			const formatted = format(calDate, 'yyyy-MM-dd');

			// Update the signal model directly — Signal Form picks it up
			this.dateModel.update((m) => ({ ...m, date: formatted }));
		});
	}
}
