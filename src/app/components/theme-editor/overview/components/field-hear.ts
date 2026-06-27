import { Component } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmFieldImports } from '@spartan-ng/helm/field';

interface HearOption {
	label: string;
	value: string;
}

@Component({
	selector: 'app-field-hear',
	imports: [HlmCardImports, HlmFieldImports, HlmCheckboxImports],
	template: `
		<div hlmCard class="py-4 shadow-none">
			<div hlmCardContent>
				<form>
					<div hlmFieldGroup>
						<fieldset hlmFieldSet class="gap-4">
							<legend hlmFieldLegend>How did you hear about us?</legend>
							<p hlmFieldDescription class="line-clamp-1">
								Select the option that best describes how you heard about us.
							</p>
							<div hlmFieldGroup class="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
								@for (option of _options; track option.value) {
									<label hlmFieldLabel [for]="uniqueId(option.value)" class="w-fit!">
										<div
											hlmField
											orientation="horizontal"
											class="gap-1.5 overflow-hidden px-3! py-1.5! transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:px-2! motion-reduce:transition-none">
											<hlm-checkbox
												class="-ml-6 -translate-x-1 rounded-full! transition-all duration-100 ease-linear data-[state=checked]:ml-0 data-[state=checked]:translate-x-0 motion-reduce:transition-none"
												[inputId]="uniqueId(option.value)"
												[checked]="option.value === 'social-media'" />
											<div hlmFieldTitle>{{ option.label }}</div>
										</div>
									</label>
								}
							</div>
						</fieldset>
					</div>
				</form>
			</div>
		</div>
	`,
})
export class FieldHear {
	private readonly instanceId = Math.random().toString(36).substring(2, 9);

	protected uniqueId(suffix: string): string {
		return `${suffix}-${this.instanceId}`;
	}

	protected readonly _options: HearOption[] = [
		{
			label: 'Social Media',
			value: 'social-media',
		},

		{
			label: 'Search Engine',
			value: 'search-engine',
		},
		{
			label: 'Referral',
			value: 'referral',
		},
		{
			label: 'Other',
			value: 'other',
		},
	];
}
