import {Icon} from '@iconify/react';
import {DateTime} from 'luxon';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Text} from '../../../../design/atoms/Text';

type BrandedDetailsProps = {
	startingDateTime: Date | string;
	location?: string;
};

export const BrandedDetails = ({
	startingDateTime,
	location,
}: BrandedDetailsProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const inputDate: string =
		startingDateTime instanceof Date
			? startingDateTime.toISOString()
			: startingDateTime;
	const luxonDate = DateTime.fromISO(inputDate, {
		setZone: !(startingDateTime instanceof Date),
	}).setLocale('fr');

	const startingDate = luxonDate.toFormat('dd MMMM yyyy');
	const startingTime = luxonDate.toFormat("HH 'h' mm");

	const slideIn = spring({
		frame,
		fps,
		from: -100,
		to: 50,
		durationInFrames: 30,
	});

	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				height: 'max-content',
				width: location ? '50%' : '100%',
				bottom: slideIn,
			}}
		>
			<Icon
				icon="mdi:calendar"
				style={{
					fontSize: '4.5rem',
					color: 'white',
				}}
			/>
			<div>
				<Text
					style={{
						position: 'relative',
						fontFamily: 'inherit',
						display: 'block',
						textAlign: 'left',
						fontSize: '1.7rem',
						fontWeight: 'bold',
						paddingBottom: '5px',
					}}
				>
					{startingDate}
				</Text>
				<Text
					style={{
						position: 'relative',
						fontFamily: 'inherit',
						display: 'block',
						textAlign: 'left',
						fontSize: '1.18rem',
						fontWeight: 'bold',
					}}
				>
					{startingTime}
				</Text>
			</div>
		</div>
	);
};
