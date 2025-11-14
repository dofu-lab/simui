import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import {
	HlmAccordion,
	HlmAccordionContent,
	HlmAccordionIcon,
	HlmAccordionItem,
	HlmAccordionTrigger,
} from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-08',
	imports: [
		HlmAccordion,
		HlmAccordionItem,
		HlmAccordionTrigger,
		HlmAccordionContent,
		HlmAccordionIcon,
		HlmIcon,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ sub-header and plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="py-2">
						<h3 class="contents">
							<button
								hlmAccordionTrigger
								class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
								<span class="flex flex-col items-start gap-1 text-[15px] leading-6 font-semibold">
									<span>
										{{ item.title }}
									</span>
									<span class="text-sm font-normal">{{ item.subTitle }}</span>
								</span>
								<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
							</button>
						</h3>

						<hlm-accordion-content class="text-muted-foreground">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion08Component {
	items = [
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

export const accordion08Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import {
	HlmAccordion,
	HlmAccordionContent,
	HlmAccordionIcon,
	HlmAccordionItem,
	HlmAccordionTrigger,
} from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-08',
	imports: [
		HlmAccordion,
		HlmAccordionItem,
		HlmAccordionTrigger,
		HlmAccordionContent,
		HlmAccordionIcon,
		HlmIcon,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus, lucideMinus })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ sub-header and plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="py-2">
						<h3 class="contents">
							<button
								hlmAccordionTrigger
								class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
								<span class="flex flex-col items-start gap-1 text-[15px] leading-6 font-semibold">
									<span>
										{{ item.title }}
									</span>
									<span class="text-sm font-normal">{{ item.subTitle }}</span>
								</span>
								<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
							</button>
						</h3>

						<hlm-accordion-content class="text-muted-foreground">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion08Component {
	items = [
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
}`;
