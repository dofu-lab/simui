export interface ThemeStyleProps {
	background: string;
	foreground: string;
	card: string;
	'card-foreground': string;
	popover: string;
	'popover-foreground': string;
	primary: string;
	'primary-foreground': string;
	secondary: string;
	'secondary-foreground': string;
	muted: string;
	'muted-foreground': string;
	accent: string;
	'accent-foreground': string;
	destructive: string;
	'destructive-foreground': string;
	border: string;
	input: string;
	ring: string;
	'chart-1': string;
	'chart-2': string;
	'chart-3': string;
	'chart-4': string;
	'chart-5': string;
	sidebar: string;
	'sidebar-foreground': string;
	'sidebar-primary': string;
	'sidebar-primary-foreground': string;
	'sidebar-accent': string;
	'sidebar-accent-foreground': string;
	'sidebar-border': string;
	'sidebar-ring': string;
	'font-sans': string;
	'font-serif': string;
	'font-mono': string;
	radius: string;
	'shadow-color': string;
	'shadow-opacity': string;
	'shadow-blur': string;
	'shadow-spread': string;
	'shadow-offset-x': string;
	'shadow-offset-y': string;
	'letter-spacing': string;
	spacing?: string;
}

export interface ThemeStyles {
	light: ThemeStyleProps;
	dark: ThemeStyleProps;
}

export type ThemeStylesWithoutSpacing = {
	light: Omit<ThemeStyleProps, 'spacing'>;
	dark: Omit<ThemeStyleProps, 'spacing'>;
};

export interface ThemeEditorState {
	styles: ThemeStyles;
	currentMode: 'light' | 'dark';
	hslAdjustments: {
		hueShift: number;
		saturationScale: number;
		lightnessScale: number;
	};
	// Added preset optional to match editor-store usage if needed
	preset?: string;
}

export type ThemePreset = {
	id: string;
	source?: 'SAVED' | 'BUILT_IN' | 'UNSAVED';
	createdAt?: string;
	label?: string;
	styles: {
		light: ThemeStyleProps;
		dark: ThemeStyleProps;
	};
};

export type ColorType = 'hex' | 'hsl' | 'rgb' | 'oklch';
export type ColorScheme = 'light' | 'dark';
export type HistoryAction = 'APPLY' | 'CHANGE_COLOR' | 'CHANGE_RADIUS' | 'RESET' | 'UPDATE_THEME' | 'SAVE_THEME';

export type ColorTypeItem = {
	label: string;
	value: ColorType;
};

export type HistoryValue = {
	oldValue: string;
	newValue: string;
	targetKey: keyof ThemeStyleProps | 'selector';
	colorScheme: ColorScheme;
};

export type ThemeHistory = {
	preset: ThemePreset;
	values?: HistoryValue;
	timestamp: number;
	action: HistoryAction;
};
