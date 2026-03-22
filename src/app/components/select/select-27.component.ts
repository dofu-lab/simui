import { Component, input } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { ClassValue } from 'clsx';

type Option = {
	value: string;
	label: string;
	dotColor: string;
};

@Component({
	selector: 'sim-status-dot',
	host: { class: 'flex items-center gap-2' },
	template: `
		<svg
			aria-hidden="true"
			fill="currentColor"
			height="8"
			viewBox="0 0 8 8"
			width="8"
			xmlns="http://www.w3.org/2000/svg"
			[class]="userClass()">
			<circle cx="4" cy="4" r="4" />
		</svg>
	`,
})
export class StatusDot {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
}

@Component({
	selector: 'sim-select-27',
	imports: [StatusDot, BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-27">Simple select with status indicator</label>
				<brn-select placeholder="Select an option" id="select-27" [value]="options[0]">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value>
							<span class="flex items-center gap-2" *brnSelectValue="let value">
								<sim-status-dot [class]="value.dotColor" />
								<span class="truncate">{{ value.label }}</span>
							</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content
						class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
						@for (option of options; track option.label) {
							<hlm-option [value]="option">
								<span class="flex items-center gap-2">
									<sim-status-dot [class]="option.dotColor" />
									<span class="truncate">{{ option.label }}</span>
								</span>
							</hlm-option>
						}
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select27Component {
	protected readonly options: Option[] = [
		{ value: 'completed', label: 'Completed', dotColor: 'text-emerald-500' },
		{ value: 'in-progress', label: 'In Progress', dotColor: 'text-yellow-500' },
		{ value: 'on-hold', label: 'On Hold', dotColor: 'text-blue-500' },
		{ value: 'cancelled', label: 'Cancelled', dotColor: 'text-gray-500' },
		{ value: 'failed', label: 'Failed', dotColor: 'text-red-500' },
	];
}
