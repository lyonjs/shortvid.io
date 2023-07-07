import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';

import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Speakers} from './Speakers';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {DefaultProps} from '../../../types/defaultProps.types';

export const TouraineTech2023: React.FC<DefaultProps> = ({
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
