import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill} from 'remotion';
import {z} from 'zod';

import {EventLogo} from '../../../../design/atoms/EventLogo';
import {Title} from '../../../../design/atoms/Title';

const {fontFamily} = loadFont();

export const PosterLocationSchema = z.object({
	eventLogo: z.string(),
	title: z.string(),
	message: z.string().optional(),
	arrow: z.enum(['⬅', '⮕', '⬆', '⬇', '⬉', '⬈', '⬊', '⬋']).optional(),
});

export const PosterLocation: React.FC<z.infer<typeof PosterLocationSchema>> = ({
	eventLogo,
	title,
	message,
	arrow,
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				background: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '100px',
				padding: '20px 20px',
				fontFamily,
			}}
		>
			<EventLogo
				src={eventLogo}
				style={{
					display: 'block',
					maxHeight: '400px',
				}}
			/>
			<header
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Title style={{display: 'block', fontSize: '75px', color: 'black'}}>{title}</Title>
				{message && (
					<Title style={{display: 'block', fontSize: '30px', color: 'black'}}>{message}</Title>
				)}
				{arrow && <div style={{fontSize: '200px', lineHeight: 1}}>{arrow}</div>}
			</header>
		</AbsoluteFill>
	);
};
