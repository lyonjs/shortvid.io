import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {LyonJSLogo} from '../components/LyonJSLogo';
import {TalkSpeakerPicture} from './TalkSpeakerPicture';
import {TalkTitles} from './TalkTitles';

export const Talk: React.FC<{
	speakersNames: string;
	talkTitle: string;
	backgroundImg?: string;
	speakerPicture?: string;
	titleSize?: string;
}> = ({
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
			<Sequence from={0} name="Background">
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

				<LyonJSLogo
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
