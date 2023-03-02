import {
	AbsoluteFill,
	Img,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Noise} from './Noise';
import {FadeIn} from '../../conference/very-tech-trip/FadeIn';
import {loadFont} from '@remotion/google-fonts/Rubik';

const {fontFamily} = loadFont();

export const Vercel: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const moveUp = interpolate(frame, [120, 180], [0, -250], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const scaleUp = spring({
		frame: frame - 10,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#fafafa',
				overflow: 'hidden',
			}}
		>
			<Sequence name="Noise" durationInFrames={300}>
				<Noise speed={0.004} circleRadius={5} maxOffset={50} />
			</Sequence>
			<Sequence from={10} durationInFrames={300} name="Texte">
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						paddingTop: 200,
					}}
				>
					<p
						style={{
							fontFamily,
							fontSize: 100,
							fontWeight: '800',
							color: '#000',
							textAlign: 'center',
							textTransform: 'uppercase',
							letterSpacing: 10,
						}}
					>
						Nouveau sponsor
					</p>
				</div>
			</Sequence>
			<Sequence from={280} durationInFrames={300} name="LyonJS Logo">
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FadeIn>
						<Img
							src={staticFile('lyonjs-rectangle.png')}
							alt="Vercel logo"
							style={{
								transform: `translateY(${moveUp}px) scale(${scaleUp})`,
								width: 1100,
							}}
						/>
					</FadeIn>
				</div>
			</Sequence>
			<Sequence from={280} durationInFrames={300} name="Vercel Logo">
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Img
						src={staticFile('images/sponsors/vercel-logotype-dark.svg')}
						alt="Vercel logo"
						style={{
							transform: `translateY(250px)`,
							width: 700,
						}}
					/>
				</div>
			</Sequence>
		</AbsoluteFill>
	);
};
