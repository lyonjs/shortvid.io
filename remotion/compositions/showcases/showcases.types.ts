import {z} from 'zod';

export const SpeakerSchema = z.object({
	name: z.string(),
	picture: z.string(),
});

const SpeakerVolcampSchema = SpeakerSchema.extend({
	company: z.string(),
});

export const ShowcaseSchema = z.object({
	title: z.string(),
	speakers: z.array(SpeakerSchema),
	date: z.string(),
	time: z.string(),
	location: z.string(),
});

export const ShowcaseVolcampSchema = z.object({
	themeName: z.string(),
	title: z.string(),
	speakers: z.array(SpeakerVolcampSchema),
	date: z.string(),
	time: z.string(),
	location: z.string(),
});
