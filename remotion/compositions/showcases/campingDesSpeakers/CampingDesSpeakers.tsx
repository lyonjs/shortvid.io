import {AbsoluteFill, Sequence} from 'remotion';

import {TalkBackground} from './components/TalkBackground';
import {Introduction} from './Introduction';
import {Talk} from './Talk';

export type Speaker = {
	picture: string;
	name: string;
	company: string;
};

export type CampingDesSpeakersProps = {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
};

export const CampingDesSpeakers: React.FC<CampingDesSpeakersProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#82B6FA'}}>
			<Sequence durationInFrames={300}>
				<Introduction />
			</Sequence>
			<Sequence from={270}>
				<TalkBackground />
			</Sequence>
			<Talk speakers={speakers} date={date} time={time} location={location} title={title} />
		</AbsoluteFill>
	);
};
