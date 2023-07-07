import {TouraineTechProps} from '../../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {ReplayProps} from '../../../app/templates/replay/page';
import {TalkBrandedProps} from '../../../remotion/compositions/templates/talk/branded/TalkBranded';

import {TalkConfig} from './templates/talkConfig';
import {TalkBrandedConfig} from './templates/talkBrandedConfig';
import {LayersConfig} from './templates/layersConfig';
import {SponsorConfig} from './templates/sponsorConfig';
import {EventConfig} from './templates/eventConfig';
import {MeetupConfig} from './templates/meetupConfig';
import {SilhouetteConfig} from './templates/silhouetteConfig';
import {DevoxxConfig} from './showcases/devoxxConfig';
import {MixitConfig} from './showcases/mixitConfig';
import {SnowcampConfig} from './showcases/snowcampConfig';
import {TouraineTechConfig} from './showcases/touraineTechConfig';
import {VeryTechTripConfig} from './showcases/veryTechTripConfig';
import {AlpesCraftConfig} from './showcases/alpesCraftConfig';
import {CampingDesSpeakersConfig} from './showcases/campingDesSpeakersConfig';
import {VolcampConfig} from './showcases/volcampConfig';

export type CompositionProps = {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	frameForThumbnail?: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | undefined}
		| TouraineTechProps
		| ReplayProps
		| TalkBrandedProps;
};

type CompositionsConfigProps = {
	templates: Record<string, CompositionProps>;
	showcases: Record<string, CompositionProps>;
};

export const CompositionsConfig: CompositionsConfigProps = {
	templates: {
		Talk: TalkConfig,
		TalkBranded: TalkBrandedConfig,
		Layers: LayersConfig,
		Sponsor: SponsorConfig,
		Event: EventConfig,
		Meetup: MeetupConfig,
		Silhouette: SilhouetteConfig,
	},
	showcases: {
		Devoxx: DevoxxConfig,
		Mixit: MixitConfig,
		Snowcamp: SnowcampConfig,
		TouraineTech: TouraineTechConfig,
		VeryTechTrip: VeryTechTripConfig,
		AlpesCraft: AlpesCraftConfig,
		CampingDesSpeakers: CampingDesSpeakersConfig,
		Volcamp2023: VolcampConfig,
	},
};
