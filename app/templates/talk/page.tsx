'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {Talk} from '../../../remotion/compositions/templates/talk/Talk';
import {useSearchParams} from 'next/navigation';
import {useCallback, useState} from 'react';
import {useFormatUrlWithQuery} from '../../../src/app/hooks/useFormatUrlWithQuery';
import {useCopyToClipboard} from '../../../src/app/hooks/useCopyToClipboard';

export default function TalkPage() {
	const searchParams = useSearchParams();
	const [copied, setCopied] = useState(false);
	const [talkTitle, setTalkTitle] = useInputChange<string>(
		searchParams.get('title') || 'Example'
	);
	const [speakerPicture, setSpeakerPicture] = useInputChange<
		string | undefined
	>(searchParams.get('speakerPicture') || undefined);
	const [speakersNames, setSpeakersNames] = useInputChange<string>(
		searchParams.get('name') || 'John Doe'
	);
	const [eventLogo, setEventLogo] = useInputChange<string>(
		searchParams.get('logo') || ''
	);
	const [titleSize, setTitleSize] = useInputChange<string>(
		searchParams.get('titleSize') || '50'
	);
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		searchParams.get('background') || undefined
	);
	const props = {
		talkTitle,
		speakersNames,
		speakerPicture,
		titleSize,
		backgroundImg,
		eventLogo,
	};

	const params = {
		speakerPicture: speakerPicture && encodeURIComponent(speakerPicture),
		name: encodeURIComponent(speakersNames),
		title: encodeURIComponent(talkTitle),
		titleSize: encodeURIComponent(titleSize),
		background: backgroundImg && encodeURIComponent(backgroundImg),
		logo: encodeURIComponent(eventLogo),
	};

	const urlWithParams = useFormatUrlWithQuery(params, '/templates/talk');
	const copyToClipboard = useCopyToClipboard(setCopied);

	const onClickHandler = useCallback(() => {
		const {origin} = window.location;
		copyToClipboard(`${origin}${urlWithParams}`);
	}, [urlWithParams]);

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
					<button
						type="button"
						className="relative text-black py-2 px-4 text-center text-xl font-bold bg-yellow-300 rounded-xl mt-4 hover:scale-105"
						onClick={onClickHandler}
					>
						{copied ? 'Copied ✅' : 'Copy Layer URL 🔗'}
					</button>
				</Form>
			</div>

			<Code composition="Talk" params={props} />
		</>
	);
}
