import {Composition, Folder} from 'remotion';
import {CodeInTheDark} from './CodeInTheDark';

export const CodeInTheDarkComposition: React.FC = () => {
	return (
		<Folder name="CodeInTheDark">
			<Composition
				component={CodeInTheDark}
				width={1280}
				height={720}
				id="CodeInTheDark"
				fps={30}
				durationInFrames={300}
			/>
		</Folder>
	);
};
