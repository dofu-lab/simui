import { Component, computed, input } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';

type Option = {
	value: string;
	label: string;
	style: string;
};

@Component({
	selector: 'sim-placeholder-avatar',
	template: `
		<span aria-hidden="true" [class]="computedAvatarClass()">{{ avatarText() }}</span>
	`,
})
export class PlaceholderAvatar {
	public readonly option = input.required<Option>();

	protected readonly computedAvatarClass = computed(() => {
		return hlm(
			'flex size-5 items-center justify-center rounded bg-muted font-medium text-muted-foreground text-xs',
			this.option().style,
		);
	});
	protected readonly avatarText = computed(() => {
		return this.option().label[0].toUpperCase();
	});
}

@Component({
	selector: 'sim-select-31',
	imports: [PlaceholderAvatar, BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-31">Select with placeholder avatar</label>
				<brn-select placeholder="Select an option" id="select-31" [value]="options[0]">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value>
							<span class="flex items-center gap-2" *brnSelectValue="let value">
								<sim-placeholder-avatar [option]="value" />
								<span class="truncate">{{ value.label }}</span>
							</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content>
						<hlm-select-label>Engineering team</hlm-select-label>
						@for (option of options; track option.label) {
							<hlm-option [value]="option">
								<span class="flex items-center gap-2">
									<sim-placeholder-avatar [option]="option" />
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
export class Select31Component {
	protected readonly options: Option[] = [
		{ value: 'user1', label: 'Alan Cooper', style: 'bg-indigo-400/20 text-indigo-500' },
		{ value: 'user2', label: 'Phoenix Baker', style: 'bg-yellow-400/20 text-yellow-500' },
		{ value: 'user3', label: 'Candice Wu', style: 'bg-blue-400/20 text-blue-500' },
		{ value: 'user4', label: 'Olivia Rhye', style: 'bg-gray-400/20 text-gray-500' },
		{ value: 'user5', label: 'Jane Smith', style: 'bg-red-400/20 text-red-500' },
	];
}
