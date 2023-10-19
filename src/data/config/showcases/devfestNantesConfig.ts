import {DevfestNantesLoop} from '../../../../remotion/compositions/showcases/devfestNantes/DevfestNantesLoop';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const DevfestNantesConfig: CompositionProps = {
	compositionName: 'DevfestNantes',
	component: DevfestNantesLoop,
	width: 1280,
	height: 720,
	durationInFrames: 350,
	defaultProps: defaultTalkValues,
};
