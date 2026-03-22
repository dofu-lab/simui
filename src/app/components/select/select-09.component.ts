import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-09',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="native-select-09" class="gap-0.5">
					Required select (native)
					<span class="text-destructive">*</span>
				</label>
				<hlm-native-select id="native-select-09" value="todo">
					<option hlmNativeSelectOption value="todo">Todo</option>
					<option hlmNativeSelectOption value="in-progress">In Progress</option>
					<option hlmNativeSelectOption value="done">Done</option>
					<option hlmNativeSelectOption value="cancelled">Cancelled</option>
				</hlm-native-select>
			</div>
		</div>
	`,
})
export class Select09Component {}
