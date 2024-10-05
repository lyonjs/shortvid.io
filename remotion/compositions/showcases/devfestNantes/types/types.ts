import {z} from 'zod';

import {ShowcaseSchema} from '../../showcases.types';

export type ComponentDisplayMode = {
	isTotemDisplayMode?: boolean;
};

export const ShowcaseDevfestNantes2024Schema = ShowcaseSchema.extend({
	titleFontSize: z.number().optional(),
});
