import React from 'react';
import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../hooks/useLottie';
import {Img} from 'remotion';
import {Icon} from '@iconify/react';
import {Text} from './Text';

const LottieIcon: React.FC<{
	lottieAsset: string;
	style?: React.CSSProperties;
}> = ({lottieAsset, style}) => {
	const illustration = useLottie(lottieAsset);

	if (!illustration) {
		return null;
	}
	return (
		<Lottie
			style={{
				width: 150,
				...style,
			}}
			playbackRate={1.5}
			animationData={illustration}
		/>
	);
};

export const IconWithCaption: React.FC<{
	lottieAsset?: string;
	imageIcon?: string;
	iconifyId?: string;
	caption: string;
	iconStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}> = ({lottieAsset, imageIcon, iconifyId, caption, style, iconStyle}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1rem',
				height: 'max-content',
				...style,
			}}
		>
			<div>
				{lottieAsset && (
					<LottieIcon lottieAsset={lottieAsset} style={iconStyle} />
				)}
				{imageIcon && (
					<Img
						src={imageIcon}
						style={{
							width: 150,
							...iconStyle,
						}}
					/>
				)}
				{iconifyId && (
					<Icon
						icon={iconifyId}
						style={{
							fontSize: '4rem',
						}}
					/>
				)}
			</div>
			<Text
				style={{
					position: 'relative',
					fontSize: '1.6rem',
					color: 'inherit',
				}}
			>
				{caption}
			</Text>
		</div>
	);
};
