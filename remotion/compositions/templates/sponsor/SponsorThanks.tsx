import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../hooks/useLottie';
import {AbsoluteFill} from 'remotion';

export const SponsorThanks: React.FC = () => {
	const illustration = useLottie('lf20_sqpjokxl');

	if (!illustration) {
		return null;
	}

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<Lottie
				playbackRate={2}
				style={{
					position: 'absolute',
					bottom: '0',
					height: '300px',
					filter: 'drop-shadow(0px 0px 2px #000000)',
					color: 'white',
					fill: 'white',
				}}
				animationData={illustration}
			/>
		</AbsoluteFill>
	);
};
