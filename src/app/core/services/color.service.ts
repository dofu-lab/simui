import { ColorType } from '@/app/types';
import { Injectable } from '@angular/core';
import { converter, formatHsl, formatRgb } from 'culori';

@Injectable()
export class ColorService {
	public convertColor(color: string, type: ColorType): string | undefined {
		switch (type) {
			case 'hsl':
				const hslConverter = converter('hsl');
				const formattedHslColor = hslConverter(color);
				return formatHsl(formattedHslColor);
			case 'rgb':
				const rgbConverter = converter('rgb');
				const formattedRgbColor = rgbConverter(color);
				return formatRgb(formattedRgbColor);
			case 'oklch':
				const oklchConverter = converter('oklch');
				const formattedOklchColor = oklchConverter(color);
				return formattedOklchColor
					? `oklch(${formatNumber(formattedOklchColor.l)} ${formatNumber(formattedOklchColor.c)} ${formatNumber(formattedOklchColor.h)})`
					: color;
			default:
				return color;
		}
	}
}

const formatNumber = (num?: number) => {
	if (!num) {
		return '0';
	}

	return num % 1 === 0 ? num : num.toFixed(4);
};
