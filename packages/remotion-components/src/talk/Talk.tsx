import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {LyonJSLogo} from '../components/LyonJSLogo';
import {Title} from '../components/Title';
import {Speaker} from '../components/Speaker';

export const Talk: React.FC<{
	speakersNames: string;
	talkTitle: string;
	speakerPicture?: string;
	titleSize?: string;
}> = ({speakersNames, talkTitle, speakerPicture, titleSize = '80px'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const PICTURE_DELAY = 20;
	const pictureDrop = spring({
		frame: frame - PICTURE_DELAY,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

	const TITLE_DELAY = 30;
	const titleOpacity = spring({
		frame: frame - TITLE_DELAY,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});
	const titleDeblur = interpolate(frame - TITLE_DELAY, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill>
			<ImageBackground animated animationDuration={30} />
			<AbsoluteFill>
				{speakerPicture && (
					<Speaker
						style={{
							position: 'absolute',
							top: pictureDrop,
							left: 330,
						}}
						src={speakerPicture}
					/>
				)}

				<Title
					style={{
						color: 'white',
						position: 'absolute',
						fontSize: 70,
						left: '10%',
						right: '10%',
						top: '50%',
						opacity: titleOpacity,
						filter: `blur(${titleDeblur}px)`,
					}}
				>
					{speakersNames}
				</Title>

				<Title
					style={{
						color: 'white',
						position: 'absolute',
						fontSize: titleSize,
						left: '10%',
						right: '10%',
						top: '60%',
						opacity: titleOpacity,
						filter: `blur(${titleDeblur}px)`,
					}}
				>
					{talkTitle}
				</Title>

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
