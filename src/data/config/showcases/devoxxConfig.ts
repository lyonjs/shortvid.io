import {CompositionProps} from '../compositionsConfig';
import {Devoxx2023} from '../../../../remotion/compositions/showcases/devoxx/Devoxx2023';
import {defaultTalkValues} from '../../defaultValues';

export const DevoxxConfig: CompositionProps = {
	compositionName: 'Devoxx2023',
	component: Devoxx2023,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	defaultProps: defaultTalkValues,
};
