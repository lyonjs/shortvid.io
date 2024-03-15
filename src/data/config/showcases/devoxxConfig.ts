import {Devoxx2023} from '../../../../remotion/compositions/showcases/devoxx/Devoxx2023';
import {Devoxx2024} from '../../../../remotion/compositions/showcases/devoxx/Devoxx2024';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const DevoxxConfig: CompositionProps = {
	compositionName: 'Devoxx2023',
	component: Devoxx2023,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	defaultProps: defaultTalkValues,
};

export const Devoxx2024Config: CompositionProps = {
	compositionName: 'Devoxx2024',
	component: Devoxx2024,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	defaultProps: defaultTalkValues,
};
