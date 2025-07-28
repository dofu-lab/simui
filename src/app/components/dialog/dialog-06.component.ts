import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-06',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Scrollable (sticky footer)</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<hlm-dialog-header>
						<h2 class="mb-0 px-6 pt-6 text-lg font-semibold">Frequently Asked Questions (FAQ)</h2>
						<div hlmDialogDescription>
							<div class="p-6">
								<div class="[&_strong]:text-foreground space-y-4 text-left [&_strong]:font-semibold">
									<div class="space-y-1">
										<p>
											<strong>Account Management</strong>
										</p>
										<p>
											Navigate to the registration page, provide required information, and verify your email address.
											You can sign up using your email or through social media platforms.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Password Reset Process</strong>
										</p>
										<p>
											Users can reset their password through the account settings page. Click &quot;Forgot
											Password&quot; and follow the email verification steps to regain account access quickly and
											securely.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Service Pricing Tiers</strong>
										</p>
										<p>
											We offer three primary subscription levels designed to meet diverse user needs: Basic (free with
											limited features), Professional (monthly fee with comprehensive access), and Enterprise (custom
											pricing with full platform capabilities).
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Technical Support Channels</strong>
										</p>
										<p>
											Customer support is accessible through multiple communication methods including email support,
											live chat during business hours, an integrated support ticket system, and phone support
											specifically for enterprise-level customers.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Data Protection Strategies</strong>
										</p>
										<p>
											Our platform implements rigorous security measures including 256-bit SSL encryption, regular
											comprehensive security audits, strict data access controls, and compliance with international
											privacy protection standards.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Platform Compatibility</strong>
										</p>
										<p>
											The service supports multiple device and operating system environments, including web browsers
											like Chrome and Firefox, mobile applications for iOS and Android, and desktop applications
											compatible with Windows and macOS.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Subscription Management</strong>
										</p>
										<p>
											Subscriptions can be cancelled at any time through account settings, with pro-rated refunds
											available within 30 days of payment. Both monthly and annual billing options are provided, with
											special discounts offered for annual commitments.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Payment Method Options</strong>
										</p>
										<p>
											We accept a wide range of payment methods including major credit cards such as Visa, MasterCard,
											and American Express, digital payment platforms like PayPal, and direct bank transfers. Regional
											payment options may also be available depending on user location.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Customer Support</strong>
										</p>
										<p>
											Our dedicated customer support team is available 24/7, providing quick and efficient assistance to
											address any inquiries or issues you may have.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Privacy Policy</strong>
										</p>
										<p>
											Our privacy policy outlines how we collect, use, and protect your personal data, ensuring your
											privacy is protected at all times.
										</p>
									</div>
								</div>
							</div>
						</div>
					</hlm-dialog-header>
				</div>
				<hlm-dialog-footer class="gap-3 border-t px-6 py-4 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog06Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog06Code = `import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-dialog-06',
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Scrollable (sticky footer)</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<hlm-dialog-header>
						<h2 class="mb-0 px-6 pt-6 text-lg font-semibold">Frequently Asked Questions (FAQ)</h2>
						<div hlmDialogDescription>
							<div class="p-6">
								<div class="[&_strong]:text-foreground space-y-4 text-left [&_strong]:font-semibold">
									<div class="space-y-1">
										<p>
											<strong>Account Management</strong>
										</p>
										<p>
											Navigate to the registration page, provide required information, and verify your email address.
											You can sign up using your email or through social media platforms.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Password Reset Process</strong>
										</p>
										<p>
											Users can reset their password through the account settings page. Click &quot;Forgot
											Password&quot; and follow the email verification steps to regain account access quickly and
											securely.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Service Pricing Tiers</strong>
										</p>
										<p>
											We offer three primary subscription levels designed to meet diverse user needs: Basic (free with
											limited features), Professional (monthly fee with comprehensive access), and Enterprise (custom
											pricing with full platform capabilities).
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Technical Support Channels</strong>
										</p>
										<p>
											Customer support is accessible through multiple communication methods including email support,
											live chat during business hours, an integrated support ticket system, and phone support
											specifically for enterprise-level customers.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Data Protection Strategies</strong>
										</p>
										<p>
											Our platform implements rigorous security measures including 256-bit SSL encryption, regular
											comprehensive security audits, strict data access controls, and compliance with international
											privacy protection standards.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Platform Compatibility</strong>
										</p>
										<p>
											The service supports multiple device and operating system environments, including web browsers
											like Chrome and Firefox, mobile applications for iOS and Android, and desktop applications
											compatible with Windows and macOS.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Subscription Management</strong>
										</p>
										<p>
											Subscriptions can be cancelled at any time through account settings, with pro-rated refunds
											available within 30 days of payment. Both monthly and annual billing options are provided, with
											special discounts offered for annual commitments.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Payment Method Options</strong>
										</p>
										<p>
											We accept a wide range of payment methods including major credit cards such as Visa, MasterCard,
											and American Express, digital payment platforms like PayPal, and direct bank transfers. Regional
											payment options may also be available depending on user location.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Customer Support</strong>
										</p>
										<p>
											Our dedicated customer support team is available 24/7, providing quick and efficient assistance to
											address any inquiries or issues you may have.
										</p>
									</div>
									<div class="space-y-1">
										<p>
											<strong>Privacy Policy</strong>
										</p>
										<p>
											Our privacy policy outlines how we collect, use, and protect your personal data, ensuring your
											privacy is protected at all times.
										</p>
									</div>
								</div>
							</div>
						</div>
					</hlm-dialog-header>
				</div>
				<hlm-dialog-footer class="gap-3 border-t px-6 py-4 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog06Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
