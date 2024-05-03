import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {Mixit} from './Mixit';
import {MixitIntro} from './MixitIntro';
import {MixitIntroTalk} from './MixitIntroTalk';
import {MixitSponsor} from './MixitSponsor';

export const MixitComposition: React.FC = () => {
	return (
		<Folder name="Mixit">
			<Composition
				id="Mixit"
				component={Mixit}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="Mixit-Intro"
				component={MixitIntro}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Mixit-Intro-Talk"
				component={MixitIntroTalk}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="Mixit-Sponsor"
				component={MixitSponsor}
				durationInFrames={150}
				fps={30}
				width={720}
				height={720}
				defaultProps={{
					picture: 'https://mixitconf.org/images/sponsors/logo-viseo.svg',
					category: 'tour de cou',
					background:
						'https://live.staticflickr.com/65535/52097860061_1609b2a1c6_b_d.jpg',
					name: 'LyonJS',
				}}
			/>
		</Folder>
	);
};
