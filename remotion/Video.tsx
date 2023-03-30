import React from 'react';

import {Folder} from 'remotion';
import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {TemplatesComposition} from './compositions/templates/Templates.composition';
import {AtomsComposition} from './design/atoms/Atoms.composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Folder name="Compositions">
				<TemplatesComposition />
				<ShowcasesComposition />
			</Folder>
			<Folder name="Design">
				<AtomsComposition />
			</Folder>
		</>
	);
};
