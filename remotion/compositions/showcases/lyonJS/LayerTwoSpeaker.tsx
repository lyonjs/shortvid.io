import {AbsoluteFill, Img, staticFile} from 'remotion';
import React from 'react';
import {GreenScreen} from './GreenScreen';
import {LayerTitle} from './LayerTitle';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

type Props = {title: string; sponsorLogoUrl: string};
export const LayerTwoSpeaker: React.FC<Props> = ({title, sponsorLogoUrl}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<BackgroundTriangle />
			<Img
				style={{
					zIndex: 1,
					width: 700,
					position: 'absolute',
					bottom: -10,
					right: -250,
				}}
				src={staticFile('lion-model.webp')}
			/>
			<div
				style={{
					zIndex: 2,
					display: 'inline-flex',
					paddingTop: 150,
				}}
			>
				<GreenScreen style={{flex: 1, margin: 20}} />
				<GreenScreen style={{flex: 1, margin: 20}} />
			</div>
			<div
				style={{
					zIndex: 2,
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '70%',
				}}
			>
				<LayerTitle title={title} />
			</div>
			<Img
				src={sponsorLogoUrl}
				style={{position: 'absolute', top: 10, right: 20, width: 300}}
			/>
		</AbsoluteFill>
	);
};
