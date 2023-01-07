import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';
import {MeetupDate} from './MeetupDate';

export const Meetup: React.FC<{
	backgroundImg?: string;
	title: string;
	date?: string;
}> = ({backgroundImg, title, date}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<ImageBackground animated src={backgroundImg} />

			<Sequence from={40} durationInFrames={130}>
				<MeetupPresentation title={title} />
			</Sequence>
			{date && (
				<Sequence from={120}>
					<MeetupDate date={date} />
				</Sequence>
			)}
			<Sequence from={150}>
				<Register />
			</Sequence>
		</AbsoluteFill>
	);
};
