import {TalkDetails} from '../../../../design/molecules/TalkDetails';
import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Details: React.FC<{
	date?: string;
	time?: string;
	location?: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		frame: frame - 30,
		from: -20,
		to: 15,
		fps,
		durationInFrames: 30,
	});
	const opacity = interpolate(frame, [30, 60], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const mountainPop = spring({
		frame: frame - 28,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 20,
	});

	const commonMountainStyle = {
		position: 'absolute',
		bottom: 0,
	} as React.CSSProperties;

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<Img
				src={staticFile('images/showcases/volcamp/mountainCenter.svg')}
				alt="Center Mountain"
				width={475}
				height={153}
				style={{
					...commonMountainStyle,
					left: '50%',
					transform: `translateX(-42%) scaleY(${mountainPop})`,
					transformOrigin: 'bottom center',
				}}
			/>
			<Img
				src={staticFile('images/showcases/volcamp/mountainLeft.svg')}
				alt="Left Mountain"
				width={524}
				height={172}
				style={{
					...commonMountainStyle,
					left: 0,
					transform: `scaleY(${mountainPop})`,
					transformOrigin: 'bottom center',
				}}
			/>
			<Img
				src={staticFile('images/showcases/volcamp/mountainRight.svg')}
				alt="Right Mountain"
				width={462}
				height={170}
				style={{
					...commonMountainStyle,
					right: 0,
					transform: `scaleY(${mountainPop})`,
					transformOrigin: 'bottom center',
				}}
			/>
			<TalkDetails
				items={{
					date,
					time,
					location,
					icons: {
						locationIcon: 'fluent:location-28-filled',
					},
				}}
				style={{opacity, bottom: drop}}
				textStyle={{
					fontSize: '24px',
					fontFamily: 'inherit',
					fontWeight: '500',
				}}
				iconStyle={{
					fontSize: '50px',
				}}
			/>
		</div>
	);
};
