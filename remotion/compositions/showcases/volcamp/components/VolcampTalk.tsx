import {Details} from './Details';
import {Logo} from './Logo';
import {speakerProps, Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {Theme, ThemeProps} from './Theme';

export type VolcampProps = {
	themeName: ThemeProps['themeName'];
	speakers: speakerProps['speakers'];
	title: string;
	date?: string;
	time?: string;
	location?: string;
};

export const VolcampTalk: React.FC<VolcampProps> = ({
	themeName,
	speakers,
	title,
	date,
	time,
	location,
}) => {
	return (
		<>
			<Logo />
			<Theme themeName={themeName} />
			<Speakers speakers={speakers} />
			<TalkTitle title={title} />
			<Details date={date} time={time} location={location} />
		</>
	);
};
