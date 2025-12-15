import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {Bdxio} from './components/Bdxio';

export const BdxioComposition: React.FC = () => {
	return (
		<Folder name="Bdxio">
			<Composition
				id="Bdxio"
				component={Bdxio}
				durationInFrames={360}
				fps={60}
				width={1280}
				height={720}
				schema={ShowcaseSchema}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
