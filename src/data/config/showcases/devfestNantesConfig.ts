import {DevfestNantes} from '../../../../remotion/compositions/showcases/devfestNantes/DevfestNantes';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const DevfestNantesConfig: CompositionProps = {
	compositionName: 'DevfestNantes',
	component: DevfestNantes,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
