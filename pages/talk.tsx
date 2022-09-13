import {Player} from '@remotion/player';
import {Talk as TalkComponent} from '../src/components';
import {useInputChange} from '../src/components/hooks/onInputChange';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';

const Talk = () => {
	const [talkTitle, setTalkTitle] = useInputChange<string>('Example');
	const [speakerPicture, setSpeakerPicture] = useInputChange<
		string | undefined
	>(undefined);
	const [speakersNames, setSpeakersNames] = useInputChange<string>('John Doe');
	const [titleSize, setTitleSize] = useInputChange<string>('50');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);

	return (
		<>
			<div className="generation-block">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '400px',
						height: '400px',
					}}
					durationInFrames={120}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={TalkComponent}
					inputProps={{
						talkTitle,
						speakersNames,
						speakerPicture,
						titleSize,
						backgroundImg,
					}}
				/>

				<Form>
					<Input setValue={setTalkTitle} value={talkTitle} label="Title" />
					<Input
						setValue={setSpeakerPicture}
						value={speakerPicture}
						label="Speaker picture"
					/>
					<Input
						setValue={setSpeakersNames}
						value={speakersNames}
						label="Speakers names"
					/>
					<Input
						setValue={setTitleSize}
						value={titleSize}
						label="Title font size"
					/>
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background Image"
					/>
					<a
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-talk.yml"
						target="_blank"
					>
						Generate your video 🎬
					</a>
				</Form>
			</div>

			<Code
				composition="Talk"
				params={{talkTitle, speakersNames, speakerPicture, titleSize}}
			/>
		</>
	);
};

export default Talk;
