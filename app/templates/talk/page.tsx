'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/useInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {Talk} from '../../../remotion/compositions/templates/talk/Talk';
import {useSearchParams} from 'next/navigation';
import {CopyUrlButton} from '../../../src/app/CopyUrlButton';
import {encodeObjectValues} from '../../../src/app/utils/encodeObjectValues';

export default function TalkPage() {
	const [talkTitle, setTalkTitle] = useInputChange<string>(
		'Example',
		'talkTitle'
	);
	const [speakerPicture, setSpeakerPicture] = useInputChange<
		string | undefined
	>(undefined, 'speakerPicture');
	const [speakersNames, setSpeakersNames] = useInputChange<string>(
		'John Doe',
		'speakersNames'
	);
	const [eventLogo, setEventLogo] = useInputChange<string>('', 'eventLogo');
	const [titleSize, setTitleSize] = useInputChange<string>('50', 'titleSize');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg'
	);
	const props = {
		talkTitle,
		speakersNames,
		speakerPicture,
		titleSize,
		backgroundImg,
		eventLogo,
	};

	const encodedParams = encodeObjectValues(props);

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
						setValue={setSpeakerPicture}
						value={speakerPicture}
						label="Speaker picture"
					/>
					<Input
						setValue={setSpeakersNames}
						value={speakersNames}
						label="Name"
					/>
					<Input setValue={setTalkTitle} value={talkTitle} label="Title" />
					<Input setValue={setTitleSize} value={titleSize} label="Title size" />
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background Image url"
					/>
					<Input
						setValue={setEventLogo}
						value={eventLogo}
						label="Logo (optional)"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="Talk" params={props} />
		</>
	);
}
