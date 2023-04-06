import {AbsoluteFill} from 'remotion';
import {LyonSkyline} from './LyonSkyline';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {Details} from './Details';
import {Talk} from '../../../types/conferences.types';
import {TalkTitle} from './TalkTitle';

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
			<TalkTitle title={title} />
			<LyonSkyline />
			<Details date={date} time={time} location={location} />
		</AbsoluteFill>
	);
};
