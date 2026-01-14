export function getLabelForColor(key?: string): string {
	if (!key) {
		return '';
	}

	return (
		{
			background: 'Background',
			foreground: 'Foreground',
			primary: 'Primary',
			'primary-foreground': 'Primary Foreground',
			secondary: 'Secondary',
			'secondary-foreground': 'Secondary Foreground',
			muted: 'Muted',
			'muted-foreground': 'Muted Foreground',
			accent: 'Accent',
			'accent-foreground': 'Accent Foreground',
			destructive: 'Destructive',
			'destructive-foreground': 'Destructive Foreground',
			border: 'Border',
			input: 'Input',
			ring: 'Ring',
			card: 'Card',
			'card-foreground': 'Card Foreground',
			popover: 'Popover',
			'popover-foreground': 'Popover Foreground',
			'font-sans': 'Sans Serif Font',
			'font-serif': 'Serif Font',
			'font-mono': 'Monospace Font',
			'letter-spacing': 'Letter Spacing',
		}[key] || key
	);
}
