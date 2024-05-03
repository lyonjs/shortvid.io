import {AbsoluteFill} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../showcases.types';

import {Mixit} from './Mixit';
import {MixitIntro} from './MixitIntro';

export const MixitIntroTalk = ({
	title,
	speakers,
	date,
	time,
	location,
}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill>
			<MixitIntro />
			<Mixit
				title={title}
				speakers={speakers}
				date={date}
				time={time}
				location={location}
			/>
		</AbsoluteFill>
	);
};
