import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShieldAlert } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-card-03',
	imports: [NgIcon, HlmIconImports, HlmCardImports, HlmButtonImports, HlmInputImports, HlmFieldImports],
	providers: [provideIcons({ lucideShieldAlert })],
	template: `
		<section class="w-80 gap-4" hlmCard>
			<div hlmCardHeader class="border-b pb-4!">
				<h3 hlmCardTitle>Login to your account</h3>
				<p hlmCardDescription>Enter email and password to login</p>
			</div>

			<div hlmCardContent>
				<fieldset hlmFieldSet>
					<div hlmFieldGroup class="gap-4">
						<div hlmField class="gap-2">
							<label hlmFieldLabel for="field-input-email">Email</label>
							<input hlmInput id="field-input-email" type="email" placeholder="Enter your email" />
						</div>
						<div hlmField class="gap-2">
							<label hlmFieldLabel for="field-input-password">Password</label>
							<input hlmInput id="field-input-password" type="password" placeholder="Enter your password" />
						</div>
						<div hlmField>
							<button hlmBtn type="submit" class="w-full">Login</button>
						</div>
					</div>
				</fieldset>
			</div>

			<div hlmCardFooter class="flex-col items-start gap-4 border-t pt-4!">
				<div class="text-muted-foreground flex gap-1 text-xs">
					<ng-icon hlm size="xs" name="lucideShieldAlert" class="mt-0.5 h-lh shrink-0" />
					<p>The information you enter is encrypted and stored securely.</p>
				</div>
			</div>
		</section>
	`,
})
export class Card03Component {}
