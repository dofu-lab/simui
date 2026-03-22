import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

type Option = {
	label: string;
	description: string;
	value?: string;
};

@Component({
	selector: 'sim-select-41',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-41">Select with left text</label>
				<brn-select placeholder="Select an option" id="select-41" value="1">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value>
							<span *brnSelectValue="let value">
								Selected Plan:
								<span>{{ value.label }}</span>
							</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content>
						@for (option of options; track option.value) {
							<hlm-option [value]="option">
								<div class="flex flex-col">
									{{ option.label }}
									<p class="text-muted-foreground mt-1 block text-xs" data-desc>{{ option.description }}</p>
								</div>
							</hlm-option>
						}
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select41Component {
	protected readonly options: Option[] = [
		{ label: 'Standard', description: 'Ideal for individuals', value: '1' },
		{ label: 'Pro', description: 'For professional users', value: '2' },
		{ label: 'Enterprise', description: 'Built for large teams', value: '3' },
	];
}
