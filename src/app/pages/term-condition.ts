import { Component } from '@angular/core';
import { ComponentHeaderComponent, FooterComponent } from '../core';

@Component({
	selector: 'sim-term-condition',
	imports: [ComponentHeaderComponent, FooterComponent],
	host: {
		class: 'flex flex-col flex-1',
	},
	template: `
		<div class="flex flex-1 flex-col justify-between">
			<component-header name="Terms and Conditions" description="Last Updated: February 8, 2026" />
			<div class="mt-[50px] mb-auto flex flex-col items-center justify-center px-4">
				<div class="text-muted-foreground flex max-w-[900px] flex-col items-start justify-start gap-8">
					<!-- Section 1: Introduction -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">1. Introduction & Acceptance</h2>
						<p class="mb-3 text-base leading-relaxed">
							Welcome to SimUI ("Service", "we", "us", or "our"). By accessing or using SimUI, you agree to be bound by
							these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.
						</p>
						<p class="text-base leading-relaxed">
							These Terms apply to all users, including those who browse components without an account ("Users") and
							those who subscribe to paid features ("Subscribers").
						</p>
					</section>

					<!-- Section 2: Service Description -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">2. Service Description</h2>
						<p class="mb-3 text-base leading-relaxed">
							SimUI is a modern Angular UI component library and theme customization platform. We offer:
						</p>
						<div class="mb-3 ml-6 text-base leading-relaxed">
							<p class="mb-2"><strong>Free Tier:</strong></p>
							<ul class="mb-4 ml-6 list-disc">
								<li>Browse and preview UI components</li>
								<li>Basic theme customization</li>
								<li>Access to documentation and examples</li>
							</ul>
							<p class="mb-2"><strong>Paid Tier (Pro):</strong></p>
							<ul class="ml-6 list-disc">
								<li>Save custom themes to the cloud</li>
								<li>Theme version history and management</li>
								<li>Priority support</li>
								<li>Access to premium components and features</li>
							</ul>
						</div>
						<p class="text-base leading-relaxed">
							We strive to maintain high availability, but we do not guarantee uninterrupted access to the Service.
							Features and availability may change without notice.
						</p>
					</section>

					<!-- Section 3: Account Terms -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">3. Account Terms</h2>
						<p class="mb-3 text-base leading-relaxed">
							To save themes and access certain features, you must sign in using Google OAuth. By signing in, you agree
							to provide accurate information and maintain the security of your account.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							We collect the following information from your Google account: name, email address, and profile picture.
							This information is used to identify you and personalize your experience.
						</p>
						<p class="text-base leading-relaxed">
							<strong>Account Rules:</strong>
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>One account per user</li>
							<li>No account sharing</li>
							<li>You are responsible for maintaining account security</li>
							<li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
						</ul>
					</section>

					<!-- Section 4: Payment Terms -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">4. Subscription & Payment Terms</h2>
						<p class="mb-3 text-base leading-relaxed">
							All payments are processed by
							<a href="https://polar.sh/" target="_blank" class="font-semibold underline">Polar Software, Inc.</a>
							acting as our Merchant of Record. Polar handles all payment processing, tax collection (including VAT,
							GST, and sales tax), and billing compliance on our behalf.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Subscription Options:</strong>
						</p>
						<ul class="mb-3 ml-6 list-disc text-base leading-relaxed">
							<li>Monthly subscription with automatic renewal</li>
							<li>Yearly subscription with automatic renewal</li>
						</ul>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Auto-Renewal:</strong>
							Your subscription will automatically renew at the end of each billing period unless you cancel before the
							renewal date. You will be charged the then-current subscription rate.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							Pricing is displayed at checkout and includes all applicable taxes as calculated by Polar. By completing a
							purchase, you also agree to Polar's
							<a href="https://polar.sh/legal/terms" target="_blank" class="font-semibold underline">
								Terms of Service
							</a>
							.
						</p>
						<p class="text-base leading-relaxed">
							We do not store or have access to your payment information. All payment data is securely handled by Polar.
						</p>
					</section>

					<!-- Section 5: Refund Policy -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">5. Refund Policy</h2>
						<p class="mb-3 text-base leading-relaxed">
							We offer a
							<strong>7-day money-back guarantee</strong>
							for first-time subscribers:
						</p>
						<ul class="mb-3 ml-6 list-disc text-base leading-relaxed">
							<li>Request a full refund within 7 days of your initial purchase</li>
							<li>Contact us with your request and order details</li>
							<li>Refunds are processed through Polar within 5-10 business days</li>
						</ul>
						<p class="mb-3 text-base leading-relaxed">
							<strong>No refunds are provided for:</strong>
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>Requests made after 7 days from the initial purchase date</li>
							<li>Subscription renewals (monthly or yearly)</li>
							<li>Partial billing periods or early cancellations</li>
						</ul>
					</section>

					<!-- Section 6: Cancellation -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">6. Cancellation</h2>
						<p class="mb-3 text-base leading-relaxed">
							You may cancel your subscription at any time through your account settings or via the Polar customer
							portal. Upon cancellation:
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>Your access to paid features continues until the end of your current billing period</li>
							<li>No pro-rated refunds are provided for early cancellation</li>
							<li>Your saved themes remain accessible in read-only mode on the free tier</li>
							<li>You will not be charged for subsequent billing periods</li>
						</ul>
					</section>

					<!-- Section 7: User Content -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">7. User Content (Saved Themes)</h2>
						<p class="mb-3 text-base leading-relaxed">
							You retain all ownership rights to custom themes you create using SimUI. However, by saving themes to our
							Service, you grant us a non-exclusive, worldwide license to host, store, and display your themes for the
							purpose of providing the Service.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Content Guidelines:</strong>
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>You are responsible for the legality of any content you create</li>
							<li>Do not use offensive, illegal, or infringing content in theme names or metadata</li>
							<li>We reserve the right to remove content that violates these Terms</li>
						</ul>
					</section>

					<!-- Section 8: Intellectual Property -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">8. Intellectual Property</h2>
						<p class="mb-3 text-base leading-relaxed">
							All components, code, design, documentation, and other materials provided by SimUI are proprietary and
							protected by intellectual property laws. Subscribers receive a personal, non-transferable license to use
							SimUI components in their projects.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							<strong>You may not:</strong>
						</p>
						<ul class="mb-3 ml-6 list-disc text-base leading-relaxed">
							<li>Redistribute or resell SimUI components or source code</li>
							<li>Share paid features with non-subscribers</li>
							<li>Remove copyright notices or attributions</li>
							<li>Create competing products using SimUI code</li>
						</ul>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Open Source Credits:</strong>
						</p>
						<p class="text-base leading-relaxed">
							This project is built with modern UI practices and open-source technologies. All components are crafted
							using
							<a href="https://spartan.ng/" target="_blank" class="font-semibold underline">Spartan UI</a>
							and
							<a href="https://tailwindcss.com/" target="_blank" class="font-semibold underline">Tailwind CSS</a>
							. The design and visual direction were inspired by
							<a href="https://originui.com/" target="_blank" class="font-semibold underline">Origin UI</a>
							.
						</p>
					</section>

					<!-- Section 9: Prohibited Uses -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">9. Prohibited Uses</h2>
						<p class="mb-3 text-base leading-relaxed">
							You agree not to use SimUI for any unlawful purpose or in any way that could damage, disable, or impair
							the Service. Prohibited activities include:
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>Automated scraping, data extraction, or harvesting</li>
							<li>Sharing account credentials with others</li>
							<li>Circumventing payment systems or access controls</li>
							<li>Impersonating other users or entities</li>
							<li>Attempting to gain unauthorized access to our systems</li>
							<li>Introducing malware, viruses, or malicious code</li>
							<li>Using the Service to spam, phish, or engage in fraudulent activity</li>
						</ul>
					</section>

					<!-- Section 10: Limitation of Liability -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">10. Limitation of Liability</h2>
						<p class="mb-3 text-base leading-relaxed">
							<strong>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong>
							We do not guarantee uptime, availability, or preservation of your data. While we take reasonable measures
							to protect your information, we are not liable for data loss, service interruptions, or security breaches.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Maximum Liability:</strong>
							Our total liability to you for any claims arising from your use of SimUI is limited to the amount you paid
							us in the 12 months preceding the claim.
						</p>
						<p class="text-base leading-relaxed">
							We are not responsible for the actions or services of third parties, including Google (authentication) and
							Polar (payment processing).
						</p>
					</section>

					<!-- Section 11: Indemnification -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">11. Indemnification</h2>
						<p class="text-base leading-relaxed">
							You agree to indemnify and hold harmless SimUI, its operators, and affiliates from any claims, damages, or
							expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or
							your violation of any rights of others.
						</p>
					</section>

					<!-- Section 12: Termination -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">12. Termination</h2>
						<p class="mb-3 text-base leading-relaxed">
							We reserve the right to suspend or terminate your account at any time for violations of these Terms, with
							or without notice. Upon termination:
						</p>
						<ul class="mb-3 ml-6 list-disc text-base leading-relaxed">
							<li>Your access to paid features ends immediately</li>
							<li>Your saved themes may be deleted after a 30-day grace period</li>
							<li>No refunds are provided for partial billing periods</li>
						</ul>
						<p class="text-base leading-relaxed">
							You may also delete your account at any time through your account settings. Account deletion is permanent
							and cannot be undone.
						</p>
					</section>

					<!-- Section 13: Modifications to Terms -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">13. Modifications to Terms</h2>
						<p class="mb-3 text-base leading-relaxed">
							We reserve the right to modify these Terms at any time. Material changes will be communicated via email to
							registered users at least 30 days before taking effect.
						</p>
						<p class="text-base leading-relaxed">
							Your continued use of SimUI after changes take effect constitutes acceptance of the updated Terms. If you
							do not agree to the changes, you must stop using the Service and cancel your subscription.
						</p>
					</section>

					<!-- Section 14: Governing Law -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">14. Governing Law & Dispute Resolution</h2>
						<p class="mb-3 text-base leading-relaxed">
							These Terms are governed by the laws of Vietnam, without regard to conflict of law principles. The Service
							is available globally, but these Terms are interpreted under Vietnamese law.
						</p>
						<p class="mb-3 text-base leading-relaxed">
							<strong>Dispute Resolution:</strong>
							Before initiating any legal action, you agree to attempt informal resolution by contacting us. We will
							respond within 30 days. If a dispute cannot be resolved informally, it may be resolved through binding
							arbitration or in the courts of Vietnam.
						</p>
					</section>

					<!-- Section 15: Contact -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">15. Contact Information</h2>
						<p class="mb-3 text-base leading-relaxed">
							If you have any questions about these Terms or need support, please contact us:
						</p>
						<p class="text-base leading-relaxed">
							<strong>Email:</strong>
							support&#64;simui.dev
							<br />
							<strong>Website:</strong>
							SimUI
						</p>
					</section>

					<!-- Acknowledgment -->
					<section class="border-t pt-8">
						<p class="text-center text-base leading-relaxed italic">
							By using SimUI, you acknowledge that you have read, understood, and agree to be bound by these Terms and
							Conditions.
						</p>
					</section>
				</div>
			</div>
			<app-footer />
		</div>
	`,
})
export class TermConditionComponent {}
