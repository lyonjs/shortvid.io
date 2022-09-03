import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {Title} from '../components/Title';
import {LyonJSLogo} from '../components/LyonJSLogo';

export const Sponsor: React.FC<{companyName?: string}> = ({
	companyName = 'Evilcorp',
}) => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();

	const LYONJS_DELAY = 20;
	const lyonJSLogoAppear = spring({
		frame: frame - LYONJS_DELAY,
		fps,
		from: -700,
		to: -100,
		durationInFrames: 30,
	});
	const lyonJSLogoDeblur = interpolate(frame - LYONJS_DELAY, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
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
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<ImageBackground animated />
			<LyonJSLogo
				style={{
					position: 'absolute',
					top: 10,
					right: lyonJSLogoAppear,
					width: '80%',
					height: 'auto',
					filter: `blur(${lyonJSLogoDeblur}px)`,
				}}
			/>

			<AbsoluteFill>
				<Title
					style={{
						fontSize: 70,
						color: 'white',
						position: 'absolute',
						left: '10%',
						top: height / 2 - 70,
						opacity: titleOpacity,
						filter: `blur(${titleDeblur}px)`,
					}}
				>
					Meetup sponsorisé par:
				</Title>

				<Title
					style={{
						color: 'white',
						position: 'absolute',
						left: '10%',
						top: height / 2,
						opacity: titleOpacity,
						filter: `blur(${titleDeblur}px)`,
					}}
				>
					{companyName}
				</Title>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
