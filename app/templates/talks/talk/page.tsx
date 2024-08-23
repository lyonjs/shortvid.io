'use client';

import {Player} from '@remotion/player';

import {Talk} from '../../../../remotion/compositions/templates/talk/Talk';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {ColorInput} from '../../../../src/app/forms/colorInput';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function TalkPage() {
	const [talkTitle, setTalkTitle] = useInputChange<string>(
		'Example',
		'talkTitle',
	);
	const [speakerPicture, setSpeakerPicture] = useInputChange<
		string | undefined
	>(undefined, 'speakerPicture');
	const [speakersNames, setSpeakersNames] = useInputChange<string>(
		'John Doe',
		'speakersNames',
	);
	const [eventLogo, setEventLogo] = useInputChange<string>('', 'eventLogo');
	const [titleSize, setTitleSize] = useInputChange<number>(50, 'titleSize');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		'https://placehold.co/1200x1200',
		'backgroundImg',
	);
	const [titleColor, setTitleColor] = useInputChange<string>(
		'#efdb50',
		'titleColor',
	);

	const props = {
		talkTitle,
		speakersNames,
		speakerPicture,
		titleSize,
		titleColor,
		backgroundImg,
		eventLogo,
	};

	const encodedParams = encodeObjectValues(props);

	const formConfig: FormConfigProps = {
		speakersNames: {
			state: speakersNames,
			setState: setSpeakersNames,
			label: 'Name',
			component: Input,
		},
		speakerPicture: {
			state: speakerPicture,
			setState: setSpeakerPicture,
			label: 'Speaker picture',
			component: Input,
		},
		talkTitle: {
			state: talkTitle,
			setState: setTalkTitle,
			label: 'Title',
			component: Input,
		},
		titleColor: {
			state: titleColor,
			setState: setTitleColor,
			label: 'Title color',
			component: ColorInput,
		},
		titleSize: {
			state: titleSize,
			type: 'number',
			setState: setTitleSize,
			label: 'Title size',
			component: Input,
		},
		backgroundImg: {
			state: backgroundImg,
			setState: setBackgroundImg,
			label: 'Background Image url',
			component: Input,
		},
		eventLogo: {
			state: eventLogo,
			setState: setEventLogo,
			label: 'Logo (optional)',
			component: Input,
			placeholder:
				'e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4',
		},
	};

	const compositionId = 'Talk';

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
					<Form
						data={props}
						compositionId={compositionId}
						formConfig={formConfig}
						encodedParams={encodedParams}
					/>
				</div>
				<Code composition={compositionId} params={props} />
			</section>

			<div className={styles.formSidebar}>
				<ResizeWrapper resizableSide="left">
					<Sidebar>
						<Form
							data={props}
							compositionId={compositionId}
							formConfig={formConfig}
							encodedParams={encodedParams}
						/>
					</Sidebar>
				</ResizeWrapper>
			</div>
		</>
	);
}
