import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';

import {BrandedSpeakerInfos} from './BrandedSpeakerInfos';

type BrandedSpeakerProps = {
	pictureUrl: string;
	name: string;
	company?: string;
	job?: string;
	offsetY?: number;
	avatarSize?: number;
	iconStyle?: React.CSSProperties;
};

export const BrandedSpeaker = ({
	pictureUrl,
	name,
	company,
	job,
	offsetY = 0,
	avatarSize = 200,
	iconStyle,
}: BrandedSpeakerProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame,
		fps,
		from: -300 - offsetY,
		to: 0 + offsetY,
		durationInFrames: 30,
	});

	const blobRadiuses = [
		[40, 70],
		[60, 30],
		[70, 50],
		[30, 50],
		[40, 30],
		[50, 70],
	];

	const [
		blobRadius1,
		blobRadius2,
		blobRadius3,
		blobRadius4,
		blobRadius5,
		blobRadius6,
	] = blobRadiuses.map((values) => {
		return interpolate(frame, [10, 130], values, {
			extrapolateRight: 'clamp',
		});
	});

	return (
		<AbsoluteFill style={{left: 500, top: 70}}>
			<AvatarWithCaption
				avatarPictureUrl={pictureUrl}
				avatarStyle={{
					width: avatarSize,
					height: avatarSize,
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
				<BrandedSpeakerInfos
					name={name}
					company={company}
					job={job}
					iconStyle={iconStyle}
				/>
			</AvatarWithCaption>
		</AbsoluteFill>
	);
};
