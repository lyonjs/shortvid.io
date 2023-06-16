import {Composition, Folder} from 'remotion';
import {Volcamp} from './Volcamp';

export const VolcampComposition = () => {
	return (
		<Folder name="Volcamp2023">
			<Composition
				width={1280}
				height={720}
				id="Volcamp2023"
				fps={30}
				durationInFrames={300}
				component={Volcamp}
			/>
		</Folder>
	);
};
