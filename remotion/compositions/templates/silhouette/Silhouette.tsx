import {AbsoluteFill, Sequence, Img, interpolate} from 'remotion';
import React from 'react';
import {Side} from './Silhouette.type';
import {SilhouettePicture} from './SilhouettePicture';
import {SilhouetteTitle} from './SilhouetteTitle';
import {SilhouetteLogo} from './SilhouetteLogo';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

export const Silhouette: React.FC<{
	backgroundImg: string;
	title: string;
	side?: Side;
	silhouetteUrl: string;
	dropShadow?: boolean;
	logoUrl?: string;
}> = ({
	backgroundImg,
	side = 'left',
	silhouetteUrl,
	title,
	dropShadow = false,
	logoUrl,
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<Sequence>
				<BackgroundFiller imageUrl={backgroundImg} />
			</Sequence>

			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: side === 'left' ? 'row' : 'row-reverse',
				}}
			>
				<div style={{flex: '1 0 33%', position: 'relative'}}>
					<Sequence from={25}>
						<SilhouettePicture
							silhouetteUrl={silhouetteUrl}
							side={side}
							dropShadow={dropShadow}
						/>
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
