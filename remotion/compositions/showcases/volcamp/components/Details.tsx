import {TalkDetails} from '../../../../design/molecules/TalkDetails';
import {
	AbsoluteFill,
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

	const delay = 30;

	const detailsDrop = spring({
		frame: frame - delay,
		from: -20,
		to: 15,
		fps,
		durationInFrames: 30,
	});
	const detailsOpacity = interpolate(frame, [delay, delay + 30], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const mountainPop = spring({
		frame: frame - 28,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '100%',
				}}
			>
				<Img
					src={staticFile('images/showcases/volcamp/mountains.svg')}
					alt="Mountains"
					style={{
						width: '100%',
						position: 'absolute',
						bottom: -1,
						left: 0,
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
					style={{opacity: detailsOpacity, bottom: detailsDrop}}
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
		</AbsoluteFill>
	);
};
