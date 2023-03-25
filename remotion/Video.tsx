import React from 'react';

import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {TemplatesComposition} from './compositions/templates/Templates.composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<TemplatesComposition />
			<ShowcasesComposition />
		</>
	);
};
