import React from 'react';
import {Composition, Folder} from 'remotion';

import {Talk} from './talk/Talk';
import {TalkSchema} from './talk/talks.types';

export const MeetupToolKit: React.FC = () => {
	return (
		<Folder name="Meetup-ToolKit">
			<Folder name="HumanTalk">
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="HumanTalk-Talk"
					fps={30}
					durationInFrames={120}
					schema={TalkSchema}
					defaultProps={{
						speakersNames: 'John Doe',
						titleColor: '#772757',
						talkTitle: 'Is JS an awesome programing language ?',
						titleSize: 80,
						backgroundImg:
							'https://humantalks.com/assets/talks-10min-eabec95a48239e06c9dfb2c466874a3c734c54b579d38cf98a1135eb3f293c5e.jpg',
						speakerPicture:
							'https://raw.githubusercontent.com/lyonjs/shortvid.io/main/public/images/common/defaultAvatar.svg',
						eventLogo:
							'https://humantalks.com/assets/logo-HumanTalks-b238463e6389c198a989506119f06d0d0ef836cc90a3c7713939c0ae09eb5f76.png',
					}}
				/>
			</Folder>
			<Folder name="ParisJS">
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="ParisJS-Talk"
					fps={30}
					durationInFrames={120}
					schema={TalkSchema}
					defaultProps={{
						speakersNames: 'John Doe',
						titleColor: '#e14680',
						talkTitle: 'Is JS an awesome programing language ?',
						titleSize: 80,
						backgroundImg:
							'https://secure.meetupstatic.com/photos/event/4/e/2/0/highres_466520000.webp',
						speakerPicture:
							'https://raw.githubusercontent.com/lyonjs/shortvid.io/main/public/images/common/defaultAvatar.svg',
						eventLogo:
							'https://secure-content.meetupstatic.com/images/classic-events/499980504/128x128.jpg',
					}}
				/>
			</Folder>
			<Folder name="StrasbourgJS">
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="StrasbourgJS-Talk"
					fps={30}
					durationInFrames={120}
					schema={TalkSchema}
					defaultProps={{
						speakersNames: 'John Doe',
						titleColor: '#FFCC4A',
						talkTitle: 'Is JS an awesome programing language ?',
						titleSize: 80,
						backgroundImg:
							'https://secure.meetupstatic.com/photos/event/3/5/b/8/highres_415693752.webp',
						speakerPicture:
							'https://raw.githubusercontent.com/lyonjs/shortvid.io/main/public/images/common/defaultAvatar.svg',
						eventLogo:
							'https://secure-content.meetupstatic.com/images/classic-events/493856926/128x128.jpg',
					}}
				/>
			</Folder>
		</Folder>
	);
};
