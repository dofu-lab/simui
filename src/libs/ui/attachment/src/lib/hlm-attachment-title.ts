import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmAttachmentTitle],hlm-attachment-title',
	host: { 'data-slot': 'attachment-title' },
})
export class HlmAttachmentTitle {
	constructor() {
		classes(
			() =>
				'truncate text-sm font-medium group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block max-w-full min-w-0',
		);
	}
}
