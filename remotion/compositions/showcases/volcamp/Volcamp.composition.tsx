import {Composition, Folder} from 'remotion';
import {Volcamp} from './Volcamp';

export const VolcampComposition = () => {
	return (
		<Folder name="Volcamp2023">
			<Composition
				width={1280}
				height={720}
				id="Volcamp2023"
				fps={30}
				durationInFrames={300}
				component={Volcamp}
				defaultProps={{
					themeName: 'Web & Mobile',
					title: "Remotion : le 7ème art à porté de composants web et d'API 🎬",
					speakers: [
						{
							name: 'Mickaël Alves',
							picture:
								'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
						},
						{
							name: 'Antoine Caron',
							picture:
								'https://ca.slack-edge.com/T108ZKPMF-U5M2F1A69-36e4b6574de8-192',
						},
					],
					date: '22 février',
					time: '14h00',
					location: 'Salle 1',
				}}
			/>
		</Folder>
	);
};
