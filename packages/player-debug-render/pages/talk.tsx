import {Player} from '@remotion/player';
import {Talk as TalkComponent} from '../../remotion-components/src/components';

const Talk = () => {
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
				component={TalkComponent}
				autoPlay
				controls
				loop
				inputProps={{
					talkTitle: 'Example',
					speakersNames: 'John Doe',
				}}
			/>
		</>
	);
};

export default Talk;
