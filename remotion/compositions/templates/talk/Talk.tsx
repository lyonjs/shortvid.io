import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../../../design/atoms/ImageBackground';
import {EventLogo} from '../../../design/atoms/EventLogo';
import {TalkSpeakerPicture} from './TalkSpeakerPicture';
import {TalkTitles} from './TalkTitles';

export const Talk: React.FC<{
	eventLogo?: string;
	speakersNames: string;
	talkTitle: string;
	backgroundImg?: string;
	speakerPicture?: string;
	titleSize?: string;
}> = ({
	eventLogo,
	speakersNames,
	talkTitle,
	speakerPicture,
	titleSize = '80',
	backgroundImg,
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<Sequence name="Background">
				<ImageBackground animated animationDuration={30} src={backgroundImg} />
			</Sequence>
			<AbsoluteFill>
				<Sequence from={20} name="Picture">
					<TalkSpeakerPicture speakerPicture={speakerPicture} />
				</Sequence>

				<Sequence from={30} name="Titles">
					<TalkTitles
						speakersNames={speakersNames}
						titleSize={titleSize}
						talkTitle={talkTitle}
					/>
				</Sequence>

				<EventLogo
					src={eventLogo}
					style={{
						position: 'absolute',
						bottom: 30,
						right: 30,
						height: 100,
					}}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
