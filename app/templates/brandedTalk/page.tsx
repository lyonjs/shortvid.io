'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {CopyUrlButton} from '../../../src/app/CopyUrlButton';
import {encodeObjectValues} from '../../../src/app/utils/encodeObjectValues';
import {TalkBranded} from '../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {InputDate} from '../../../src/app/forms/inputDate';
import {format} from 'date-fns';
import {SelectInput} from '../../../src/app/forms/selectInput';
import {ColorInput} from '../../../src/app/forms/colorInput';

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
	const [speakersCompany, setSpeakersCompany] = useInputChange<string>(
		'',
		'speakersCompany'
	);
	const [speakersJob, setSpeakersJob] = useInputChange<string>(
		'',
		'speakersJob'
	);
	const [logoUrl, setLogoUrl] = useInputChange<string>(
		'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg',
		'logoUrl'
	);
	const [recurringDay, setRecurringDay] = useInputChange<string | undefined>(
		'mardi',
		'recurringDay'
	);
	const [location, setLocation] = useInputChange<string>('', 'location');
	const today = format(new Date(), 'yyyy-MM-dd HH:mm');
	const [startingDate, setStartingDate] = useInputChange<string>(
		today,
		'startingDate'
	);
	const [endingDate, setEndingDate] = useInputChange<string>('', 'endingDate');

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
					/>
					<Input
						setValue={setSpeakersJob}
						value={speakersJob}
						label="Job (optional)"
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
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="TalkBranded" params={props} />
		</>
	);
}
