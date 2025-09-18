import { Component, model } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-16',
	imports: [HlmSwitch, HlmLabel],
	template: `
		<div
			class="border-input data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none"
			[attr.data-checked]="value() ? 'true' : 'false'">
			<label
				class="flex items-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
				hlmLabel>
				<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
						fill="white" />
					<path
						d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
						stroke="#E4E7EC" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.9053 22.4392C21.3266 23.7699 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.6399C8 10.7062 12.0478 6.7066 17.0409 6.7066C19.2787 6.7066 21.3266 7.50994 22.9053 8.84066C24.484 7.50994 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
						fill="#ED0006" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3625 26.0818 15.6399C26.0818 12.9173 24.8492 10.4792 22.9053 8.84066C24.484 7.50993 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
						fill="#F9A000" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.905 22.4392C24.8489 20.8007 26.0815 18.3625 26.0815 15.6399C26.0815 12.9174 24.8489 10.4792 22.905 8.8407C20.9611 10.4792 19.7285 12.9174 19.7285 15.6399C19.7285 18.3625 20.9611 20.8007 22.905 22.4392Z"
						fill="#FF5E00" />
				</svg>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">A short description goes here.</p>
				</div>
				<hlm-switch [(checked)]="value" />
			</label>
		</div>
	`,
})
export class Switch16Component {
	readonly value = model(false);
}

export const switch16Code = `import { Component, model } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-16',
	imports: [HlmSwitch, HlmLabel],
	template: \`
		<div
			class="border-input data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none"
			[attr.data-checked]="value() ? 'true' : 'false'">
			<label
				class="flex items-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
				hlmLabel>
				<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
						fill="white" />
					<path
						d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
						stroke="#E4E7EC" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.9053 22.4392C21.3266 23.7699 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.6399C8 10.7062 12.0478 6.7066 17.0409 6.7066C19.2787 6.7066 21.3266 7.50994 22.9053 8.84066C24.484 7.50994 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
						fill="#ED0006" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3625 26.0818 15.6399C26.0818 12.9173 24.8492 10.4792 22.9053 8.84066C24.484 7.50993 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
						fill="#F9A000" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.905 22.4392C24.8489 20.8007 26.0815 18.3625 26.0815 15.6399C26.0815 12.9174 24.8489 10.4792 22.905 8.8407C20.9611 10.4792 19.7285 12.9174 19.7285 15.6399C19.7285 18.3625 20.9611 20.8007 22.905 22.4392Z"
						fill="#FF5E00" />
				</svg>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">A short description goes here.</p>
				</div>
				<hlm-switch [(checked)]="value" />
			</label>
		</div>
	\`,
})
export class Switch16Component {
	readonly value = model(false);
}`;
