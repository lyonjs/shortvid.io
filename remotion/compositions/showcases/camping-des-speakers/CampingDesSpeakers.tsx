import {AbsoluteFill, Sequence} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Speakers} from './Speakers';
import {Intro} from './Intro';

export interface Speaker {
	picture: string;
	name: string;
	company: string;
}

export interface Props {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}

export const CampingDesSpeakers: React.FC<Props> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#82B6FA'}}>
			<Sequence name="Intro">
				<Intro />
			</Sequence>
			<Sequence from={50}>
				{speakers && <Speakers speakers={speakers} />}
				<TalkTitle title={title} />
			</Sequence>
			<Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
