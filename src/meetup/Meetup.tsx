import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {MeetupTitle} from './MeetupTitle';
import {Register} from './Register';
import {MeetupDate} from './MeetupDate';
import {LyonJSLogo} from '../components/LyonJSLogo';

export const Meetup: React.FC<{
	backgroundImg?: string;
	title: string;
	date?: string;
}> = ({backgroundImg, title, date}) => {
	return (
		<AbsoluteFill>
			<ImageBackground animated src={backgroundImg} />

			<Sequence from={15}>
				<MeetupTitle title={title} />
			</Sequence>
			{date && (
				<Sequence from={40}>
					<MeetupDate date={date} />
				</Sequence>
			)}
			<Sequence from={80}>
				<Register />
			</Sequence>
			<LyonJSLogo
				style={{
					position: 'absolute',
					bottom: 30,
					right: 30,
					height: 100,
				}}
			/>
		</AbsoluteFill>
	);
};
