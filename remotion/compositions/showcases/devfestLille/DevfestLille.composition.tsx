import {Composition, Folder} from 'remotion';

import {DevfestLille} from "./DevfestLille";
import {defaultTalkValues} from "../../../../src/data/defaultValues";
import React from "react";

export const DevfestLilleComposition: React.FC = () => {
	return (
		<Folder name="DevfestLille">
			<Composition
				id="DevfestLilleTalk"
				component={DevfestLille}
				durationInFrames={300}
				fps={60}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
