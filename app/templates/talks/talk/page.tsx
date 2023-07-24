'use client';

import {Player} from '@remotion/player';

import {Talk} from '../../../../remotion/compositions/templates/talk/Talk';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {Form} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

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
			<section className={styles.videoContainer}>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '1/1',
					}}
					durationInFrames={120}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Talk}
					inputProps={props}
				/>
				<div className={styles.formMobile}>
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
						<Input
							setValue={setTitleSize}
							value={titleSize}
							label="Title size"
						/>
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
			</section>

			<ResizeWrapper position={'right'}>
				<Sidebar>
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
						<Input
							setValue={setTitleSize}
							value={titleSize}
							label="Title size"
						/>
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
				</Sidebar>
			</ResizeWrapper>
		</>
	);
}
