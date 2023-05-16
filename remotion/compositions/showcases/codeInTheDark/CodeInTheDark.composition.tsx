import {Composition, Folder} from 'remotion';
import {CodeInTheDark} from './CodeInTheDark';

export const CodeInTheDarkComposition: React.FC = () => {
	return (
		<Folder name="CodeInTheDark">
			<Composition
				component={CodeInTheDark}
				width={1200}
				height={700}
				id="CodeInTheDark"
				fps={30}
				durationInFrames={200}
			/>
		</Folder>
	);
};
