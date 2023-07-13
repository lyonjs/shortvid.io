import {AbsoluteFill} from 'remotion';

import {Details} from './Details';
import {Logo} from './Logo';
import {LyonSkyline} from './LyonSkyline';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {DefaultProps} from '../../../types/defaultProps.types';

export const Mixit2023: React.FC<DefaultProps> = ({
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
