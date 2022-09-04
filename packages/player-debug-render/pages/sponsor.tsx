import {Player} from '@remotion/player';
import {Sponsor as SponsorComponent} from '../../remotion-components/src/components';

const Sponsor = () => {
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
				component={SponsorComponent}
				autoPlay
				controls
				loop
				inputProps={{}}
			/>
		</>
	);
};

export default Sponsor;
