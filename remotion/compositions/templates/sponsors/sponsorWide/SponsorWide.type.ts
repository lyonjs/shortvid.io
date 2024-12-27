import {zColor} from '@remotion/zod-types';
import {z} from 'zod';

const SPONSOR_TYPES = ['gold', 'silver', 'bronze'] as const;

export const SponsorWideSchema = z.object({
	backgroundImg: z.string(),
	sponsorLogo: z.string(),
	eventLogo: z.string(),
	type: z.enum(SPONSOR_TYPES),
	logoBackground: zColor().optional(),
	color: zColor().optional().default('#efdb4f'),
});
