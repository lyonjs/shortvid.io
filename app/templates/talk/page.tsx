'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {Talk} from '../../../remotion/compositions/templates/talk/Talk';

export default function TalkPage() {
	const [talkTitle, setTalkTitle] = useInputChange<string>('Example');
	const [speakerPicture, setSpeakerPicture] = useInputChange<
		string | undefined
	>(undefined);
	const [speakersNames, setSpeakersNames] = useInputChange<string>('John Doe');
	const [eventLogo, setEventLogo] = useInputChange<string>('');
	const [titleSize, setTitleSize] = useInputChange<string>('50');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);
	const props = {
		talkTitle,
		speakersNames,
		speakerPicture,
		titleSize,
		backgroundImg,
		eventLogo,
	};

	return (
		<>
			<div className="flex flex-col pb-4 justify-center items-center md:flex-row md:items-start">
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
					component={Talk}
					inputProps={props}
				/>

				<Form>
					<Input
						setValue={setTalkTitle}
						value={talkTitle}
						label="SpeakerName"
					/>
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
						label="SpeakerName font size"
					/>
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background Image"
					/>
					<Input
						setValue={setEventLogo}
						value={eventLogo}
						label="Event Logo (optional)"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
					/>
				</Form>
			</div>

			<Code composition="Talk" params={props} />
		</>
	);
}
