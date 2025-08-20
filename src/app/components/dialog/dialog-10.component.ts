import { Component, viewChild } from '@angular/core';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-10',
	imports: [
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		HlmInput,
	],
	template: `
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Feedback</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="mb-0 text-lg font-semibold">Send us feedback</h2>
					<span hlmDialogDescription>
						Watch
						<a class="text-primary hover:underline" href="#">tutorials</a>
						, read Sim UI's
						<a class="text-primary hover:underline" href="#">documentation</a>
						, or join our
						<a class="text-primary hover:underline" href="#">Discord</a>
						for community help.
					</span>
					<textarea hlmInput type="text" placeholder="How can we improve Sim UI?" class="mt-4 min-h-[80px]"></textarea>
				</hlm-dialog-header>
				<hlm-dialog-footer class="mt-2 gap-3 sm:space-x-0">
					<button hlmBtn type="submit" (click)="closeDialog()">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog10Component {
	public dialogRef = viewChild(BrnDialog);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog10Code = `import { Component, viewChild } from '@angular/core';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-10',
	imports: [
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		HlmInput,
	],
	template: \`
		<hlm-dialog>
			<button brnDialogTrigger hlmBtn variant="outline">Feedback</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="mb-0 text-lg font-semibold">Send us feedback</h2>
					<span hlmDialogDescription>
						Watch
						<a class="text-primary hover:underline" href="#">tutorials</a>
						, read Sim UI's
						<a class="text-primary hover:underline" href="#">documentation</a>
						, or join our
						<a class="text-primary hover:underline" href="#">Discord</a>
						for community help.
					</span>
					<textarea hlmInput type="text" placeholder="How can we improve Sim UI?" class="mt-4 min-h-[80px]"></textarea>
				</hlm-dialog-header>
				<hlm-dialog-footer class="mt-2 gap-3 sm:space-x-0">
					<button hlmBtn type="submit" (click)="closeDialog()">Send feedback</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog10Component {
	public dialogRef = viewChild(BrnDialog);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
