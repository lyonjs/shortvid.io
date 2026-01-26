import {AbsoluteFill} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../showcases.types';

import {Details} from './Details';
import {Logo} from './Logo';
import {LyonSkyline} from './LyonSkyline';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

export const Mixit = ({title, speakers, date, time, location}: z.infer<typeof ShowcaseSchema>) => {
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
