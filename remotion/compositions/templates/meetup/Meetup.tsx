import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../../../design/atoms/ImageBackground';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';
import {MeetupDate} from './MeetupDate';

export interface MeetupProps {
	eventLogo?: string;
	backgroundImg?: string;
	title: string;
	date?: string;
}

export const Meetup = ({
	backgroundImg,
	title,
	date,
	eventLogo,
}: MeetupProps) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<ImageBackground animated src={backgroundImg} />

			<Sequence from={40} durationInFrames={130}>
				<MeetupPresentation title={title} eventLogo={eventLogo} />
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
