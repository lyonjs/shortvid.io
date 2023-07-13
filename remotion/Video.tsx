import React from 'react';

import {Folder} from 'remotion';

import {ShowcasesComposition} from './compositions/showcases/Showcases.composition';
import {TemplatesComposition} from './compositions/templates/Templates.composition';
import {AtomsComposition} from './design/atoms/Atoms.composition';
import {MoleculesComposition} from './design/molecules/Molecules.composition';
import {FontProvider} from '../src/context/FontContext';

export const RemotionVideo: React.FC = () => {
	return (
		<FontProvider>
			<TemplatesComposition />
			<ShowcasesComposition />
			<Folder name="Design">
				<AtomsComposition />
				<MoleculesComposition />
			</Folder>
		</FontProvider>
	);
};
