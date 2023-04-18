import {AbsoluteFill, Img} from 'remotion';
import React from 'react';
import {GreenScreen} from '../../showcases/lyonJS/GreenScreen';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

export const LayerFullScreen: React.FC<LayerBaseProps> = ({
	primaryColor,
	secondaryColor,
	decorationUrl,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
			/>
			<div
				style={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<GreenScreen style={{width: '90%', margin: 0}} />
			</div>
			{decorationUrl && (
				<Img
					style={{
						zIndex: 2,
						width: 300,
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}
					src={decorationUrl}
				/>
			)}
		</AbsoluteFill>
	);
};
