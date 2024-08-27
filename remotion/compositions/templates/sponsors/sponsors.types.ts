import {z} from 'zod';

export const SponsorSchema = z.object({
	backgroundImg: z.string(),
	sponsorLogo: z.string().optional(),
	companyName: z.string().optional(),
	sponsorLocalisation: z.string().optional(),
});

export const SpotlightNewSponsorSchema = z.object({
	sponsorLogo: z.string().url().optional(),
	logo: z.string().optional(),
});
