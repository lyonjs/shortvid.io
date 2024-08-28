import React from 'react';
import {Folder} from 'remotion';

import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {TemplatesComposition} from './compositions/templates/Templates.composition';
import {AtomsComposition} from './design/atoms/Atoms.composition';
import {MoleculesComposition} from './design/molecules/Molecules.composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<TemplatesComposition />
			<ShowcasesComposition />
			<Folder name="Design">
				<AtomsComposition />
				<MoleculesComposition />
			</Folder>
		</>
	);
};
