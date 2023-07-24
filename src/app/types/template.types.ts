import {ReplayProps} from '../../../app/templates/replays/replay/page';
import {AlpesCraftProps} from '../../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {CampingDesSpeakersProps} from '../../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import {VolcampProps} from '../../../remotion/compositions/showcases/volcamp/components/VolcampTalk';
import {SilhouetteProps} from '../../../remotion/compositions/templates/silhouette/Silhouette';
import {SponsorProps} from '../../../remotion/compositions/templates/sponsor/Sponsor';
import {SpotlightNewSponsornProps} from '../../../remotion/compositions/templates/sponsor/spotlightNewSponsor/SpotlightNewSponsor';
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
	| SilhouetteProps
	| SpotlightNewSponsornProps;

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
	| React.FC<SpotlightNewSponsornProps>
	| React.FC<SilhouetteProps>;
