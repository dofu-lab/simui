import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-20',
	imports: [HlmLabel, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideEye, lucideEyeOff })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-20" class="mb-2 text-sm">Input with end inline button</label>
		<hlm-input-group>
			<input
				hlmInputGroupInput
				id="input-20"
				placeholder="Enter your password"
				class="[&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden [&::-webkit-strong-password-auto-fill-button]:hidden"
				[type]="inputType()" />
			<hlm-input-group-addon align="inline-end">
				<button
					hlmInputGroupButton
					aria-label="Send"
					title="Send"
					size="icon-xs"
					variant="ghost"
					(click)="handleUpdateVisibility()">
					<ng-icon [name]="computedIcon()" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input20Component {
	public readonly visibility = signal(false);
	public readonly computedIcon = computed<IconType>(() => (this.visibility() ? 'lucideEyeOff' : 'lucideEye'));
	public readonly inputType = computed<string>(() => (this.visibility() ? 'text' : 'password'));

	public handleUpdateVisibility(): void {
		this.visibility.update((v) => !v);
	}
}
