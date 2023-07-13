import React from 'react';

import {Composition, Folder} from 'remotion';

import {Silhouette} from './Silhouette';

export const SilhouetteComposition: React.FC = () => {
	return (
		<Folder name="Silhouette">
			<Composition
				component={Silhouette}
				width={1280}
				height={720}
				id="Silhouette"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					backgroundImg:
						'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
					title: 'Example of title for the template 🚀',
					silhouetteUrl:
						'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png',
					side: 'right',
					logoUrl:
						'https://www.meetup.com/mu_static/fr-FR/logo--script.004ada05.svg',
				}}
			/>
		</Folder>
	);
};
