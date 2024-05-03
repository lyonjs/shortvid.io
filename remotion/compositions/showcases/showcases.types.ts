import {z} from 'zod';

const SpeakerSchema = z.object({
	name: z.string(),
	picture: z.string(),
});

export const ShowcaseSchema = z.object({
	title: z.string(),
	speakers: z.array(SpeakerSchema),
	date: z.string(),
	time: z.string(),
	location: z.string(),
});
