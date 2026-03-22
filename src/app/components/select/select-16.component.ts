import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-16',
	imports: [NgIcon, BrnSelectImports, HlmSelectImports, HlmFieldImports],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-16">Select with icon</label>
				<brn-select placeholder="Select a framework" id="select-16">
					<hlm-select-trigger class="relative [&>button]:w-full [&>button]:ps-9">
						<div
							class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
							<ng-icon name="lucideClock" size="sm" [style.--ng-icon__size]="'16px'" />
						</div>
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content>
						<hlm-option value="1">00:00 AM - 11:59 PM</hlm-option>
						<hlm-option value="2">01:00 AM - 12:59 PM</hlm-option>
						<hlm-option value="3">02:00 AM - 01:59 PM</hlm-option>
						<hlm-option value="4">03:00 AM - 02:59 PM</hlm-option>
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select16Component {}
