import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlertCircle } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmSelectImports } from '@spartan-ng/helm/select';

interface FrameworkOption {
	label: string;
	value: string;
}

@Component({
	selector: 'sim-card-01',
	imports: [
		NgIcon,
		HlmIconImports,
		HlmCardImports,
		HlmButtonImports,
		HlmInputImports,
		HlmFieldImports,
		HlmSelectImports,
	],
	providers: [provideIcons({ lucideAlertCircle })],
	template: `
		<section class="w-80 gap-4" hlmCard>
			<div hlmCardHeader>
				<h3 hlmCardTitle>Create project</h3>
				<p hlmCardDescription>Deploy your new project in one-click.</p>
			</div>

			<div hlmCardContent>
				<fieldset hlmFieldSet>
					<div hlmFieldGroup class="gap-4">
						<div hlmField class="gap-2">
							<label hlmFieldLabel for="field-input-name">Name</label>
							<input hlmInput id="field-input-name" type="text" placeholder="Project name" />
						</div>
						<div hlmField class="gap-2">
							<label hlmFieldLabel for="field-select-framework">Framework</label>
							<hlm-select [itemToString]="itemToString">
								<hlm-select-trigger class="w-full" buttonId="field-select-framework">
									<hlm-select-value placeholder="Choose a framework" />
								</hlm-select-trigger>
								<hlm-select-content *hlmSelectPortal>
									<hlm-select-group>
										@for (framework of frameworkOptions; track framework.value) {
											<hlm-select-item [value]="framework.value">
												{{ framework.label }}
											</hlm-select-item>
										}
									</hlm-select-group>
								</hlm-select-content>
							</hlm-select>
						</div>
					</div>
				</fieldset>
			</div>

			<div hlmCardFooter class="flex-col items-start gap-4">
				<button hlmBtn type="submit" class="w-full">Deploy</button>
				<div class="text-muted-foreground flex items-center gap-1 text-xs">
					<ng-icon hlm size="xs" name="lucideAlertCircle" />
					<p>This will take a few seconds to complete.</p>
				</div>
			</div>
		</section>
	`,
})
export class Card01Component {
	protected readonly frameworkOptions: FrameworkOption[] = [
		{ label: 'Next.js', value: 'next' },
		{ label: 'Vite', value: 'vite' },
		{ label: 'Remix', value: 'remix' },
		{ label: 'Astro', value: 'astro' },
	];

	public readonly itemToString = (value: string) => this.frameworkOptions.find((d) => d.value === value)?.label ?? '';
}
