import {Img, interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';

import {SponsorWideSchema} from './SponsorWide.type';

export const Content = ({
	logoBackground,
	sponsorLogo,
	type,
}: Partial<z.infer<typeof SponsorWideSchema>>) => {
	const frame = useCurrentFrame();
	const appear = interpolate(frame, [20, 45], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'relative',
				zIndex: 1,
				flexDirection: 'column',
				display: 'flex',
				gap: '40px',
				opacity: appear,
			}}
		>
			<div
				style={{
					width: '600px',
					height: '400px',
					backgroundColor: logoBackground,
					borderRadius: '16px',
					padding: '30px 40px',
				}}
			>
				<Img
					src={sponsorLogo as string}
					style={{width: '100%', height: '100%', objectFit: 'contain'}}
				/>
			</div>
			<div
				style={{
					color: '#18181b',
					fontSize: '60px',
					textAlign: 'center',
					fontWeight: 700,
				}}
			>
				Sponsor {type}
			</div>
		</div>
	);
};
