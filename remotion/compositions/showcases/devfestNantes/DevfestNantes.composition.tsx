import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ShowcaseSchema} from '../showcases.types';

import {DevfestNantes2024} from './2024/DevfestNantes2024';
import {DevfestNantesPhrase2024} from './2024/DevfestNantes2024Phrase';
import {DevfestNantesLoop2024} from './2024/DevfestNantesLoop2024';
import {DevfestNantesLoopTotem2024} from './2024/DevfestNantesLoopTotem2024';
import {ShowcaseDevfestNantes2024Schema} from './types/types';
import {DevfestNantes} from './DevfestNantes';
import {DevfestNantesLoop} from './DevfestNantesLoop';
import {DevfestNantesLoopTotem} from './DevfestNantesLoopTotem';
import {DevfestNantesPhrase} from './DevfestNantesPhrase';

export const DevfestNantesComposition = () => {
	return (
		<Folder name="DevfestNantes">
			<Folder name="DevfestNantes-2023">
				<Composition
					id="DevfestNantesTalk2023"
					component={DevfestNantes}
					durationInFrames={300}
					fps={30}
					width={1280}
					height={720}
					schema={ShowcaseSchema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesTalkLoop2023"
					component={DevfestNantesLoop}
					durationInFrames={350}
					fps={30}
					width={1280}
					height={720}
					schema={ShowcaseSchema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesTalkLoopTotem2023"
					component={DevfestNantesLoopTotem}
					durationInFrames={350}
					fps={30}
					width={720}
					height={1280}
					schema={ShowcaseSchema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesPhrase2023"
					component={DevfestNantesPhrase}
					durationInFrames={350}
					fps={30}
					width={1280}
					height={720}
					defaultProps={defaultTalkValues}
				/>
			</Folder>
			<Folder name="DevfestNantes-2024">
				<Composition
					id="DevfestNantesTalk2024"
					component={DevfestNantes2024}
					durationInFrames={300}
					fps={30}
					width={1280}
					height={720}
					schema={ShowcaseDevfestNantes2024Schema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesTalkLoop2024"
					component={DevfestNantesLoop2024}
					durationInFrames={350}
					fps={30}
					width={1280}
					height={720}
					schema={ShowcaseDevfestNantes2024Schema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesTalkLoopTotem2024"
					component={DevfestNantesLoopTotem2024}
					durationInFrames={350}
					fps={30}
					width={720}
					height={1280}
					schema={ShowcaseDevfestNantes2024Schema}
					defaultProps={defaultTalkValues}
				/>
				<Composition
					id="DevfestNantesTalkPhrase2024"
					component={DevfestNantesPhrase2024}
					durationInFrames={350}
					fps={30}
					width={1280}
					height={720}
					schema={ShowcaseDevfestNantes2024Schema}
					defaultProps={defaultTalkValues}
				/>
			</Folder>
		</Folder>
	);
};
