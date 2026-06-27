import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideEye, lucideEyeOff, lucideX } from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-48',
	imports: [NgIcon, FormsModule, HlmIconImports, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideEye, lucideEyeOff, lucideCheck, lucideX })],
	host: { class: 'w-full' },
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<label hlmLabel for="input-48" class="mb-2 text-sm">Input with end inline button</label>
		<hlm-input-group>
			<input
				hlmInputGroupInput
				id="input-48"
				placeholder="Enter your password"
				[(ngModel)]="passwordValue"
				[type]="inputType()" />
			<hlm-input-group-addon align="inline-end">
				<button hlmInputGroupButton size="icon-xs" aria-controls="password" (click)="handleUpdateVisibility()">
					<ng-icon [name]="computedIcon()" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
		<div
			class="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
			role="progressbar"
			aria-label="Password strength"
			aria-valuemin="0"
			aria-valuemax="4"
			[attr.aria-valuenow]="score()">
			<div
				class="h-full {{
					strengthColor()
				}} origin-left transition-transform motion-reduce:transition-none duration-300 ease-out"
				style="transform: scaleX({{ score() / 4 }})"></div>
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
	protected readonly visibility = signal(false);
	protected readonly passwordValue = model('');

	protected readonly computedIcon = computed<IconType>(() => (this.visibility() ? 'lucideEyeOff' : 'lucideEye'));
	protected readonly inputType = computed<string>(() => (this.visibility() ? 'text' : 'password'));
	protected readonly strength = computed(() => {
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
	protected readonly score = computed(() => this.strength().filter((req) => req.met).length);
	protected readonly strengthText = computed(() => {
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
	protected readonly strengthColor = computed(() => {
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

	protected handleUpdateVisibility(): void {
		this.visibility.update((v) => !v);
	}
}
