import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';

import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Speakers} from './Speakers';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

export interface Speaker {
	picture: string;
	name: string;
}

export interface TouraineTechProps {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}

export const TouraineTech2023: React.FC<TouraineTechProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Logo />
			<BackgroundTriangle primaryColor={'#6abfad'} secondaryColor={'#222333'} />
			<Speakers speakers={speakers} />
			<TalkTitle title={title} />
			<Details date={date} time={time} location={location} />
		</AbsoluteFill>
	);
};
