import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-07',
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
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Term & Conditions</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg"
				*brnDialogContent="let ctx">
				<hlm-dialog-header class="contents space-y-0 text-left">
					<h2 class="mb-0 px-6 py-4 text-lg font-semibold">Terms & Conditions</h2>
					<div class="overflow-y-auto border-t">
						<div hlmDialogDescription class="px-6 py-4">
							<div class="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
								<div class="space-y-1">
									<p>
										<strong>Acceptance of Terms</strong>
									</p>
									<p>
										By accessing and using this application, you agree to comply with and be bound by these Terms of
										Service. If you disagree with any part of these terms, please discontinue use immediately.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>User Account Security</strong>
									</p>
									<p>
										You are responsible for safeguarding your account credentials and promptly reporting any
										unauthorized access. All activities under your account remain your responsibility regardless of who
										performs them.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Intellectual Property Rights</strong>
									</p>
									<p>
										All content provided through this application is protected by copyright and other intellectual
										property laws. Unauthorized reproduction, distribution, or commercial exploitation of any content is
										strictly prohibited without express written consent.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Limitation of Liability</strong>
									</p>
									<p>
										This application provides content "as is" without warranties of any kind. The owners shall not be
										liable for any damages arising from your use of or inability to use this service.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>User Conduct Guidelines</strong>
									</p>
									<ul class="list-disc pl-6">
										<li>Do not submit content that is illegal, harmful, or offensive</li>
										<li>Respect the privacy and rights of other users</li>
										<li>Do not attempt to interfere with the proper functioning of the service</li>
										<li>Follow all applicable laws and regulations when using this application</li>
									</ul>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Terms Modification</strong>
									</p>
									<p>
										We reserve the right to modify these terms at any time without notice. Your continued use of the
										application following any changes constitutes acceptance of those modifications.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Account Termination</strong>
									</p>
									<p>
										We may suspend or terminate your access to the service immediately, without prior notice or
										liability, for any reason including, but not limited to, a breach of these Terms.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Governing Law</strong>
									</p>
									<p>
										These terms shall be governed by and construed in accordance with the laws of the jurisdiction in
										which the service is primarily operated, without regard to its conflict of law provisions.
									</p>
								</div>
							</div>
						</div>
					</div>
					<hlm-dialog-footer class="gap-3 border-t px-6 py-4 sm:space-x-0">
						<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
						<button hlmBtn (click)="closeDialog()">I agree</button>
					</hlm-dialog-footer>
				</hlm-dialog-header>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog07Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog07Code = `
import { Component, viewChild } from '@angular/core';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-07',
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
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Term & Conditions</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-y-auto rounded-lg p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg"
				*brnDialogContent="let ctx">
				<hlm-dialog-header class="contents space-y-0 text-left">
					<h2 class="mb-0 px-6 py-4 text-lg font-semibold">Terms & Conditions</h2>
					<div class="overflow-y-auto border-t">
						<div hlmDialogDescription class="px-6 py-4">
							<div class="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
								<div class="space-y-1">
									<p>
										<strong>Acceptance of Terms</strong>
									</p>
									<p>
										By accessing and using this application, you agree to comply with and be bound by these Terms of
										Service. If you disagree with any part of these terms, please discontinue use immediately.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>User Account Security</strong>
									</p>
									<p>
										You are responsible for safeguarding your account credentials and promptly reporting any
										unauthorized access. All activities under your account remain your responsibility regardless of who
										performs them.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Intellectual Property Rights</strong>
									</p>
									<p>
										All content provided through this application is protected by copyright and other intellectual
										property laws. Unauthorized reproduction, distribution, or commercial exploitation of any content is
										strictly prohibited without express written consent.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Limitation of Liability</strong>
									</p>
									<p>
										This application provides content "as is" without warranties of any kind. The owners shall not be
										liable for any damages arising from your use of or inability to use this service.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>User Conduct Guidelines</strong>
									</p>
									<ul class="list-disc pl-6">
										<li>Do not submit content that is illegal, harmful, or offensive</li>
										<li>Respect the privacy and rights of other users</li>
										<li>Do not attempt to interfere with the proper functioning of the service</li>
										<li>Follow all applicable laws and regulations when using this application</li>
									</ul>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Terms Modification</strong>
									</p>
									<p>
										We reserve the right to modify these terms at any time without notice. Your continued use of the
										application following any changes constitutes acceptance of those modifications.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Account Termination</strong>
									</p>
									<p>
										We may suspend or terminate your access to the service immediately, without prior notice or
										liability, for any reason including, but not limited to, a breach of these Terms.
									</p>
								</div>

								<div class="space-y-1">
									<p>
										<strong>Governing Law</strong>
									</p>
									<p>
										These terms shall be governed by and construed in accordance with the laws of the jurisdiction in
										which the service is primarily operated, without regard to its conflict of law provisions.
									</p>
								</div>
							</div>
						</div>
					</div>
					<hlm-dialog-footer class="gap-3 border-t px-6 py-4 sm:space-x-0">
						<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
						<button hlmBtn (click)="closeDialog()">I agree</button>
					</hlm-dialog-footer>
				</hlm-dialog-header>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog07Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}
`;
