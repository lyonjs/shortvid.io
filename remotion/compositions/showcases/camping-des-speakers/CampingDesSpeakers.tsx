import {AbsoluteFill, staticFile} from 'remotion';
import {RemotionRiveCanvas} from '@remotion/rive';

export const CampingDesSpeakers = () => {
	return (
		<AbsoluteFill style={{background: 'red'}}>
			<RemotionRiveCanvas
				src={staticFile('images/conferences/campingDesSpeakers/beach.riv')}
			/>
		</AbsoluteFill>
	);
};
