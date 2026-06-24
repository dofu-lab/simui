import { DatePipe } from '@angular/common';
import { Component, computed, inject, Injectable, signal } from '@angular/core';
import { type AbstractControl } from '@angular/forms';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTime } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight, lucidePlus, lucideX } from '@ng-icons/lucide';
import { ErrorStateMatcher } from '@spartan-ng/brain/forms';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { hlm } from '@spartan-ng/helm/utils';

@Injectable()
class ShowOnSubmitErrorStateMatcher implements ErrorStateMatcher {
	readonly submitted = signal(false);
	isInvalid(control: AbstractControl): boolean {
		return !!(control?.invalid && this.submitted());
	}
}

interface CalendarEvent {
	id: string;
	eventName: string;
	time: string;
	date: Date;
	category: { value: string; label: string; bgClass: string; textClass: string; dotClass: string; badgeClass: string };
}

interface EventFormModel {
	eventName: string;
	time: string;
	category: {
		value: string;
		label: string;
		bgClass: string;
		textClass: string;
		dotClass: string;
		badgeClass: string;
	} | null;
}

export const DefaultEventStyle = [
	{
		value: 'sky',
		label: 'Sky',
		bgClass: 'bg-sky-400 data-[state=checked]:bg-sky-400 border-sky-400 data-[state=checked]:border-sky-400',
	},
	{
		value: 'amber',
		label: 'Amber',
		bgClass: 'bg-amber-400 data-[state=checked]:bg-amber-400 border-amber-400 data-[state=checked]:border-amber-400',
	},
	{
		value: 'violet',
		label: 'Violet',
		bgClass:
			'bg-violet-400 data-[state=checked]:bg-violet-400 border-violet-400 data-[state=checked]:border-violet-400',
	},
	{
		value: 'rose',
		label: 'Rose',
		bgClass: 'bg-rose-400 data-[state=checked]:bg-rose-400 border-rose-400 data-[state=checked]:border-rose-400',
	},
	{
		value: 'emerald',
		label: 'Emerald',
		bgClass:
			'bg-emerald-400 data-[state=checked]:bg-emerald-400 border-emerald-400 data-[state=checked]:border-emerald-400',
	},
	{
		value: 'orange',
		label: 'Orange',
		bgClass:
			'bg-orange-400 data-[state=checked]:bg-orange-400 border-orange-400 data-[state=checked]:border-orange-400',
	},
];

