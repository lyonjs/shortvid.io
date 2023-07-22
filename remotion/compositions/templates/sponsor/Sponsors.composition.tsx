import React from 'react';
import {Composition, Folder} from 'remotion';

import {Sponsor} from './Sponsor';

export const SponsorsComposition: React.FC = () => {
	return (
		<Folder name="Sponsors">
			<Composition
				component={Sponsor}
				width={1200}
				height={1200}
				id="Sponsor"
				fps={30}
				durationInFrames={200}
				defaultProps={{
					sponsorLocalisation: '94 Rue Robert - Lyon',
				}}
			/>
			<Composition
				component={Sponsor}
				width={1200}
				height={1200}
				id="SponsorWithoutLogo"
				fps={30}
				durationInFrames={200}
				defaultProps={{
					companyName: 'EvilCorp',
				}}
			/>
		</Folder>
	);
};
