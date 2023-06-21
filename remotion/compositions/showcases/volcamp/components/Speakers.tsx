import {Text} from '../../../../design/atoms/Text';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type speakerProps = {
	speakers: {name: string; picture: string; company?: string; role?: string}[];
};

export const Speakers: React.FC<speakerProps> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const first = spring({
		frame: frame - 15,
		fps,
		from: -465,
		to: -100,
	});

	const second = spring({frame: frame - 20, fps, from: -390, to: -100});

	const third = spring({frame: frame - 10, fps, from: -480, to: -100});

	const SpeakerLavaSyle = [
		{
			transform: `translateY(${first}px)`,
			height: 455,
			backgroundColor: '#FF6700',
			clipPath:
				'polygon(0 0, 100% 0, 100% 95%, 80% 95%, 80% 93%, 60% 93%, 60% 100%, 40% 100%, 40% 96%, 20% 96%, 20% 90%, 0 90%)',
		},
		{
			transform: `translateY(${second}px)`,
			height: 390,
			backgroundColor: '#E92700',
			clipPath:
				'polygon(0 0, 100% 0, 100% 85%, 80% 85%, 80% 88%, 60% 88%, 60% 93%, 40% 93%, 40% 100%, 20% 100%, 20% 90%, 0 90%)',
		},
		{
			transform: `translateY(${third}px)`,
			height: 440,
			backgroundColor: '#EB3D1A',
			clipPath:
				'polygon(0 0, 100% 0, 100% 100%, 80% 100%, 80% 95%, 60% 95%, 60% 93%, 40% 93%, 40% 90%, 20% 90%, 20% 94%, 0 94%)',
		},
	];

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				gap: 50,
				padding: '0 230px',
			}}
		>
			{speakers.map((speaker, index) => {
				return (
					<div
						key={index}
						style={{
							transformOrigin: 'top center',
							width: 220,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							gap: 10,
							...SpeakerLavaSyle[index],
						}}
					>
						<div
							style={{
								position: 'relative',
							}}
						>
							{speaker.company && (
								<span
									style={{
										position: 'absolute',
										width: 40,
										height: 40,
										top: -15,
										right: -15,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										background: 'white',
										padding: 5,
									}}
								>
									<Img
										src={speaker.company}
										alt={`${speaker.name}'s Company`}
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</span>
							)}
							<Img
								src={speaker.picture}
								alt={`Picture of ${speaker.name}`}
								width={130}
								height={130}
								style={{}}
							/>
						</div>
						<Text
							style={{
								display: 'block',
								width: '100%',
								padding: 10,
								paddingBottom: 70,
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
