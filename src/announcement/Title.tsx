import {TextDrop} from './TextDrop';
import React from 'react';

export const Title: React.FC = () => {
	return (
		<span
			style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				position: 'absolute',
				top: 80,
				left: '50%',
				transform: `translate(-50%)`,
				gap: '50px',
			}}
		>
			<TextDrop text="Remotion" />
			<TextDrop text="Expert" delay={20} />
		</span>
	);
};
