import {AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type LogoProps = {
	logoUrl: string;
	borderColor: string;
};

export const Logo = ({logoUrl, borderColor}: LogoProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideInTop = spring({
		frame,
		fps,
		from: -500,
		to: -100,
		durationInFrames: 60,
	});

	const slideIn = spring({
		frame,
		fps,
		from: -500,
		to: -75,
		durationInFrames: 60,
	});

	return (
		<AbsoluteFill
			style={{
				background: 'white',
				width: '450px',
				height: '450px',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '50%',
				border: `10px solid ${borderColor}`,
				boxShadow: '0 0 0 10px white',
				top: slideInTop,
				left: slideIn,
			}}
		>
			<Img src={logoUrl} width={250} />
		</AbsoluteFill>
	);
};
