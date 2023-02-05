import {AbsoluteFill, Img, interpolate, useCurrentFrame} from 'remotion';

export const Thanks: React.FC<{
	name: string;
	picture: string;
	category: string;
}> = ({name, picture, category}) => {
	const frame = useCurrentFrame();
	const fadeIn = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				color: '#212529',
				opacity: fadeIn,
				background: '#fefefe',
			}}
		>
			<h1
				style={{
					fontWeight: 700,
					fontSize: '2rem',
					marginBottom: '2rem',
				}}
			>
				Remercie
			</h1>

			<Img
				src={picture}
				style={{
					display: 'block',
					height: 400,
					width: 'auto',
					maxWidth: '80%',
				}}
			/>

			<p
				style={{
					fontWeight: 900,
					fontSize: '3rem',
					marginTop: '2rem',
					color: '#fd7e14',
				}}
			>
				Sponsor {category}
			</p>
		</AbsoluteFill>
	);
};
