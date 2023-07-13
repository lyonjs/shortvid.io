import {interpolate, useCurrentFrame} from 'remotion';

import {Title} from '../../../../design/atoms/Title';

export const TalkTitle: React.FC<{
	title: string;
	style?: React.CSSProperties;
}> = ({title, style}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [30, 50], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	return (
		<Title
			style={{
				opacity,
				width: '100%',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '40px',
				textAlign: 'center',
				position: 'absolute',
				minHeight: 150,
				bottom: '180px',
				fontFamily: 'inherit',
				padding: '0 50px',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
