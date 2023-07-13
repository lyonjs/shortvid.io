import _ = require('lodash');

import {Volcamp} from '../../../../remotion/compositions/showcases/volcamp/Volcamp';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const VolcampConfig: CompositionProps = {
	compositionName: 'Volcamp2023',
	component: Volcamp,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	defaultProps: _.merge(
		{
			themeName: 'Web & Mobile',
			speakers: [
				{company: 'https://zenika.com/static/images/favicon-32x32.png'},
				{
					company:
						'https://bedrockstreaming.com/assets/favicon/apple-icon-57x57.png',
				},
			],
		},
		defaultTalkValues
	),
};
