import React from 'react';
import {Composition, Folder} from 'remotion';
import {TouraineTech2023} from '../../conference/touraineTech2023/TouraineTech2023';
import {defaultTalkValues} from '../../conference/data/defaultValues';
import {SponsorTouraineTech2023} from '../../conference/touraineTech2023/SponsorTouraineTech2023';
import {Replay} from '../../conference/touraineTech2023/Replay';

export const TouraineTechComposition: React.FC = () => {
	return (
		<Folder name="TouraineTech-2023">
			<Composition
				id="TouraineTech2023"
				component={TouraineTech2023}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="SponsorTouraineTech2023"
				component={SponsorTouraineTech2023}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					message: 'Merci à notre sponsor',
					sponsorLogo: 'https://touraine.tech/_nuxt/img/1337c46.svg',
				}}
			/>
			<Composition
				width={1920}
				height={1080}
				id="TouraineTechReplay"
				fps={60}
				durationInFrames={300}
				component={Replay}
				defaultProps={{
					title: "Remotion : le 7ème art à porté de composants web et d'API 🎬",
					speakers: [
						{
							name: 'Mickaël Alves',
							picture:
								'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
						},
						{
							name: 'Antoine Caron',
							picture:
								'https://pbs.twimg.com/profile_images/1619099163018371077/xFDqbqUJ_400x400.jpg',
						},
					],
					type: 'Conférence',
				}}
			/>
		</Folder>
	);
};
