import React from 'react';
import {loadFont} from '@remotion/google-fonts/Arvo';

const {fontFamily} = loadFont();

export const SpeakerName = (props: {
	scaleUpAnimation: number;
	opacityAnimation: number;
	firstNameContent: string;
	lastNameContent: string;
}) => {
	return (
		<div
			style={{
				fontFamily,
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 660,
				maxHeight: 300,
				position: 'absolute',
				top: 40,
				left: 700,
				textWrap: 'wrap',
				fontSize: 80,
				fontWeight: 900,
				transform: `scale(${props.scaleUpAnimation})`,
				opacity: props.opacityAnimation,
			}}
		>
			<span
				style={{
					fontSize: 100,
					color: 'black',
				}}
			>
				{props.firstNameContent}
			</span>
			<span
				style={{
					color: '#EEDA4E',
					paintOrder: 'stroke fill',
					WebkitTextStroke: '10px black',
				}}
			>
				{props.lastNameContent}
			</span>
		</div>
	);
};
