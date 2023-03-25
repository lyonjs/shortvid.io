import {Sequence} from 'remotion';
import {Logo} from './Logo';
import {RightTriangle} from './RightTriangle';
import {LeftTriangle} from './LeftTriangle';
import {Title} from './Title';
import {AbsoluteFill} from 'remotion';
import {Speaker} from './TouraineTech2023';
import {Type} from './Type';
import {BigSpeakers} from './BigSpeakers';

interface ReplayType {
	title: string;
	type: string;
	speakers: Speaker[];
}

export const Replay: React.FC<ReplayType> = ({title, speakers, type}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Logo />
			<RightTriangle />
			<LeftTriangle />
			<BigSpeakers speakers={speakers} dropTop={250} />
			<Sequence from={60}>
				<Title
					title={title}
					style={{
						fontSize: '48px',
						margin: '0 auto',
						bottom: '200px',
						padding: '0 60px',
						left: 0,
						right: 0,
					}}
				/>
			</Sequence>
			<Sequence from={120} name="Details">
				<Type type={type} />
			</Sequence>
		</AbsoluteFill>
	);
};
