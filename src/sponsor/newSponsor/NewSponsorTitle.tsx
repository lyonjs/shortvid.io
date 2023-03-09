import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TextDrop} from './TextDrop';

export const NewSponsorTitle: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: '#0c0c0d'}}>
			<div
				style={{
					zIndex: 2,
					height: '100%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 50,
				}}
			>
				<TextDrop text="Nouveau" />
				<TextDrop text="sponsor" delay={20} />
			</div>
		</AbsoluteFill>
	);
};
