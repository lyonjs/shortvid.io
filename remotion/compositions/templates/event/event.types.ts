import {z} from 'zod';

export const eventSchema = z.object({
	backgroundImg: z.string().optional(),
	title: z.string(),
	lottieAsset: z.string().optional(),
	paillettesAsset: z.string().optional(),
	fontFamily: z.string().optional(),
});
