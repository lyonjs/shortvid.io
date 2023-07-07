import {CompositionProps} from '../compositionsConfig';
import {defaultTalkValues} from '../../defaultValues';
import {TouraineTech2023} from '../../../../remotion/compositions/showcases/touraineTech/TouraineTech2023';

export const TouraineTechConfig: CompositionProps = {
	compositionName: 'TouraineTech2023',
	component: TouraineTech2023,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
