import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';
import {Talk} from './Talk';
import {TalkBranded} from './branded/TalkBranded';

export const TalksComposition: React.FC = () => {
	return (
		<Folder name="Talks">
			<Composition
				component={Talk}
				width={1200}
				height={1200}
				id="TalkWithPicture"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					speakersNames: 'John Doe',
					talkTitle: 'Is JS an awesome programing language ?',
					speakerPicture: staticFile('/lyonjs-squared.png'),
				}}
			/>
			<Composition
				component={Talk}
				width={1200}
				height={1200}
				id="Talk"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					speakersNames: 'Foo bar',
					talkTitle: 'Is JS an awesome programing language?',
				}}
			/>
			<Composition
				component={TalkBranded}
				width={1200}
				height={700}
				id="TalkBranded"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					title: 'Certification “Google Cloud Architect”',
					startingDate: new Date(2023, 3, 18, 13),
					endingDate: new Date(2023, 4, 23, 13, 45),
					day: 'mardi',
					logoUrl:
						'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg',
					speaker: {
						pictureUrl:
							'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/20200911_094649_MbC4W4N.jpg',
						name: 'Julien Landuré',
						company: 'Zenika Nantes',
						job: 'CTO / GDE',
					},
				}}
			/>
		</Folder>
	);
};
