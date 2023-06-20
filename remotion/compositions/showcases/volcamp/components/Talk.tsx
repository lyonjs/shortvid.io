import {Sequence} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Theme, ThemeProps} from './Theme';
import {speakerProps, Speakers} from './Speakers';
import {Logo} from './Logo';

export type TalkProps = {
	themeName: ThemeProps['themeName'];
	speakers: speakerProps['speakers'];
	title: string;
	date?: string;
	time?: string;
	location?: string;
};

export const Talk: React.FC<TalkProps> = ({
	themeName,
	speakers,
	title,
	date,
	time,
	location,
}) => {
	return (
		<>
			<Sequence name="Logo">
				<Logo />
			</Sequence>
			<Sequence name="Theme">
				<Theme themeName={themeName} />
			</Sequence>
			<Sequence name="Speakers">
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence name="Title">
				<TalkTitle title={title} />
			</Sequence>
			<Sequence name="Details">
				<Details date={date} time={time} location={location} />
			</Sequence>
		</>
	);
};
