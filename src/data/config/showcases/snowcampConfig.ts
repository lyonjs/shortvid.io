import {CompositionProps} from '../compositionsConfig';
import {defaultTalkValues} from '../../defaultValues';
import {Snowcamp} from '../../../../remotion/compositions/showcases/snowcamp/Snowcamp';

export const SnowcampConfig: CompositionProps = {
	compositionName: 'Snowcamp',
	component: Snowcamp,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
