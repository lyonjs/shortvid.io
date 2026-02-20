import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';

import {SHORTVID_ASSET_PATHS, SHORTVID_COLORS} from '../../theme';

import {Replay, ReplaySchema} from './replay/Replay';
import {Silhouette, SilhouetteSchema} from './silhouette/Silhouette';
import {TalkBranded} from './talk/branded/TalkBranded';
import {Talk} from './talk/Talk';
import {TalkBrandedSchema, TalkSchema} from './talk/talks.types';

const today = new Date();
const startingDate = today;
const todayFormatted = today.toLocaleDateString('fr-FR', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

export const TalkComposition: React.FC = () => {
	return (
		<Folder name="Talks">
			<Composition
				component={Talk}
				width={1200}
				height={1200}
				id="Talk"
				fps={30}
				durationInFrames={120}
				schema={TalkSchema}
				defaultProps={{
					speakersNames: 'Jane Doe',
					titleColor: SHORTVID_COLORS.secondary,
					talkTitle: 'Example talk title for this template 🚀',
					titleSize: 80,
					speakerPicture: staticFile(SHORTVID_ASSET_PATHS.defaultAvatar),
					eventLogo: staticFile(SHORTVID_ASSET_PATHS.monogram),
					backgroundImg: staticFile(SHORTVID_ASSET_PATHS.backgroundImg),
				}}
			/>
			<Composition
				component={TalkBranded}
				width={1280}
				height={720}
				id="Talk-Alternate"
				fps={30}
				durationInFrames={140}
				schema={TalkBrandedSchema}
				defaultProps={{
					backgroundColor: SHORTVID_COLORS.secondary,
					title: 'Example talk title for this template 🚀',
					startingDate,
					location: '1 rue de la République, 69001 Lyon',
					logoUrl: staticFile(SHORTVID_ASSET_PATHS.monogram),
					speakers: [
						{
							pictureUrl: staticFile(SHORTVID_ASSET_PATHS.defaultAvatar),
							name: 'Jane Doe',
							company: 'Acme Corp',
							job: 'Software Engineer',
						},
					],
				}}
			/>
			<Composition
				component={Silhouette}
				width={1280}
				height={720}
				id="Talk-Silhouette"
				fps={30}
				durationInFrames={120}
				schema={SilhouetteSchema}
				defaultProps={{
					title: 'Example talk title for this template 🚀',
					backgroundImg: staticFile(SHORTVID_ASSET_PATHS.backgroundImg),
					silhouetteUrl:
						'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png',
					side: 'right',
					logoUrl: staticFile(SHORTVID_ASSET_PATHS.monogram),
				}}
			/>
			<Composition
				width={1920}
				height={1080}
				id="Replay"
				fps={60}
				durationInFrames={320}
				component={Replay}
				schema={ReplaySchema}
				defaultProps={{
					title: 'Example replay title for this template 🎬',
					speakers: [
						{
							name: 'Jane Doe',
							picture: staticFile(SHORTVID_ASSET_PATHS.defaultAvatar),
						},
					],
					date: todayFormatted,
					sponsor: staticFile(SHORTVID_ASSET_PATHS.logoHorizontal),
				}}
			/>
		</Folder>
	);
};
