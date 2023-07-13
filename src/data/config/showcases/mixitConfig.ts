import {MixitIntroTalk} from '../../../../remotion/compositions/showcases/mixit/MixitIntroTalk';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const MixitConfig: CompositionProps = {
	compositionName: 'Mixit2023',
	component: MixitIntroTalk,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
