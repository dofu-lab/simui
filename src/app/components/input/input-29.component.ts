import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-29',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<div class="group relative">
			<label
				hlmLabel
				for="input-29"
				class="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs">
				<span class="bg-background inline-flex px-2">Input with overlapping label</span>
			</label>
			<input hlmInput id="input-29" type="text" placeholder=" " />
		</div>
	`,
})
export class Input29Component {}

export const input29Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-29',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<div class="group relative">
			<label
				hlmLabel
				for="input-29"
				class="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs">
				<span class="bg-background inline-flex px-2">Input with overlapping label</span>
			</label>
			<input hlmInput id="input-29" type="text" placeholder=" " />
		</div>
	\`,
})
export class Input29Component {}`;
