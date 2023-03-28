import React from 'react';

export const Title: React.FC<{
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({style, children}) => (
	<h1
		style={
			{
				'-webkit-box-orient': 'vertical',
				'-webkit-line-clamp': '2',
				display: '-webkit-box',
				fontFamily: 'Helvetica',
				fontSize: 50,
				fontWeight: 'bold',
				height: 'max-content',
				margin: 0,
				overflow: 'hidden',
				padding: '0 20px',
				textOverflow: 'ellipsis',
				width: '100%',
				...style,
			} as React.CSSProperties
		}
	>
		{children}
	</h1>
);
