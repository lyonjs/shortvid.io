import React from 'react';
import {loadFont} from '@remotion/google-fonts/Arvo';

const {fontFamily} = loadFont();

export const TalkTitle = (props: {
	opacity: number;
	titleSize: number | undefined;
	talkTitle: string;
}) => {
	return (
		<div
			style={{
				opacity: props.opacity,
				maxWidth: 660,
				position: 'absolute',
				bottom: 40,
				left: 700
			}}
		>
			<p
				style={{
					height: '100%',
					fontFamily,
					fontSize: props.titleSize ?? 60,
					fontWeight: 'bold',
					color: 'black',
					textWrap: 'balance'
				}}
			>
				{props.talkTitle}
			</p>
		</div>
	);
};