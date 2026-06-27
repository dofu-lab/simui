import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

interface AccordionItem {
	id: string;
	title: string;
	subTitle: string;
	content: string;
}

@Component({
	selector: 'sim-accordion-08',
	imports: [HlmAccordionImports, NgIcon, BrnAccordionImports],
	providers: [provideIcons({ lucidePlus, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ sub-header and plus-minus</h2>
			<hlm-accordion>
				@for (item of items; track item.id) {
					<hlm-accordion-item>
						<h3 brnAccordionHeader class="flex">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] motion-reduce:transition-none">
								<div class="flex flex-col items-start gap-1">
									<span>
										{{ item.title }}
									</span>
									<span class="text-muted-foreground text-sm font-normal">
										{{ item.subTitle }}
									</span>
								</div>
								<ng-icon
									name="lucidePlus"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
								<ng-icon
									name="lucideMinus"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
							</button>
						</h3>
						<hlm-accordion-content>
							{{ item.content }}
						</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion08Component {
	protected readonly items: AccordionItem[] = [
		{
			id: 'acc-08-1',
			title: 'Connected accounts',
			subTitle: 'Manage your linked social and work accounts',
			content:
				'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.',
		},
		{
			id: 'acc-08-2',
			title: 'Notifications',
			subTitle: 'Customize your notification preferences',
			content:
				'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.',
		},
		{
			id: 'acc-08-3',
			title: '2-step verification',
			subTitle: 'Add an extra layer of security to your account',
			content:
				'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.',
		},
		{
			id: 'acc-08-4',
			title: 'Contact support',
			subTitle: "We're here to help 24/7",
			content:
				'Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.',
		},
	];
}
