import {CompositionProps} from '../compositionsConfig';
import {defaultTalkValues} from '../../defaultValues';
import {VeryTechTrip} from '../../../../remotion/compositions/showcases/veryTechTrip/VeryTechTrip';

export const VeryTechTripConfig: CompositionProps = {
	compositionName: 'VeryTechTrip',
	component: VeryTechTrip,
	width: 720,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
