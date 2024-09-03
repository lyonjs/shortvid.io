import React from 'react';
import {Composition, Folder} from 'remotion';

import {TalkBranded} from './branded/TalkBranded';
import {Talk} from './Talk';
import {TalkBrandedSchema, TalkSchema} from './talks.types';

export const TalksComposition: React.FC = () => {
	const startingDate = new Date(2023, 3, 18, 13);

	return (
		<Folder name="Talks">
			<Composition
				component={Talk}
				width={1200}
				height={1200}
				id="Talk"
				fps={30}
				durationInFrames={120}
				schema={TalkSchema}
				defaultProps={{
					speakersNames: 'John Doe',
					titleColor: '#efdb50',
					talkTitle: 'Is JS an awesome programing language ?',
					titleSize: 80,
					backgroundImg:
						'https://github.com/lyonjs/shortvid.io/blob/48ffea960b300eb9230786ed0ab043ec3387e877/public/images/showcases/lyonjs/defaultBackgroundImage.jpeg?raw=true',
					speakerPicture:
						'https://raw.githubusercontent.com/lyonjs/shortvid.io/main/public/images/common/defaultAvatar.svg',
					eventLogo:
						'https://github.com/lyonjs/shortvid.io/blob/main/public/images/showcases/lyonjs/lyonjsSquaredLogo.png?raw=true',
				}}
			/>
			<Composition
				component={TalkBranded}
				width={1280}
				height={720}
				id="TalkBranded"
				fps={30}
				durationInFrames={140}
				schema={TalkBrandedSchema}
				defaultProps={{
					backgroundColor: '#086fda',
					title: 'Certification “Google Cloud Architect”',
					startingDate,
					location: '5 Place Jules Ferry, 69006.',
					logoUrl:
						'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg',
					speakers: [
						{
							pictureUrl:
								'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/20200911_094649_MbC4W4N.jpg',
							name: 'Julien Landuré',
							company: 'Zenika Nantes',
							job: 'CTO / GDE',
						},
					],
				}}
			/>
		</Folder>
	);
};
