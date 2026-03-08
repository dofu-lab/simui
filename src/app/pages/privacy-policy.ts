import { Component } from '@angular/core';
import { ComponentHeaderComponent, FooterComponent } from '../core';

@Component({
	selector: 'sim-privacy-policy',
	imports: [ComponentHeaderComponent, FooterComponent],
	host: {
		class: 'flex flex-col flex-1',
	},
	template: `
		<div class="flex flex-1 flex-col justify-between">
			<component-header name="Privacy Policy" description="Last Updated: February 8, 2026" />
			<div class="mt-[50px] mb-auto flex flex-col items-center justify-center px-4">
				<div class="text-muted-foreground flex max-w-[900px] flex-col items-start justify-start gap-8">
					<!-- Section 1: Introduction -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">1. Introduction</h2>
						<p class="mb-3 text-base leading-relaxed">
							SimUI ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we
							collect, use, disclose, and safeguard your information when you use our Service.
						</p>
						<p class="text-base leading-relaxed">
							By using SimUI, you agree to the collection and use of information in accordance with this Privacy Policy.
							If you do not agree with our policies and practices, please do not use our Service.
						</p>
					</section>

					<!-- Section 2: Information We Collect -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">2. Information We Collect</h2>
						<p class="mb-3 text-base leading-relaxed">
							We collect different types of information to provide and improve our Service:
						</p>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">2.1 Personal Information from Google OAuth</p>
							<p class="mb-3 text-base leading-relaxed">
								When you sign in with Google, we collect the following information from your Google account:
							</p>
							<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
								<li>
									<strong>Email address:</strong>
									Used to identify your account
								</li>
								<li>
									<strong>Name:</strong>
									Used to personalize your experience
								</li>
								<li>
									<strong>Profile picture:</strong>
									Displayed in your account and user interface
								</li>
								<li>
									<strong>Google User ID:</strong>
									Used to securely authenticate you
								</li>
							</ul>
						</div>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">2.2 User-Generated Content</p>
							<p class="mb-3 text-base leading-relaxed">When you use our Service, we store:</p>
							<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
								<li>
									<strong>Custom themes:</strong>
									Your saved theme configurations and color schemes
								</li>
								<li>
									<strong>Theme history:</strong>
									Version history of your theme edits
								</li>
								<li>
									<strong>Account preferences:</strong>
									Your settings and customization choices
								</li>
							</ul>
						</div>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">2.3 Local Storage Data</p>
							<p class="mb-3 text-base leading-relaxed">
								We store certain information in your browser's local storage to enhance your experience:
							</p>
							<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
								<li>Authentication tokens (to keep you signed in)</li>
								<li>Theme preferences (light/dark mode, color type)</li>
								<li>Theme editor state (current tab, history)</li>
								<li>Appearance settings</li>
							</ul>
						</div>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">2.4 Subscription and Payment Information</p>
							<p class="mb-3 text-base leading-relaxed">
								Payment processing is handled by
								<a href="https://polar.sh/" target="_blank" class="font-semibold underline">Polar Software, Inc.</a>
								as our Merchant of Record. We store:
							</p>
							<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
								<li>Your subscription status (Free User, Paid User, Admin)</li>
								<li>Subscription plan type (Monthly or Yearly)</li>
								<li>Subscription start and renewal dates</li>
							</ul>
							<p class="text-base leading-relaxed">
								<strong>We do not store or have access to your credit card or payment information.</strong>
								All payment data is securely handled by Polar. Please refer to
								<a href="https://polar.sh/legal/privacy" target="_blank" class="font-semibold underline">
									Polar's Privacy Policy
								</a>
								for information on how they handle your payment data.
							</p>
						</div>

						<div class="ml-6">
							<p class="mb-2 text-base font-semibold">2.5 Usage Data and Analytics</p>
							<p class="mb-3 text-base leading-relaxed">
								We collect anonymous usage data to improve SimUI. This analytics data is collected via
								<a href="https://posthog.com/" target="_blank" class="font-semibold underline">PostHog</a>, a
								privacy-focused analytics platform. We use cookieless tracking (in-memory only), which means:
							</p>
							<ul class="mb-3 ml-6 list-disc text-base leading-relaxed">
								<li>No tracking cookies are stored in your browser</li>
								<li>No analytics data is sold to or shared with advertisers</li>
								<li>Tracking sessions are not linked across visits unless you are signed in</li>
							</ul>
							<p class="text-base leading-relaxed">The data collected includes:</p>
							<ul class="ml-6 list-disc text-base leading-relaxed">
								<li>Pages visited and navigation flow</li>
								<li>UI interactions (e.g., copy code button clicks)</li>
								<li>Core Web Vitals (LCP, FID, CLS) for performance monitoring</li>
								<li>JavaScript errors and exceptions</li>
								<li>
									For signed-in users: your user ID and role, to link events to your account for debugging and
									support purposes
								</li>
							</ul>
						</div>
					</section>

					<!-- Section 3: How We Use Your Information -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">3. How We Use Your Information</h2>
						<p class="mb-3 text-base leading-relaxed">We use the information we collect for the following purposes:</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>
								<strong>Account Management:</strong>
								To create and manage your account
							</li>
							<li>
								<strong>Service Delivery:</strong>
								To provide theme customization and saving features
							</li>
							<li>
								<strong>Authentication:</strong>
								To verify your identity and maintain secure access
							</li>
							<li>
								<strong>Subscription Management:</strong>
								To manage your paid subscription and access to pro features
							</li>
							<li>
								<strong>Customer Support:</strong>
								To respond to your inquiries and provide technical support
							</li>
							<li>
								<strong>Service Improvement:</strong>
								To understand how users interact with our Service and improve it
							</li>
							<li>
								<strong>Legal Compliance:</strong>
								To comply with legal obligations and enforce our Terms and Conditions
							</li>
						</ul>
					</section>

					<!-- Section 4: Data Sharing and Disclosure -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">4. Data Sharing and Disclosure</h2>
						<p class="mb-3 text-base leading-relaxed">
							<strong>We do not sell, trade, or rent your personal information to third parties.</strong>
						</p>
						<p class="mb-3 text-base leading-relaxed">
							We may share your information only in the following circumstances:
						</p>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">4.1 Third-Party Service Providers</p>
							<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
								<li>
									<strong>Google:</strong>
									For authentication via Google OAuth. See
									<a href="https://policies.google.com/privacy" target="_blank" class="font-semibold underline">
										Google's Privacy Policy
									</a>
									.
								</li>
								<li>
									<strong>Polar:</strong>
									For payment processing and subscription management. See
									<a href="https://polar.sh/legal/privacy" target="_blank" class="font-semibold underline">
										Polar's Privacy Policy
									</a>
									.
								</li>
								<li>
									<strong>Netlify:</strong>
									For hosting and content delivery. See
									<a href="https://www.netlify.com/privacy/" target="_blank" class="font-semibold underline">
										Netlify's Privacy Policy
									</a>
									.
								</li>
							</ul>
						</div>

						<div class="mb-4 ml-6">
							<p class="mb-2 text-base font-semibold">4.2 Legal Requirements</p>
							<p class="text-base leading-relaxed">
								We may disclose your information if required to do so by law or in response to valid requests by public
								authorities (e.g., a court or government agency).
							</p>
						</div>

						<div class="ml-6">
							<p class="mb-2 text-base font-semibold">4.3 Business Transfers</p>
							<p class="text-base leading-relaxed">
								If SimUI is involved in a merger, acquisition, or sale of assets, your personal information may be
								transferred. We will provide notice before your information is transferred and becomes subject to a
								different privacy policy.
							</p>
						</div>
					</section>

					<!-- Section 5: Data Retention -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">5. Data Retention</h2>
						<p class="mb-3 text-base leading-relaxed">
							We retain your information for as long as necessary to provide our Service and fulfill the purposes
							outlined in this Privacy Policy:
						</p>
						<ul class="ml-6 list-disc text-base leading-relaxed">
							<li>
								<strong>Active accounts:</strong>
								Data is retained while your account is active
							</li>
							<li>
								<strong>Deleted accounts:</strong>
								Upon account deletion, your data is permanently deleted within 30 days
							</li>
							<li>
								<strong>Local storage:</strong>
								Data stored in your browser remains until you clear it or delete your account
							</li>
							<li>
								<strong>Legal retention:</strong>
								We may retain certain information for longer periods if required by law
							</li>
						</ul>
					</section>

					<!-- Section 6: Data Security -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">6. Data Security</h2>
						<p class="mb-3 text-base leading-relaxed">
							We implement reasonable security measures to protect your information from unauthorized access,
							alteration, disclosure, or destruction. These measures include:
						</p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>HTTPS encryption for data transmission</li>
							<li>Secure authentication via Google OAuth 2.0</li>
							<li>JWT tokens for secure session management</li>
							<li>Regular security updates and monitoring</li>
						</ul>
						<p class="text-base leading-relaxed">
							However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
							to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
						</p>
					</section>

					<!-- Section 7: Your Rights -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">7. Your Rights and Choices</h2>
						<p class="mb-3 text-base leading-relaxed">
							You have the following rights regarding your personal information:
						</p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>
								<strong>Access:</strong>
								You can view your account information and saved themes at any time through your account dashboard
							</li>
							<li>
								<strong>Correction:</strong>
								You can update your account information (name, profile picture) through your Google account settings
							</li>
							<li>
								<strong>Deletion:</strong>
								You can delete your account and all associated data at any time
							</li>
							<li>
								<strong>Export:</strong>
								You can export your saved themes and data by contacting us at support&#64;simui.dev
							</li>
							<li>
								<strong>Withdrawal of Consent:</strong>
								You can withdraw consent by discontinuing use of our Service and deleting your account
							</li>
						</ul>
						<p class="text-base leading-relaxed">
							To exercise these rights, please contact us at
							<a href="mailto:support@simui.dev" class="font-semibold underline">support&#64;simui.dev</a>
							.
						</p>
					</section>

					<!-- Section 8: Cookies and Tracking -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">8. Cookies and Tracking Technologies</h2>
						<p class="mb-3 text-base leading-relaxed">
							SimUI does not use cookies for tracking or advertising purposes. We use browser local storage to:
						</p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>Maintain your login session</li>
							<li>Remember your theme preferences</li>
							<li>Store your appearance settings (light/dark mode)</li>
						</ul>
						<p class="text-base leading-relaxed">
							You can clear local storage at any time through your browser settings. Note that clearing local storage
							will sign you out and reset your preferences.
						</p>
					</section>

					<!-- Section 9: Children's Privacy -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">9. Children's Privacy</h2>
						<p class="text-base leading-relaxed">
							Our Service is not intended for children under the age of 13. We do not knowingly collect personal
							information from children under 13. If you are a parent or guardian and believe your child has provided us
							with personal information, please contact us, and we will delete such information from our systems.
						</p>
					</section>

					<!-- Section 10: International Users -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">10. International Data Transfers</h2>
						<p class="mb-3 text-base leading-relaxed">
							SimUI is operated from Vietnam, but our Service is available globally. Your information may be transferred
							to and processed in countries other than your country of residence, including the United States (where our
							hosting provider Netlify and payment processor Polar are based).
						</p>
						<p class="text-base leading-relaxed">
							By using our Service, you consent to the transfer of your information to these jurisdictions. We take
							steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
						</p>
					</section>

					<!-- Section 11: GDPR Compliance -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">11. GDPR Compliance (European Users)</h2>
						<p class="mb-3 text-base leading-relaxed">
							If you are located in the European Economic Area (EEA), you have additional rights under the General Data
							Protection Regulation (GDPR):
						</p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>
								<strong>Right to access</strong>
								your personal data
							</li>
							<li>
								<strong>Right to rectification</strong>
								of inaccurate data
							</li>
							<li>
								<strong>Right to erasure</strong>
								("right to be forgotten")
							</li>
							<li><strong>Right to restrict processing</strong></li>
							<li><strong>Right to data portability</strong></li>
							<li>
								<strong>Right to object</strong>
								to processing
							</li>
							<li>
								<strong>Right to withdraw consent</strong>
								at any time
							</li>
						</ul>
						<p class="mb-3 text-base leading-relaxed"><strong>Legal Basis for Processing:</strong></p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>
								<strong>Consent:</strong>
								You provide consent when signing in with Google
							</li>
							<li>
								<strong>Contract performance:</strong>
								Processing is necessary to provide the Service you've subscribed to
							</li>
							<li>
								<strong>Legitimate interests:</strong>
								To improve our Service and provide customer support
							</li>
						</ul>
						<p class="text-base leading-relaxed">
							To exercise your GDPR rights, please contact us at
							<a href="mailto:support@simui.dev" class="font-semibold underline">support&#64;simui.dev</a>
							.
						</p>
					</section>

					<!-- Section 12: Changes to Privacy Policy -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">12. Changes to This Privacy Policy</h2>
						<p class="mb-3 text-base leading-relaxed">
							We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
							operational, or regulatory reasons. When we make material changes, we will:
						</p>
						<ul class="mb-4 ml-6 list-disc text-base leading-relaxed">
							<li>Update the "Last Updated" date at the top of this page</li>
							<li>Notify you via email if you have an account</li>
							<li>Post a notice on our Service</li>
						</ul>
						<p class="text-base leading-relaxed">
							Your continued use of the Service after changes take effect constitutes acceptance of the updated Privacy
							Policy.
						</p>
					</section>

					<!-- Section 13: Contact Information -->
					<section>
						<h2 class="text-primary mb-4 text-xl font-semibold">13. Contact Us</h2>
						<p class="mb-3 text-base leading-relaxed">
							If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
							please contact us:
						</p>
						<p class="text-base leading-relaxed">
							<strong>Email:</strong>
							<a href="mailto:support@simui.dev" class="font-semibold underline">support&#64;simui.dev</a>
							<br />
							<strong>Website:</strong>
							SimUI
							<br />
							<strong>Response Time:</strong>
							We aim to respond to all privacy inquiries within 30 days
						</p>
					</section>

					<!-- Acknowledgment -->
					<section class="border-t pt-8">
						<p class="text-center text-base leading-relaxed italic">
							By using SimUI, you acknowledge that you have read, understood, and agree to this Privacy Policy.
						</p>
					</section>
				</div>
			</div>
			<app-footer />
		</div>
	`,
})
export class PrivacyPolicyComponent {}
