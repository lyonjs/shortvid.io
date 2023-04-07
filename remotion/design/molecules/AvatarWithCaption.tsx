import React, {ReactNode} from 'react';
import {Avatar} from '../atoms/Avatar';
import {Text} from '../atoms/Text';

export const AvatarWithCaption: React.FC<{
	children?: ReactNode;
	avatarPictureUrl?: string;
	caption?: string;
	avatarStyle?: React.CSSProperties;
	captionStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}> = ({
	children,
	avatarPictureUrl,
	caption,
	avatarStyle,
	captionStyle,
	style,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				height: 'max-content',
				gap: 20,
				...style,
			}}
		>
			<Avatar
				style={{
					position: 'relative',
					...avatarStyle,
				}}
				src={avatarPictureUrl}
			/>
			{!children && (
				<Text
					style={{
						fontSize: '4.5rem',
						color: 'white',
						width: 'auto',
						...captionStyle,
					}}
				>
					{caption}
				</Text>
			)}
			{children}
		</div>
	);
};
