import {VeryTechTrip} from '../../../../remotion/compositions/showcases/veryTechTrip/VeryTechTrip';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const VeryTechTripConfig: CompositionProps = {
	compositionName: 'VeryTechTrip',
	component: VeryTechTrip,
	width: 720,
	height: 720,
	durationInFrames: 150,
	defaultProps: defaultTalkValues,
};
