import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {Title} from '../components/Title';
import {LyonJSLogo} from '../components/LyonJSLogo';

export const Sponsor: React.FC<{
	companyName?: string;
	backgroundImg?: string;
	sponsorLogo?: string;
}> = ({companyName = 'Evilcorp', backgroundImg, sponsorLogo}) => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();

	const LYONJS_DELAY = 20;
	const lyonJSLogoAppear = spring({
		frame: frame - LYONJS_DELAY,
		fps,
		from: -400,
		to: 50,
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

	const SPONSOR_LOGO_DELAY = 30;
	const sponsorOpacity = interpolate(
		frame - SPONSOR_LOGO_DELAY,
		[0, 20],
		[0, 1],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<ImageBackground animated src={backgroundImg} />
			<LyonJSLogo
				style={{
					position: 'absolute',
					top: 60,
					right: lyonJSLogoAppear,
					width: 'auto',
					height: '300px',
					filter: `blur(${lyonJSLogoDeblur}px)`,
				}}
			/>

			<AbsoluteFill
				style={{
					justifyContent: 'flex-end',
				}}
			>
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

				{!sponsorLogo && (
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
				)}

				{sponsorLogo && (
					<Img
						style={{
							display: 'block',
							opacity: sponsorOpacity,
							margin: '0 auto 100px',
							height: '500px',
						}}
						src={sponsorLogo}
					/>
				)}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
