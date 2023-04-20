import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Icon} from '@iconify/react';
import {Text} from '../../../../design/atoms/Text';

export const BrandedDetails: React.FC<{
	startingDate: string;
	endingDate?: string;
	day?: string;
	startingTime: string;
	endingTime?: string;
}> = ({startingDate, endingDate, day, startingTime, endingTime}) => {
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
				alignItems: 'center',
				height: 'max-content',
				fontSize: '1.6rem',
				width: '100%',
				bottom: slideIn,
			}}
		>
			<Icon
				icon="mdi:calendar"
				style={{
					fontSize: '6rem',
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
						fontSize: '2.125rem',
						fontWeight: 'bold',
						paddingBottom: '10px',
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
						fontSize: '1.5rem',
					}}
				>
					{day && <Day day={day} />}
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

const Day: React.FC<{day: string}> = ({day}) => {
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
				{startingTime} à {endingTime}
			</b>
		</span>
	);
};
