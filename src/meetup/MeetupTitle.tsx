import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../components/Title';

export const MeetupTitle: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const left = spring({frame, from: -width, to: 0, fps, durationInFrames: 30});

	return (
		<AbsoluteFill style={{color: 'white'}}>
			<Title
				style={{
					position: 'absolute',
					top: 500,
					left,
					fontSize: 80,
					width,
					padding: '0 30px',
				}}
			>
				{title}
			</Title>
		</AbsoluteFill>
	);
};
