import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-card-02',
	imports: [HlmCardImports, HlmButtonImports, HlmInputImports, HlmFieldImports],
	template: `
		<section class="w-80 gap-4" hlmCard>
			<div hlmCardHeader>
				<div class="flex items-center justify-between gap-2">
					<h3 hlmCardTitle>Login to your account</h3>
					<button hlmBtn size="sm" variant="link" class="text-muted-foreground">Sign up</button>
				</div>
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
					</div>
				</fieldset>
			</div>
			<div hlmCardFooter class="flex-col items-start gap-4">
				<button hlmBtn type="submit" class="w-full">Login</button>
			</div>
		</section>
	`,
})
export class Card02Component {}
