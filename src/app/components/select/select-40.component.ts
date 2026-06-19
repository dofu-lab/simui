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
	selector: 'sim-select-40',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-40">Select with description</label>
				<hlm-select id="select-40" [value]="options[0]">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value placeholder="Select an option">
							<span *hlmSelectValueTemplate="let value">{{ value.label }}</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content *hlmSelectPortal>
						<hlm-select-group>
							@for (option of options; track option.value) {
								<hlm-select-item [value]="option">
									<div class="flex flex-col">
										{{ option.label }}
										<p class="text-muted-foreground mt-1 block text-xs" data-desc>{{ option.description }}</p>
									</div>
								</hlm-select-item>
							}
						</hlm-select-group>
					</hlm-select-content>
				</hlm-select>
			</div>
		</div>
	`,
})
export class Select40Component {
	protected readonly options: Option[] = [
		{ label: 'Standard Plan', description: 'Ideal for individuals', value: '1' },
		{ label: 'Pro Plan', description: 'For professional users', value: '2' },
		{ label: 'Enterprise Plan', description: 'Built for large teams', value: '3' },
	];
}
