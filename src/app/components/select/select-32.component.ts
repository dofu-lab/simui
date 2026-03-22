import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

type Option = {
	value: string;
	label: string;
	avatarUrl: string;
	username: string;
};

@Component({
	selector: 'sim-select-32',
	host: { class: 'block w-full' },
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-32">Select options with portrait</label>
				<brn-select placeholder="Select an option" id="select-32" [value]="options[2]">
					<hlm-select-trigger class="[&>button]:h-fit! [&>button]:w-full [&>button]:pl-2">
						<hlm-select-value class="h-fit">
							<span class="flex items-center gap-2" *brnSelectValue="let value">
								<img [src]="'assets/avatars/' + value.avatarUrl" alt="{{ value.label }}" class="size-10 rounded-full" />
								<span class="text-left">
									<span class="block font-medium">{{ value.label }}</span>
									<span class="text-muted-foreground mt-0.5 block text-xs">
										{{ value.username }}
									</span>
								</span>
							</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content class="[&>button]:h-fit">
						<hlm-select-label>Marketing team</hlm-select-label>
						@for (option of options; track option.label) {
							<hlm-option [value]="option">
								<span class="flex items-center gap-2">
									<img
										[src]="'assets/avatars/' + option.avatarUrl"
										alt="{{ option.label }}"
										class="size-10 rounded-full" />
									<span class="text-left">
										<span class="block font-medium">{{ option.label }}</span>
										<span class="text-muted-foreground mt-0.5 block text-left text-xs">
											{{ option.username }}
										</span>
									</span>
								</span>
							</hlm-option>
						}
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select32Component {
	protected readonly options: Option[] = [
		{ value: 'user1', label: 'Candice Wu', username: '@candicewu', avatarUrl: 'candice-wu.jpg' },
		{ value: 'user2', label: 'Olivia Rhye', username: '@oliviarhye', avatarUrl: 'olivia-rhye.jpg' },
		{ value: 'user3', label: 'Phoenix Baker', username: '@phoenixbaker', avatarUrl: 'phoenix-baker.jpg' },
	];
}
