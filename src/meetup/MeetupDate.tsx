import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../components/Title';

export const MeetupDate: React.FC<{date: string}> = ({date}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const left = spring({
		frame,
		from: width,
		to: width * 0.2,
		fps,
		durationInFrames: 30,
	});

	return (
		<AbsoluteFill style={{color: 'white'}}>
			<Title
				style={{
					position: 'absolute',
					top: 800,
					left,
					fontSize: 60,
					width,
					padding: '0 0 0 300px',
				}}
			>
				{date}
			</Title>
		</AbsoluteFill>
	);
};
