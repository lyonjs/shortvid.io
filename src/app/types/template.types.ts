import {z} from 'zod';

import {ReplayProps} from '../../../app/templates/replays/replay/page';
import {AlpesCraftProps} from '../../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {CampingDesSpeakersProps} from '../../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import {SponsorProps} from '../../../remotion/compositions/showcases/touraineTech/SponsorTouraineTech2023';
import {VolcampProps} from '../../../remotion/compositions/showcases/volcamp/components/VolcampTalk';
import {CarouselType} from '../../../remotion/compositions/templates/carousel/Carousel';
import {SilhouetteProps} from '../../../remotion/compositions/templates/silhouette/Silhouette';
import {SponsorSchema} from '../../../remotion/compositions/templates/sponsors/sponsors.types';
import {SpotlightNewSponsornProps} from '../../../remotion/compositions/templates/sponsors/spotlightNewSponsor/SpotlightNewSponsor';
import {TalkBrandedProps} from '../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {TalkProps} from '../../../remotion/compositions/templates/talk/Talk';
import {DefaultProps} from '../../../remotion/types/defaultProps.types';
import {LayerByModeProps} from '../LayerByMode';

export type DefaultPropsTypes =
	| {[key: string]: string | undefined}
	| DefaultProps
	| ReplayProps
	| TalkProps
	| TalkBrandedProps
	| AlpesCraftProps
	| VolcampProps
	| CampingDesSpeakersProps
	| LayerByModeProps
	| SponsorProps
	| z.infer<typeof SponsorSchema>
	| SilhouetteProps
	| SpotlightNewSponsornProps
	| CarouselType;

export type TemplateTypes =
	| React.FC<DefaultProps>
	| React.FC<ReplayProps>
	| React.FC<TalkProps>
	| React.FC<TalkBrandedProps>
	| React.FC<AlpesCraftProps>
	| React.FC<VolcampProps>
	| React.FC<CampingDesSpeakersProps>
	| React.FC<LayerByModeProps>
	| React.FC<SponsorProps>
	| React.FC<z.infer<typeof SponsorSchema>>
	| React.FC<SpotlightNewSponsornProps>
	| React.FC<SilhouetteProps>
	| React.FC<CarouselType>;
