import {z} from 'zod';

export const carouselSchema = z.object({
	imageUrls: z.array(z.string()),
	logoUrl: z.string().optional(),
	imageDuration: z.number(),
});
