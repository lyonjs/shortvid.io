import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {TalkBranded, TalkBrandedProps} from '../talk/branded/TalkBranded';

import {DefaultLayerProps} from './layers.types';
import {LayerTitle} from './LayerTitle';

export const LayerOneSpeaker: React.FC<DefaultLayerProps> = ({
	title,
	sponsorLogoUrl,
	primaryColor,
	secondaryColor,
	decorationUrl,
}) => {
	return (
		<AbsoluteFill
			style={{backgroundColor: 'white', overflow: 'hidden', gap: '30px'}}
		>
			<BackgroundTriangle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
			/>
			{decorationUrl && (
				<Img
					style={{
						zIndex: 1,
						width: 370,
						position: 'absolute',
						bottom: 355,
						right: 0,
					}}
					src={decorationUrl}
				/>
			)}
			<div
				style={{
					width: '75%',
					height: '80%',
					position: 'absolute',
					top: 50,
					left: 50,
					overflow: 'hidden',
					border: '10px solid white',
				}}
			>
				<TalkBranded
					backgroundColor="#F2B167"
					title="Road to Certification : Cloud Architect en 🇫🇷 avec 250+ inscrits et 40 vouchers"
					startingDate={new Date('2023-04-19T11:00:00.000Z')}
					endingDate={new Date('2023-05-23T11:45:00.000Z')}
					recurringDay="Mardi"
					location="Avec 9 communautés GDG 💚"
					logoUrl="https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg"
					speaker={
						{
							name: 'Julien Landuré',
							company: 'GDG Cloud Nantes & Zenika',
							pictureUrl:
								'https://pbs.twimg.com/profile_images/892750804104380418/J_YkAC_C_400x400.jpg',
						} as TalkBrandedProps['speaker']
					}
				/>
			</div>
			<div
				style={{
					width: '30%',
					height: '30%',
					position: 'absolute',
					bottom: 50,
					right: 50,
					overflow: 'hidden',
					border: '10px solid white',
				}}
			>
				<TalkBranded
					backgroundColor="#F2B167"
					title="Road to Certification : Cloud Architect en 🇫🇷 avec 250+ inscrits et 40 vouchers"
					startingDate={new Date('2023-04-19T11:00:00.000Z')}
					endingDate={new Date('2023-05-23T11:45:00.000Z')}
					recurringDay="Mardi"
					location="Avec 9 communautés GDG 💚"
					logoUrl="https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg"
					speaker={
						{
							name: 'Julien Landuré',
							company: 'GDG Cloud Nantes & Zenika',
							pictureUrl:
								'https://pbs.twimg.com/profile_images/892750804104380418/J_YkAC_C_400x400.jpg',
						} as TalkBrandedProps['speaker']
					}
				/>
			</div>
			{title && (
				<LayerTitle
					title={title}
					style={{
						position: 'absolute',
						top: 980,
						height: 'min-content',
						width: 'calc(70% - 30px)',
					}}
				/>
			)}
			{sponsorLogoUrl && (
				<Img
					src={sponsorLogoUrl}
					style={{position: 'absolute', top: 10, right: 20, width: 300}}
				/>
			)}
		</AbsoluteFill>
	);
};
