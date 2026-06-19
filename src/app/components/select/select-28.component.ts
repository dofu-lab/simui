import { Component } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlertCircle, lucideCirclePause, lucideClock, lucideSquareCheck, lucideSquareX } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSelectImports } from '@spartan-ng/helm/select';

type Option = {
	value: string;
	label: string;
	icon: IconType;
	iconColor: string;
};

@Component({
	selector: 'sim-select-28',
	imports: [NgIcon, HlmIcon, BrnSelectImports, HlmSelectImports, HlmFieldImports],
	providers: [provideIcons({ lucideSquareCheck, lucideClock, lucideCirclePause, lucideSquareX, lucideAlertCircle })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-28">Simple select with icon</label>
				<hlm-select id="select-28" [value]="options[0]">
					<hlm-select-trigger class="[&>button]:w-full">
						<span class="flex items-center gap-2" *hlmSelectValueTemplate="let value">
							<ng-icon hlm size="sm" [name]="value.icon" [class]="value.iconColor" />
							<span class="truncate">{{ value.label }}</span>
						</span>
					</hlm-select-trigger>
					<hlm-select-content
						*hlmSelectPortal
						class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
						<hlm-select-group>
							@for (option of options; track option.label) {
								<hlm-select-item [value]="option">
									<span class="flex items-center gap-2">
										<ng-icon hlm size="sm" [name]="option.icon" [class]="option.iconColor" />
										<span class="truncate">{{ option.label }}</span>
									</span>
								</hlm-select-item>
							}
						</hlm-select-group>
					</hlm-select-content>
				</hlm-select>
			</div>
		</div>
	`,
})
export class Select28Component {
	protected readonly options: Option[] = [
		{ value: 'completed', label: 'Completed', icon: 'lucideSquareCheck', iconColor: 'text-emerald-500' },
		{ value: 'in-progress', label: 'In Progress', icon: 'lucideClock', iconColor: 'text-yellow-500' },
		{ value: 'on-hold', label: 'On Hold', icon: 'lucideCirclePause', iconColor: 'text-blue-500' },
		{ value: 'cancelled', label: 'Cancelled', icon: 'lucideSquareX', iconColor: 'text-gray-500' },
		{ value: 'failed', label: 'Failed', icon: 'lucideAlertCircle', iconColor: 'text-red-500' },
	];
}
