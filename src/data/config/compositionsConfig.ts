import {z} from 'zod';

import {TalkBrandedSchema} from '../../../remotion/compositions/templates/talk/talks.types';
import {DefaultProps} from '../../../remotion/types/defaultProps.types';
import {TemplateTypes} from '../../app/types/template.types';

import {EventConfig} from './templates/eventConfig';
import {LayersConfig} from './templates/layersConfig';
import {MeetupConfig} from './templates/meetupConfig';
import {SilhouetteConfig} from './templates/silhouetteConfig';
import {
	SponsorConfig,
	SpotlightNewSponsorConfig,
} from './templates/sponsorConfig';
import {TalkBrandedConfig} from './templates/talkBrandedConfig';
import {TalkConfig} from './templates/talkConfig';

export type CompositionProps = {
	component: TemplateTypes;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	frameForThumbnail?: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | number | undefined}
		| DefaultProps
		| z.infer<typeof TalkBrandedSchema>;
};

type CompositionsConfigProps = {
	templates: Record<string, CompositionProps>;
};

export const CompositionsConfig: CompositionsConfigProps = {
	templates: {
		Talk: TalkConfig,
		TalkBranded: TalkBrandedConfig,
		Layers: LayersConfig,
		Sponsor: SponsorConfig,
		SpotlightNewSponsor: SpotlightNewSponsorConfig,
		Event: EventConfig,
		Meetup: MeetupConfig,
		Silhouette: SilhouetteConfig,
	},
};
