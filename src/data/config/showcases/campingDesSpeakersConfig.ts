import {CompositionProps} from '../compositionsConfig';
import {defaultTalkValues} from '../../defaultValues';
import {CampingDesSpeakers} from '../../../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import _ = require('lodash');

export const CampingDesSpeakersConfig: CompositionProps = {
	compositionName: 'CampingDesSpeakers',
	component: CampingDesSpeakers,
	width: 1280,
	height: 720,
	durationInFrames: 540,
	fps: 60,
	defaultProps: _.merge(
		{
			speakers: [{company: 'Zenika'}, {company: 'Bedrock'}],
		},
		defaultTalkValues
	),
};
