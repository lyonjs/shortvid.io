import {Text} from '../../../../design/atoms/Text';
import {Img} from 'remotion';

export const Speakers: React.FC<{
	speakers: {name: string; pictureUrl: string}[];
}> = ({speakers}) => {
	const SpeakerLavaSyle = [
		{
			height: 320,
			backgroundColor: '#FF6700',
		},
		{
			height: 270,
			backgroundColor: '#E92700',
		},
		{
			height: 345,
			backgroundColor: '#EB3D1A',
		},
	];

	return (
		<div
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
				gap: 70,
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
							paddingBottom: 20,
							borderRadius: '0 0 15px 15px',
							...SpeakerLavaSyle[index],
						}}
					>
						<Img
							src={speaker.pictureUrl}
							alt={`Picture of ${speaker.name}`}
							width={130}
							height={130}
							style={{borderRadius: 10}}
						/>
						<Text
							style={{
								display: 'block',
								width: '100%',
								padding: 10,
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
