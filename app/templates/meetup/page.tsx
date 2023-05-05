'use client';

import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../../../remotion/compositions/templates/meetup/Meetup';
import {Code} from '../../../src/app/Code';
import {Form, Input} from '../../../src/app/forms/input';
import {CopyUrlButton} from '../../../src/app/CopyUrlButton';
import {encodeObjectValues} from '../../../src/app/utils/encodeObjectValues';
import {useContext} from 'react';
import {FontContext} from '../../../src/context/fonts/FontCountext';

export default function MeetupPage() {
	const [title, setTitle] = useInputChange<string>('Example', 'title');
	const [eventLogo, setEventLogo] = useInputChange<string>('', 'eventLogo');
	const [date, setDate] = useInputChange<string>('28 septembre 2022', 'date');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg'
	);
	const props = {title, date, backgroundImg, eventLogo};
	const encodedParams = encodeObjectValues(props);
	const {selectedFont} = useContext(FontContext);
	console.log(selectedFont);
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
					durationInFrames={270}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={MeetupComponent}
					inputProps={props}
				/>

				<Form>
					<Input setValue={setTitle} value={title} label="SpeakerName" />
					<Input setValue={setDate} value={date} label="Date" />

					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background image url"
					/>
					<Input
						setValue={setEventLogo}
						value={eventLogo}
						label="Event Logo (optional)"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="Meetup" params={props} />
		</>
	);
}
