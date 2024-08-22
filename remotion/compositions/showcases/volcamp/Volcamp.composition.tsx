import {Composition, Folder} from 'remotion';

import {ShowcaseVolcampSchema} from '../showcases.types';

import {Volcamp} from './Volcamp';

export const VolcampComposition = () => {
	return (
		<Folder name="Volcamp-2023">
			<Composition
				width={1280}
				height={720}
				id="Volcamp-2023"
				fps={30}
				durationInFrames={300}
				component={Volcamp}
				schema={ShowcaseVolcampSchema}
				defaultProps={{
					themeName: 'Web & Mobile',
					title:
						"Remotion : le 7ème art à portée de composants web et d'API 🎬",
					speakers: [
						{
							name: 'Mickaël Alves',
							picture:
								'https://pbs.twimg.com/profile_images/1818749515798614016/5WxluMkh_400x400.jpg',
							company: 'https://zenika.com/static/images/favicon-32x32.png',
						},
						{
							name: 'Antoine Caron',
							picture:
								'https://ca.slack-edge.com/T108ZKPMF-U5M2F1A69-36e4b6574de8-192',
							company:
								'https://bedrockstreaming.com/assets/favicon/apple-icon-57x57.png',
						},
						{
							name: 'Emeric Boyadjian',
							picture:
								'https://ca.slack-edge.com/T02ARLB3P-U04QCCY3KH8-991e0b5e8a16-512',
							company: 'https://zenika.com/static/images/favicon-32x32.png',
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
