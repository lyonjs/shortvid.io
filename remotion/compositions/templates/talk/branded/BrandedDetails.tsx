import {Icon} from '@iconify/react';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Text} from '../../../../design/atoms/Text';

type BrandedDetailsProps = {
	startingDateTime: Date;
	location?: string;
};

export const BrandedDetails = ({
	startingDateTime,
	location,
}: BrandedDetailsProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const formatedStartingDate = new Date(startingDateTime);
	const startingDate = format(formatedStartingDate, 'dd MMMM yyyy', {
		locale: fr,
	});
	const startingTime = format(formatedStartingDate, "HH 'h' mm");

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
