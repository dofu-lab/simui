import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmFieldSeparator } from '@spartan-ng/helm/field';
import { FileUpload05Component } from '../../file-upload';
import { AppearanceSettings } from './components/appearance-settings';
import { ButtonGroupDemo } from './components/button-group-demo';
import { ButtonGroupInputGroup } from './components/button-group-input-group';
import { ButtonGroupNested } from './components/button-group-nested';
import { ButtonGroupPopover } from './components/button-group-popover';
import { DayToggle } from './components/day-toggle';
import { EmptyAvatarGroup } from './components/empty-avatar-group';
import { FieldCheckbox } from './components/field-checkbox';
import { FieldDemo } from './components/field-demo';
import { FieldHear } from './components/field-hear';
import { FieldSlider } from './components/field-slider';
import { InputGroupDemo } from './components/input-group';
import { InputGroupButtonExample } from './components/input-group-button-example';
import { ItemDemo } from './components/item-demo';
import { NotionPrompt } from './components/notion-prompt';
import { PasswordDemo } from './components/password';
import { SpinnerBadge } from './components/spinner-badge';
import { SpinnerEmpty } from './components/spinner-empty';

@Component({
	selector: 'app-overview-example',
	imports: [
		HlmFieldSeparator,
		FieldDemo,
		EmptyAvatarGroup,
		SpinnerBadge,
		ButtonGroupInputGroup,
		FieldSlider,
		InputGroupDemo,
		InputGroupButtonExample,
		ItemDemo,
		AppearanceSettings,
		NotionPrompt,
		ButtonGroupDemo,
		FieldCheckbox,
		ButtonGroupPopover,
		ButtonGroupNested,
		FieldHear,
		SpinnerEmpty,
		PasswordDemo,
		DayToggle,
		FileUpload05Component,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			class="mx-auto hidden h-full grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-2 xl:hidden xl:grid-cols-3 xl:gap-6 2xl:grid 2xl:grid-cols-4 2xl:gap-8">
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-field-demo />
			</div>
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-empty-avatar-group />
				<app-spinner-badge />
				<app-button-group-input-group />
				<app-field-slider />
				<app-input-group />
				<hlm-field-separator />
				<app-password />
				<hlm-field-separator />
				<app-day-toggle />
			</div>
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-input-group-button-example />
				<app-item-demo />
				<hlm-field-separator class="my-4">Appearance Settings</hlm-field-separator>
				<app-appearance-settings />
			</div>
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-notion-prompt />
				<app-button-group-demo />
				<app-field-checkbox />
				<div class="flex justify-between gap-4">
					<app-button-group-nested />
					<app-button-group-popover />
				</div>
				<app-field-hear />
				<app-spinner-empty />
				<sim-file-upload-05 />
			</div>
		</div>
		<div class="mx-auto grid h-full grid-cols-1 gap-8 md:hidden xl:grid xl:grid-cols-3 xl:gap-6 2xl:hidden 2xl:gap-8">
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-field-demo />
				<app-notion-prompt />
				<app-spinner-empty />
			</div>
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-empty-avatar-group />
				<app-spinner-badge />
				<app-button-group-input-group />
				<app-field-slider />
				<app-input-group />
				<hlm-field-separator />
				<app-password />
				<hlm-field-separator />
				<app-day-toggle />
				<div class="flex justify-between gap-4">
					<app-button-group-nested />
					<app-button-group-popover />
				</div>
				<app-button-group-demo />
				<app-field-checkbox />
				<app-field-hear />
			</div>
			<div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
				<app-input-group-button-example />
				<app-item-demo />
				<hlm-field-separator class="my-4">Appearance Settings</hlm-field-separator>
				<app-appearance-settings />
				<sim-file-upload-05 />
			</div>
		</div>
	`,
})
export class OverviewExample {}
