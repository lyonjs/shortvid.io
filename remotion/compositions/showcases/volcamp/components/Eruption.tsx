import {useCurrentFrame} from 'remotion';

import {Volcano} from './Volcano';

export const Eruption = () => {
	const frame = useCurrentFrame();

	const shuffle1 = Math.sin(frame) * 6;
	const shuffle2 = Math.sin(frame * 1.5);
	const shuffle3 = Math.sin(frame * 0.5) * 2;
	const shuffle4 = Math.sin(frame * 0.8) * 4;

	const shuffle = shuffle1 + shuffle2 + shuffle3 + shuffle4;

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				transition: 'transform 0.1s ease-out',
				transform: `translateX(${shuffle}px)`,
			}}
		>
			<Volcano />
		</div>
	);
};
