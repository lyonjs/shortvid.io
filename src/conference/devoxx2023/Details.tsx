import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../components/hooks/useLottie';
import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';

const {fontFamily} = loadFont();

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationHour = useLottie('lf20_nv5aXa');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	if (!illustrationHour || !illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<Sequence from={40} name="Details">
			<div
				style={{
					fontFamily,
					fontWeight: 700,
					fontSize: '25px',
					color: 'white',
					position: 'absolute',
					bottom: 0,
					display: 'flex',
					width: '100%',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '100px',
							filter: 'none',
						}}
						playbackRate={1.5}
						animationData={illustrationDate}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{date}
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '2rem',
					}}
				>
					<Lottie
						style={{
							width: '50px',
							filter: 'none',
						}}
						animationData={illustrationHour}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{time}
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '60px',
							filter: 'none',
						}}
						animationData={illustrationLocation}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{location}
					</span>
				</div>
			</div>
		</Sequence>
	);
};
