import React from 'react';
import {Text} from './Text';

export const Title: React.FC<{
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({style, children}) => (
	<h1>
		<Text
			style={{
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: '2',
				display: '-webkit-box',
				fontSize: '3.2rem',
				fontWeight: 'bold',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				...style,
			}}
		>
			{children}
		</Text>
	</h1>
);
