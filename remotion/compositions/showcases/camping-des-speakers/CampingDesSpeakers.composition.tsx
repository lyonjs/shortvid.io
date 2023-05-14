import React from 'react';
import {Composition, Folder} from 'remotion';
import {CampingDesSpeakers} from './CampingDesSpeakers';
import {Introduction} from './Introduction';

export const CampingDesSpeakersComposition: React.FC = () => {
	return (
		<Folder name="CampingDesSpeakers-2023">
			<Composition
				id="CampingDesSpeakers"
				component={CampingDesSpeakers}
				durationInFrames={450}
				fps={60}
				width={1200}
				height={700}
				defaultProps={{
					title: "Remotion : le 7ème art à porté de composants web et d'API 🎬",
					speakers: [
						{
							name: 'Mickaël Alves',
							picture:
								'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
							company: 'Zenika',
						},
						{
							name: 'Antoine Caron',
							picture:
								'https://ca.slack-edge.com/T108ZKPMF-U5M2F1A69-36e4b6574de8-192',
							company: 'Bedrock',
						},
					],
					date: '22 février',
					time: '14h00',
					location: 'Salle 1',
				}}
			/>
			<Composition
				component={Introduction}
				width={1200}
				height={700}
				id="CampingDesSpeakersIntroduction"
				fps={30}
				durationInFrames={200}
			/>
		</Folder>
	);
};
