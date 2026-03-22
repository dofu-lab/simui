import { Component, computed } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-26',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-26">Timezone select</label>
				<hlm-select scrollable="true" placeholder="Select an option" id="select-26" value="Asia/Saigon">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content
						class="max-h-96 [&>div]:[-ms-overflow-style:none] [&>div]:[-webkit-overflow-scrolling:touch] [&>div]:[scrollbar-width:none] [&>div]:[&::-webkit-scrollbar]:hidden">
						<hlm-select-scroll-up />
						@for (timezone of formattedTimezones(); track timezone.label) {
							<hlm-option [value]="timezone.value">{{ timezone.label }}</hlm-option>
						}
						<hlm-select-scroll-down />
					</hlm-select-content>
				</hlm-select>
			</div>
		</div>
	`,
})
export class Select26Component {
	private readonly timezones = Intl.supportedValuesOf('timeZone');
	protected readonly formattedTimezones = computed(() => {
		return this.timezones
			.map((timezone) => {
				const formatter = new Intl.DateTimeFormat('en', {
					timeZone: timezone,
					timeZoneName: 'shortOffset',
				});
				const parts = formatter.formatToParts(new Date());
				const offset = parts.find((part) => part.type === 'timeZoneName')?.value || '';
				const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset;

				return {
					label: `(${modifiedOffset}) ${timezone.replaceAll('_', ' ')}`,
					numericOffset: Number.parseInt(offset.replace('GMT', '').replace('+', '') || '0', 10),
					value: timezone,
				};
			})
			.sort((a, b) => a.numericOffset - b.numericOffset);
	});
}
