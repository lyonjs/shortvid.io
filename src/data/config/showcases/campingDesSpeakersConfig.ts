import _ = require('lodash');

import {CampingDesSpeakers} from '../../../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

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
