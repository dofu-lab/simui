import { Component, computed } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-11',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="native-select-11">Timezone select (native)</label>
				<hlm-native-select id="native-select-11" value="Asia/Saigon">
					@for (timezone of formattedTimezones(); track timezone.label) {
						<option hlmNativeSelectOption [value]="timezone.value">{{ timezone.label }}</option>
					}
				</hlm-native-select>
			</div>
		</div>
	`,
})
export class Select11Component {
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
