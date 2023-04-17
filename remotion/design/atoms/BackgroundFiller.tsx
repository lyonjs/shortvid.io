import React from 'react';
import {Img} from 'remotion';

export const BackgroundFiller: React.FC<{
	imageUrl: string;
	bottomGradient?: boolean;
	style?: React.CSSProperties;
}> = ({imageUrl, bottomGradient = false, style}) => {
	return (
		<>
			<Img
				src={imageUrl}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transform: 'scale(1.1)',
					...style,
				}}
			/>
			{bottomGradient && (
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						backgroundImage:
							'linear-gradient(to top, rgba(12,12,12,1), rgba(255,0,0,0))',
					}}
				/>
			)}
		</>
	);
};
