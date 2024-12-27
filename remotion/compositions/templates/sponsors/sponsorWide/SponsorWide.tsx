import {loadFont} from '@remotion/google-fonts/Raleway';
import {AbsoluteFill, Img, Sequence} from 'remotion';
import {z} from 'zod';

import {Content} from './Content';
import {Event} from './Event';
import {SponsorWideSchema} from './SponsorWide.type';
import {Triangle} from './Triangle';

type Sponsor = z.infer<typeof SponsorWideSchema>;

loadFont();

export const SponsorWide = ({
	color = '#efdb4f',
	backgroundImg,
	logoBackground,
	sponsorLogo,
	eventLogo,
	type,
}: Sponsor) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				position: 'relative',
				fontFamily: 'Raleway',
				perspective: '800px',
			}}
		>
			<Img
				src={backgroundImg}
				style={{
					position: 'absolute',
					inset: 0,
					objectFit: 'cover',
					width: '100%',
					height: '100%',
					filter: 'brightness(0.8)',
				}}
			/>
			<Event src={eventLogo} />
			<Sequence
				name="Sponsor"
				from={30}
				style={{
					display: 'flex',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Triangle color={color} position="bottom" origin="right top" />
				<Triangle color={color} position="top" origin="left bottom" />
				<Content
					logoBackground={logoBackground}
					type={type}
					sponsorLogo={sponsorLogo}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
