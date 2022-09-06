import {Player} from '@remotion/player';
import {Talk as TalkComponent} from '../src/components';
import {useInputChange} from '../src/components/hooks/onInputChange';
import {Form, Input} from '../src/components/input';

const Talk = () => {
	const [talkTitle, setTalkTitle] = useInputChange('Example');
	const [speakerPicture, setSpeakerPicture] = useInputChange();
	const [speakersNames, setSpeakersNames] = useInputChange('John Doe');
	const [titleSize, setTitleSize] = useInputChange('80');
	return (
		<>
			<h2>Meetup</h2>
			<Player
				autoPlay
				controls
				loop
				style={{
					height: '400px',
					width: '400px',
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
				}}
			/>

			<Form>
				<Input setValue={setTalkTitle} value={talkTitle} label="talkTitle" />
				<Input
					setValue={setSpeakerPicture}
					value={speakerPicture}
					label="speakerPicture"
				/>
				<Input
					setValue={setSpeakersNames}
					value={speakersNames}
					label="speakersNames"
				/>
				<Input setValue={setTitleSize} value={titleSize} label="titleSize" />
				<a
					href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-talk.yml"
					target="_blank"
				>
					Generate your video
				</a>
			</Form>
		</>
	);
};

export default Talk;
