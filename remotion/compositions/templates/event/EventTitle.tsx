import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../../../design/atoms/Title';

export const EventTitle: React.FC<{
	title: string;
}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const fromBottom = spring({
		frame,
		from: 0,
		to: 200,
		fps,
		durationInFrames: 30,
	});

	return (
		<Title
			style={{
				color: 'white',
				position: 'absolute',
				bottom: fromBottom,
				fontSize: 100,
				width,
				textAlign: 'center',
			}}
		>
			{title}
		</Title>
	);
};
