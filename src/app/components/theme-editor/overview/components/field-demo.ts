import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
	selector: 'app-field-demo',
	imports: [
		HlmFieldImports,
		BrnSelectImports,
		HlmSelectImports,
		HlmRadioGroupImports,
		HlmInput,
		HlmTextarea,
		HlmButton,
		HlmCheckbox,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'w-full rounded-lg border p-6 h-fit',
	},
	template: `
		<form>
			<div hlmFieldGroup>
				<fieldset hlmFieldSet>
					<legend hlmFieldLegend>Payment Method</legend>
					<p hlmFieldDescription>All transactions are secure and encrypted</p>

					<div hlmFieldGroup>
						<div hlmField>
							<label hlmFieldLabel [for]="uniqueId('name-on-card')">Name on card</label>
							<input hlmInput placeholder="John Doe" [id]="uniqueId('name-on-card')" />
						</div>
						<div class="grid grid-cols-3 gap-4">
							<div hlmField class="col-span-2">
								<label hlmFieldLabel [for]="uniqueId('card-number')">Card number</label>
								<input hlmInput placeholder="1234 1234 1234 1234" [id]="uniqueId('card-number')" />
								<p hlmFieldDescription>Enter your 16-digit card number.</p>
							</div>
							<div hlmField>
								<label hlmFieldLabel [for]="uniqueId('cvv')">CVV</label>
								<input hlmInput placeholder="123" [id]="uniqueId('cvv')" />
							</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div hlmField>
								<label hlmFieldLabel [for]="uniqueId('exp-month--trigger')">Month</label>
								<brn-select [id]="uniqueId('exp-month')" class="inline-block" placeholder="MM">
									<hlm-select-trigger class="w-full">
										<hlm-select-value />
									</hlm-select-trigger>
									<hlm-select-content>
										<hlm-option value="01">01</hlm-option>
										<hlm-option value="02">02</hlm-option>
										<hlm-option value="03">03</hlm-option>
										<hlm-option value="04">04</hlm-option>
										<hlm-option value="05">05</hlm-option>
										<hlm-option value="06">06</hlm-option>
										<hlm-option value="07">07</hlm-option>
										<hlm-option value="08">08</hlm-option>
										<hlm-option value="09">09</hlm-option>
										<hlm-option value="10">10</hlm-option>
										<hlm-option value="11">11</hlm-option>
										<hlm-option value="12">12</hlm-option>
									</hlm-select-content>
								</brn-select>
							</div>
							<div hlmField>
								<label hlmFieldLabel [for]="uniqueId('exp-year--trigger')">Year</label>
								<brn-select [id]="uniqueId('exp-year')" class="inline-block" placeholder="YYYY">
									<hlm-select-trigger class="w-full">
										<hlm-select-value />
									</hlm-select-trigger>
									<hlm-select-content>
										<hlm-option value="2024">2024</hlm-option>
										<hlm-option value="2025">2025</hlm-option>
										<hlm-option value="2026">2026</hlm-option>
										<hlm-option value="2027">2027</hlm-option>
										<hlm-option value="2028">2028</hlm-option>
										<hlm-option value="2029">2029</hlm-option>
									</hlm-select-content>
								</brn-select>
							</div>
						</div>
					</div>
				</fieldset>
				<hlm-field-separator />
				<fieldset hlmFieldSet>
					<legend hlmFieldLegend>Billing Address</legend>
					<p hlmFieldDescription>The billing address associated with your payment method</p>
					<div hlmFieldGroup>
						<div hlmField orientation="horizontal">
							<hlm-checkbox [id]="uniqueId('billing-address')" [checked]="true" />
							<label hlmFieldLabel [for]="uniqueId('billing-address')">Same as shipping address.</label>
						</div>
					</div>
				</fieldset>
				<fieldset hlmFieldSet>
					<div hlmFieldGroup>
						<div hlmField>
							<label hlmFieldLabel [for]="uniqueId('comments')">Comments</label>
							<textarea hlmTextarea [id]="uniqueId('comments')"></textarea>
						</div>
					</div>
				</fieldset>
				<hlm-field-separator />
				<fieldset hlmFieldSet>
					<label hlmFieldLabel>Subscription Plan</label>
					<p hlmFieldDescription>Yearly and lifetime plans offer significant savings.</p>
					<hlm-radio-group value="monthly">
						<div hlmField orientation="horizontal">
							<hlm-radio value="monthly" [id]="uniqueId('plan-monthly')">
								<hlm-radio-indicator indicator />
							</hlm-radio>
							<label hlmFieldLabel [for]="uniqueId('plan-monthly')" class="font-normal">Monthly ($9.99/month)</label>
						</div>
						<div hlmField orientation="horizontal">
							<hlm-radio value="yearly" [id]="uniqueId('plan-yearly')">
								<hlm-radio-indicator indicator />
							</hlm-radio>
							<label hlmFieldLabel [for]="uniqueId('plan-yearly')" class="font-normal">Yearly ($99.99/year)</label>
						</div>
						<div hlmField orientation="horizontal">
							<hlm-radio value="lifetime" [id]="uniqueId('plan-lifetime')">
								<hlm-radio-indicator indicator />
							</hlm-radio>
							<label hlmFieldLabel [for]="uniqueId('plan-lifetime')" class="font-normal">
								Lifetime ($299.99/lifetime)
							</label>
						</div>
					</hlm-radio-group>
				</fieldset>
				<hlm-field-separator />
				<fieldset hlmFieldSet>
					<label hlmFieldLabel>Save your payment method</label>
					<p hlmFieldDescription>Save your payment method for faster checkout and easier management.</p>
					<div hlmFieldGroup data-slot="checkbox-group">
						<div hlmField orientation="horizontal">
							<hlm-checkbox [id]="uniqueId('save-payment-method')" [checked]="true" />
							<label hlmFieldLabel [for]="uniqueId('save-payment-method')" class="font-normal">
								Allow website to save my payment method
							</label>
						</div>
					</div>
				</fieldset>
				<hlm-field-separator />
				<div hlmField orientation="horizontal">
					<button hlmBtn>Submit</button>
					<button hlmBtn variant="outline">Cancel</button>
				</div>
			</div>
		</form>
	`,
})
export class FieldDemo {
	private instanceId = Math.random().toString(36).substring(2, 9);

	protected uniqueId(suffix: string): string {
		return `field-${this.instanceId}-${suffix}`;
	}
}
