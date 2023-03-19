import React from 'react';
import {
	AbsoluteFill,
	Audio,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {Speaker} from '../components/Speaker';
import {TransitionBalls} from './TransitionBalls';
import {Background} from './Background';
import {Title} from './Title';
import {ExpertName} from './ExpertName';

export const RemotionExpert: React.FC<{
	expertName: string;
	expertPicture: string;
}> = ({expertName, expertPicture}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({frame, from: -550, to: 290, fps, durationInFrames: 50});

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				backgroundColor: '#1b1b1d',
			}}
		>
			<Audio
				src={staticFile('sounds/tip_stevens_miracle.mp3')}
				startFrom={2100}
				volume={(frame) =>
					interpolate(frame, [0, 80], [0, 0.4], {extrapolateLeft: 'clamp'})
				}
			/>
			<AbsoluteFill>
				<Sequence name="Balls" from={10} durationInFrames={200}>
					<TransitionBalls />
				</Sequence>
				<Sequence name="Background" from={180}>
					<Background />
				</Sequence>
				<Sequence name="Speaker">
					<Speaker
						src={expertPicture}
						size={500}
						style={{
							position: 'absolute',
							top: `${drop}px`,
							left: '50%',
							transform: 'translate(-50%)',
							border: 'none',
							boxShadow: '15px 15px 0px #003272, -15px -15px 0px #67AAFF',
							borderRadius: '30% 70% 33% 67% / 60% 38% 62% 40%',
						}}
					/>
				</Sequence>
				<Sequence name="Remotion Logo" from={140}>
					<Video
						style={{
							position: 'absolute',
							bottom: -20,
							left: '50%',
							transform: 'translate(-50%)',
							width: '30%',
						}}
						src={staticFile('announcement/remotion-logo.mp4')}
					/>
				</Sequence>
				<Sequence name="Expert Name" from={140}>
					<ExpertName expertName={expertName} />
				</Sequence>
				<Sequence name="Expert Texte" from={200}>
					<Title />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
