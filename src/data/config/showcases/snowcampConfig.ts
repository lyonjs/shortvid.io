import {Snowcamp} from '../../../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const SnowcampConfig: CompositionProps = {
	compositionName: 'Snowcamp',
	component: Snowcamp,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
