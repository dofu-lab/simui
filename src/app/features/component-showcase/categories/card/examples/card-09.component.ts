import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmSelectImports } from '@spartan-ng/helm/select';

interface FrameworkOption {
	label: string;
	value: string;
}

@Component({
	selector: 'sim-card-09',
	imports: [HlmCardImports, HlmButtonImports, HlmInputImports, HlmFieldImports, HlmSelectImports],
	template: `
		<section class="bg-muted flex w-80 flex-col gap-4 rounded-2xl px-1.5 pb-1.5 shadow-none">
			<div hlmCardHeader class="flex-col items-start px-6 pt-4">
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
		</section>
	`,
})
export class Card09Component {
	protected readonly frameworkOptions: FrameworkOption[] = [
		{ label: 'Next.js', value: 'next' },
		{ label: 'Vite', value: 'vite' },
		{ label: 'Remix', value: 'remix' },
		{ label: 'Astro', value: 'astro' },
	];

	protected readonly itemToString = (value: string) =>
		this.frameworkOptions.find((d) => d.value === value)?.label ?? '';
}
