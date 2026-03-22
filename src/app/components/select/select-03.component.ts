import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-03',
	imports: [NgIcon, HlmIcon, HlmNativeSelectImports, HlmFieldImports],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="native-select-03">Select with icon (native)</label>
				<div class="group relative">
					<hlm-native-select id="native-select-03" class="[&>select]:ps-9">
						<option hlmNativeSelectOption value="">00:00 AM - 11:59 PM</option>
						<option hlmNativeSelectOption value="01:00 AM - 12:59 PM">01:00 AM - 12:59 PM</option>
						<option hlmNativeSelectOption value="02:00 AM - 01:59 PM">02:00 AM - 01:59 PM</option>
						<option hlmNativeSelectOption value="03:00 AM - 02:59 PM">03:00 AM - 02:59 PM</option>
					</hlm-native-select>
					<div
						class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
						<ng-icon hlm name="lucideClock" size="sm" />
					</div>
				</div>
			</div>
		</div>
	`,
})
export class Select03Component {}
