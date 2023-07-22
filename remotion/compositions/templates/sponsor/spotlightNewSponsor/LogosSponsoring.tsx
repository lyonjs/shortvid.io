import {loadFont} from '@remotion/google-fonts/Rubik';
import {Img} from 'remotion';

import {FadeIn} from '../../../../design/animations/FadeIn';

const {fontFamily} = loadFont();

export const LogosSponsoring: React.FC<{
	logo: string;
	sponsorLogo: string;
	scaleUp: number;
}> = ({logo, sponsorLogo, scaleUp}) => {
	return (
		<FadeIn
			duration={50}
			style={{
				width: '100%',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					gap: 100,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Img
					src={logo}
					width={150}
					height="auto"
					style={{
						width: 600,
						height: 300,
					}}
				/>
				<span
					style={{
						fontFamily,
						fontSize: 100,
						fontWeight: 700,
						color: 'white',
					}}
				>
					x
				</span>
				<Img
					src={sponsorLogo}
					alt="Sponsor logo"
					style={{
						width: 800,
						paddingBottom: 100,
						transform: `scale(${scaleUp})`,
					}}
				/>
			</div>
		</FadeIn>
	);
};
