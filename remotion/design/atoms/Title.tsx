import React from 'react';
import {Text} from './Text';

export const Title: React.FC<{
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({style, children}) => (
	<Text
		style={
			{
				'-webkit-box-orient': 'vertical',
				'-webkit-line-clamp': '2',
				display: '-webkit-box',
				fontSize: '3.2rem',
				fontWeight: 'bold',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				...style,
			} as React.CSSProperties
		}
	>
		{children}
	</Text>
);
