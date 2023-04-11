import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../hooks/useLottie';
import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationHour = useLottie('lf20_nv5aXa');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const drop = spring({
		frame: frame - 40,
		from: -20,
		to: 0,
		fps,
		durationInFrames: 30,
	});
	const opacity = spring({
		frame: frame - 40,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	if (!illustrationHour || !illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<Sequence from={40} name="Details">
			<TalkDetails
				date={date}
				time={time}
				location={location}
				style={{
					fontFamily: 'Lato,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
					fontSize: '32px',
				}}
				iconStyle={{
					opacity,
					bottom: drop,
				}}
			/>
		</Sequence>
	);
};
