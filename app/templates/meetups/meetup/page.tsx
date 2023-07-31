'use client';

import {Player} from '@remotion/player';

import {Meetup as MeetupComponent} from '../../../../remotion/compositions/templates/meetup/Meetup';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function MeetupPage() {
	const [title, setTitle] = useInputChange<string>('Example', 'title');
	const [eventLogo, setEventLogo] = useInputChange<string>('', 'eventLogo');
	const [date, setDate] = useInputChange<string>('28 septembre 2022', 'date');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg',
	);
	const props = {title, date, backgroundImg, eventLogo};
	const encodedParams = encodeObjectValues(props);

	const formConfig: FormConfigProps = {
		title: {
			state: title,
			setState: setTitle,
			label: 'Speaker name',
			component: Input,
		},
		date: {
			state: date,
			setState: setDate,
			label: 'Date',
			component: Input,
		},
		backgroundImg: {
			state: backgroundImg,
			setState: setBackgroundImg,
			label: 'Background image url',
			component: Input,
		},
		eventLogo: {
			state: eventLogo,
			setState: setEventLogo,
			label: 'Event Logo (optional)',
			component: Input,
			placeholder:
				'e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4',
		},
	};

	const compositionId = 'Meetup';

	return (
		<div className={styles.mainContent}>
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
					durationInFrames={270}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={MeetupComponent}
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
	);
}
