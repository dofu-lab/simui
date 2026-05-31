import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideAlertCircle } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-card-06',
	imports: [HlmIconImports, HlmCardImports, HlmButtonImports, HlmInputImports, HlmFieldImports, HlmSelectImports],
	providers: [provideIcons({ lucideAlertCircle })],
	template: `
		<section class="bg-muted w-80 gap-4 py-0" hlmCard>
			<div hlmCardHeader class="bg-muted flex-col items-start px-6 pt-4">
				<h3 hlmCardTitle>Create project</h3>
				<p hlmCardDescription>Deploy your new project in one-click.</p>
			</div>
			<section class="w-full shadow-none" hlmCard>
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
							<div hlmField>
								<button hlmBtn type="submit" class="w-full">Deploy</button>
							</div>
						</div>
					</fieldset>
				</div>
			</section>
			<div hlmCardFooter class="bg-muted flex-col items-start px-6 pb-4">
				<div class="text-muted-foreground flex items-center gap-1 text-xs">
					<ng-icon hlm size="xs" name="lucideAlertCircle" />
					<p>This will take a few seconds to complete.</p>
				</div>
			</div>
		</section>
	`,
})
export class Card06Component {
	protected readonly frameworkOptions = [
		{ label: 'Next.js', value: 'next' },
		{ label: 'Vite', value: 'vite' },
		{ label: 'Remix', value: 'remix' },
		{ label: 'Astro', value: 'astro' },
	];

	public readonly itemToString = (value: string) => this.frameworkOptions.find((d) => d.value === value)?.label ?? '';
}
