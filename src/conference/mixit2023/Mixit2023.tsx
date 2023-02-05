import {AbsoluteFill} from 'remotion';
import {LyonSkyline} from './LyonSkyline';
import {Logo} from './Logo';
import {Title} from '../touraineTech2023/Title';
import {Speakers} from './Speakers';
import {Details} from './Details';
import {Talk} from '../types';

export const Mixit2023: React.FC<Talk> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#2c233d',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
			}}
		>
			<Logo />
			<Speakers speakers={speakers} />
			<Title
				title={title}
				style={{
					maxWidth: '90%',
					left: 0,
					right: 0,
					margin: '0 auto',
				}}
			/>
			<LyonSkyline />
			<Details date={date} time={time} location={location} />
		</AbsoluteFill>
	);
};
