import React from 'react';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../../design/atoms/Text';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const BrandedSpeaker: React.FC<{
	pictureUrl: string;
	name: string;
	company?: string;
	job?: string;
}> = ({pictureUrl, name, company, job}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame,
		fps,
		from: -300,
		to: 0,
		durationInFrames: 30,
	});
	const opacity = spring({
		frame: frame - 10,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 30,
	});
	const unblur = interpolate(frame, [10, 30], [5, 0], {
		extrapolateRight: 'clamp',
	});

	const blobRadiuses = [
		[40, 70, 100, 40, 70],
		[60, 30, 60, 60, 30],
		[70, 50, 60, 70, 50],
		[30, 50, 100, 30, 50],
		[40, 30, 100, 40, 30],
		[50, 70, 60, 50, 70],
	];

	const [
		blobRadius1,
		blobRadius2,
		blobRadius3,
		blobRadius4,
		blobRadius5,
		blobRadius6,
	] = blobRadiuses.map((values) => {
		return interpolate(frame, [10, 130, 170, 200, 230], values, {
			extrapolateRight: 'clamp',
		});
	});

	const textStyles = {
		opacity,
		fontFamily: 'inherit',
		filter: `blur(${unblur}px)`,
	};

	return (
		<AbsoluteFill style={{left: 500, top: 70}}>
			<AvatarWithCaption
				avatarPictureUrl={pictureUrl}
				avatarStyle={{
					width: 200,
					height: 200,
					border: 'none',
					borderRadius: `${blobRadius1}% ${blobRadius2}% ${blobRadius3}% ${blobRadius4}% / ${blobRadius5}% ${blobRadius5}% ${blobRadius2}% ${blobRadius6}%`,
					boxShadow: '20px 20px 0 white',
				}}
				style={{
					position: 'relative',
					flexDirection: 'row',
					gap: 60,
					top: slideIn,
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Text
						style={{
							...textStyles,
							width: 'auto',
							fontSize: '2.75rem',
							fontWeight: 'bold',
						}}
					>
						{name}
					</Text>
					<hr
						style={{
							...textStyles,
							background: 'white',
							width: 50,
							height: 4,
							marginLeft: 20,
							marginTop: 20,
							border: 'none',
						}}
					/>
					<Text
						style={{
							...textStyles,
							width: 'auto',
							textAlign: 'left',
							fontSize: '1.5rem',
							marginBottom: '10px',
						}}
					>
						{company}
					</Text>
					<Text
						style={{
							...textStyles,
							width: 'auto',
							textAlign: 'left',
							fontSize: '1.25rem',
						}}
					>
						{job}
					</Text>
				</div>
			</AvatarWithCaption>
		</AbsoluteFill>
	);
};
