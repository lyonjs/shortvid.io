'use client';

import {Player} from '@remotion/player';

import {TalkBranded} from '../../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {ColorInput} from '../../../../src/app/forms/colorInput';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {InputDate} from '../../../../src/app/forms/inputDate';
import {SelectInput} from '../../../../src/app/forms/selectInput';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {useInputDateChange} from '../../../../src/app/hooks/useInputDateChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function BrandedTalkPage() {
	const [backgroundColor, setBackgroundColor] = useInputChange<string>(
		'#EA4335',
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

	const logoGDG =
		'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg';
	const [logoUrl, setLogoUrl] = useInputChange<string>(logoGDG, 'logoUrl');
	const [recurringDay, setRecurringDay] = useInputChange<string | undefined>(
		'mardi',
		'recurringDay',
	);
	const [location, setLocation] = useInputChange<string | undefined>(
		undefined,
		'location',
	);

	const today = new Date();
	// We set the seconds to 0 to handle a server/client diff
	today.setSeconds(0, 0);

	const [startingDate, setStartingDate] = useInputDateChange<Date>(
		today,
		'startingDate',
	);
	const [endingDate, setEndingDate] = useInputDateChange<Date | undefined>(
		undefined,
		'endingDate',
	);

	const props = {
		backgroundColor,
		title,
		startingDate,
		endingDate,
		recurringDay,
		location,
		logoUrl,
		speaker: {
			pictureUrl: speakerPicture,
			name: speakersNames,
			company: speakersCompany,
			job: speakersJob,
		},
	};

	const encodedParams = encodeObjectValues({
		backgroundColor,
		title,
		startingDate,
		endingDate,
		recurringDay,
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
			label: 'Background Color (optional)',
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
		endingDate: {
			state: endingDate,
			setState: setEndingDate,
			label: 'Ending Date (optional)',
			component: InputDate,
		},
		recurringDay: {
			state: recurringDay,
			setState: setRecurringDay,
			label: 'Recurring day',
			component: SelectInput,
			options: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'],
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
					<Form formConfig={formConfig} encodedParams={encodedParams} />
				</div>
				<Code composition="TalkBranded" params={props} />
			</section>

			<ResizeWrapper resizableSide="left">
				<Sidebar>
					<Form formConfig={formConfig} encodedParams={encodedParams} />
				</Sidebar>
			</ResizeWrapper>
		</>
	);
}
