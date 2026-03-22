import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

type Option = {
	label: string;
	description: string;
};

@Component({
	selector: 'sim-select-29',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-29">Select with flag</label>
				<brn-select
					id="select-29"
					scrollable="true"
					class="inline-block w-full"
					placeholder="Select your country"
					formControlName="country"
					[value]="selectedCountry">
					<hlm-select-trigger class="h-9 w-full">
						<hlm-select-value>
							<div class="flex items-center gap-x-2" *brnSelectValue="let value">
								<span class="text-lg leading-none">{{ value.flag }}</span>
								<span class="truncate">{{ value.label }}</span>
							</div>
						</hlm-select-value>
					</hlm-select-trigger>

					<hlm-select-content
						class="max-h-96 [&>div]:[-ms-overflow-style:none] [&>div]:[-webkit-overflow-scrolling:touch] [&>div]:[scrollbar-width:none] [&>div]:[&::-webkit-scrollbar]:hidden">
						<hlm-select-scroll-up />
						@for (country of countries; track country.continent) {
							<hlm-select-group>
								<hlm-select-label>{{ country.continent }}</hlm-select-label>
								@for (item of country.items; track item.label) {
									<hlm-option [value]="item" class="gap-2">
										<span class="text-lg leading-none">{{ item.flag }}</span>
										<span class="truncate">{{ item.label }}</span>
									</hlm-option>
								}
							</hlm-select-group>
						}
						<hlm-select-scroll-down />
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select29Component {
	protected readonly countries = [
		{
			continent: 'America',
			items: [
				{ flag: '🇺🇸', label: 'United States', value: '1' },
				{ flag: '🇨🇦', label: 'Canada', value: '2' },
				{ flag: '🇲🇽', label: 'Mexico', value: '3' },
			],
		},
		{
			continent: 'Africa',
			items: [
				{ flag: '🇿🇦', label: 'South Africa', value: '4' },
				{ flag: '🇳🇬', label: 'Nigeria', value: '5' },
				{ flag: '🇲🇦', label: 'Morocco', value: '6' },
			],
		},
		{
			continent: 'Asia',
			items: [
				{ flag: '🇻🇳', label: 'Vietnam', value: '7' },
				{ flag: '🇯🇵', label: 'Japan', value: '8' },
				{ flag: '🇮🇳', label: 'India', value: '9' },
			],
		},
		{
			continent: 'Europe',
			items: [
				{ flag: '🇬🇧', label: 'United Kingdom', value: '10' },
				{ flag: '🇫🇷', label: 'France', value: '11' },
				{ flag: '🇩🇪', label: 'Germany', value: '12' },
			],
		},
		{
			continent: 'Oceania',
			items: [
				{ flag: '🇦🇺', label: 'Australia', value: '13' },
				{ flag: '🇳🇿', label: 'New Zealand', value: '14' },
			],
		},
	];
	protected readonly selectedCountry = this.countries[2].items[0];
}