@Component({
	selector: 'sim-card-15',
	styles: [
		`
			@keyframes event-enter {
				from {
					opacity: 0;
					transform: translateY(-6px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
			.event-enter {
				animation: event-enter 220ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
			}
		`,
	],
	imports: [
		NgIcon,
		DatePipe,
		MaskitoDirective,
		FormField,
		HlmIconImports,
		HlmCardImports,
		HlmButtonImports,
		HlmInputImports,
		HlmCalendarImports,
		HlmBadgeImports,
		HlmRadioGroupImports,
		HlmSeparatorImports,
	],
	providers: [
		provideIcons({ lucideChevronLeft, lucideChevronRight, lucidePlus, lucideX }),
		ShowOnSubmitErrorStateMatcher,
		{ provide: ErrorStateMatcher, useExisting: ShowOnSubmitErrorStateMatcher },
	],
	template: `
		<section class="bg-muted flex flex-col gap-4 rounded-2xl p-1.5 pt-0 shadow-none">
			<div hlmCardHeader class="flex w-full items-center justify-between px-4 pt-4">
				<h3 hlmCardTitle>{{ selectedDate() | date: 'MMM yyyy' }}</h3>
				<div class="flex items-center gap-1">
					<button hlmBtn variant="outline" size="sm" class="rounded-full" (click)="setCurrentMonth()">Today</button>
					<button hlmBtn variant="outline" size="icon-sm" class="rounded-full" (click)="jumpToPreviousMonth()">
						<ng-icon name="lucideChevronLeft" />
					</button>
					<button hlmBtn variant="outline" size="icon-sm" class="rounded-full" (click)="jumpToNextMonth()">
						<ng-icon name="lucideChevronRight" />
					</button>
				</div>
			</div>
			<div hlmCardContent class="bg-background rounded-xl px-3">
				<hlm-calendar
					[class]="calendarClass"
					[(date)]="selectedDate"
					[min]="minDate"
					[max]="maxDate"
					[defaultFocusedDate]="focusedDate()" />
				<div class="flex w-full flex-col items-start justify-center gap-2 border-t py-3">
					<div class="text-muted-foreground text-sm">{{ selectedDate() | date: 'EEEE, MMM dd' }}</div>
					<div class="flex w-full flex-col gap-2">
						@for (event of selectedDateEvents(); track event.id) {
							<div class="event-enter flex flex-row items-center justify-between px-0.5 py-1">
								<div class="flex items-center gap-2 text-sm">
									<div [class]="'size-2 rounded-full ' + event.category.dotClass"></div>
									<span class="text-muted-foreground/80 text-xs">{{ event.time }}</span>
									<span class="text-base">{{ event.eventName }}</span>
								</div>
								<span hlmBadge variant="secondary" [class]="event.category.badgeClass">{{ event.category.label }}</span>
							</div>
						} @empty {
							<p class="text-muted-foreground px-0.5 text-xs">No events for this day.</p>
						}

						<div
							class="grid transition-[grid-template-rows] duration-200 ease-out"
							[class]="mode() === 'edit' ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'">
							<div class="overflow-hidden">
								<button hlmBtn variant="ghost" class="group/add w-full justify-start ps-1" (click)="mode.set('edit')">
									<span
										class="bg-secondary group-hover/add:bg-primary text-accent-foreground me-2 flex size-5 items-center justify-center rounded-full group-hover/add:text-white">
										<ng-icon hlm size="sm" name="lucidePlus" />
									</span>
									Add event
								</button>
							</div>
						</div>
						<div
							class="grid transition-[grid-template-rows] duration-280 ease-[cubic-bezier(0.215,0.61,0.355,1)]"
							[class]="mode() === 'edit' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
							<div class="overflow-hidden">
								<div class="flex flex-col -space-y-px rounded-md border shadow-xs">
									<div class="z-10 flex w-full flex-row -space-x-px">
										<input
											hlmInput
											[formField]="eventForm.eventName"
											class="w-full flex-1 rounded-none rounded-tl-md border-none text-sm shadow-none focus-visible:z-10"
											type="text"
											size="sm"
											placeholder="What's on?" />
										<hlm-separator orientation="vertical" class="bg-border" />
										<input
											hlmInput
											[formField]="eventForm.time"
											class="w-20 rounded-none rounded-tr-md border-none text-sm shadow-none focus-visible:z-10"
											type="text"
											placeholder="--:--"
											size="sm"
											[maskito]="timeMask" />
									</div>
									<div class="bg-muted flex w-full justify-between rounded-b-md p-2">
										<div class="flex items-center gap-2">
											<hlm-radio-group [formField]="eventForm.category" class="flex gap-1 rounded-md">
												@for (item of colorOptions; track item) {
													<label hlmLabel>
														<hlm-radio class="[&_brn-radio]:gap-x-0" [value]="item">
															<div class="relative inline-flex size-6">
																<div
																	class="bg-primary-foreground absolute inset-0 scale-0 rounded-full transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[30%]"></div>
																<div [class]="tagColor(item.bgClass)"></div>
															</div>
														</hlm-radio>
													</label>
												}
											</hlm-radio-group>
											<span [class]="_eventModel().category?.textClass">{{ _eventModel().category?.label }}</span>
										</div>
										<div class="flex items-center gap-1">
											<button hlmBtn variant="ghost" size="icon-sm" class="rounded-full" (click)="cancelEdit()">
												<ng-icon name="lucideX" />
											</button>
											<button hlmBtn size="sm" class="rounded-full" (click)="onSubmit()">Add</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
})
export class Card15Component {
	protected selectedDate = signal(new Date());
	protected focusedDate = signal(new Date());
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
	protected readonly mode = signal<'edit' | 'view'>('view');
	protected readonly timeMask: MaskitoOptions = maskitoTime({ mode: 'HH:MM' });
	protected readonly colorOptions = [
		{
			value: 'meeting',
			label: 'Meeting',
			textClass: 'text-sm text-sky-400',
			dotClass: 'bg-sky-400',
			badgeClass: 'bg-sky-400/10! text-sky-600!',
			bgClass: 'bg-sky-400 data-[state=checked]:bg-sky-400 border-sky-400 data-[state=checked]:border-sky-400',
		},
		{
			value: 'personal',
			label: 'Personal',
			textClass: 'text-sm text-amber-400',
			dotClass: 'bg-amber-400',
			badgeClass: 'bg-amber-400/10! text-amber-600!',
			bgClass: 'bg-amber-400 data-[state=checked]:bg-amber-400 border-amber-400 data-[state=checked]:border-amber-400',
		},
		{
			value: 'work',
			label: 'Work',
			textClass: 'text-sm text-violet-400',
			dotClass: 'bg-violet-400',
			badgeClass: 'bg-violet-400/10! text-violet-600!',
			bgClass:
				'bg-violet-400 data-[state=checked]:bg-violet-400 border-violet-400 data-[state=checked]:border-violet-400',
		},
		{
			value: 'review',
			label: 'Review',
			textClass: 'text-sm text-rose-400',
			dotClass: 'bg-rose-400',
			badgeClass: 'bg-rose-400/10! text-rose-600!',
			bgClass: 'bg-rose-400 data-[state=checked]:bg-rose-400 border-rose-400 data-[state=checked]:border-rose-400',
		},
		{
			value: 'focus',
			label: 'Focus',
			textClass: 'text-sm text-emerald-400',
			dotClass: 'bg-emerald-400',
			badgeClass: 'bg-emerald-400/10! text-emerald-600!',
			bgClass:
				'bg-emerald-400 data-[state=checked]:bg-emerald-400 border-emerald-400 data-[state=checked]:border-emerald-400',
		},
	];

	private readonly _submitMatcher = inject(ShowOnSubmitErrorStateMatcher);

	protected readonly events = signal<CalendarEvent[]>([
		{
			id: '1',
			eventName: 'Coffee with mentor',
			time: '10:00',
			date: new Date(),
			category: {
				value: 'personal',
				label: 'Personal',
				textClass: 'text-sm text-amber-400',
				dotClass: 'bg-amber-400',
				badgeClass: 'bg-amber-400/10!',
				bgClass:
					'bg-amber-400 data-[state=checked]:bg-amber-400 border-amber-400 data-[state=checked]:border-amber-400',
			},
		},
	]);

	protected readonly selectedDateEvents = computed(() => {
		const selected = this.selectedDate();
		return this.events().filter((event) => event.date.toDateString() === selected.toDateString());
	});

	protected readonly _eventModel = signal<EventFormModel>({
		eventName: '',
		time: '',
		category: null,
	});
	protected readonly eventForm = form(this._eventModel, (schema) => {
		required(schema.eventName);
		required(schema.time);
		required(schema.category);
	});

	protected readonly calendarClass = hlm(
		'border-none px-0',
		'[&_button[brncalendarnextbutton]]:relative! [&_button[brncalendarpreviousbutton]]:relative!',
		'[&_button[brncalendarcellbutton]]:size-12 [&_td[brncalendarcell]]:size-12 [&_th]:w-12',
		'[&_div:has(>[brncalendarheader])]:justify-start! [&_div:has(>[brncalendarheader])]:pl-2!',
		'[&_thead]:border-b [&_thead_th]:pb-2',
		'[&_div:has(+_table)]:hidden',
	);

	protected tagColor(color: string): string {
		return hlm(
			'ring-offset-background group-[.cdk-keyboard-focused]:ring-ring aspect-square rounded-full border group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50 group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2',
			color,
		);
	}

	protected setCurrentMonth(): void {
		const newDate = new Date();
		this.selectedDate.set(newDate);
		this.focusedDate.set(newDate);
	}

	protected jumpToPreviousMonth() {
		const newDate = new Date(this.focusedDate());
		newDate.setMonth(newDate.getMonth() - 2);
		this.focusedDate.set(newDate);
	}

	protected jumpToNextMonth() {
		const newDate = new Date(this.focusedDate());
		newDate.setMonth(newDate.getMonth() + 2);
		this.focusedDate.set(newDate);
	}

	protected cancelEdit(): void {
		this._submitMatcher.submitted.set(false);
		this._eventModel.set({ eventName: '', time: '', category: null });
		this.mode.set('view');
	}

	protected onSubmit(): void {
		this._submitMatcher.submitted.set(true);
		submit(this.eventForm, async () => {
			const model = this._eventModel();
			this.events.update((events) => [
				...events,
				{
					id: crypto.randomUUID(),
					eventName: model.eventName,
					time: model.time,
					date: this.selectedDate(),
					category: model.category!,
				},
			]);
			this._submitMatcher.submitted.set(false);
			this._eventModel.set({ eventName: '', time: '', category: null });
			this.mode.set('view');
		});
	}
}
