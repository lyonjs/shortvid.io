import {interpolate, staticFile, useCurrentFrame} from 'remotion';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';

export const TalkBackground = () => {
	const frame = useCurrentFrame();

	const backgroundOpacity = interpolate(frame, [0, 20], [0, 1]);

	return (
		<BackgroundFiller
			imageUrl={staticFile('images/showcases/campingDesSpeakers/tentBackground.svg')}
			style={{
				opacity: backgroundOpacity,
			}}
		/>
	);
};
