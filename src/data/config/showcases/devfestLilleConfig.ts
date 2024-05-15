import {DevfestLille} from '../../../../remotion/compositions/showcases/devfestLille/DevfestLille';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const DevfestLilleConfig: CompositionProps = {
	compositionName: 'DevfestLilleTalk',
	component: DevfestLille,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	fps: 60,
	defaultProps: defaultTalkValues,
};
