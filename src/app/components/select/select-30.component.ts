import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

type Option = {
	value: string;
	label: string;
	avatarUrl: string;
};

@Component({
	selector: 'sim-select-30',
	host: { class: 'block w-full' },
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-30">Select with avatar</label>
				<brn-select placeholder="Select an option" id="select-30" [value]="options[0]">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value>
							<span class="flex items-center gap-2" *brnSelectValue="let value">
								<img [src]="'assets/avatars/' + value.avatarUrl" alt="{{ value.label }}" class="size-5 rounded" />
								<span class="truncate">{{ value.label }}</span>
							</span>
						</hlm-select-value>
					</hlm-select-trigger>
					<hlm-select-content
						class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
						<hlm-select-label>Marketing team</hlm-select-label>
						@for (option of options; track option.label) {
							<hlm-option [value]="option">
								<span class="flex items-center gap-2">
									<img [src]="'assets/avatars/' + option.avatarUrl" alt="{{ option.label }}" class="size-5 rounded" />
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
export class Select30Component {
	protected readonly options: Option[] = [
		{ value: 'user1', label: 'Candice Wu', avatarUrl: 'candice-wu.jpg' },
		{ value: 'user2', label: 'Olivia Rhye', avatarUrl: 'olivia-rhye.jpg' },
		{ value: 'user3', label: 'Phoenix Baker', avatarUrl: 'phoenix-baker.jpg' },
	];
}
