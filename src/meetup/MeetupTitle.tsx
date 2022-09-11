import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../components/Title';

export const MeetupTitle: React.FC<{
	title: string;
	endAnimationShift: number;
}> = ({title, endAnimationShift}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const fromBottom = spring({
		frame,
		from: 0,
		to: 300,
		fps,
		durationInFrames: 30,
	});
	const toBottom = spring({
		frame: frame - endAnimationShift,
		from: 0,
		to: 500,
		fps,
		durationInFrames: 40,
	});

	return (
		<Title
			style={{
				color: 'white',
				position: 'absolute',
				bottom: fromBottom - toBottom,
				fontSize: 70,
				width,
				textAlign: 'center',
			}}
		>
			{title}
		</Title>
	);
};
