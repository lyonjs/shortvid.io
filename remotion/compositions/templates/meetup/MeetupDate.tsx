import {Lottie} from '@remotion/lottie';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../design/atoms/Title';
import {useLottie} from '../../../hooks/useLottie';

export const MeetupDate: React.FC<{date: string}> = ({date}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustration = useLottie('lf20_syoyrvic');

	const fromBottom = spring({
		frame,
		from: 0,
		to: 380,
		fps,
		durationInFrames: 50,
	});

	if (!illustration) {
		return null;
	}

	return (
		<AbsoluteFill style={{color: 'white'}}>
			<Lottie
				loop
				style={{filter: 'drop-shadow(0px 0px 10px #000000)'}}
				animationData={illustration}
			/>
			<Title
				style={{
					position: 'absolute',
					bottom: fromBottom,
					fontSize: 80,
					padding: '0 30px',
					textAlign: 'center',
					width: '100%',
				}}
			>
				{date}
			</Title>
		</AbsoluteFill>
	);
};
