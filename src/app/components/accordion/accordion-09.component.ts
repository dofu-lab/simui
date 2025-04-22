import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell, lucideChevronDown, lucideLifeBuoy, lucideLink, lucideShieldCheck } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-09',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucideChevronDown, lucideLink, lucideBell, lucideShieldCheck, lucideLifeBuoy })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ icon, sub-title and chevron</h2>
			<div hlmAccordion>
				@for (item of items; track item.title) {
					<div hlmAccordionItem class="py-2">
						<button hlmAccordionTrigger class="px-0 py-2 hover:no-underline">
							<span class="flex items-center gap-3">
								<span class="flex size-10 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
									<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								</span>
								<span class="flex flex-col items-start gap-1 text-[15px] leading-6 font-semibold">
									<span>
										{{ item.title }}
									</span>
									<span class="text-sm font-normal">{{ item.subTitle }}</span>
								</span>
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground ps-13">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion09Component {
	items = [
		{
			title: 'Connected accounts',
			subTitle: 'Manage your linked social and work accounts',
			icon: 'lucideLink',
			content:
				'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.',
		},
		{
			title: 'Notifications',
			subTitle: 'Customize your notification preferences',
			icon: 'lucideBell',
			content:
				'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.',
		},
		{
			title: '2-step verification',
			subTitle: 'Add an extra layer of security to your account',
			icon: 'lucideShieldCheck',
			content:
				'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.',
		},
		{
			title: 'Contact support',
			subTitle: "We're here to help 24/7",
			icon: 'lucideLifeBuoy',
			content:
				'Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.',
		},
	];
}

export const accordion09Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell, lucideChevronDown, lucideLifeBuoy, lucideLink, lucideShieldCheck } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-09',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucideChevronDown, lucideLink, lucideBell, lucideShieldCheck, lucideLifeBuoy })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ icon, sub-title and chevron</h2>
			<div hlmAccordion>
				@for (item of items; track item.title) {
					<div hlmAccordionItem class="py-2">
						<button hlmAccordionTrigger class="px-0 py-2 hover:no-underline">
							<span class="flex items-center gap-3">
								<span class="flex size-10 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
									<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								</span>
								<span class="flex flex-col items-start gap-1 text-[15px] leading-6 font-semibold">
									<span>
										{{ item.title }}
									</span>
									<span class="text-sm font-normal">{{ item.subTitle }}</span>
								</span>
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground ps-13">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion09Component {
	items = [
		{
			title: 'Connected accounts',
			subTitle: 'Manage your linked social and work accounts',
			icon: 'lucideLink',
			content:
				'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.',
		},
		{
			title: 'Notifications',
			subTitle: 'Customize your notification preferences',
			icon: 'lucideBell',
			content:
				'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.',
		},
		{
			title: '2-step verification',
			subTitle: 'Add an extra layer of security to your account',
			icon: 'lucideShieldCheck',
			content:
				'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.',
		},
		{
			title: 'Contact support',
			subTitle: "We're here to help 24/7",
			icon: 'lucideLifeBuoy',
			content:
				'Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.',
		},
	];
}

`;
