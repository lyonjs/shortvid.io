'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {CopyUrlButton} from '../../../src/app/CopyUrlButton';
import {encodeObjectValues} from '../../../src/app/utils/encodeObjectValues';
import {TalkBranded} from '../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {SelectInput} from '../../../src/app/forms/selectInput';
import {ColorInput} from '../../../src/app/forms/colorInput';
import {InputDate} from '../../../src/app/forms/inputDate';
import {useInputDateChange} from '../../../src/app/hooks/onInputDateChange';

export default function BrandedTalkPage() {
	const [backgroundColor, setBackgroundColor] = useInputChange<string>(
		'#EA4335',
		'backgroundColor'
	);
	const [title, setTitle] = useInputChange<string>('Example', 'title');
	const [speakerPicture, setSpeakerPicture] = useInputChange<string>(
		'',
		'speakerPicture'
	);
	const [speakersNames, setSpeakersNames] = useInputChange<string>(
		'John Doe',
		'speakersNames'
	);
	const [speakersCompany, setSpeakersCompany] = useInputChange<
		string | undefined
	>(undefined, 'speakersCompany');
	const [speakersJob, setSpeakersJob] = useInputChange<string | undefined>(
		undefined,
		'speakersJob'
	);

	const logoGDG =
		'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg';
	const [logoUrl, setLogoUrl] = useInputChange<string>(logoGDG, 'logoUrl');
	const [recurringDay, setRecurringDay] = useInputChange<string | undefined>(
		'mardi',
		'recurringDay'
	);
	const [location, setLocation] = useInputChange<string | undefined>(
		undefined,
		'location'
	);

	const today = new Date();
	// We set the seconds to 0 to handle a server/client diff
	today.setSeconds(0, 0);

	const [startingDate, setStartingDate] = useInputDateChange<Date>(
		today,
		'startingDate'
	);
	const [endingDate, setEndingDate] = useInputDateChange<Date | undefined>(
		undefined,
		'endingDate'
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

	return (
		<>
			<div className="flex flex-col pb-4 justify-center items-center md:flex-row md:items-start">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '500px',
						aspectRatio: '16 / 9',
					}}
					durationInFrames={120}
					compositionWidth={1280}
					compositionHeight={720}
					fps={30}
					component={TalkBranded}
					inputProps={props}
				/>

				<Form>
					<ColorInput
						setValue={setBackgroundColor}
						value={backgroundColor}
						label="Background Color (optional)"
					/>
					<Input setValue={setTitle} value={title} label="Title" />
					<Input
						setValue={setLogoUrl}
						value={logoUrl}
						label="Logo"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
					/>
					<Input
						setValue={setSpeakerPicture}
						value={speakerPicture}
						label="Speaker picture"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
					/>
					<Input
						setValue={setSpeakersNames}
						value={speakersNames}
						label="Name"
					/>
					<Input
						setValue={setSpeakersCompany}
						value={speakersCompany}
						label="Company (optional)"
						placeholder="e.g: Zenika"
					/>
					<Input
						setValue={setSpeakersJob}
						value={speakersJob}
						label="Job (optional)"
						placeholder="e.g: CTO"
					/>
					<InputDate
						setValue={setStartingDate}
						value={startingDate}
						label="Starting Date"
					/>
					<InputDate
						setValue={setEndingDate}
						value={endingDate}
						label="Ending Date (optional)"
					/>
					<SelectInput
						setValue={setRecurringDay}
						value={recurringDay}
						label="Recurring day"
						options={['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']}
					/>
					<Input
						setValue={setLocation}
						value={location}
						label="Location (optional)"
						placeholder="e.g: 5 Place Jules Ferry, 69006."
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="TalkBranded" params={props} />
		</>
	);
}
