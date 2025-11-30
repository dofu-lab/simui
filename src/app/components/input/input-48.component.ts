import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideEye, lucideEyeOff, lucideX } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-48',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, FormsModule],
	providers: [provideIcons({ lucideEye, lucideEyeOff, lucideCheck, lucideX })],
	host: { class: 'w-full' },
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<label hlmLabel for="input-48" class="mb-2 text-sm">Input with end inline button</label>
		<div class="relative">
			<input
				hlmInput
				id="input-48"
				placeholder="Enter your password"
				class="peer pe-9 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden [&::-webkit-strong-password-auto-fill-button]:hidden"
				[(ngModel)]="passwordValue"
				[type]="inputType()" />
			<button
				aria-controls="pasword"
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				(click)="handleUpdateVisibility()">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
		<div
			class="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
			role="progressbar"
			aria-label="Password strength"
			aria-valuemin="0"
			aria-valuemax="4"
			[attr.aria-valuenow]="score()">
			<div
				class="h-full {{ strengthColor() }} transition-all duration-500 ease-out"
				style="width: {{ (score() / 4) * 100 }}%"></div>
		</div>
		<p class="mt-3 mb-2 text-sm">{{ strengthText() }}. Must contain:</p>
		<ul class="space-y-1.5" aria-label="Password requirements">
			@for (str of strength(); track str.text) {
				<li class="flex items-center gap-2">
					@if (str.met) {
						<ng-icon hlm size="sm" name="lucideCheck" class="text-emerald-500" />
					} @else {
						<ng-icon hlm size="sm" name="lucideX" class="text-muted-foreground/80" />
					}
					<span class="{{ str.met ? 'text-emerald-600' : 'text-muted-foreground' }} text-xs">
						{{ str.text }}
						<span class="sr-only">
							{{ str.met ? ' - Requirement met' : ' - Requirement not met' }}
						</span>
					</span>
				</li>
			}
		</ul>
	`,
})
export class Input48Component {
	readonly visibility = signal(false);
	readonly passwordValue = model('');

	readonly computedIcon = computed<IconType>(() => (this.visibility() ? 'lucideEyeOff' : 'lucideEye'));
	readonly inputType = computed<string>(() => (this.visibility() ? 'text' : 'password'));
	readonly strength = computed(() => {
		const requirements = [
			{ regex: /.{8,}/, text: 'At least 8 characters' },
			{ regex: /[0-9]/, text: 'At least 1 number' },
			{ regex: /[a-z]/, text: 'At least 1 lowercase letter' },
			{ regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
		];
		return requirements.map((req) => ({
			met: req.regex.test(this.passwordValue()),
			text: req.text,
		}));
	});
	readonly score = computed(() => this.strength().filter((req) => req.met).length);
	readonly strengthText = computed(() => {
		if (this.score() === 0) {
			return 'Enter a password';
		}
		if (this.score() <= 2) {
			return 'Weak password';
		}
		if (this.score() === 3) {
			return 'Medium password';
		}
		return 'Strong password';
	});
	readonly strengthColor = computed(() => {
		if (this.score() === 0) {
			return 'bg-border';
		}
		if (this.score() <= 1) {
			return 'bg-red-500';
		}
		if (this.score() <= 2) {
			return 'bg-orange-500';
		}
		if (this.score() === 3) {
			return 'bg-amber-500';
		}
		return 'bg-emerald-500';
	});

	handleUpdateVisibility(): void {
		this.visibility.update((v) => !v);
	}
}