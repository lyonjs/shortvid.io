import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Icon} from '@iconify/react';
import {Text} from '../../../../design/atoms/Text';

const ReccuringDay: React.FC<{day: string}> = ({day}) => {
	return (
		<span>
			Tout les <b>{day}</b>.{' '}
		</span>
	);
};

const TimeRange: React.FC<{
	startingTime: string;
	endingTime: string;
}> = ({startingTime, endingTime}) => {
	return (
		<span>
			De{' '}
			<b>
				{startingTime} à {endingTime}.
			</b>
		</span>
	);
};

export const BrandedDetails: React.FC<{
	startingDate: string;
	endingDate?: string;
	reccuringDay?: string;
	startingTime: string;
	endingTime?: string;
}> = ({startingDate, endingDate, reccuringDay, startingTime, endingTime}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

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
				width: '100%',
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
					{endingDate ? `Du ${startingDate} au ${endingDate}` : startingDate}
				</Text>
				<Text
					style={{
						position: 'relative',
						fontFamily: 'inherit',
						display: 'block',
						textAlign: 'left',
						fontSize: '1.18rem',
					}}
				>
					{reccuringDay && <ReccuringDay day={reccuringDay} />}
					{endingTime ? (
						<TimeRange startingTime={startingTime} endingTime={endingTime} />
					) : (
						startingTime
					)}
				</Text>
			</div>
		</div>
	);
};
