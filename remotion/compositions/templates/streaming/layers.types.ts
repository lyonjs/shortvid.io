import {zColor} from '@remotion/zod-types';
import {z} from 'zod';

export const LayerSchema = z.object({
	primaryColor: zColor().optional(),
	secondaryColor: zColor().optional(),
	decorationUrl: z.string().optional(),
});

export const DefaultLayerSchema = LayerSchema.extend({
	title: z.string().optional(),
	sponsorLogoUrl: z.string().optional(),
});
