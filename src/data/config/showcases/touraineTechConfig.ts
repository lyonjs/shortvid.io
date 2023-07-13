import {TouraineTech2023} from '../../../../remotion/compositions/showcases/touraineTech/TouraineTech2023';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const TouraineTechConfig: CompositionProps = {
	compositionName: 'TouraineTech2023',
	component: TouraineTech2023,
	width: 1280,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
