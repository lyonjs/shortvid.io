import {Title} from '../components/Title';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SponsorTitle: React.FC<{
	sponsorLogo?: string;
	companyName: string;
}> = ({sponsorLogo, companyName}) => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();

	const titleOpacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});
	const titleDeblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<Title
				style={{
					fontSize: 70,
					color: 'white',
					position: 'absolute',
					left: '10%',
					top: height / 2 - 70,
					opacity: titleOpacity,
					filter: `blur(${titleDeblur}px)`,
				}}
			>
				Meetup sponsorisé par:
			</Title>

			{!sponsorLogo && (
				<Title
					style={{
						color: 'white',
						position: 'absolute',
						left: '10%',
						top: height / 2,
						opacity: titleOpacity,
						filter: `blur(${titleDeblur}px)`,
					}}
				>
					{companyName}
				</Title>
			)}
		</>
	);
};
