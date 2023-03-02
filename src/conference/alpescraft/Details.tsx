import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../components/hooks/useLottie';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Details: React.FC<{
	date: string;
	location: string;
}> = ({date, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const durationInFrames = 30;
	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	if (!illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<div
			style={{
				fontWeight: 700,
				fontSize: '32px',
				color: 'white',
				position: 'absolute',
				bottom: '5rem',
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '7rem',
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
						width: '130px',
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
					gap: '1rem',
				}}
			>
				<Lottie
					style={{
						width: '80px',
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
	);
};
