import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';

const {fontFamily} = loadFont();

export const LogoSponsor: React.FC<{sponsor: string}> = ({sponsor}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -200,
		to: 40,
		durationInFrames: 60,
	});

	return (
		<div
			style={{
				zIndex: 2,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				position: 'absolute',
				top: pictureDrop,
				right: 20,
			}}
		>
			<span
				style={{
					fontFamily,
					color: '#323330',
					fontSize: 30,
				}}
			>
				Merci à notre sponsor
			</span>
			<Img src={sponsor} width={400} height="auto" />
		</div>
	);
};
