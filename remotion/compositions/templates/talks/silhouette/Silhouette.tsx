import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';
import {SHORTVID_GRADIENTS} from '../../../../theme';

import {SilhouetteLogo} from './SilhouetteLogo';
import {SilhouettePicture} from './SilhouettePicture';
import {SilhouetteTitle} from './SilhouetteTitle';

export const SilhouetteSchema = z.object({
	backgroundImg: z.string().optional(),
	title: z.string(),
	side: z.enum(['left', 'right']).optional(),
	silhouetteUrl: z.string(),
	dropShadow: z.boolean().optional(),
	logoUrl: z.string().optional(),
});

const {fontFamily} = loadFont();

export const Silhouette: React.FC<z.infer<typeof SilhouetteSchema>> = ({
	backgroundImg,
	side = 'left',
	silhouetteUrl,
	title,
	dropShadow = false,
	logoUrl,
}) => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [40, 45], [0, 20], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				background: SHORTVID_GRADIENTS.primary,
			}}
		>
			{backgroundImg && (
				<Sequence style={{filter: `blur(${blur}px)`}}>
					<BackgroundFiller imageUrl={backgroundImg} />
				</Sequence>
			)}

			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: side === 'left' ? 'row' : 'row-reverse',
				}}
			>
				<div style={{flex: '1 0 33%', position: 'relative'}}>
					<Sequence from={25}>
						<SilhouettePicture silhouetteUrl={silhouetteUrl} side={side} dropShadow={dropShadow} />
					</Sequence>
				</div>

				<div style={{position: 'relative', flex: '3 0 33%'}}>
					<Sequence from={45}>
						<SilhouetteTitle title={title} />
					</Sequence>
				</div>

				{logoUrl && (
					<Sequence from={60} name="Logo">
						<SilhouetteLogo logoUrl={logoUrl} side={side} />
					</Sequence>
				)}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
