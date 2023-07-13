import {AbsoluteFill, Sequence} from 'remotion';

import {BackgroundPicture} from './BackgroundPicture';
import {BigLogo} from './BigLogo';
import {LyonSkyline} from './LyonSkyline';
import {Thanks} from './Thanks';

export const MixitSponsor: React.FC<{
	name: string;
	picture: string;
	background: string;
	category: string;
}> = ({name, picture, background, category}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#2c233d',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
				color: '#fefefe',
			}}
		>
			<Sequence durationInFrames={50}>
				<BackgroundPicture picture={background} />
			</Sequence>
			<Sequence from={30} durationInFrames={70}>
				<BigLogo />
			</Sequence>
			<Sequence from={70}>
				<Thanks name={name} picture={picture} category={category} />
			</Sequence>
			<Sequence from={45}>
				<LyonSkyline />
			</Sequence>
		</AbsoluteFill>
	);
};
