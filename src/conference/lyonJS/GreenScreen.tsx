import React from 'react';

export const GreenScreen: React.FC<{style?: React.CSSProperties}> = ({
	style,
}) => {
	return (
		<div
			style={{
				zIndex: 2,
				margin: 30,
				aspectRatio: '16/9',
				border: '10px solid white',
				backgroundColor: 'green',
				...style,
			}}
		/>
	);
};
