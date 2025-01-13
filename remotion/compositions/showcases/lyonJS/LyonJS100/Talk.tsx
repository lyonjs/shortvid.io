import React from 'react';
import {
	Easing,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

import {SpeakerSchema} from '../../showcases.types';

import {SpeakerName} from './Talk/SpeakerName';
import {TalkTitle} from './Talk/TalkTitle';
import {AnimatedScene} from './AnimatedScene';

export const LyonJS100Talk = z.object({
	speakers: z.array(SpeakerSchema),
	talkTitle: z.string(),
	titleSize: z.number().finite().positive().gte(30).optional(),
});

export const Talk: React.FC<z.infer<typeof LyonJS100Talk>> = ({
	speakers,
	talkTitle,
	titleSize,
}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const startFrame = 170;

	const scaleUpAnimation = spring({
		frame: frame - startFrame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	const opacityUp = spring({
		frame: frame - startFrame,
		from: 0,
		to: 0.9,
		fps,
		durationInFrames: 50,
	});

	const textOpacity = interpolate(
		frame,
		[startFrame, startFrame + 100],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.bezier(0.33, 1, 0.68, 1),
		},
	);

	return (
		<AnimatedScene>
			<div
				style={{
					width: '100%',
					display: 'flex',
				}}
			>
				<div>
					{speakers.map((speaker, index) => {
						const [firstName, ...lastName] = speaker.name.split(' ');

						const firstNameContent = firstName;
						const lastNameContent = lastName.join(' ');

						return (
							<div key={index}>
								<Img
									src={speaker.picture}
									alt="Speaker Picture"
									style={{
										width: 'auto',
										height: 460,
										marginLeft: 120,
										marginTop: 90,
										transform: `rotate(-5deg) scale(${scaleUpAnimation})`,
										borderRadius: 0,
										opacity: opacityUp,
										border: `10px solid black`,
									}}
								/>
								<SpeakerName
									scaleUpAnimation={scaleUpAnimation}
									opacityAnimation={opacityUp}
									firstNameContent={firstNameContent}
									lastNameContent={lastNameContent}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<TalkTitle
				opacity={textOpacity}
				titleSize={titleSize}
				talkTitle={talkTitle}
			/>
		</AnimatedScene>
	);
};
