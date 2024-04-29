'use client';

import {Player} from '@remotion/player';
import {z} from 'zod';

import {TalkBranded} from '../../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {TalkBrandedSchema} from '../../../../remotion/compositions/templates/talk/talks.types';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {ColorInput} from '../../../../src/app/forms/colorInput';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {InputDate} from '../../../../src/app/forms/inputDate';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {useInputDateChange} from '../../../../src/app/hooks/useInputDateChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function BrandedTalkPage() {
	const defaultDate: Date = new Date();
	defaultDate.setSeconds(0, 0);

	const logoGDG =
		'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg';

	const [backgroundColor, setBackgroundColor] = useInputChange<string>(
		'#086fda',
		'backgroundColor',
	);
	const [title, setTitle] = useInputChange<string>('Example', 'title');
	const [speakerPicture, setSpeakerPicture] = useInputChange<string>(
		'',
		'speakerPicture',
	);
	const [speakersNames, setSpeakersNames] = useInputChange<string>(
		'John Doe',
		'speakersNames',
	);
	const [speakersCompany, setSpeakersCompany] = useInputChange<
		string | undefined
	>(undefined, 'speakersCompany');
	const [speakersJob, setSpeakersJob] = useInputChange<string | undefined>(
		undefined,
		'speakersJob',
	);
	const [logoUrl, setLogoUrl] = useInputChange<string>(logoGDG, 'logoUrl');
	const [location, setLocation] = useInputChange<string | undefined>(
		undefined,
		'location',
	);
	const [startingDate, setStartingDate] = useInputDateChange<Date>(
		defaultDate,
		'startingDate',
	);

	const props: z.infer<typeof TalkBrandedSchema> = {
		backgroundColor,
		title,
		startingDate,
		location,
		logoUrl,
		speakers: [
			{
				pictureUrl: speakerPicture,
				name: speakersNames,
				company: speakersCompany,
				job: speakersJob,
			},
		],
	};

	const encodedParams = encodeObjectValues({
		backgroundColor,
		title,
		startingDate,
		location,
		logoUrl,
		speakerPicture,
		speakersNames,
		speakersCompany,
		speakersJob,
	});

	const formConfig: FormConfigProps = {
		backgroundColor: {
			state: backgroundColor,
			setState: setBackgroundColor,
			label: 'Background Color',
			component: ColorInput,
		},
		title: {
			state: title,
			setState: setTitle,
			label: 'Title',
			component: Input,
		},
		startingDate: {
			state: startingDate,
			setState: setStartingDate,
			label: 'Starting Date',
			component: InputDate,
		},
		location: {
			state: location,
			setState: setLocation,
			label: 'Location (optional)',
			component: Input,
			placeholder: 'e.g: 5 Place Jules Ferry, 69006.',
		},
		logoUrl: {
			state: logoUrl,
			setState: setLogoUrl,
			label: 'Logo url',
			component: Input,
			placeholder:
				'e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4',
		},
		speakerPicture: {
			state: speakerPicture,
			setState: setSpeakerPicture,
			label: 'Speaker picture',
			component: Input,
			placeholder:
				'e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4',
		},
		speakersNames: {
			state: speakersNames,
			setState: setSpeakersNames,
			label: 'Name',
			component: Input,
		},
		speakersCompany: {
			state: speakersCompany,
			setState: setSpeakersCompany,
			label: 'Company (optional)',
			component: Input,
		},
		speakersJob: {
			state: speakersJob,
			setState: setSpeakersJob,
			label: 'Job (optional)',
			component: Input,
			placeholder: 'e.g: CTO',
		},
	};

	const compositionId = 'TalkBranded';

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
						aspectRatio: '16 / 9',
					}}
					durationInFrames={120}
					compositionWidth={1280}
					compositionHeight={720}
					fps={30}
					component={TalkBranded}
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
