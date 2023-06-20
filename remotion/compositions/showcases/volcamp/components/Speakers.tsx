import {Text} from '../../../../design/atoms/Text';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type speakerProps = {
	speakers: {name: string; picture: string}[];
};

export const Speakers: React.FC<speakerProps> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const first = spring({frame: frame - 15, fps, from: 0, to: 325});

	const second = spring({frame: frame - 20, fps, from: 0, to: 270});

	const third = spring({frame: frame - 10, fps, from: 0, to: 345});

	const SpeakerLavaSyle = [
		{
			height: first,
			backgroundColor: '#FF6700',
		},
		{
			height: second,
			backgroundColor: '#E92700',
		},
		{
			height: third,
			backgroundColor: '#EB3D1A',
		},
	];

	return (
		<div
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
				padding: '0 230px',
			}}
		>
			{speakers.map((speaker, index) => {
				return (
					<div
						key={index}
						style={{
							width: 220,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							gap: 10,
							margin: '0 auto',
							borderRadius: '0 0 15px 15px',
							...SpeakerLavaSyle[index],
						}}
					>
						<Img
							src={speaker.picture}
							alt={`Picture of ${speaker.name}`}
							width={130}
							height={130}
							style={{
								borderRadius: 10,
							}}
						/>
						<Text
							style={{
								display: 'block',
								width: '100%',
								padding: 10,
								paddingBottom: 20,
								fontFamily: 'inherit',
								fontSize: 20,
								fontWeight: 'bold',
							}}
						>
							{speaker.name}
						</Text>
					</div>
				);
			})}
		</div>
	);
};
