import { Component, inject, input, OnInit, output, signal, viewChild } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendarPlus, lucidePlus } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmDatePicker } from '@spartan-ng/helm/date-picker';
import { HlmDialog, HlmDialogContent } from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';
import { HlmScrollArea } from '@spartan-ng/helm/scroll-area';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import { NgScrollbar } from 'ngx-scrollbar';
import { DefaultEventStyle, DefaultTimeOptions, EndHour, StartHour } from './constants';
import { CalendarEvent, EventDuration, TimeOption } from './type';
import { getFormattedTimeValue, getTimeFromList } from './utils';

@Component({
	selector: 'sim-event-dialog',
	providers: [provideIcons({ lucideCalendarPlus, lucidePlus })],
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIcon,
		HlmButton,
		HlmDialog,
		HlmDialogContent,
		HlmButton,
		HlmInput,
		HlmLabel,
		HlmCheckbox,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmDatePicker,
		NgScrollbar,
		HlmScrollArea,
		BrnSelectImports,
		HlmSelectImports,
		HlmRadioGroup,
		HlmRadio,
	],
	template: `
		<hlm-dialog autoFocus="first-tabbable">
			<button brnDialogTrigger hlmBtn size="sm" class="flex items-center gap-2">
				<ng-icon name="lucidePlus" />
				<span class="hidden sm:inline">New Event</span>
			</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg p-0 sm:max-h-[min(900px,90vh)] sm:max-w-100 sm:min-w-100"
				*brnDialogContent="let ctx">
				<ng-scrollbar hlm>
					<div class="p-6">
						<div class="mb-4 flex flex-col gap-2">
							<div class="flex size-11 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideCalendarPlus" size="sm" />
							</div>
							<div class="flex flex-col gap-1">
								<h2 class="text-lg leading-none font-semibold">Create new event</h2>
							</div>
						</div>
						<form [formGroup]="form">
							<div class="flex flex-col gap-4">
								<div class="flex flex-col gap-2">
									<label hlmLabel for="title" class="text-sm">Title</label>
									<input
										hlmInput
										id="title"
										formControlName="title"
										class="h-9 w-full"
										type="text"
										placeholder="Event title" />
								</div>

								<div class="flex flex-col gap-2">
									<label hlmLabel for="description" class="text-sm">Description</label>
									<textarea hlmInput class="min-h-20 w-full" id="description" formControlName="description"></textarea>
								</div>

								<div class="flex flex-row justify-between gap-4">
									<div class="flex flex-1 flex-col gap-4">
										<div class="flex w-full flex-col gap-2 text-sm">
											<label hlmLabel for="start-date" class="text-sm">Start date</label>
											<hlm-date-picker class="h-9 w-full" formControlName="startDate" [autoCloseOnSelect]="true">
												<span>Pick start date</span>
											</hlm-date-picker>
										</div>
										<div class="flex w-full flex-col gap-2 text-sm">
											<label hlmLabel for="end-date" class="text-sm">End date</label>
											<hlm-date-picker class="h-9 w-full" formControlName="endDate" [autoCloseOnSelect]="true">
												<span>Pick end date</span>
											</hlm-date-picker>
										</div>
									</div>

									@if (!isAllDay()) {
										<div class="flex flex-col gap-4">
											<div class="flex w-full flex-col gap-2 text-sm">
												<label hlmLabel for="start-time" class="flex flex-col gap-2 text-sm">Start time</label>
												<brn-select class="inline-block w-full" placeholder="Time" formControlName="startTime">
													<hlm-select-trigger class="h-9 w-full">
														<hlm-select-value>
															<div class="flex items-center gap-x-2" *brnSelectValue="let value">
																<span class="text-foreground text-sm">
																	{{ value.label }}
																</span>
															</div>
														</hlm-select-value>
													</hlm-select-trigger>

													<hlm-select-content class="max-h-60 overflow-auto">
														<hlm-select-scroll-up />
														@for (timeOption of this.timeOptions(); track timeOption.label + 'start-time') {
															<hlm-option [value]="timeOption" class="gap-2">
																<span class="text-foreground text-sm">
																	{{ timeOption.label }}
																</span>
															</hlm-option>
														}
														<hlm-select-scroll-down />
													</hlm-select-content>
												</brn-select>
											</div>
											<div class="flex w-full flex-col gap-2 text-sm">
												<label hlmLabel for="end-time" class="flex flex-col gap-2 text-sm">End time</label>
												<brn-select class="inline-block w-full" placeholder="Time" formControlName="endTime">
													<hlm-select-trigger class="h-9 w-full">
														<hlm-select-value>
															<div class="flex items-center gap-x-2" *brnSelectValue="let value">
																<span class="text-foreground text-sm">
																	{{ value.label }}
																</span>
															</div>
														</hlm-select-value>
													</hlm-select-trigger>

													<hlm-select-content class="max-h-60 overflow-auto">
														<hlm-select-scroll-up />
														@for (timeOption of this.timeOptions(); track timeOption.label + 'end-time') {
															<hlm-option [value]="timeOption" class="gap-2">
																<span class="text-foreground text-sm">
																	{{ timeOption.label }}
																</span>
															</hlm-option>
														}
														<hlm-select-scroll-down />
													</hlm-select-content>
												</brn-select>
											</div>
										</div>
									}
								</div>
								@if (form.hasError('dateRange')) {
									<div class="bg-destructive/15 text-destructive rounded-md px-3 py-2 text-sm">
										{{ form.getError('dateRange')?.message }}
									</div>
								}

								<label
									hlmLabel
									for="is-default"
									class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
									<hlm-checkbox id="is-default" formControlName="isAllDay" class="border-input" />
									All day
								</label>

								<label hlmLabel class="flex flex-col gap-2 text-sm">
									Location
									<input hlmInput formControlName="location" class="h-9 w-full" type="text" />
								</label>
								<div class="flex flex-1 flex-col">
									<label hlmLabel class="flex-1">Tags</label>
									<div class="flex-1">
										<hlm-radio-group formControlName="color" class="mt-2 flex gap-1 rounded-md">
											@for (item of colorOptions; track item) {
												<label hlmLabel>
													<hlm-radio [value]="item">
														<div class="relative inline-flex size-6">
															<div
																class="bg-primary-foreground absolute inset-0 scale-0 rounded-full transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[30%]"></div>
															<div [class]="tagColor(item.bgClass)"></div>
														</div>
													</hlm-radio>
												</label>
											}
										</hlm-radio-group>
									</div>
								</div>

								<div class="flex justify-end gap-2">
									<button hlmBtn (click)="ctx.close()" variant="outline" size="sm">Cancel</button>
									<button hlmBtn size="sm" (click)="onSubmit()">
										{{ formMode() === 'create' ? 'Create' : 'Save' }}
									</button>
								</div>
							</div>
						</form>
					</div>
				</ng-scrollbar>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class EventDialogComponent implements OnInit {
	private _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialog);

	shouldShowButton = input(true);
	initialStartDate = input<Date>();
	initialEndDate = input<Date>();
	timeOptions = input<TimeOption[]>(DefaultTimeOptions);

	onEventAdded = output<CalendarEvent>();
	onEventUpdated = output<CalendarEvent>();

	isAllDay = signal(false);
	error = signal<string | null>(null);
	formMode = signal<'create' | 'edit'>('create');

	colorOptions = DefaultEventStyle;

	// Custom validator to check if start date is before end date
	private dateRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
		const startDate = control.get('startDate')?.value;
		const endDate = control.get('endDate')?.value;
		const startTime = control.get('startTime')?.value;
		const endTime = control.get('endTime')?.value;
		const isAllDay = control.get('isAllDay')?.value;

		if (!startDate || !endDate) {
			return null; // Don't validate if either date is missing
		}

		const start = new Date(startDate);
		const end = new Date(endDate);
		// If not all day, include time in the comparison
		if (!isAllDay && startTime && endTime) {
			const startHours = parseInt(startTime.value.split(':')[0], 10);
			const startMinutes = parseInt(startTime.value.split(':')[1], 10);
			const endHours = parseInt(endTime.value.split(':')[0], 10);
			const endMinutes = parseInt(endTime.value.split(':')[1], 10);

			if (startHours < StartHour || startHours > EndHour || endHours < StartHour || endHours > EndHour) {
				return { dateRange: { message: `Selected time must be between ${StartHour}:00 and ${EndHour}:00` } };
			}
			start.setHours(startHours, startMinutes, 0, 0);
			end.setHours(endHours, endMinutes, 0, 0);
		}

		if (start > end || (start === end && !isAllDay)) {
			return { dateRange: { message: 'End date cannot be before start date' } };
		}

		return null;
	};

	public form: FormGroup = this._formBuilder.group(
		{
			id: [null],
			title: [
				null,
				{
					validators: Validators.required,
				},
			],
			description: [null],
			startDate: [new Date(), { validators: Validators.required }],
			startTime: [null],
			endDate: [new Date(), { validators: Validators.required }],
			endTime: [null],
			isAllDay: [false],
			location: [null],
			color: [this.colorOptions[0]],
		},
		{ validators: this.dateRangeValidator },
	);

	ngOnInit(): void {
		// Set initial dates if provided
		if (this.initialStartDate()) {
			this.form.get('startDate')?.setValue(this.initialStartDate());
		}
		if (this.initialEndDate()) {
			this.form.get('endDate')?.setValue(this.initialEndDate());
		}

		// Set default times when form is initialized
		this.setDefaultTimes();

		this.form.get('isAllDay')?.valueChanges.subscribe((isAllDay) => {
			this.isAllDay.set(isAllDay);
			// Re-validate when all day status changes
			this.form.updateValueAndValidity();
		});

		// Re-validate when dates or times change
		this.form.get('startDate')?.valueChanges.subscribe(() => {
			this.form.updateValueAndValidity();
		});

		this.form.get('endDate')?.valueChanges.subscribe(() => {
			this.form.updateValueAndValidity();
		});

		this.form.get('startTime')?.valueChanges.subscribe(() => {
			this.form.updateValueAndValidity();
		});

		this.form.get('endTime')?.valueChanges.subscribe(() => {
			this.form.updateValueAndValidity();
		});
	}

	private setDefaultTimes(): void {
		const startTimeControl = this.form.get('startTime');
		const endTimeControl = this.form.get('endTime');

		if (!startTimeControl?.value || !endTimeControl?.value) {
			const now = new Date();
			// Set start time to next hour
			const nextHour = new Date(now);
			nextHour.setHours(now.getHours() + 1, 0, 0, 0);

			// Set end time to 30 minutes after start time
			const endTime = new Date(nextHour);
			endTime.setMinutes(30);

			// Format times to match TimeOption format
			const startTimeString = `${nextHour.getHours().toString().padStart(2, '0')}:${nextHour.getMinutes().toString().padStart(2, '0')}`;
			const endTimeString = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

			// Find matching time options
			const startTimeOption = this.timeOptions().find((option) => option.value === startTimeString);
			const endTimeOption = this.timeOptions().find((option) => option.value === endTimeString);

			if (startTimeOption && startTimeControl && !startTimeControl.value) {
				startTimeControl.setValue(startTimeOption);
			}

			if (endTimeOption && endTimeControl && !endTimeControl.value) {
				endTimeControl.setValue(endTimeOption);
			}
		}
	}

	public onSubmit(): void {
		if (this.form.valid) {
			const formValue = this.form.value;
			const event: CalendarEvent = {
				id: formValue.id ?? crypto.randomUUID(),
				title: formValue.title,
				description: formValue.description,
				start: new Date(formValue.startDate),
				end: new Date(formValue.endDate),
				allDay: formValue.isAllDay,
				location: formValue.location,
				color: formValue.color?.value ?? 'sky',
			};

			if (!formValue.isAllDay) {
				event.start.setHours(parseInt(formValue.startTime.value.split(':')[0], 10));
				event.start.setMinutes(parseInt(formValue.startTime.value.split(':')[1], 10));
				event.end.setHours(parseInt(formValue.endTime.value.split(':')[0], 10));
				event.end.setMinutes(parseInt(formValue.endTime.value.split(':')[1], 10));
			}

			if (this.formMode() === 'edit') {
				this.onEventUpdated.emit(event);
			} else {
				this.onEventAdded.emit(event);
			}
			this.dialogRef()?.close();
		} else {
			// Mark all fields as touched to show validation errors
			this.form.markAllAsTouched();
		}
	}

	public tagColor(color: string): string {
		return hlm(
			'ring-offset-background group-[.cdk-keyboard-focused]:ring-ring aspect-square rounded-full border group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50 group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2',
			color,
		);
	}

	/**
	 * Opens the dialog programmatically. Can be called from parent component.
	 */
	public openDialog(duration: EventDuration, shouldSetDefaultTime: boolean = true): void {
		this.form.reset();
		this.formMode.set('create');
		// Pre-fill dates if provided
		const startDate = duration?.startDate ? new Date(duration.startDate) : new Date();
		const endDate = duration?.endDate ? new Date(duration.endDate) : new Date();

		if (startDate) {
			this.form.get('startDate')?.setValue(duration?.startDate);
		}
		if (endDate) {
			this.form.get('endDate')?.setValue(duration?.endDate);
		} else if (duration?.startDate) {
			// If only start date provided, set end date to same day
			this.form.get('endDate')?.setValue(duration?.startDate);
		}

		if (shouldSetDefaultTime) {
			this.setDefaultTimes();
		} else {
			// Find matching time options
			const startTime = this.timeOptions().find((option) => option.value === getFormattedTimeValue(startDate));
			const endTime = this.timeOptions().find((option) => option.value === getFormattedTimeValue(endDate));
			this.form.get('startTime')?.setValue(startTime);
			this.form.get('endTime')?.setValue(endTime);
		}

		this.dialogRef()?.open();
	}

	public editEvent(event: CalendarEvent): void {
		this.form.reset();
		this.formMode.set('edit');
		this.form.setValue({
			id: event.id,
			title: event.title,
			description: event?.description,
			startDate: event.start,
			endDate: event.end,
			isAllDay: event?.allDay ?? false,
			location: event?.location ?? null,
			startTime: event?.allDay ? null : getTimeFromList(this.timeOptions(), getFormattedTimeValue(event.start)),
			endTime: event?.allDay ? null : getTimeFromList(this.timeOptions(), getFormattedTimeValue(event.end)),
			color: this.colorOptions.find((c) => c.value === event.color) || null,
		});

		this.dialogRef()?.open();
	}
}
