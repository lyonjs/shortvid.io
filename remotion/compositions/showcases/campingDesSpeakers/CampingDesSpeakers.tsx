import {AbsoluteFill, Sequence} from 'remotion';
import {Introduction} from './Introduction';
import {TalkBackground} from './components/TalkBackground';
import {Talk} from './Talk';

export interface Speaker {
	picture: string;
	name: string;
	company: string;
}

export interface TalkProps {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}

export const CampingDesSpeakers: React.FC<TalkProps> = ({
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
			<Talk
				speakers={speakers}
				date={date}
				time={time}
				location={location}
				title={title}
			/>
		</AbsoluteFill>
	);
};
