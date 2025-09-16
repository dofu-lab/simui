import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-20',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideEye, lucideEyeOff })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-20" class="mb-2 text-sm">Input with end inline button</label>
		<div class="relative">
			<input
				hlmInput
				id="input-20"
				[type]="inputType()"
				placeholder="Enter your password"
				class="peer pe-9 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden [&::-webkit-strong-password-auto-fill-button]:hidden" />
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				(click)="handleUpdateVisibility()"
				aria-controls="pasword">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
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

export const input20Code = `import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-20',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideEye, lucideEyeOff })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-20" class="mb-2 text-sm">Input with end inline button</label>
		<div class="relative">
			<input
				hlmInput
				id="input-20"
				[type]="inputType()"
				placeholder="Enter your password"
				class="peer pe-9 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden [&::-webkit-strong-password-auto-fill-button]:hidden" />
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				(click)="handleUpdateVisibility()"
				aria-controls="pasword">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
	\`,
})
export class Input20Component {
	public readonly visibility = signal(false);
	public readonly computedIcon = computed<IconType>(() => (this.visibility() ? 'lucideEyeOff' : 'lucideEye'));
	public readonly inputType = computed<string>(() => (this.visibility() ? 'text' : 'password'));

	public handleUpdateVisibility(): void {
		this.visibility.update((v) => !v);
	}
}`;
