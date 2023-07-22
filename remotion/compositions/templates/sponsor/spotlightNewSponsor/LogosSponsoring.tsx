import {loadFont} from '@remotion/google-fonts/Rubik';
import {Img} from 'remotion';

import {FadeIn} from '../../../../design/animations/FadeIn';

const {fontFamily} = loadFont();

export function LogosSponsoring(props: {
	src: string;
	src1: string;
	scaleUp: number;
}) {
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
					src={props.src}
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
					src={props.src1}
					alt="Vercel logo"
					style={{
						width: 800,
						paddingBottom: 100,
						transform: `scale(${props.scaleUp})`,
					}}
				/>
			</div>
		</FadeIn>
	);
}
