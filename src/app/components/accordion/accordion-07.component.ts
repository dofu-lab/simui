import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

interface AccordionItem {
	id: string;
	title: string;
	subTitle: string;
	content: string;
}

@Component({
	selector: 'sim-accordion-07',
	imports: [HlmAccordionImports],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ sub-title and chevron</h2>
			<hlm-accordion>
				@for (item of items; track item.id) {
					<hlm-accordion-item>
						<hlm-accordion-trigger>
							<div class="flex flex-col items-start gap-1">
								<span>
									{{ item.title }}
								</span>
								<span class="text-muted-foreground text-sm font-normal">
									{{ item.subTitle }}
								</span>
							</div>
						</hlm-accordion-trigger>
						<hlm-accordion-content>
							{{ item.content }}
						</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion07Component {
	protected readonly items: AccordionItem[] = [
		{
			id: 'acc-07-1',
			title: 'Connected accounts',
			subTitle: 'Manage your linked social and work accounts',
			content:
				'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.',
		},
		{
			id: 'acc-07-2',
			title: 'Notifications',
			subTitle: 'Customize your notification preferences',
			content:
				'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.',
		},
		{
			id: 'acc-07-3',
			title: '2-step verification',
			subTitle: 'Add an extra layer of security to your account',
			content:
				'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.',
		},
		{
			id: 'acc-07-4',
			title: 'Contact support',
			subTitle: "We're here to help 24/7",
			content:
				'Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.',
		},
	];
}
