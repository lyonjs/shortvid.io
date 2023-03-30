import React from 'react';

import {Folder} from 'remotion';
import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {TemplatesComposition} from './compositions/templates/Templates.composition';
import {AtomsComposition} from './design/atoms/Atoms.composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<TemplatesComposition />
			<ShowcasesComposition />
			<Folder name="Design">
				<AtomsComposition />
			</Folder>
		</>
	);
};
