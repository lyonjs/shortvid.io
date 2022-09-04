import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../../remotion-components/src/components';

const Meetup = () => {
	return (
		<>
			<h2>Meetup</h2>
			<Player
				style={{
					height: '400px',
					width: '400px',
				}}
				durationInFrames={120}
				compositionWidth={1200}
				compositionHeight={1200}
				fps={30}
				component={MeetupComponent}
				autoPlay
				controls
				loop
				inputProps={{
					title: 'Example',
					date: 'FooBar',
				}}
			/>
		</>
	);
};

export default Meetup;
