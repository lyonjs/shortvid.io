import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../design/atoms/Title';

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
				width,
				position: 'absolute',
				bottom: fromBottom - toBottom,
				left: 0,
				fontSize: 70,
				textAlign: 'center',
			}}
		>
			{title}
		</Title>
	);
};
