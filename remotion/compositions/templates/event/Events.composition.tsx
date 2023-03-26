import React from 'react';
import {Composition, Folder} from 'remotion';
import {Event} from './Event';

export const EventsComposition: React.FC = () => {
	return (
		<Folder name="Events">
			<Composition
				component={Event}
				width={1200}
				height={1200}
				id="Event"
				fps={30}
				durationInFrames={270}
				defaultProps={{
					backgroundImg:
						'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
					title: 'Apéro JS de Noël 🎄',
					lottieAsset: 'lf20_UDstUT',
				}}
			/>
		</Folder>
	);
};
