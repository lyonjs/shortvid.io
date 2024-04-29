import {zColor} from '@remotion/zod-types';
import {z} from 'zod';

export const TalkBrandedSpeakerSchema = z.object({
	pictureUrl: z.string(),
	name: z.string(),
	company: z.string().optional(),
	job: z.string().optional(),
});

export const TalkBrandedSchema = z.object({
	backgroundColor: zColor(),
	title: z.string(),
	startingDate: z.date(),
	location: z.string().optional(),
	logoUrl: z.string(),
	speakers: z.array(TalkBrandedSpeakerSchema),
});
