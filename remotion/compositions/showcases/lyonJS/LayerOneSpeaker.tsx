import {AbsoluteFill, Img, staticFile} from 'remotion';
import React from 'react';
import {RightTriangle} from './RightTriangle';
import {LeftTriangle} from './LeftTriangle';
import {GreenScreen} from './GreenScreen';
import {LayerTitle} from './LayerTitle';

type Props = {title: string; sponsorLogoUrl: string};
export const LayerOneSpeaker: React.FC<Props> = ({title, sponsorLogoUrl}) => {
	return (
		<AbsoluteFill
			style={{backgroundColor: 'white', overflow: 'hidden', gap: '30px'}}
		>
			<RightTriangle />
			<LeftTriangle />
			<Img
				style={{
					zIndex: 1,
					width: 1000,
					position: 'absolute',
					top: 180,
					right: -450,
				}}
				src={staticFile('lion-model.webp')}
			/>
			<GreenScreen style={{width: '75%'}} />
			<GreenScreen
				style={{
					width: '30%',
					position: 'absolute',
					bottom: 0,
					right: 0,
				}}
			/>
			<LayerTitle
				title={title}
				style={{
					width: 'calc(70% - 30px)',
				}}
			/>
			<Img
				src={sponsorLogoUrl}
				style={{position: 'absolute', top: 10, right: 20, width: 300}}
			/>
		</AbsoluteFill>
	);
};
